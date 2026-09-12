> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitemattributeset/supportsphonecall](https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/supportsphonecall)

# supportsPhoneCall (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A value that indicates whether the item contains information sufficient to allow a phone call to a number associated with the item.

## Declaration

```swift
var supportsPhoneCall: NSNumber? { get set }
```

## Mentioned In

- [Adding your app’s content to Spotlight indexes](../adding-your-app-s-content-to-spotlight-indexes.md)

<a id="Discussion"></a>

## Discussion

When an item includes the [phoneNumbers](phonenumbers.md) property, the phone number can be used to initiate phone calls. You can use the [supportsPhoneCall](supportsphonecall.md) property to indicate when making a phone call is appropriate and likely to be a primary action for the user. For example, you might set [supportsPhoneCall](supportsphonecall.md) to `1` for an item that represents a business, but not for an item that represents an academic paper that lists the phone numbers of the authors or the institution.

## See Also

### Describing supporting actions

- [actionIdentifiers](actionidentifiers.md): The identifiers that specify custom actions the app supports for the item.
- [supportsNavigation](supportsnavigation.md): A value that indicates whether the item contains information sufficient to provide navigation to the location it represents.
- [sharedItemContentType](shareditemcontenttype.md): The file type of the item to enable the user to share items from Spotlight.
- [CSActionIdentifier](../csactionidentifier.md): A key that specifies the action’s identifier in a user activity.

# supportsPhoneCall (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A value that indicates whether the item contains information sufficient to allow a phone call to a number associated with the item.

## Declaration

```objectivec
@property (strong, nullable) NSNumber * supportsPhoneCall;
```

## Mentioned In

- [Adding your app’s content to Spotlight indexes](../adding-your-app-s-content-to-spotlight-indexes.md)

<a id="Discussion"></a>

## Discussion

When an item includes the [phoneNumbers](phonenumbers.md) property, the phone number can be used to initiate phone calls. You can use the [supportsPhoneCall](supportsphonecall.md) property to indicate when making a phone call is appropriate and likely to be a primary action for the user. For example, you might set [supportsPhoneCall](supportsphonecall.md) to `1` for an item that represents a business, but not for an item that represents an academic paper that lists the phone numbers of the authors or the institution.

## See Also

### Describing supporting actions

- [actionIdentifiers](actionidentifiers.md): The identifiers that specify custom actions the app supports for the item.
- [supportsNavigation](supportsnavigation.md): A value that indicates whether the item contains information sufficient to provide navigation to the location it represents.
- [sharedItemContentType](shareditemcontenttype.md): The file type of the item to enable the user to share items from Spotlight.
- [CSActionIdentifier](../csactionidentifier.md): A key that specifies the action’s identifier in a user activity.
