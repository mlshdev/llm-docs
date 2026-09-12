> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/requiresconstraintbasedlayout](https://developer.apple.com/documentation/uikit/uiview/requiresconstraintbasedlayout)

# requiresConstraintBasedLayout (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the receiver depends on the constraint-based layout system.

## Declaration

```swift
class var requiresConstraintBasedLayout: Bool { get }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the view must be in a window using constraint-based layout to function properly, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Custom views should override this to return [true](https://developer.apple.com/documentation/swift/true) if they cannot layout correctly using autoresizing.

## See Also

### Laying out subviews

- [layoutSubviews()](layoutsubviews%28%29.md): Lays out subviews.
- [setNeedsLayout()](setneedslayout%28%29.md): Invalidates the current layout of the receiver and triggers a layout update during the next update cycle.
- [layoutIfNeeded()](layoutifneeded%28%29.md): Lays out the subviews immediately, if layout updates are pending.
- [translatesAutoresizingMaskIntoConstraints](translatesautoresizingmaskintoconstraints.md): A Boolean value that determines whether the view’s autoresizing mask converts to Auto Layout constraints.

# requiresConstraintBasedLayout (Objective-C)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the receiver depends on the constraint-based layout system.

## Declaration

```objectivec
@property (class, nonatomic, readonly) BOOL requiresConstraintBasedLayout;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the view must be in a window using constraint-based layout to function properly, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Custom views should override this to return [true](https://developer.apple.com/documentation/swift/true) if they cannot layout correctly using autoresizing.

## See Also

### Laying out subviews

- [layoutSubviews](layoutsubviews%28%29.md): Lays out subviews.
- [setNeedsLayout](setneedslayout%28%29.md): Invalidates the current layout of the receiver and triggers a layout update during the next update cycle.
- [layoutIfNeeded](layoutifneeded%28%29.md): Lays out the subviews immediately, if layout updates are pending.
- [translatesAutoresizingMaskIntoConstraints](translatesautoresizingmaskintoconstraints.md): A Boolean value that determines whether the view’s autoresizing mask converts to Auto Layout constraints.
