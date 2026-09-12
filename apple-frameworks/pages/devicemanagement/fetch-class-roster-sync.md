> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/fetch-class-roster-sync](https://developer.apple.com/documentation/devicemanagement/fetch-class-roster-sync)

# Sync the List of Classes

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** Device Assignment Services 5.0+

Get updates about the list of classes the server manages.

## URL

```http
POST https://mdmenrollment.apple.com/roster/class/sync
```

## HTTP Body

Content type: `application/json`

Type: `RosterRequest`

The object containing the request information.

## Response Codes

- `200` OK — `RosterClassResponse`: The request was successful. The server returns a list of classes.
- `400` Bad Request: The server was unable to process the request.

<a id="Discussion"></a>

## Discussion

This sync service uses a cursor that is returned by the full class-roster service. It returns a list of all modifications (additions or deletions) made since the cursor date, for up to 7 days.

This service may return the same class more than once. You can identify duplicates by matching their `unique_identifier` values.

## See Also

### Class management

- [RosterClass](rosterclass.md): A class’s properties and their values.
- [Get the List of Classes](fetch-class-roster.md): Obtain a list of classes the server manages.
