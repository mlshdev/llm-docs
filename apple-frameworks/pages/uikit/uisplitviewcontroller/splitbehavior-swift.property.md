> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontroller/splitbehavior-swift.property](https://developer.apple.com/documentation/uikit/uisplitviewcontroller/splitbehavior-swift.property)

# splitBehavior (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

The current behavior that determines how the child view controllers appear in relation to each other.

## Declaration

```swift
var splitBehavior: UISplitViewController.SplitBehavior { get }
```

<a id="Discussion"></a>

## Discussion

This property controls how a split view controller’s secondary view controller appears in relation to the other child view controllers. To change the current split behavior, change the value of the [preferredSplitBehavior](preferredsplitbehavior.md) property.

The value of this property affects which display modes are available for the split view interface. For possible configurations, see [UISplitViewController.SplitBehavior](splitbehavior-swift.enum.md).

## See Also

### Managing the split behavior

- [preferredSplitBehavior](preferredsplitbehavior.md): The preferred behavior that determines how the child view controllers appear in relation to each other.
- [UISplitViewController.SplitBehavior](splitbehavior-swift.enum.md): Constants that describe the possible ways that the child view controllers appear in relation to each other.

# splitBehavior (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

The current behavior that determines how the child view controllers appear in relation to each other.

## Declaration

```objectivec
@property (nonatomic, readonly) UISplitViewControllerSplitBehavior splitBehavior;
```

<a id="Discussion"></a>

## Discussion

This property controls how a split view controller’s secondary view controller appears in relation to the other child view controllers. To change the current split behavior, change the value of the [preferredSplitBehavior](preferredsplitbehavior.md) property.

The value of this property affects which display modes are available for the split view interface. For possible configurations, see [UISplitViewControllerSplitBehavior](splitbehavior-swift.enum.md).

## See Also

### Managing the split behavior

- [preferredSplitBehavior](preferredsplitbehavior.md): The preferred behavior that determines how the child view controllers appear in relation to each other.
- [UISplitViewControllerSplitBehavior](splitbehavior-swift.enum.md): Constants that describe the possible ways that the child view controllers appear in relation to each other.
