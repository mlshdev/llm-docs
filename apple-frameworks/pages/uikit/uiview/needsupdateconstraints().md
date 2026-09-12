> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/needsupdateconstraints()](https://developer.apple.com/documentation/uikit/uiview/needsupdateconstraints())

# needsUpdateConstraints() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether the view’s constraints need updating.

## Declaration

```swift
func needsUpdateConstraints() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the view’s constraints need updating, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

The constraint-based layout system uses the return value of this method to determine whether it needs to call [updateConstraints()](updateconstraints%28%29.md) on your view as part of its normal layout pass.

## See Also

### Triggering Auto Layout

- [setNeedsUpdateConstraints()](setneedsupdateconstraints%28%29.md): Controls whether the view’s constraints need updating.
- [updateConstraints()](updateconstraints%28%29.md): Updates constraints for the view.
- [updateConstraintsIfNeeded()](updateconstraintsifneeded%28%29.md): Updates the constraints for the receiving view and its subviews.

# needsUpdateConstraints (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that determines whether the view’s constraints need updating.

## Declaration

```objectivec
- (BOOL) needsUpdateConstraints;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the view’s constraints need updating, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

The constraint-based layout system uses the return value of this method to determine whether it needs to call [updateConstraints](updateconstraints%28%29.md) on your view as part of its normal layout pass.

## See Also

### Triggering Auto Layout

- [setNeedsUpdateConstraints](setneedsupdateconstraints%28%29.md): Controls whether the view’s constraints need updating.
- [updateConstraints](updateconstraints%28%29.md): Updates constraints for the view.
- [updateConstraintsIfNeeded](updateconstraintsifneeded%28%29.md): Updates the constraints for the receiving view and its subviews.
