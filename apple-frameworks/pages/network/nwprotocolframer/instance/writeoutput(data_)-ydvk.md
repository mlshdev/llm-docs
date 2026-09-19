> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwprotocolframer/instance/writeoutput(data:)-ydvk

# writeOutput(data:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sends arbitrary output data from your protocol to the next protocol.

## Declaration

```swift
final func writeOutput(data: Data)
```

## See Also

### Writing Output

- [parseOutput(minimumIncompleteLength:maximumLength:parse:)](parseoutput%28minimumincompletelength_maximumlength_parse_%29.md): Examines the content of output data while inside your output handler.
- [writeOutputNoCopy(length:)](writeoutputnocopy%28length_%29.md): Sends a specific number of bytes from a message while inside your output handler.
- [passThroughOutput()](passthroughoutput%28%29.md): Indicates that your protocol no longer needs to handle output data.
