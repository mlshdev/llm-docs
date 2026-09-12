> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationbar/preferredbehavioralstyle](https://developer.apple.com/documentation/uikit/uinavigationbar/preferredbehavioralstyle)

# preferredBehavioralStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The preferred behavioral style of the navigation bar.

## Declaration

```swift
var preferredBehavioralStyle: UIBehavioralStyle { get set }
```

## Mentioned In

- [Building a desktop-class iPad app](../building-a-desktop-class-ipad-app.md)

<a id="Discussion"></a>

## Discussion

Use this property to specify the behavioral style for the navigation bar. If the value of the property is [UIBehavioralStyle.automatic](../uibehavioralstyle/automatic.md), use the [behavioralStyle](behavioralstyle.md) property to determine the actual style.

The default value of this property is [UIBehavioralStyle.automatic](../uibehavioralstyle/automatic.md). To learn more about behavioral styles, see [UIBehavioralStyle](../uibehavioralstyle.md).

## See Also

### Building with Mac Catalyst

- [behavioralStyle](behavioralstyle.md): The behavioral style of the navigation bar.
- [currentNSToolbarSection](currentnstoolbarsection.md): The toolbar section that the navigation bar is currently using.
- [UINavigationBar.NSToolbarSection](nstoolbarsection.md): Constants that determine how the system hosts the navigation bar in an AppKit toolbar.

# preferredBehavioralStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The preferred behavioral style of the navigation bar.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) UIBehavioralStyle preferredBehavioralStyle;
```

## Mentioned In

- [Building a desktop-class iPad app](../building-a-desktop-class-ipad-app.md)

<a id="Discussion"></a>

## Discussion

Use this property to specify the behavioral style for the navigation bar. If the value of the property is [UIBehavioralStyleAutomatic](../uibehavioralstyle/automatic.md), use the [behavioralStyle](behavioralstyle.md) property to determine the actual style.

The default value of this property is [UIBehavioralStyleAutomatic](../uibehavioralstyle/automatic.md). To learn more about behavioral styles, see [UIBehavioralStyle](../uibehavioralstyle.md).

## See Also

### Building with Mac Catalyst

- [behavioralStyle](behavioralstyle.md): The behavioral style of the navigation bar.
- [currentNSToolbarSection](currentnstoolbarsection.md): The toolbar section that the navigation bar is currently using.
- [UINavigationBarNSToolbarSection](nstoolbarsection.md): Constants that determine how the system hosts the navigation bar in an AppKit toolbar.
