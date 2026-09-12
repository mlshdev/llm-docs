> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/anchorattribute(for:)](https://developer.apple.com/documentation/appkit/nswindow/anchorattribute(for:))

# anchorAttribute(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the part of the window that stays stationary during constraint-based layout.

## Declaration

```swift
func anchorAttribute(for orientation: NSLayoutConstraint.Orientation) -> NSLayoutConstraint.Attribute
```

## Parameters

- `orientation`: The attribute for orientation. [NSLayoutConstraint.Orientation](../nslayoutconstraint/orientation.md)specifies the possible values.

<a id="return-value"></a>

## Return Value

Returns the layout attribute.

## See Also

### Constraint-Based Layouts

- [setAnchorAttribute(\_:for:)](setanchorattribute%28__for_%29.md): Sets the part of the window that stays stationary during constraint-based layout.

# anchorAttributeForOrientation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the part of the window that stays stationary during constraint-based layout.

## Declaration

```objectivec
- (NSLayoutAttribute) anchorAttributeForOrientation:(NSLayoutConstraintOrientation) orientation;
```

## Parameters

- `orientation`: The attribute for orientation. [NSLayoutConstraintOrientation](../nslayoutconstraint/orientation.md)specifies the possible values.

<a id="return-value"></a>

## Return Value

Returns the layout attribute.

## See Also

### Constraint-Based Layouts

- [setAnchorAttribute:forOrientation:](setanchorattribute%28__for_%29.md): Sets the part of the window that stays stationary during constraint-based layout.
