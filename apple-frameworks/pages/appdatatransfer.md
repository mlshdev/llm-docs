> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appdatatransfer](https://developer.apple.com/documentation/appdatatransfer)

# App Data Transfer

**Interface language:** Data

**Framework:** App Data Transfer  
**Kind:** Framework  
**Availability:** App Data Transfer 1.0+

Download App Store information and app-install activity about your app.

<a id="Overview"></a>

## Overview

Use the App Data Transfer web API to request and download App Store information and app-install activity data about your app. The data available relates to a user’s use of Apple’s App Store and includes information such as previous transactions and downloads. If you have multiple apps, integrate each app with the API separately to enable users to transfer their data to you.

To access the data, you need to acquire an access token with the `data-transfer-user-profile` read-only scope, and at least one of these scopes:

- `appstore-info-readonly`
- `app-install-activity-readonly`

> **Note**

> If you’ve previously requested access to App Store information using the `appstore-user-profile` scope along with older scope names, the system accepts these scopes and automatically approves them for both EU and UK scopes. You don’t need to make a new token request.

For more information, see [Request an authorization](accountorganizationaldatasharing/request-an-authorization.md).

To get permission for your App ID or Services ID to request these scopes, follow the instructions at [Account & Organizational Data Sharing](https://developer.apple.com/help/account/share-account-data/share-account-and-organizational-data/).

> **Note**

>  This API returns app-related data about users in the EU and UK. If you are a third party authorized by a user, you may request access to the [Account Data Transfer](accountdatatransfer.md) API to enable the portability of relevant user data from Apple on behalf of your users.
>
> If you have any questions about the data made available in this API, including about how Apple applies privacy measures to protect user privacy and complies with legal obligations, contact Apple through Feedback Assistant by selecting the following option:
>
> Developer Tools & Resources \> Data Portability \> App Data Transfer API
>
> [Learn more](https://support.apple.com/guide/feedback-assistant/welcome/mac) about how to use Feedback Assistant.

<a id="Set-required-HTTP-headers"></a>

### Set required HTTP headers

When you make requests for your app’s App Store information or app-install activity, using any of the endpoints listed below, set the following HTTP headers:

- **`Authorization`**: Set the value to `Bearer <ACCESS_TOKEN>` to assert that your app is authorized to fetch data with the `appstore-info-account-data-for-EU-users`and `appstore-info-account-data-for-UK-users` or `app-install-activity-account-data-for-EU-users` or `app-install-activity-account-data-for-UK-users`  scopes.
- **`X-Apple-Transaction-Id`**: Set the value to a UUID that uniquely identifies the request. If you need to contact Apple to get support, quote the UUID of the request for which you need help.

<a id="Submit-a-request"></a>

### Submit a request

Make an HTTP `POST` request to the [Submit request](appdatatransfer/submit-request.md) endpoint, requesting the `app-store` data type. To make a one-time request, set the `mode` key to `ONE_TIME`. To make recurring requests, use one of the following values:

- **`DAILY_30`**: One recurring request every day for 30 days
- **`WEEKLY_180`**: One recurring request every week for 180 days

The Apple server returns a request ID, which you use when you get the request status, request download URLs, or cancel the request. For recurring requests, the Apple server returns a request ID, along with the parent ID that identifies the series of recurring requests.

The response from the server also contains a `statusCheckDelay`, which is the number of seconds you need to wait before checking the status of the request. You can cancel a request before this time by making a `POST` request to the [Cancel request](appdatatransfer/cancel-request.md) endpoint.

If you submit a `DAILY_30` recurring request and don’t resubmit the recurring instance each subsequent day, the recurring request expires 40 days after submission of the request.

If you submit a `WEEKLY_180` recurring request and don’t resubmit the recurring instance each subsequent week, the recurring request expires 190 days after submission of the request.

> **Note**

> If you already have a recurring request pending and make another recurring request, the system returns an error, along with the ID of the existing request.

<a id="Find-the-request-status"></a>

### Find the request status

The data corresponding to the request you submitted isn’t available immediately. After the status-check delay expires, make a `GET` request to [Get one-time request status](appdatatransfer/get-one-time-request-status.md) or [Get recurring request status](appdatatransfer/get-recurring-request-status.md), including the request identifier in the path.

If the job status is `completed` or `completed_with_error`, the data associated with the request is ready to download.

<a id="Transfer-data"></a>

### Transfer data

Get the download URLs for a completed request by making a `GET` request to [Get one-time request download URLs](appdatatransfer/get-one-time-request-download-urls.md) or [Get recurring request download URLs](appdatatransfer/get-recurring-request-download-urls.md), including the request identifier in the path.

The response contains a list of URLs to which you make `GET` requests, to retrieve the person’s data specific to your app.

Download URLs are available for 3 days after the download request completes. The URLs you receive are valid for 15 minutes after you request them.

For information on the content and terms used in the files you download, see [Data and Privacy](https://privacy.apple.com/file-guides/transfer/appdata).

<a id="Resubmit-recurring-requests"></a>

### Resubmit recurring requests

Enqueue the next instance of a recurring request by making a `POST` request to the [Resubmit request](appdatatransfer/resubmit-request.md) endpoint, passing the parent request identifier and the request identifier of the most recent instance.

The server’s response contains the request identifier of the new request, and a delay to wait before you can check the new request’s status.

## Topics

### Request creation

- [Submit request](appdatatransfer/submit-request.md): Starts preparing someone’s data for download.
- [JobSubmission](appdatatransfer/jobsubmission.md): An object that describes a submission that requests someone’s data.
- [CreatedJob](appdatatransfer/createdjob.md): An object that represents a newly created download request.
- [Resubmit request](appdatatransfer/resubmit-request.md): Enqueue the next instance of a recurring request.
- [ResubmissionRequest](appdatatransfer/resubmissionrequest.md): An object that describes a request to resubmit a recurring download request.
- [ResubmissionResponse](appdatatransfer/resubmissionresponse.md): An object that represents a resubmitted recurring download request.

### Status

- [Get one-time request status](appdatatransfer/get-one-time-request-status.md): Find the status of a one-time download request.
- [Get recurring request status](appdatatransfer/get-recurring-request-status.md): Get the status of an instance of a recurring download request.
- [RequestStatus](appdatatransfer/requeststatus.md): An object that represents the status of a download request.

### Downloads

- [Get one-time request download URLs](appdatatransfer/get-one-time-request-download-urls.md): Get URLs to retrieve someone’s data.
- [Get recurring request download URLs](appdatatransfer/get-recurring-request-download-urls.md): Get URLs to download a snapshot of someone’s data specific to your app from a recurring series.
- [DownloadLinks](appdatatransfer/downloadlinks.md): An object that contains URLs to download someone’s data specific to your app.
- [DownloadError](appdatatransfer/downloaderror.md): An object that describes an error the server encounters while preparing download URLs for a request.

### Cancellation

- [Cancel request](appdatatransfer/cancel-request.md): Tells the server to stop processing an active request.
- [CancellationRequest](appdatatransfer/cancellationrequest.md): An object that identifies a one-time request, or an individual instance of a recurring request, to cancel.
- [CancellationResponse](appdatatransfer/cancellationresponse.md): An object that describes the outcome of canceling a download request.
