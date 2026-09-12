> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/sccontentsharingpickerconfiguration-c.class/allowschangingselectedcontent](https://developer.apple.com/documentation/screencapturekit/sccontentsharingpickerconfiguration-c.class/allowschangingselectedcontent)

# allowsChangingSelectedContent

**Interface language:** Objective-C

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

A Boolean value that indicates if the present stream can change to a different source.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsChangingSelectedContent;
```

<a id="discussion"></a>

## Discussion

The default value is `true`.

## See Also

### Control streaming selections

- [allowedPickerModes](allowedpickermodes.md): The content-selection modes supported by the picker.
- [excludedBundleIDs](excludedbundleids.md): A list of bundle IDs to exclude from the sharing picker.
- [excludedWindowIDs](excludedwindowids.md): A list of window IDs to exclude from the sharing picker.
