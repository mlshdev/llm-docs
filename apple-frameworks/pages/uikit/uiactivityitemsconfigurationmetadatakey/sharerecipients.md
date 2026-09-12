> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityitemsconfigurationmetadatakey/sharerecipients](https://developer.apple.com/documentation/uikit/uiactivityitemsconfigurationmetadatakey/sharerecipients)

# shareRecipients (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

## Declaration

```swift
static let shareRecipients: UIActivityItemsConfigurationMetadataKey
```

<a id="discussion"></a>

## Discussion

A key for an array of INPerson objects representing recipients who will be filled in by default in the compose view if that sharing app supports it.

This might fail to pre-fill correctly if the sharing app chosen by the user can’t recognize the provided person. Also, if a people suggestion is chosen, that suggestion will override this provided value.

## See Also

### Constants

- [title](title.md): A key for the title.
- [messageBody](messagebody.md): A key for the message body.
- [linkPresentationMetadata](linkpresentationmetadata.md)
- [collaborationModeRestrictions](collaborationmoderestrictions.md): A key for a collaboration mode restriction, used to specify the case where Share Sheet should not support some modes of sharing even if they are supported by the items being shared The object returned for this key should be an array of UIActivityCollaborationModeRestriction instances For supported behaviour, this array should have a maximum size of one less than the amount of possible Share Sheet modes Currently at most one object should be provided

# UIActivityItemsConfigurationMetadataKeyShareRecipients (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

## Declaration

```objectivec
extern UIActivityItemsConfigurationMetadataKey const UIActivityItemsConfigurationMetadataKeyShareRecipients;
```

<a id="discussion"></a>

## Discussion

A key for an array of INPerson objects representing recipients who will be filled in by default in the compose view if that sharing app supports it.

This might fail to pre-fill correctly if the sharing app chosen by the user can’t recognize the provided person. Also, if a people suggestion is chosen, that suggestion will override this provided value.

## See Also

### Constants

- [UIActivityItemsConfigurationMetadataKeyTitle](title.md): A key for the title.
- [UIActivityItemsConfigurationMetadataKeyMessageBody](messagebody.md): A key for the message body.
- [UIActivityItemsConfigurationMetadataKeyLinkPresentationMetadata](linkpresentationmetadata.md)
- [UIActivityItemsConfigurationMetadataKeyCollaborationModeRestrictions](collaborationmoderestrictions.md): A key for a collaboration mode restriction, used to specify the case where Share Sheet should not support some modes of sharing even if they are supported by the items being shared The object returned for this key should be an array of UIActivityCollaborationModeRestriction instances For supported behaviour, this array should have a maximum size of one less than the amount of possible Share Sheet modes Currently at most one object should be provided
