> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/setanchorattribute(_:for:)](https://developer.apple.com/documentation/appkit/nswindow/setanchorattribute(_:for:))

# setAnchorAttribute(\_:for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the part of the window that stays stationary during constraint-based layout.

## Declaration

```swift
func setAnchorAttribute(_ attr: NSLayoutConstraint.Attribute, for orientation: NSLayoutConstraint.Orientation)
```

## Parameters

- `attr`: The layout attribute. [NSLayoutConstraint.Attribute](https://developer.apple.com/documentation/uikit/nslayoutconstraint/attribute) specifies the possible values.
- `orientation`: The window drag orientation. [NSLayoutConstraint.Orientation](../nslayoutconstraint/orientation.md) specifies the possible values.

## See Also

### Constraint-Based Layouts

- [anchorAttribute(for:)](anchorattribute%28for_%29.md): Returns the part of the window that stays stationary during constraint-based layout.

# setAnchorAttribute:forOrientation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the part of the window that stays stationary during constraint-based layout.

## Declaration

```objectivec
- (void) setAnchorAttribute:(NSLayoutAttribute) attr forOrientation:(NSLayoutConstraintOrientation) orientation;
```

## Parameters

- `attr`: The layout attribute. [NSLayoutAttribute](https://developer.apple.com/documentation/uikit/nslayoutconstraint/attribute) specifies the possible values.
- `orientation`: The window drag orientation. [NSLayoutConstraintOrientation](../nslayoutconstraint/orientation.md) specifies the possible values.

## See Also

### Constraint-Based Layouts

- [anchorAttributeForOrientation:](anchorattribute%28for_%29.md): Returns the part of the window that stays stationary during constraint-based layout.
