> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/fetch-location-roster

# Get the List of Locations

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** Device Assignment Services 5.0+

Obtain a list of the locations the server manages.

## URL

```http
POST https://mdmenrollment.apple.com/roster/class/location
```

## HTTP Body

Content type: `application/json`

Type: `RosterRequest`

The object containing the request information.

## Response Codes

- `200` OK — `RosterClassLocationResponse`: The request was successful. The server returns a list of locations.
- `400` Bad Request: The server was unable to process the request.

## Topics

### Response

- [RosterClassLocationResponse](rosterclasslocationresponse.md): The response that contains a list of locations.

## See Also

### Location management

- [BaseRosterLocation](baserosterlocation.md): A base location’s properties and their values.
- [RosterLocation](rosterlocation.md): A location’s properties and their values.
- [Sync the Locations](fetch-location-roster-sync.md): Get updates about the list of locations the server manages.
