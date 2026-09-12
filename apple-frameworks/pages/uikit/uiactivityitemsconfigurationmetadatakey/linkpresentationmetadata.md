> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityitemsconfigurationmetadatakey/linkpresentationmetadata](https://developer.apple.com/documentation/uikit/uiactivityitemsconfigurationmetadatakey/linkpresentationmetadata)

# linkPresentationMetadata (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

## Declaration

```swift
static let linkPresentationMetadata: UIActivityItemsConfigurationMetadataKey
```

## See Also

### Constants

- [title](title.md): A key for the title.
- [messageBody](messagebody.md): A key for the message body.
- [shareRecipients](sharerecipients.md)
- [collaborationModeRestrictions](collaborationmoderestrictions.md): A key for a collaboration mode restriction, used to specify the case where Share Sheet should not support some modes of sharing even if they are supported by the items being shared The object returned for this key should be an array of UIActivityCollaborationModeRestriction instances For supported behaviour, this array should have a maximum size of one less than the amount of possible Share Sheet modes Currently at most one object should be provided

# UIActivityItemsConfigurationMetadataKeyLinkPresentationMetadata (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

## Declaration

```objectivec
extern UIActivityItemsConfigurationMetadataKey const UIActivityItemsConfigurationMetadataKeyLinkPresentationMetadata;
```

## See Also

### Constants

- [UIActivityItemsConfigurationMetadataKeyTitle](title.md): A key for the title.
- [UIActivityItemsConfigurationMetadataKeyMessageBody](messagebody.md): A key for the message body.
- [UIActivityItemsConfigurationMetadataKeyShareRecipients](sharerecipients.md)
- [UIActivityItemsConfigurationMetadataKeyCollaborationModeRestrictions](collaborationmoderestrictions.md): A key for a collaboration mode restriction, used to specify the case where Share Sheet should not support some modes of sharing even if they are supported by the items being shared The object returned for this key should be an array of UIActivityCollaborationModeRestriction instances For supported behaviour, this array should have a maximum size of one less than the amount of possible Share Sheet modes Currently at most one object should be provided
