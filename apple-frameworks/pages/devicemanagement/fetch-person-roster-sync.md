> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/fetch-person-roster-sync](https://developer.apple.com/documentation/devicemanagement/fetch-person-roster-sync)

# Sync the List of People

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** Device Assignment Services 5.0+

Get updates about the list of people the server manages.

## URL

```http
POST https://mdmenrollment.apple.com/roster/class/person/sync
```

## HTTP Body

Content type: `application/json`

Type: `RosterRequest`

The object containing the request information.

## Response Codes

- `200` OK — `RosterPersonResponse`: The request was successful. The server returns a list of people.
- `400` Bad Request: The server was unable to process the request.

<a id="Discussion"></a>

## Discussion

This sync service uses a cursor returned by the full person-roster service. It returns a list of all modifications (additions or deletions) made since the cursor date, for up to 7 days.

This service may return the same person more than once. You can identify duplicates by matching their `unique_identifier` values.

## See Also

### People management

- [RosterPerson](rosterperson.md): A person’s properties and their values.
- [Get the List of People](fetch-person-roster.md): Obtain a list of people the server manages, across the organization.
