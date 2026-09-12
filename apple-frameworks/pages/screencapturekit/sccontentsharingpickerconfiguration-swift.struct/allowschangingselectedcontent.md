> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/sccontentsharingpickerconfiguration-swift.struct/allowschangingselectedcontent](https://developer.apple.com/documentation/screencapturekit/sccontentsharingpickerconfiguration-swift.struct/allowschangingselectedcontent)

# allowsChangingSelectedContent

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

A Boolean value that indicates if the present stream can change to a different source.

## Declaration

```swift
var allowsChangingSelectedContent: Bool
```

<a id="discussion"></a>

## Discussion

The default value is `true`.

## See Also

### Control streaming selections

- [allowedPickerModes](allowedpickermodes.md): The content-selection modes supported by the picker.
- [excludedBundleIDs](excludedbundleids.md): A list of bundle IDs to exclude from the sharing picker.
- [excludedWindowIDs](excludedwindowids.md): A list of window IDs to exclude from the sharing picker.
