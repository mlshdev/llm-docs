> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/sccontentsharingpickerconfiguration-c.class/allowedpickermodes](https://developer.apple.com/documentation/screencapturekit/sccontentsharingpickerconfiguration-c.class/allowedpickermodes)

# allowedPickerModes

**Interface language:** Objective-C

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

The content-selection modes supported by the picker.

## Declaration

```objectivec
@property (nonatomic, assign) SCContentSharingPickerMode allowedPickerModes;
```

<a id="discussion"></a>

## Discussion

The default value doesn’t exclude selecting any content for streaming. There isn’t an equivalent [SCContentSharingPickerMode](../sccontentsharingpickermode.md) available to reset this property once changed.

## See Also

### Control streaming selections

- [allowsChangingSelectedContent](allowschangingselectedcontent.md): A Boolean value that indicates if the present stream can change to a different source.
- [excludedBundleIDs](excludedbundleids.md): A list of bundle IDs to exclude from the sharing picker.
- [excludedWindowIDs](excludedwindowids.md): A list of window IDs to exclude from the sharing picker.
