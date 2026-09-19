> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkingdriverkit/iousernetworkrxsubmissionqueue/free

# free

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Performs any final cleanup for the queue.

## Declaration

```objectivec
virtual void free();
```

## See Also

### Creating the Submission Queue

- [Create](create.md): Creates a queue that delivers empty packets for you to fill with data from your hardware device.
- [init](init.md): Initializes the packet submission queue.
