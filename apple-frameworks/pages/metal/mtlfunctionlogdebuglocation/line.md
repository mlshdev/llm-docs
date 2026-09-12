> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctionlogdebuglocation/line](https://developer.apple.com/documentation/metal/mtlfunctionlogdebuglocation/line)

# line (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The line that the log message appears on.

## Declaration

```swift
var line: Int { get }
```

## See Also

### Inspecting the location details

- [functionName](functionname.md): The name of the shader function.
- [url](url.md): The URL of the file that contains the shader function.
- [column](column.md): The column where the log message appears.

# line (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The line that the log message appears on.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger line;
```

## See Also

### Inspecting the location details

- [functionName](functionname.md): The name of the shader function.
- [URL](url.md): The URL of the file that contains the shader function.
- [column](column.md): The column where the log message appears.
