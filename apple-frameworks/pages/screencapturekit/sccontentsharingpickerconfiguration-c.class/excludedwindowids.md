> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/sccontentsharingpickerconfiguration-c.class/excludedwindowids](https://developer.apple.com/documentation/screencapturekit/sccontentsharingpickerconfiguration-c.class/excludedwindowids)

# excludedWindowIDs

**Interface language:** Objective-C

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

A list of window IDs to exclude from the sharing picker.

## Declaration

```objectivec
@property (nonatomic, strong) NSArray<NSNumber *> * excludedWindowIDs;
```

<a id="discussion"></a>

## Discussion

> **Important**

>  Using an invalid window ID can cause an error. Use [CGWindowID](../../coregraphics/cgwindowid.md) values provided by methods such as [CGWindowListCopyWindowInfo](../../coregraphics/cgwindowlistcopywindowinfo%28____%29.md) or a stream window’s [windowID](../scwindow/windowid.md) property.

## See Also

### Control streaming selections

- [allowedPickerModes](allowedpickermodes.md): The content-selection modes supported by the picker.
- [allowsChangingSelectedContent](allowschangingselectedcontent.md): A Boolean value that indicates if the present stream can change to a different source.
- [excludedBundleIDs](excludedbundleids.md): A list of bundle IDs to exclude from the sharing picker.
