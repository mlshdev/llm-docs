> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitemattributeset/shareditemcontenttype](https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/shareditemcontenttype)

# sharedItemContentType (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The file type of the item to enable the user to share items from Spotlight.

## Declaration

```swift
var sharedItemContentType: UTType? { get set }
```

<a id="Discussion"></a>

## Discussion

Core Spotlight uses this property to determine the correct type identifier to pass to the [fileURL(for:itemIdentifier:typeIdentifier:inPlace:)](../cssearchableindexdelegate/fileurl%28for_itemidentifier_typeidentifier_inplace_%29.md) method.

Spotlight enables sharing the item even if your app doesn’t set sharedItemContentType, but does support drag and drop for URL-backed types. Similarly, Spotlight enables copying items if your app supports drag and drop of Core Spotlight items.

## See Also

### Describing supporting actions

- [actionIdentifiers](actionidentifiers.md): The identifiers that specify custom actions the app supports for the item.
- [supportsNavigation](supportsnavigation.md): A value that indicates whether the item contains information sufficient to provide navigation to the location it represents.
- [supportsPhoneCall](supportsphonecall.md): A value that indicates whether the item contains information sufficient to allow a phone call to a number associated with the item.
- [CSActionIdentifier](../csactionidentifier.md): A key that specifies the action’s identifier in a user activity.

# sharedItemContentType (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The file type of the item to enable the user to share items from Spotlight.

## Declaration

```objectivec
@property (copy, nullable) UTType * sharedItemContentType;
```

<a id="Discussion"></a>

## Discussion

Core Spotlight uses this property to determine the correct type identifier to pass to the [fileURLForSearchableIndex:itemIdentifier:typeIdentifier:inPlace:error:](../cssearchableindexdelegate/fileurl%28for_itemidentifier_typeidentifier_inplace_%29.md) method.

Spotlight enables sharing the item even if your app doesn’t set sharedItemContentType, but does support drag and drop for URL-backed types. Similarly, Spotlight enables copying items if your app supports drag and drop of Core Spotlight items.

## See Also

### Describing supporting actions

- [actionIdentifiers](actionidentifiers.md): The identifiers that specify custom actions the app supports for the item.
- [supportsNavigation](supportsnavigation.md): A value that indicates whether the item contains information sufficient to provide navigation to the location it represents.
- [supportsPhoneCall](supportsphonecall.md): A value that indicates whether the item contains information sufficient to allow a phone call to a number associated with the item.
- [CSActionIdentifier](../csactionidentifier.md): A key that specifies the action’s identifier in a user activity.
