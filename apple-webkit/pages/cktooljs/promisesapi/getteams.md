> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/promisesapi/getteams](https://developer.apple.com/documentation/cktooljs/promisesapi/getteams)

# getTeams

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Instance Method  
**Availability:** CKTool JS 1.2.15+

Fetches a list of teams the current user is in.

## Declaration

```
CancellablePromise getTeams();
```

<a id="return-value"></a>

## Return Value

A `CancellablePromise` with the following resolutions.

<a id="discussion"></a>

## Discussion

If the promise is successful, it will resolve with one of the following dictionaries:

- `{ statusCode: 200; result: TeamsResponse }`

The promise may reject and throw the following:

- `DocumentedResponseError`, if the HTTP status code is 421. The result member will be a dictionary conforming to AuthenticationRequiredError.
- `DocumentedResponseError`, if the HTTP status code is none of the above and in the range 400 to 599. The result member will be a dictionary conforming to RequestError.
- `ValidationError`, if the parameters to the method are incorrect.
- A `FetchError` descendant, if there is a problem with the network request. A reference to the request object can be used to examine the underlying cause.

<a id="Discussion"></a>

## Discussion

If successful, the result contains a `TeamsResponse` object. For more information about teams, see `Team`.

## See Also

### User and Team

- [getSessionUser](getsessionuser.md): Returns details for the user in current session.
- [Team](../team.md): Details of a developer team.
- [TeamsResponse](../teamsresponse.md): Response object for a list of teams.
