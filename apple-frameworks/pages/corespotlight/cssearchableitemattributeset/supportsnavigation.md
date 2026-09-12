> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitemattributeset/supportsnavigation](https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/supportsnavigation)

# supportsNavigation (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A value that indicates whether the item contains information sufficient to provide navigation to the location it represents.

## Declaration

```swift
var supportsNavigation: NSNumber? { get set }
```

## Mentioned In

- [Adding your app’s content to Spotlight indexes](../adding-your-app-s-content-to-spotlight-indexes.md)

<a id="Discussion"></a>

## Discussion

When an item includes [latitude](latitude.md) and [longitude](longitude.md) properties, these properties can be used for navigation to the location represented by the item. For example, it makes sense to set [supportsNavigation](supportsnavigation.md) to `1` for an item that represents review for a specific restaurant, but not for an item that represents a photo of a person.

## See Also

### Describing supporting actions

- [actionIdentifiers](actionidentifiers.md): The identifiers that specify custom actions the app supports for the item.
- [supportsPhoneCall](supportsphonecall.md): A value that indicates whether the item contains information sufficient to allow a phone call to a number associated with the item.
- [sharedItemContentType](shareditemcontenttype.md): The file type of the item to enable the user to share items from Spotlight.
- [CSActionIdentifier](../csactionidentifier.md): A key that specifies the action’s identifier in a user activity.

# supportsNavigation (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A value that indicates whether the item contains information sufficient to provide navigation to the location it represents.

## Declaration

```objectivec
@property (strong, nullable) NSNumber * supportsNavigation;
```

## Mentioned In

- [Adding your app’s content to Spotlight indexes](../adding-your-app-s-content-to-spotlight-indexes.md)

<a id="Discussion"></a>

## Discussion

When an item includes [latitude](latitude.md) and [longitude](longitude.md) properties, these properties can be used for navigation to the location represented by the item. For example, it makes sense to set [supportsNavigation](supportsnavigation.md) to `1` for an item that represents review for a specific restaurant, but not for an item that represents a photo of a person.

## See Also

### Describing supporting actions

- [actionIdentifiers](actionidentifiers.md): The identifiers that specify custom actions the app supports for the item.
- [supportsPhoneCall](supportsphonecall.md): A value that indicates whether the item contains information sufficient to allow a phone call to a number associated with the item.
- [sharedItemContentType](shareditemcontenttype.md): The file type of the item to enable the user to share items from Spotlight.
- [CSActionIdentifier](../csactionidentifier.md): A key that specifies the action’s identifier in a user activity.
