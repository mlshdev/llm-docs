> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctionlogdebuglocation/column](https://developer.apple.com/documentation/metal/mtlfunctionlogdebuglocation/column)

# column (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The column where the log message appears.

## Declaration

```swift
var column: Int { get }
```

## See Also

### Inspecting the location details

- [functionName](functionname.md): The name of the shader function.
- [url](url.md): The URL of the file that contains the shader function.
- [line](line.md): The line that the log message appears on.

# column (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The column where the log message appears.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger column;
```

## See Also

### Inspecting the location details

- [functionName](functionname.md): The name of the shader function.
- [URL](url.md): The URL of the file that contains the shader function.
- [line](line.md): The line that the log message appears on.
