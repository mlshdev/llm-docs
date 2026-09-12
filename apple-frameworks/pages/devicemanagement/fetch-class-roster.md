> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/fetch-class-roster](https://developer.apple.com/documentation/devicemanagement/fetch-class-roster)

# Get the List of Classes

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** Device Assignment Services 5.0+

Obtain a list of classes the server manages.

## URL

```http
POST https://mdmenrollment.apple.com/roster/class
```

## HTTP Body

Content type: `application/json`

Type: `RosterRequest`

The object containing the request information.

## Response Codes

- `200` OK — `RosterClassResponse`: The request was successful. The server returns a list of classes.
- `400` Bad Request: The server was unable to process the request.

## Topics

### Request and Response

- [RosterRequest](rosterrequest.md): The request for a list of classes.
- [RosterClassResponse](rosterclassresponse.md): The response that contains a list of classes.

## See Also

### Class management

- [RosterClass](rosterclass.md): A class’s properties and their values.
- [Sync the List of Classes](fetch-class-roster-sync.md): Get updates about the list of classes the server manages.
