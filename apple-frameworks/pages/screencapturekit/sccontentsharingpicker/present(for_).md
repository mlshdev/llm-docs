> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/sccontentsharingpicker/present(for:)](https://developer.apple.com/documentation/screencapturekit/sccontentsharingpicker/present(for:))

# present(for:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

Displays the picker with an already running capture stream.

## Declaration

```swift
func present(for stream: SCStream)
```

## Parameters

- `stream`: The capture stream to display in the picker.

## See Also

### Picker display

- [present()](present%28%29.md): Displays the picker with no active selection for capture.
- [present(using:)](present%28using_%29.md): Displays the picker for a single type of capture selection.
- [present(for:using:)](present%28for_using_%29.md): Displays the picker with an existing capture stream, allowing for a single type of capture selection.

# presentPickerForStream: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

Displays the picker with an already running capture stream.

## Declaration

```objectivec
- (void) presentPickerForStream:(SCStream *) stream;
```

## Parameters

- `stream`: The capture stream to display in the picker.

## See Also

### Picker display

- [present](present%28%29.md): Displays the picker with no active selection for capture.
- [presentPickerUsingContentStyle:](present%28using_%29.md): Displays the picker for a single type of capture selection.
- [presentPickerForStream:usingContentStyle:](present%28for_using_%29.md): Displays the picker with an existing capture stream, allowing for a single type of capture selection.
