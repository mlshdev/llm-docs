> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctionlogdebuglocation/functionname](https://developer.apple.com/documentation/metal/mtlfunctionlogdebuglocation/functionname)

# functionName (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The name of the shader function.

## Declaration

```swift
var functionName: String? { get }
```

## See Also

### Inspecting the location details

- [url](url.md): The URL of the file that contains the shader function.
- [line](line.md): The line that the log message appears on.
- [column](column.md): The column where the log message appears.

# functionName (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The name of the shader function.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * functionName;
```

## See Also

### Inspecting the location details

- [URL](url.md): The URL of the file that contains the shader function.
- [line](line.md): The line that the log message appears on.
- [column](column.md): The column where the log message appears.
