> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityitemsconfigurationmetadatakey](https://developer.apple.com/documentation/uikit/uiactivityitemsconfigurationmetadatakey)

# UIActivityItemsConfigurationMetadataKey (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A structure that defines keys for the metadata associated with an activity items configuration.

## Declaration

```swift
struct UIActivityItemsConfigurationMetadataKey
```

## Topics

### Constants

- [title](uiactivityitemsconfigurationmetadatakey/title.md): A key for the title.
- [messageBody](uiactivityitemsconfigurationmetadatakey/messagebody.md): A key for the message body.
- [linkPresentationMetadata](uiactivityitemsconfigurationmetadatakey/linkpresentationmetadata.md)
- [shareRecipients](uiactivityitemsconfigurationmetadatakey/sharerecipients.md)
- [collaborationModeRestrictions](uiactivityitemsconfigurationmetadatakey/collaborationmoderestrictions.md): A key for a collaboration mode restriction, used to specify the case where Share Sheet should not support some modes of sharing even if they are supported by the items being shared The object returned for this key should be an array of UIActivityCollaborationModeRestriction instances For supported behaviour, this array should have a maximum size of one less than the amount of possible Share Sheet modes Currently at most one object should be provided

### Initializers

- [init(\_:)](uiactivityitemsconfigurationmetadatakey/init%28__%29.md): Creates an activity items configuration metadata key.
- [init(rawValue:)](uiactivityitemsconfigurationmetadatakey/init%28rawvalue_%29.md): Creates an activity items configuration metadata key with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the configuration

- [localObject](uiactivityitemsconfiguration/localobject.md): A local object that represents the configuration.
- [metadataProvider](uiactivityitemsconfiguration/metadataprovider.md): A closure that provides metadata for the activity items.
- [perItemMetadataProvider](uiactivityitemsconfiguration/peritemmetadataprovider.md): A closure that provides metadata for each activity item.
- [applicationActivitiesProvider](uiactivityitemsconfiguration/applicationactivitiesprovider.md): A closure that provides application acitivites for the activity items.

# UIActivityItemsConfigurationMetadataKey (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A structure that defines keys for the metadata associated with an activity items configuration.

## Declaration

```objectivec
typedef NSString * UIActivityItemsConfigurationMetadataKey;
```

## Topics

### Constants

- [UIActivityItemsConfigurationMetadataKeyTitle](uiactivityitemsconfigurationmetadatakey/title.md): A key for the title.
- [UIActivityItemsConfigurationMetadataKeyMessageBody](uiactivityitemsconfigurationmetadatakey/messagebody.md): A key for the message body.
- [UIActivityItemsConfigurationMetadataKeyLinkPresentationMetadata](uiactivityitemsconfigurationmetadatakey/linkpresentationmetadata.md)
- [UIActivityItemsConfigurationMetadataKeyShareRecipients](uiactivityitemsconfigurationmetadatakey/sharerecipients.md)
- [UIActivityItemsConfigurationMetadataKeyCollaborationModeRestrictions](uiactivityitemsconfigurationmetadatakey/collaborationmoderestrictions.md): A key for a collaboration mode restriction, used to specify the case where Share Sheet should not support some modes of sharing even if they are supported by the items being shared The object returned for this key should be an array of UIActivityCollaborationModeRestriction instances For supported behaviour, this array should have a maximum size of one less than the amount of possible Share Sheet modes Currently at most one object should be provided

## See Also

### Managing the configuration

- [localObject](uiactivityitemsconfiguration/localobject.md): A local object that represents the configuration.
- [metadataProvider](uiactivityitemsconfiguration/metadataprovider.md): A closure that provides metadata for the activity items.
- [perItemMetadataProvider](uiactivityitemsconfiguration/peritemmetadataprovider.md): A closure that provides metadata for each activity item.
- [applicationActivitiesProvider](uiactivityitemsconfiguration/applicationactivitiesprovider.md): A closure that provides application acitivites for the activity items.
