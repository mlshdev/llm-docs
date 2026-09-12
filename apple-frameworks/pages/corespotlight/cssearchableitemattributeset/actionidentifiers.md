> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitemattributeset/actionidentifiers](https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/actionidentifiers)

# actionIdentifiers (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The identifiers that specify custom actions the app supports for the item.

## Declaration

```swift
var actionIdentifiers: [String] { get set }
```

<a id="Discussion"></a>

## Discussion

The identifiers correspond to the [CoreSpotlightActionIdentifier](../../bundleresources/information-property-list/corespotlightactions/corespotlightactionidentifier.md) values you specify in the [CoreSpotlightActions](../../bundleresources/information-property-list/corespotlightactions.md) key of the app’s `Info.plist` file.

When the user selects a custom action on an indexed item, the system launches your app and invokes [application(\_:continue:restorationHandler:)](../../uikit/uiapplicationdelegate/application%28__continue_restorationhandler_%29.md). The `userInfo` dictionary of the specified [NSUserActivity](../../foundation/nsuseractivity.md) includes the corresponding `Info.plist` entry using the key [CSActionIdentifier](../csactionidentifier.md).

## See Also

### Describing supporting actions

- [supportsNavigation](supportsnavigation.md): A value that indicates whether the item contains information sufficient to provide navigation to the location it represents.
- [supportsPhoneCall](supportsphonecall.md): A value that indicates whether the item contains information sufficient to allow a phone call to a number associated with the item.
- [sharedItemContentType](shareditemcontenttype.md): The file type of the item to enable the user to share items from Spotlight.
- [CSActionIdentifier](../csactionidentifier.md): A key that specifies the action’s identifier in a user activity.

# actionIdentifiers (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The identifiers that specify custom actions the app supports for the item.

## Declaration

```objectivec
@property (copy) NSArray<NSString *> * actionIdentifiers;
```

<a id="Discussion"></a>

## Discussion

The identifiers correspond to the [CoreSpotlightActionIdentifier](../../bundleresources/information-property-list/corespotlightactions/corespotlightactionidentifier.md) values you specify in the [CoreSpotlightActions](../../bundleresources/information-property-list/corespotlightactions.md) key of the app’s `Info.plist` file.

When the user selects a custom action on an indexed item, the system launches your app and invokes [application:continueUserActivity:restorationHandler:](../../uikit/uiapplicationdelegate/application%28__continue_restorationhandler_%29.md). The `userInfo` dictionary of the specified [NSUserActivity](../../foundation/nsuseractivity.md) includes the corresponding `Info.plist` entry using the key [CSActionIdentifier](../csactionidentifier.md).

## See Also

### Describing supporting actions

- [supportsNavigation](supportsnavigation.md): A value that indicates whether the item contains information sufficient to provide navigation to the location it represents.
- [supportsPhoneCall](supportsphonecall.md): A value that indicates whether the item contains information sufficient to allow a phone call to a number associated with the item.
- [sharedItemContentType](shareditemcontenttype.md): The file type of the item to enable the user to share items from Spotlight.
- [CSActionIdentifier](../csactionidentifier.md): A key that specifies the action’s identifier in a user activity.
