> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitemgroup/alwaysavailable](https://developer.apple.com/documentation/uikit/uibarbuttonitemgroup/alwaysavailable)

# alwaysAvailable (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A Boolean value that determines whether the group is always available through the UI.

## Declaration

```swift
var alwaysAvailable: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) to ensure that the functionality in this group is available to people regardless of the customization of the groups.

When the value is [true](https://developer.apple.com/documentation/swift/true), UIKit places the items in this group in the overflow menu for the [UIUserInterfaceIdiom.phone](../uiuserinterfaceidiom/phone.md) and [UIUserInterfaceIdiom.pad](../uiuserinterfaceidiom/pad.md) idioms. This property doesn’t have an effect for the [UIUserInterfaceIdiom.mac](../uiuserinterfaceidiom/mac.md) idiom.

## See Also

### Configuring the group

- [barButtonItems](barbuttonitems.md): The bar button items to display on the bar.
- [representativeItem](representativeitem.md): The item to display for a group when space is constrained.

# alwaysAvailable (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A Boolean value that determines whether the group is always available through the UI.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) BOOL alwaysAvailable;
```

<a id="Discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) to ensure that the functionality in this group is available to people regardless of the customization of the groups.

When the value is [true](https://developer.apple.com/documentation/swift/true), UIKit places the items in this group in the overflow menu for the [UIUserInterfaceIdiomPhone](../uiuserinterfaceidiom/phone.md) and [UIUserInterfaceIdiomPad](../uiuserinterfaceidiom/pad.md) idioms. This property doesn’t have an effect for the [UIUserInterfaceIdiomMac](../uiuserinterfaceidiom/mac.md) idiom.

## See Also

### Configuring the group

- [barButtonItems](barbuttonitems.md): The bar button items to display on the bar.
- [representativeItem](representativeitem.md): The item to display for a group when space is constrained.
