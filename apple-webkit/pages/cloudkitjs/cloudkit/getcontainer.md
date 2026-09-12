> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit/getcontainer](https://developer.apple.com/documentation/cloudkitjs/cloudkit/getcontainer)

# getContainer

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Method  
**Availability:** CloudKit JS 1.0+

Returns the container with the specified container ID.

## Declaration

```
CloudKit.Container getContainer(
	String containerIdentifier
);
```

## Parameters

- `containerIdentifier`: The identifier for the container you want to get.

<a id="return-value"></a>

## Return Value

The container with the specified container ID if it exists; otherwise, the value is undefined.

## See Also

### Accessing Containers

- [getDefaultContainer](getdefaultcontainer.md): Returns the default container.
- [getAllContainers](getallcontainers.md): Returns all the containers that were configured.
