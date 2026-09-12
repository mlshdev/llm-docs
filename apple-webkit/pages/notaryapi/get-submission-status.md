> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/notaryapi/get-submission-status](https://developer.apple.com/documentation/notaryapi/get-submission-status)

# Get Submission Status

**Interface language:** Data

**Framework:** Notary API  
**Kind:** Web Service Endpoint  
**Availability:** Notary API 2.0.0+

Fetch the status of a software notarization submission.

## URL

```http
GET https://appstoreconnect.apple.com/notary/v2/submissions/{submissionId}
```

## Path Parameters

- `submissionId` — `uuid` (required): The identifier that you receive from the notary service when you post to [Submit Software](submit-software.md) to start a new submission.
  **Allowed values:** `/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/`

## Response Codes

- `200` OK — `SubmissionResponse`: The status request succeeded. The response contains the status.
- `403` Forbidden — `ErrorResponse`: An authentication failure occurred.
- `404` Not Found — `ErrorResponse`: The specified identifier can’t be found.

## Mentioned In

- [Submitting software for notarization over the web](submitting-software-for-notarization-over-the-web.md)

<a id="Discussion"></a>

## Discussion

Use this endpoint to fetch the status of a submission request. Form the URL for the call using the identifier that you receive in the `id` field of the response to the [Submit Software](submit-software.md) endpoint. If you lose the identifier, you can get a list of the most recent 100 submissions by calling the [Get Previous Submissions](get-previous-submissions.md) endpoint.

Along with the status of the request, the response indicates the date that you initiated the request and the software name that you provided at that time.

<a id="Example"></a>

### Example

**Request**

```https
https://appstoreconnect.apple.com/notary/v2/submissions/2efe2717-52ef-43a5-96dc-0797e4ca1041
```

**Response**

```json
{
  "data": {
    "attributes": {
      "createdDate": "2022-06-08T01:38:09.498Z",
      "name": "OvernightTextEditor_11.6.8.zip",
      "status": "Accepted"
    },
    "id": "2efe2717-52ef-43a5-96dc-0797e4ca1041",
    "type": "submissions"
  },
  "meta": {
  }
} 
```

## See Also

### Notarization results

- [SubmissionResponse](submissionresponse.md): The notary service’s response to a request for the status of a submission.
- [Get Submission Log](get-submission-log.md): Fetch details about a single completed notarization.
- [SubmissionLogURLResponse](submissionlogurlresponse.md): The notary service’s response to a request for the log information about a completed submission.
