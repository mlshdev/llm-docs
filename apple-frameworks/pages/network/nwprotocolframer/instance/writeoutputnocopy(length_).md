> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolframer/instance/writeoutputnocopy(length:)](https://developer.apple.com/documentation/network/nwprotocolframer/instance/writeoutputnocopy(length:))

# writeOutputNoCopy(length:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sends a specific number of bytes from a message while inside your output handler.

## Declaration

```swift
final func writeOutputNoCopy(length: Int) throws
```

## See Also

### Writing Output

- [parseOutput(minimumIncompleteLength:maximumLength:parse:)](parseoutput%28minimumincompletelength_maximumlength_parse_%29.md): Examines the content of output data while inside your output handler.
- [writeOutput(data:)](writeoutput%28data_%29-ydvk.md): Sends arbitrary output data from your protocol to the next protocol.
- [passThroughOutput()](passthroughoutput%28%29.md): Indicates that your protocol no longer needs to handle output data.
