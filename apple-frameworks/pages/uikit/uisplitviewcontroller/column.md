> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontroller/column](https://developer.apple.com/documentation/uikit/uisplitviewcontroller/column)

# UISplitViewController.Column (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Constants that describe the columns within the split view interface.

## Declaration

```swift
enum Column
```

## Topics

### Constants

- [UISplitViewController.Column.primary](column/primary.md): The column for the primary view controller.
- [UISplitViewController.Column.supplementary](column/supplementary.md): The column for the supplementary view controller.
- [UISplitViewController.Column.secondary](column/secondary.md): The column for the secondary, or detail, view controller.
- [UISplitViewController.Column.compact](column/compact.md): The column for the view controller that’s shown when the split view controller is collapsed.
- [UISplitViewController.Column.inspector](column/inspector.md): The column for the inspector, or trailing, view controller.

### Initializers

- [init(rawValue:)](column/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the child view controllers

- [setViewController(\_:for:)](setviewcontroller%28__for_%29.md): Presents the provided view controller in the specified column of the split view interface.
- [viewController(for:)](viewcontroller%28for_%29.md): Returns the view controller associated with the specified column of the split view interface.
- [viewControllers](viewcontrollers.md): The array of view controllers the split view controller manages.

# UISplitViewControllerColumn (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Constants that describe the columns within the split view interface.

## Declaration

```objectivec
enum UISplitViewControllerColumn : NSInteger;
```

## Topics

### Constants

- [UISplitViewControllerColumnPrimary](column/primary.md): The column for the primary view controller.
- [UISplitViewControllerColumnSupplementary](column/supplementary.md): The column for the supplementary view controller.
- [UISplitViewControllerColumnSecondary](column/secondary.md): The column for the secondary, or detail, view controller.
- [UISplitViewControllerColumnCompact](column/compact.md): The column for the view controller that’s shown when the split view controller is collapsed.
- [UISplitViewControllerColumnInspector](column/inspector.md): The column for the inspector, or trailing, view controller.

## See Also

### Managing the child view controllers

- [setViewController:forColumn:](setviewcontroller%28__for_%29.md): Presents the provided view controller in the specified column of the split view interface.
- [viewControllerForColumn:](viewcontroller%28for_%29.md): Returns the view controller associated with the specified column of the split view interface.
- [viewControllers](viewcontrollers.md): The array of view controllers the split view controller manages.
