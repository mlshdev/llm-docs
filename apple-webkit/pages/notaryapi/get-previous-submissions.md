> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/notaryapi/get-previous-submissions](https://developer.apple.com/documentation/notaryapi/get-previous-submissions)

# Get Previous Submissions

**Interface language:** Data

**Framework:** Notary API  
**Kind:** Web Service Endpoint  
**Availability:** Notary API 2.0.0+

Fetch a list of your team’s previous notarization submissions.

## URL

```http
GET https://appstoreconnect.apple.com/notary/v2/submissions
```

## Response Codes

- `200` OK — `SubmissionListResponse`: The submission list request succeeded. The response contains a list of recent submissions, truncated to the 100 most recent.
- `403` Forbidden — `ErrorResponse`: An authentication failure occurred.
- `404` Not Found — `ErrorResponse`: No data was found for this team.

## Mentioned In

- [Submitting software for notarization over the web](submitting-software-for-notarization-over-the-web.md)

<a id="Discussion"></a>

## Discussion

Use this endpoint to get the list of submissions associated with your team. The response holds an array of values that include the unique identifier for the submission, the date you initiated the submission, the name of the associated software, and the status of the submission. The response returns information about only the 100 most recent submissions.

If you need information about just one submission, and you have the associated identifier, use [Get Submission Status](get-submission-status.md) instead.

<a id="Example"></a>

### Example

**Request**

```https
https://appstoreconnect.apple.com/notary/v2/submissions
```

**Response**

```json
{
  "data": [
    {
      "attributes": {
        "createdDate": "2021-04-29T01:38:09.498Z",
        "name": "OvernightTextEditor_11.6.8.zip",
        "status": "Accepted"
      },
      "id": "2efe2717-52ef-43a5-96dc-0797e4ca1041",
      "type": "submissions"
    },
    {
      "attributes": {
        "createdDate": "2021-04-23T17:44:54.761Z",
        "name": "OvernightTextEditor_11.6.7.zip",
        "status": "Accepted"
      },
      "id": "cf0c235a-dad2-4c24-96eb-c876d4cb3a2d",
      "type": "submissions"
    },
    {
      "attributes": {
        "createdDate": "2021-04-19T16:56:17.839Z",
        "name": "OvernightTextEditor_11.6.7.zip",
        "status": "Invalid"
      },
      "id": "38ce81cc-0bf7-454b-91ef-3f7395bf297b",
      "type": "submissions"
    }
  ],
  "meta": {
  }
} 
```

## See Also

### History

- [SubmissionListResponse](submissionlistresponse.md): The notary service’s response to a request for information about your team’s previous submissions.
