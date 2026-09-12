> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/sccontentsharingpickerconfiguration-c.class/excludedbundleids](https://developer.apple.com/documentation/screencapturekit/sccontentsharingpickerconfiguration-c.class/excludedbundleids)

# excludedBundleIDs

**Interface language:** Objective-C

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

A list of bundle IDs to exclude from the sharing picker.

## Declaration

```objectivec
@property (nonatomic, strong) NSArray<NSString *> * excludedBundleIDs;
```

## See Also

### Related Documentation

- [Bundle IDs](https://developer.apple.com/documentation/appstoreconnectapi/bundle-ids): Manage the bundle IDs that uniquely identify your apps.

### Control streaming selections

- [allowedPickerModes](allowedpickermodes.md): The content-selection modes supported by the picker.
- [allowsChangingSelectedContent](allowschangingselectedcontent.md): A Boolean value that indicates if the present stream can change to a different source.
- [excludedWindowIDs](excludedwindowids.md): A list of window IDs to exclude from the sharing picker.
