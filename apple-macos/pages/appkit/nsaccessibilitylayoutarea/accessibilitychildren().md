> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitylayoutarea/accessibilitychildren()](https://developer.apple.com/documentation/appkit/nsaccessibilitylayoutarea/accessibilitychildren())

# accessibilityChildren() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the accessibility element’s children in the accessibility hierarchy.

## Declaration

```swift
func accessibilityChildren() -> [Any]?
```

<a id="return-value"></a>

## Return Value

An array that contains references to this element’s children in the accessibility hierarchy.

<a id="Discussion"></a>

## Discussion

This method is the getter for the [NSAccessibilityProtocol](../nsaccessibilityprotocol.md) protocol’s [accessibilityChildren](../nsaccessibility-c.protocol/accessibilitychildren.md) property.

## See Also

### Related Documentation

- [accessibilityAddChildElement(\_:)](../nsaccessibilityelement-swift.class/accessibilityaddchildelement%28__%29.md): Adds a child to the accessibility element in the accessibility hierarchy.
- [unignoredChildrenForOnlyChild(from:)](../nsaccessibility-swift.struct/unignoredchildrenforonlychild%28from_%29.md): Returns a list of unignored accessibility objects, descending the hierarchy, if necessary.
- [unignoredChildren(from:)](../nsaccessibility-swift.struct/unignoredchildren%28from_%29.md): Returns a list of unignored accessibility objects, descending the hierarchy, if necessary.

### Supporting Accessibility

- [accessibilityFocusedUIElement](accessibilityfocuseduielement.md): The child accessibility element with the current focus.
- [accessibilityLabel()](accessibilitylabel%28%29.md): Returns a short description of the layout area.
- [accessibilitySelectedChildren()](accessibilityselectedchildren%28%29.md): Returns the layout area’s currently selected children.

# accessibilityChildren (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the accessibility element’s children in the accessibility hierarchy.

## Declaration

```objectivec
- (NSArray *) accessibilityChildren;
```

<a id="return-value"></a>

## Return Value

An array that contains references to this element’s children in the accessibility hierarchy.

<a id="Discussion"></a>

## Discussion

This method is the getter for the [NSAccessibility](../nsaccessibilityprotocol.md) protocol’s [accessibilityChildren](../nsaccessibility-c.protocol/accessibilitychildren.md) property.

## See Also

### Related Documentation

- [accessibilityAddChildElement:](../nsaccessibilityelement-swift.class/accessibilityaddchildelement%28__%29.md): Adds a child to the accessibility element in the accessibility hierarchy.
- [NSAccessibilityUnignoredChildrenForOnlyChild](../nsaccessibility-swift.struct/unignoredchildrenforonlychild%28from_%29.md): Returns a list of unignored accessibility objects, descending the hierarchy, if necessary.
- [accessibilityVisibleChildren](../nsaccessibility-c.protocol/accessibilityvisiblechildren.md): The accessibility element’s visible child accessibility elements.
- [NSAccessibilityUnignoredChildren](../nsaccessibility-swift.struct/unignoredchildren%28from_%29.md): Returns a list of unignored accessibility objects, descending the hierarchy, if necessary.
- [accessibilityElement](../nsaccessibility-c.protocol/accessibilityelement.md): A Boolean value that determines whether the accessibility element participates in the accessibility hierarchy.
- [accessibilityChildren](../nsaccessibility-c.protocol/accessibilitychildren.md): The child accessibility elements in the accessibility hierarchy.

### Supporting Accessibility

- [accessibilityFocusedUIElement](accessibilityfocuseduielement.md): The child accessibility element with the current focus.
- [accessibilityLabel](accessibilitylabel%28%29.md): Returns a short description of the layout area.
- [accessibilitySelectedChildren](accessibilityselectedchildren%28%29.md): Returns the layout area’s currently selected children.
