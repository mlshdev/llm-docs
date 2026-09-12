> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityitemsconfigurationmetadatakey/collaborationmoderestrictions](https://developer.apple.com/documentation/uikit/uiactivityitemsconfigurationmetadatakey/collaborationmoderestrictions)

# collaborationModeRestrictions (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

A key for a collaboration mode restriction, used to specify the case where Share Sheet should not support some modes of sharing even if they are supported by the items being shared The object returned for this key should be an array of UIActivityCollaborationModeRestriction instances For supported behaviour, this array should have a maximum size of one less than the amount of possible Share Sheet modes Currently at most one object should be provided

## Declaration

```swift
static let collaborationModeRestrictions: UIActivityItemsConfigurationMetadataKey
```

## See Also

### Constants

- [title](title.md): A key for the title.
- [messageBody](messagebody.md): A key for the message body.
- [linkPresentationMetadata](linkpresentationmetadata.md)
- [shareRecipients](sharerecipients.md)

# UIActivityItemsConfigurationMetadataKeyCollaborationModeRestrictions (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

A key for a collaboration mode restriction, used to specify the case where Share Sheet should not support some modes of sharing even if they are supported by the items being shared The object returned for this key should be an array of UIActivityCollaborationModeRestriction instances For supported behaviour, this array should have a maximum size of one less than the amount of possible Share Sheet modes Currently at most one object should be provided

## Declaration

```objectivec
extern UIActivityItemsConfigurationMetadataKey const UIActivityItemsConfigurationMetadataKeyCollaborationModeRestrictions;
```

## See Also

### Constants

- [UIActivityItemsConfigurationMetadataKeyTitle](title.md): A key for the title.
- [UIActivityItemsConfigurationMetadataKeyMessageBody](messagebody.md): A key for the message body.
- [UIActivityItemsConfigurationMetadataKeyLinkPresentationMetadata](linkpresentationmetadata.md)
- [UIActivityItemsConfigurationMetadataKeyShareRecipients](sharerecipients.md)
