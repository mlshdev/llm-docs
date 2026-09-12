> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontroller/init(style:)](https://developer.apple.com/documentation/uikit/uisplitviewcontroller/init(style:))

# init(style:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a split view controller with the specified column style.

## Declaration

```swift
init(style: UISplitViewController.Style)
```

## Parameters

- `style`: The split view controller’s style, which describes how many columns the split view controller displays. You can pass in any of the [UISplitViewController.Style](style-swift.enum.md) values except [UISplitViewController.Style.unspecified](style-swift.enum/unspecified.md).

## See Also

### Creating a split view controller

- [init(nibName:bundle:)](init%28nibname_bundle_%29.md): Creates a split view controller with the nib file in the specified bundle.
- [init(coder:)](init%28coder_%29.md): Creates a split view controller from data in an unarchiver.

# initWithStyle: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a split view controller with the specified column style.

## Declaration

```objectivec
- (instancetype) initWithStyle:(UISplitViewControllerStyle) style;
```

## Parameters

- `style`: The split view controller’s style, which describes how many columns the split view controller displays. You can pass in any of the [UISplitViewControllerStyle](style-swift.enum.md) values except [UISplitViewControllerStyleUnspecified](style-swift.enum/unspecified.md).

## See Also

### Creating a split view controller

- [initWithNibName:bundle:](init%28nibname_bundle_%29.md): Creates a split view controller with the nib file in the specified bundle.
- [initWithCoder:](init%28coder_%29.md): Creates a split view controller from data in an unarchiver.
