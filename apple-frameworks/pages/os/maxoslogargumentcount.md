> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/maxoslogargumentcount](https://developer.apple.com/documentation/os/maxoslogargumentcount)

# maxOSLogArgumentCount

**Framework:** os  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

The maximum number of interpolated expressions that a log message may contain.

## Declaration

```swift
var maxOSLogArgumentCount: UInt8 { get }
```

<a id="Discussion"></a>

## Discussion

For log messages that include interpolated values, the system imposes a limit on the total number of expressions that a single message may include. The following example shows a string that contains an interpolated value:

```swift
let fileID = 941
let message = "Created a file with ID \(fileID)"
```

## See Also

### Getting the Message Details

- [bufferSize](oslogmessage/buffersize.md): The byte size of the buffer that the logging system receives.
- [interpolation](oslogmessage/interpolation.md): The log message’s string interpolation.
