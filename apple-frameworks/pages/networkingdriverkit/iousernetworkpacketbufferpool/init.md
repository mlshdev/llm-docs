> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkingdriverkit/iousernetworkpacketbufferpool/init

# init

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Initializes the network packet buffer pool object.

## Declaration

```objectivec
virtual bool init();
```

<a id="return-value"></a>

## Return Value

`YES` if initialization was successful, or `NO` if an error occurred.

## See Also

### Creating a Buffer Pool

- [Create](create.md): Deprecated. Creates a new packet buffer pool object and allocates space for the specified number of packets.
- [free](free.md): Releases the resources owned by the network packet buffer pool object.
