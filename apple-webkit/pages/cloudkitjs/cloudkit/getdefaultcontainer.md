> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkitjs/cloudkit/getdefaultcontainer

# getDefaultContainer

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Method  
**Availability:** CloudKit JS 1.0+

Returns the default container.

## Declaration

```
CloudKit.Container getDefaultContainer();
```

<a id="return-value"></a>

## Return Value

The default container (the first container that appears in the configuration list of containers).

## See Also

### Accessing Containers

- [getContainer](getcontainer.md): Returns the container with the specified container ID.
- [getAllContainers](getallcontainers.md): Returns all the containers that were configured.
