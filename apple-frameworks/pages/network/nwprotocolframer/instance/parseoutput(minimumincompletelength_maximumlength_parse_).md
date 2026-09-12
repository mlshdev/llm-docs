> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolframer/instance/parseoutput(minimumincompletelength:maximumlength:parse:)](https://developer.apple.com/documentation/network/nwprotocolframer/instance/parseoutput(minimumincompletelength:maximumlength:parse:))

# parseOutput(minimumIncompleteLength:maximumLength:parse:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Examines the content of output data while inside your output handler.

## Declaration

```swift
final func parseOutput(minimumIncompleteLength: Int, maximumLength: Int, parse: (UnsafeMutableRawBufferPointer?, Bool) -> Int) -> Bool
```

## Parameters

- `minimumIncompleteLength`: The minimum number of bytes that should be delivered to the parse completion.
- `maximumLength`: The maximum number of bytes that should be delivered to the parse completion.
- `parse`: A completion handler that will be called inline to examine a region of bytes. This will contain the buffer that matches the constraints, and a boolean indicating if this buffer represents the end of a message.

<a id="return-value"></a>

## Return Value

Returns true if the requested length was available to parse, or false if the conditions could not be met.

## See Also

### Writing Output

- [writeOutput(data:)](writeoutput%28data_%29-ydvk.md): Sends arbitrary output data from your protocol to the next protocol.
- [writeOutputNoCopy(length:)](writeoutputnocopy%28length_%29.md): Sends a specific number of bytes from a message while inside your output handler.
- [passThroughOutput()](passthroughoutput%28%29.md): Indicates that your protocol no longer needs to handle output data.
