> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videotoolbox/vttemporalnoisefilterconfiguration/issupported

# isSupported (Swift)

**Framework:** Video Toolbox  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Reports whether the system supports this processor.

## Declaration

```swift
class var isSupported: Bool { get }
```

# supported (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Reports whether the system supports this processor.

## Declaration

```objectivec
@property (class, nonatomic, readonly, getter=isSupported) BOOL supported;
```

## See Also

### Determining processor availability

- [maximumDimensions](maximumdimensions.md): The maximum dimensions of a source frame that the processor supports.
- [minimumDimensions](minimumdimensions.md): The minimum dimensions of a source frame that the processor supports.
