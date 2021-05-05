import { Injectable } from "@angular/core";
import { AuthedApi } from "../authed-api";
import { FE_BigBlueButtonJoin, FE_BigBlueButtonCreateAndJoinMeeting } from "../../models/integration"
import { HttpClient } from "@angular/common/http";
import { ApiError } from "../../../../../src/api/ApiError";

@Injectable()
export class BigBlueButtonApiService extends AuthedApi {
    constructor(http: HttpClient) {
        super(http);
    }

    public joinMeetingWithGreenlightUrl(url: string, name: string): Promise<FE_BigBlueButtonJoin|ApiError> {
        return this.authedGet<FE_BigBlueButtonJoin|ApiError>("/api/v1/dimension/bigbluebutton/join", {greenlightUrl: url, fullName: name}).toPromise();
    }

    public createAndJoinMeeting(roomId: string, name: string): Promise<FE_BigBlueButtonCreateAndJoinMeeting|ApiError> {
        return this.authedGet<FE_BigBlueButtonCreateAndJoinMeeting|ApiError>("/api/v1/dimension/bigbluebutton/create", {roomId: roomId, fullName: name}).toPromise();
    }

}