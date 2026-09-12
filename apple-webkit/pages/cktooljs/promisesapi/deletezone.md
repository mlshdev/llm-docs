> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/promisesapi/deletezone](https://developer.apple.com/documentation/cktooljs/promisesapi/deletezone)

# deleteZone

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Instance Method  
**Availability:** CKTool JS 1.2.15+

Deletes a zone.

## Declaration

```
CancellablePromise deleteZone(
	DeleteZoneParams params
);
```

## Parameters

- `params`: A dictionary as described in the Discussion section.

<a id="return-value"></a>

## Return Value

A `CancellablePromise` with the following resolutions.

<a id="discussion"></a>

## Discussion

If the promise is successful, it will resolve with one of the following dictionaries:

- `{ statusCode: 204 }`

The promise may reject and throw the following:

- `DocumentedResponseError`, if the HTTP status code is 421. The result member will be a dictionary conforming to AuthenticationRequiredError.
- `DocumentedResponseError`, if the HTTP status code is none of the above and in the range 400 to 599. The result member will be a dictionary conforming to RequestError.
- `ValidationError`, if the parameters to the method are incorrect.
- A `FetchError` descendant, if there is a problem with the network request. A reference to the request object can be used to examine the underlying cause.

<a id="Discussion"></a>

## Discussion

The `params` dictionary has the following properties:

```javascript
dictionary DeleteZoneParams {
  string containerId;
  CKEnvironment environment;
  string databaseType;
  string zoneName;
}
```

- `containerId`: The container identifier. See `Container`.
- `environment`: The container environment. For valid values, see `CKEnvironment`.
- `databaseType`: The database type. For valid values, see `CKDatabaseType`.
- `zoneName`: The zone name. See `CKDBZone`.

If the operation completes successfully, the server returns a success response.

## See Also

### Zone Management

- [createZone](createzone.md): Creates a new zone.
- [getZone](getzone.md): Returns details for a zone.
- [getZones](getzones.md): Returns a collection of zones.
