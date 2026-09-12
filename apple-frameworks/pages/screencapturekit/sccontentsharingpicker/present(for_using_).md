> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/sccontentsharingpicker/present(for:using:)](https://developer.apple.com/documentation/screencapturekit/sccontentsharingpicker/present(for:using:))

# present(for:using:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

Displays the picker with an existing capture stream, allowing for a single type of capture selection.

## Declaration

```swift
func present(for stream: SCStream, using contentStyle: SCShareableContentStyle)
```

## Parameters

- `stream`: The stream to display in the picker.
- `contentStyle`: The type of streaming content selection allowed through the presented picker.

## See Also

### Picker display

- [present()](present%28%29.md): Displays the picker with no active selection for capture.
- [present(for:)](present%28for_%29.md): Displays the picker with an already running capture stream.
- [present(using:)](present%28using_%29.md): Displays the picker for a single type of capture selection.

# presentPickerForStream:usingContentStyle: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

Displays the picker with an existing capture stream, allowing for a single type of capture selection.

## Declaration

```objectivec
- (void) presentPickerForStream:(SCStream *) stream usingContentStyle:(SCShareableContentStyle) contentStyle;
```

## Parameters

- `stream`: The stream to display in the picker.
- `contentStyle`: The type of streaming content selection allowed through the presented picker.

## See Also

### Picker display

- [present](present%28%29.md): Displays the picker with no active selection for capture.
- [presentPickerForStream:](present%28for_%29.md): Displays the picker with an already running capture stream.
- [presentPickerUsingContentStyle:](present%28using_%29.md): Displays the picker for a single type of capture selection.
