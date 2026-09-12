> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolframer/instance/passthroughoutput()](https://developer.apple.com/documentation/network/nwprotocolframer/instance/passthroughoutput())

# passThroughOutput()

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Indicates that your protocol no longer needs to handle output data.

## Declaration

```swift
final func passThroughOutput()
```

## See Also

### Writing Output

- [parseOutput(minimumIncompleteLength:maximumLength:parse:)](parseoutput%28minimumincompletelength_maximumlength_parse_%29.md): Examines the content of output data while inside your output handler.
- [writeOutput(data:)](writeoutput%28data_%29-ydvk.md): Sends arbitrary output data from your protocol to the next protocol.
- [writeOutputNoCopy(length:)](writeoutputnocopy%28length_%29.md): Sends a specific number of bytes from a message while inside your output handler.
