> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/translatesautoresizingmaskintoconstraints](https://developer.apple.com/documentation/uikit/uiview/translatesautoresizingmaskintoconstraints)

# translatesAutoresizingMaskIntoConstraints (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether the view’s autoresizing mask converts to Auto Layout constraints.

## Declaration

```swift
var translatesAutoresizingMaskIntoConstraints: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If this property’s value is [true](https://developer.apple.com/documentation/swift/true), the system creates a set of constraints that duplicate the behavior specified by the view’s autoresizing mask. You can also modify the view’s size and location using the view’s [frame](frame.md), [bounds](bounds.md), or [center](center.md) properties, creating a static, frame-based layout within Auto Layout.

Because the autoresizing mask constraints specify the view’s size and position, you can’t add constraints to modify this size or position without introducing conflicts. To use Auto Layout to dynamically calculate the size and position of your view, set this property to [false](https://developer.apple.com/documentation/swift/false), and then provide a nonambiguous, nonconflicting set of constraints for the view.

Set this property on a subview from a containing superview or view controller, not from within the view itself:

```swift
customSubview.translatesAutoresizingMaskIntoConstraints = false
```

Don’t set this property on `self` inside a custom view’s own code, because this prevents the containing superview from managing its layout. Don’t modify this property’s value for views that UIKit classes manage, such as [UITableViewCell](../uitableviewcell.md), [arrangedSubviews](../uistackview/arrangedsubviews.md), and [view](../uiviewcontroller/view.md). These classes handle layout automatically, and changing this property interferes with their layout behavior.

By default, the system sets this property to [true](https://developer.apple.com/documentation/swift/true) for any view you programmatically create. If you add views in Interface Builder, the system automatically sets this property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Laying out subviews

- [layoutSubviews()](layoutsubviews%28%29.md): Lays out subviews.
- [setNeedsLayout()](setneedslayout%28%29.md): Invalidates the current layout of the receiver and triggers a layout update during the next update cycle.
- [layoutIfNeeded()](layoutifneeded%28%29.md): Lays out the subviews immediately, if layout updates are pending.
- [requiresConstraintBasedLayout](requiresconstraintbasedlayout.md): A Boolean value that indicates whether the receiver depends on the constraint-based layout system.

# translatesAutoresizingMaskIntoConstraints (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that determines whether the view’s autoresizing mask converts to Auto Layout constraints.

## Declaration

```objectivec
@property (nonatomic) BOOL translatesAutoresizingMaskIntoConstraints;
```

<a id="Discussion"></a>

## Discussion

If this property’s value is [true](https://developer.apple.com/documentation/swift/true), the system creates a set of constraints that duplicate the behavior specified by the view’s autoresizing mask. You can also modify the view’s size and location using the view’s [frame](frame.md), [bounds](bounds.md), or [center](center.md) properties, creating a static, frame-based layout within Auto Layout.

Because the autoresizing mask constraints specify the view’s size and position, you can’t add constraints to modify this size or position without introducing conflicts. To use Auto Layout to dynamically calculate the size and position of your view, set this property to [false](https://developer.apple.com/documentation/swift/false), and then provide a nonambiguous, nonconflicting set of constraints for the view.

Set this property on a subview from a containing superview or view controller, not from within the view itself:

```swift
customSubview.translatesAutoresizingMaskIntoConstraints = false
```

Don’t set this property on `self` inside a custom view’s own code, because this prevents the containing superview from managing its layout. Don’t modify this property’s value for views that UIKit classes manage, such as [UITableViewCell](../uitableviewcell.md), [arrangedSubviews](../uistackview/arrangedsubviews.md), and [view](../uiviewcontroller/view.md). These classes handle layout automatically, and changing this property interferes with their layout behavior.

By default, the system sets this property to [true](https://developer.apple.com/documentation/swift/true) for any view you programmatically create. If you add views in Interface Builder, the system automatically sets this property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Laying out subviews

- [layoutSubviews](layoutsubviews%28%29.md): Lays out subviews.
- [setNeedsLayout](setneedslayout%28%29.md): Invalidates the current layout of the receiver and triggers a layout update during the next update cycle.
- [layoutIfNeeded](layoutifneeded%28%29.md): Lays out the subviews immediately, if layout updates are pending.
- [requiresConstraintBasedLayout](requiresconstraintbasedlayout.md): A Boolean value that indicates whether the receiver depends on the constraint-based layout system.
