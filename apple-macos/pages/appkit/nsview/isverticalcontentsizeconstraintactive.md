> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/isverticalcontentsizeconstraintactive](https://developer.apple.com/documentation/appkit/nsview/isverticalcontentsizeconstraintactive)

# isVerticalContentSizeConstraintActive (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A Boolean value that indicates whether the view’s vertical size constraints are active.

## Declaration

```swift
var isVerticalContentSizeConstraintActive: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Setting this property to [false](https://developer.apple.com/documentation/swift/false) lets Auto Layout optimize layout operations by ignoring the view’s intrinsic content size. The default value of this property is [true](https://developer.apple.com/documentation/swift/true), which causes the system to take the view’s content size into account.

## See Also

### Enabling and Disabling Constraints

- [isHorizontalContentSizeConstraintActive](ishorizontalcontentsizeconstraintactive.md): A Boolean value that indicates whether the view’s horizontal size constraints are active.

# verticalContentSizeConstraintActive (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A Boolean value that indicates whether the view’s vertical size constraints are active.

## Declaration

```objectivec
@property (getter=isVerticalContentSizeConstraintActive) BOOL verticalContentSizeConstraintActive;
```

<a id="Discussion"></a>

## Discussion

Setting this property to [false](https://developer.apple.com/documentation/swift/false) lets Auto Layout optimize layout operations by ignoring the view’s intrinsic content size. The default value of this property is [true](https://developer.apple.com/documentation/swift/true), which causes the system to take the view’s content size into account.

## See Also

### Enabling and Disabling Constraints

- [horizontalContentSizeConstraintActive](ishorizontalcontentsizeconstraintactive.md): A Boolean value that indicates whether the view’s horizontal size constraints are active.
