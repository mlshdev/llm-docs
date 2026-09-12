> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontroller/delegate](https://developer.apple.com/documentation/uikit/uisplitviewcontroller/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The delegate you use to manage changes to a split view interface.

## Declaration

```swift
weak var delegate: (any UISplitViewControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The split view controller uses its delegate to manage showing and hiding related view controllers. For more information about the methods you can implement in your delegate, see [UISplitViewControllerDelegate](../uisplitviewcontrollerdelegate.md).

## See Also

### Customizing the split view transitions

- [UISplitViewControllerDelegate](../uisplitviewcontrollerdelegate.md): The methods adopted by the object you use to manage changes to a split view interface.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The delegate you use to manage changes to a split view interface.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UISplitViewControllerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The split view controller uses its delegate to manage showing and hiding related view controllers. For more information about the methods you can implement in your delegate, see [UISplitViewControllerDelegate](../uisplitviewcontrollerdelegate.md).

## See Also

### Customizing the split view transitions

- [UISplitViewControllerDelegate](../uisplitviewcontrollerdelegate.md): The methods adopted by the object you use to manage changes to a split view interface.
