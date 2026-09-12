> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/fetch-location-roster-sync](https://developer.apple.com/documentation/devicemanagement/fetch-location-roster-sync)

# Sync the Locations

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** Device Assignment Services 5.0+

Get updates about the list of locations the server manages.

## URL

```http
POST https://mdmenrollment.apple.com/roster/class/location/sync
```

## HTTP Body

Content type: `application/json`

Type: `RosterRequest`

The object containing the request information.

## Response Codes

- `200` OK — `RosterClassLocationResponse`: The request was successful. The server returns a list of locations.
- `400` Bad Request: The server was unable to process the request.

<a id="Discussion"></a>

## Discussion

This sync service uses a cursor returned by the full location-roster service. It returns a list of all modifications (additions or deletions) made since the cursor date, up to 7 days.

This service may return the same location more than once. You can identify duplicates by matching their `unique_identifier` values.

## See Also

### Location management

- [BaseRosterLocation](baserosterlocation.md): A base location’s properties and their values.
- [RosterLocation](rosterlocation.md): A location’s properties and their values.
- [Get the List of Locations](fetch-location-roster.md): Obtain a list of the locations the server manages.
