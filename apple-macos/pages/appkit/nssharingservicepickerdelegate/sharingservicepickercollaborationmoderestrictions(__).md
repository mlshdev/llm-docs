> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservicepickerdelegate/sharingservicepickercollaborationmoderestrictions(_:)](https://developer.apple.com/documentation/appkit/nssharingservicepickerdelegate/sharingservicepickercollaborationmoderestrictions(_:))

# sharingServicePickerCollaborationModeRestrictions(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Used to specify the case where the share picker should not support some modes of sharing even if they are supported by the items being shared. Disabling all possible modes at the same time is not supported behavior.

## Declaration

```swift
optional func sharingServicePickerCollaborationModeRestrictions(_ sharingServicePicker: NSSharingServicePicker) -> [NSSharingServicePicker.CollaborationModeRestriction]?
```

# sharingServicePickerCollaborationModeRestrictions: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Used to specify the case where the share picker should not support some modes of sharing even if they are supported by the items being shared. Disabling all possible modes at the same time is not supported behavior.

## Declaration

```objectivec
- (NSArray<NSSharingCollaborationModeRestriction *> *) sharingServicePickerCollaborationModeRestrictions:(NSSharingServicePicker *) sharingServicePicker;
```
