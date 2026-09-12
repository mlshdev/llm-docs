> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/fetch-person-roster](https://developer.apple.com/documentation/devicemanagement/fetch-person-roster)

# Get the List of People

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** Device Assignment Services 5.0+

Obtain a list of people the server manages, across the organization.

## URL

```http
POST https://mdmenrollment.apple.com/roster/class/person
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

In addition to instructors and students, this list may contain additional people who don’t belong to any class.

## Topics

### Response

- [RosterPersonResponse](rosterpersonresponse.md): The response that contains the people in the organization.

## See Also

### People management

- [RosterPerson](rosterperson.md): A person’s properties and their values.
- [Sync the List of People](fetch-person-roster-sync.md): Get updates about the list of people the server manages.
