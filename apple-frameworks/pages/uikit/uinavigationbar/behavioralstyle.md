> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationbar/behavioralstyle](https://developer.apple.com/documentation/uikit/uinavigationbar/behavioralstyle)

# behavioralStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The behavioral style of the navigation bar.

## Declaration

```swift
var behavioralStyle: UIBehavioralStyle { get }
```

## Mentioned In

- [Building a desktop-class iPad app](../building-a-desktop-class-ipad-app.md)

<a id="Discussion"></a>

## Discussion

Use this property to determine the actual behavior style when the [preferredBehavioralStyle](preferredbehavioralstyle.md) is [UIBehavioralStyle.automatic](../uibehavioralstyle/automatic.md).

When the value of this property is [UIBehavioralStyle.mac](../uibehavioralstyle/mac.md), [NSToolbar](https://developer.apple.com/documentation/appkit/nstoolbar) hosts the navigation bar’s content when you build your app with Mac Catalyst.

## See Also

### Building with Mac Catalyst

- [preferredBehavioralStyle](preferredbehavioralstyle.md): The preferred behavioral style of the navigation bar.
- [currentNSToolbarSection](currentnstoolbarsection.md): The toolbar section that the navigation bar is currently using.
- [UINavigationBar.NSToolbarSection](nstoolbarsection.md): Constants that determine how the system hosts the navigation bar in an AppKit toolbar.

# behavioralStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The behavioral style of the navigation bar.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) UIBehavioralStyle behavioralStyle;
```

## Mentioned In

- [Building a desktop-class iPad app](../building-a-desktop-class-ipad-app.md)

<a id="Discussion"></a>

## Discussion

Use this property to determine the actual behavior style when the [preferredBehavioralStyle](preferredbehavioralstyle.md) is [UIBehavioralStyleAutomatic](../uibehavioralstyle/automatic.md).

When the value of this property is [UIBehavioralStyleMac](../uibehavioralstyle/mac.md), [NSToolbar](https://developer.apple.com/documentation/appkit/nstoolbar) hosts the navigation bar’s content when you build your app with Mac Catalyst.

## See Also

### Building with Mac Catalyst

- [preferredBehavioralStyle](preferredbehavioralstyle.md): The preferred behavioral style of the navigation bar.
- [currentNSToolbarSection](currentnstoolbarsection.md): The toolbar section that the navigation bar is currently using.
- [UINavigationBarNSToolbarSection](nstoolbarsection.md): Constants that determine how the system hosts the navigation bar in an AppKit toolbar.
