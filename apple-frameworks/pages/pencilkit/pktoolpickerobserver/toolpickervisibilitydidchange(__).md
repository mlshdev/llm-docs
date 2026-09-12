> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pktoolpickerobserver/toolpickervisibilitydidchange(_:)](https://developer.apple.com/documentation/pencilkit/pktoolpickerobserver/toolpickervisibilitydidchange(_:))

# toolPickerVisibilityDidChange(\_:) (Swift)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the observer when a person shows or hides the tool picker.

## Declaration

```swift
optional func toolPickerVisibilityDidChange(_ toolPicker: PKToolPicker)
```

## Parameters

- `toolPicker`: The tool picker whose configuration changed.

## See Also

### Monitoring visibility changes

- [toolPickerFramesObscuredDidChange(\_:)](toolpickerframesobscureddidchange%28__%29.md): Tells the observer when the area that the tool picker obscures changes.

# toolPickerVisibilityDidChange: (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the observer when a person shows or hides the tool picker.

## Declaration

```objectivec
- (void) toolPickerVisibilityDidChange:(PKToolPicker *) toolPicker;
```

## Parameters

- `toolPicker`: The tool picker whose configuration changed.

## See Also

### Monitoring visibility changes

- [toolPickerFramesObscuredDidChange:](toolpickerframesobscureddidchange%28__%29.md): Tells the observer when the area that the tool picker obscures changes.
