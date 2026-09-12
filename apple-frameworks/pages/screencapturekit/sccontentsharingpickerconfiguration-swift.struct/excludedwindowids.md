> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/sccontentsharingpickerconfiguration-swift.struct/excludedwindowids](https://developer.apple.com/documentation/screencapturekit/sccontentsharingpickerconfiguration-swift.struct/excludedwindowids)

# excludedWindowIDs

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

A list of window IDs to exclude from the sharing picker.

## Declaration

```swift
var excludedWindowIDs: Array<Int>
```

<a id="discussion"></a>

## Discussion

> **Important**

>  Using an invalid window ID can cause an error. Use window values returned from Core Graphics methods such as [CGWindowListCopyWindowInfo(\_:\_:)](../../coregraphics/cgwindowlistcopywindowinfo%28____%29.md) to provide window IDs to exclude from the picker.

## See Also

### Control streaming selections

- [allowedPickerModes](allowedpickermodes.md): The content-selection modes supported by the picker.
- [allowsChangingSelectedContent](allowschangingselectedcontent.md): A Boolean value that indicates if the present stream can change to a different source.
- [excludedBundleIDs](excludedbundleids.md): A list of bundle IDs to exclude from the sharing picker.
