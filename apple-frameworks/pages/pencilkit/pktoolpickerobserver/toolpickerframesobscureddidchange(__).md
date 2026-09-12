> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pktoolpickerobserver/toolpickerframesobscureddidchange(_:)](https://developer.apple.com/documentation/pencilkit/pktoolpickerobserver/toolpickerframesobscureddidchange(_:))

# toolPickerFramesObscuredDidChange(\_:) (Swift)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the observer when the area that the tool picker obscures changes.

## Declaration

```swift
optional func toolPickerFramesObscuredDidChange(_ toolPicker: PKToolPicker)
```

## Parameters

- `toolPicker`: The tool picker whose configuration changed.

## See Also

### Monitoring visibility changes

- [toolPickerVisibilityDidChange(\_:)](toolpickervisibilitydidchange%28__%29.md): Tells the observer when a person shows or hides the tool picker.

# toolPickerFramesObscuredDidChange: (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the observer when the area that the tool picker obscures changes.

## Declaration

```objectivec
- (void) toolPickerFramesObscuredDidChange:(PKToolPicker *) toolPicker;
```

## Parameters

- `toolPicker`: The tool picker whose configuration changed.

## See Also

### Monitoring visibility changes

- [toolPickerVisibilityDidChange:](toolpickervisibilitydidchange%28__%29.md): Tells the observer when a person shows or hides the tool picker.
