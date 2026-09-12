> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctionlogdebuglocation/url](https://developer.apple.com/documentation/metal/mtlfunctionlogdebuglocation/url)

# url (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The URL of the file that contains the shader function.

## Declaration

```swift
var url: URL? { get }
```

## See Also

### Inspecting the location details

- [functionName](functionname.md): The name of the shader function.
- [line](line.md): The line that the log message appears on.
- [column](column.md): The column where the log message appears.

# URL (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The URL of the file that contains the shader function.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSURL * URL;
```

## See Also

### Inspecting the location details

- [functionName](functionname.md): The name of the shader function.
- [line](line.md): The line that the log message appears on.
- [column](column.md): The column where the log message appears.
