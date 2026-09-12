> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/sccontentsharingpicker/present(using:)](https://developer.apple.com/documentation/screencapturekit/sccontentsharingpicker/present(using:))

# present(using:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 14.0+ · tvOS 27.0+ · visionOS 27.0+

Displays the picker for a single type of capture selection.

## Declaration

```swift
func present(using contentStyle: SCShareableContentStyle)
```

## Parameters

- `contentStyle`: The type of streaming content selection allowed through the presented picker.

## See Also

### Picker display

- [present()](present%28%29.md): Displays the picker with no active selection for capture.
- [present(for:)](present%28for_%29.md): Displays the picker with an already running capture stream.
- [present(for:using:)](present%28for_using_%29.md): Displays the picker with an existing capture stream, allowing for a single type of capture selection.

# presentPickerUsingContentStyle: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 14.0+ · tvOS 27.0+ · visionOS 27.0+

Displays the picker for a single type of capture selection.

## Declaration

```objectivec
- (void) presentPickerUsingContentStyle:(SCShareableContentStyle) contentStyle;
```

## Parameters

- `contentStyle`: The type of streaming content selection allowed through the presented picker.

## See Also

### Picker display

- [present](present%28%29.md): Displays the picker with no active selection for capture.
- [presentPickerForStream:](present%28for_%29.md): Displays the picker with an already running capture stream.
- [presentPickerForStream:usingContentStyle:](present%28for_using_%29.md): Displays the picker with an existing capture stream, allowing for a single type of capture selection.
