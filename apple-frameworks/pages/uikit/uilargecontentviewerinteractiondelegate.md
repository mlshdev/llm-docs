> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilargecontentviewerinteractiondelegate](https://developer.apple.com/documentation/uikit/uilargecontentviewerinteractiondelegate)

# UILargeContentViewerInteractionDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that customizes the behavior of the large content viewer interactions.

## Declaration

```swift
@MainActor protocol UILargeContentViewerInteractionDelegate : NSObjectProtocol
```

## Topics

### Customizing large content viewer interactions

- [largeContentViewerInteraction(\_:didEndOn:at:)](uilargecontentviewerinteractiondelegate/largecontentviewerinteraction%28__didendon_at_%29.md): Performs an action when the large content viewer gesture ends at the location of the specified item.
- [largeContentViewerInteraction(\_:itemAt:)](uilargecontentviewerinteractiondelegate/largecontentviewerinteraction%28__itemat_%29.md): Identifies the large content viewer item for the specified interaction and location.
- [viewController(for:)](uilargecontentviewerinteractiondelegate/viewcontroller%28for_%29.md): Specifies which view controller should display the large content viewer.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Content viewer

- [UILargeContentViewerInteraction](uilargecontentviewerinteraction.md): An interaction that enables a gesture to present the large content viewer for cases when supporting the largest dynamic type sizes isn’t appropriate.
- [UILargeContentViewerItem](uilargecontentvieweritem.md): Methods that provide details about how to display your custom content in the large content viewer.

# UILargeContentViewerInteractionDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that customizes the behavior of the large content viewer interactions.

## Declaration

```objectivec
@protocol UILargeContentViewerInteractionDelegate <NSObject>
```

## Topics

### Customizing large content viewer interactions

- [largeContentViewerInteraction:didEndOnItem:atPoint:](uilargecontentviewerinteractiondelegate/largecontentviewerinteraction%28__didendon_at_%29.md): Performs an action when the large content viewer gesture ends at the location of the specified item.
- [largeContentViewerInteraction:itemAtPoint:](uilargecontentviewerinteractiondelegate/largecontentviewerinteraction%28__itemat_%29.md): Identifies the large content viewer item for the specified interaction and location.
- [viewControllerForLargeContentViewerInteraction:](uilargecontentviewerinteractiondelegate/viewcontroller%28for_%29.md): Specifies which view controller should display the large content viewer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Content viewer

- [UILargeContentViewerInteraction](uilargecontentviewerinteraction.md): An interaction that enables a gesture to present the large content viewer for cases when supporting the largest dynamic type sizes isn’t appropriate.
- [UILargeContentViewerItem](uilargecontentvieweritem.md): Methods that provide details about how to display your custom content in the large content viewer.
