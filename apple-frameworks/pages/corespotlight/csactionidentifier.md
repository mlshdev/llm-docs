> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/csactionidentifier](https://developer.apple.com/documentation/corespotlight/csactionidentifier)

# CSActionIdentifier (Swift)

**Framework:** Core Spotlight  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

A key that specifies the action’s identifier in a user activity.

## Declaration

```swift
let CSActionIdentifier: String
```

<a id="Discussion"></a>

## Discussion

When the user selects a custom action on an indexed item, the system launches your app and invokes [application(\_:continue:restorationHandler:)](../uikit/uiapplicationdelegate/application%28__continue_restorationhandler_%29.md). The `userInfo` dictionary of the specified [NSUserActivity](../foundation/nsuseractivity.md) includes the corresponding `Info.plist` using this key.

## See Also

### Describing supporting actions

- [actionIdentifiers](cssearchableitemattributeset/actionidentifiers.md): The identifiers that specify custom actions the app supports for the item.
- [supportsNavigation](cssearchableitemattributeset/supportsnavigation.md): A value that indicates whether the item contains information sufficient to provide navigation to the location it represents.
- [supportsPhoneCall](cssearchableitemattributeset/supportsphonecall.md): A value that indicates whether the item contains information sufficient to allow a phone call to a number associated with the item.
- [sharedItemContentType](cssearchableitemattributeset/shareditemcontenttype.md): The file type of the item to enable the user to share items from Spotlight.

# CSActionIdentifier (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

A key that specifies the action’s identifier in a user activity.

## Declaration

```objectivec
extern NSString * const CSActionIdentifier;
```

<a id="Discussion"></a>

## Discussion

When the user selects a custom action on an indexed item, the system launches your app and invokes [application:continueUserActivity:restorationHandler:](../uikit/uiapplicationdelegate/application%28__continue_restorationhandler_%29.md). The `userInfo` dictionary of the specified [NSUserActivity](../foundation/nsuseractivity.md) includes the corresponding `Info.plist` using this key.

## See Also

### Describing supporting actions

- [actionIdentifiers](cssearchableitemattributeset/actionidentifiers.md): The identifiers that specify custom actions the app supports for the item.
- [supportsNavigation](cssearchableitemattributeset/supportsnavigation.md): A value that indicates whether the item contains information sufficient to provide navigation to the location it represents.
- [supportsPhoneCall](cssearchableitemattributeset/supportsphonecall.md): A value that indicates whether the item contains information sufficient to allow a phone call to a number associated with the item.
- [sharedItemContentType](cssearchableitemattributeset/shareditemcontenttype.md): The file type of the item to enable the user to share items from Spotlight.
