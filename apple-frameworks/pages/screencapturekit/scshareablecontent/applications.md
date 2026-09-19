> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/screencapturekit/scshareablecontent/applications

# applications (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

The apps available for capture.

## Declaration

```swift
var applications: [SCRunningApplication] { get }
```

## See Also

### Inspecting shareable content

- [windows](windows.md): The windows available for capture.
- [displays](displays.md): The displays available for capture.

# applications (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

The apps available for capture.

## Declaration

```objectivec
@property (readonly) NSArray<SCRunningApplication *> * applications;
```

## See Also

### Inspecting shareable content

- [windows](windows.md): The windows available for capture.
- [displays](displays.md): The displays available for capture.
