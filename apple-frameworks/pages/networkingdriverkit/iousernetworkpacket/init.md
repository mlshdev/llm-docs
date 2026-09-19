> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkingdriverkit/iousernetworkpacket/init

# init

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Initializes the network packet object.

## Declaration

```objectivec
virtual bool init();
```

<a id="return-value"></a>

## Return Value

`YES` if initialization was successful, or `NO` if it wasn’t.

<a id="Discussion"></a>

## Discussion

Do not call this method directly. Submission queues initialize packets before returning them to your driver to process.

## See Also

### Configuring the Network Packet

- [free](free.md): Performs any final cleanup for the network packet.
