> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityitemsconfigurationmetadatakey/title](https://developer.apple.com/documentation/uikit/uiactivityitemsconfigurationmetadatakey/title)

# title (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A key for the title.

## Declaration

```swift
static let title: UIActivityItemsConfigurationMetadataKey
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSString](../../foundation/nsstring.md) or [NSAttributedString](../../foundation/nsattributedstring.md) that contains the title.

## See Also

### Constants

- [messageBody](messagebody.md): A key for the message body.
- [linkPresentationMetadata](linkpresentationmetadata.md)
- [shareRecipients](sharerecipients.md)
- [collaborationModeRestrictions](collaborationmoderestrictions.md): A key for a collaboration mode restriction, used to specify the case where Share Sheet should not support some modes of sharing even if they are supported by the items being shared The object returned for this key should be an array of UIActivityCollaborationModeRestriction instances For supported behaviour, this array should have a maximum size of one less than the amount of possible Share Sheet modes Currently at most one object should be provided

# UIActivityItemsConfigurationMetadataKeyTitle (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A key for the title.

## Declaration

```objectivec
extern UIActivityItemsConfigurationMetadataKey const UIActivityItemsConfigurationMetadataKeyTitle;
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSString](../../foundation/nsstring.md) or [NSAttributedString](../../foundation/nsattributedstring.md) that contains the title.

## See Also

### Constants

- [UIActivityItemsConfigurationMetadataKeyMessageBody](messagebody.md): A key for the message body.
- [UIActivityItemsConfigurationMetadataKeyLinkPresentationMetadata](linkpresentationmetadata.md)
- [UIActivityItemsConfigurationMetadataKeyShareRecipients](sharerecipients.md)
- [UIActivityItemsConfigurationMetadataKeyCollaborationModeRestrictions](collaborationmoderestrictions.md): A key for a collaboration mode restriction, used to specify the case where Share Sheet should not support some modes of sharing even if they are supported by the items being shared The object returned for this key should be an array of UIActivityCollaborationModeRestriction instances For supported behaviour, this array should have a maximum size of one less than the amount of possible Share Sheet modes Currently at most one object should be provided
