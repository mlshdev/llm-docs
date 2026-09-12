> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-c.protocol/accessibilityparent](https://developer.apple.com/documentation/appkit/nsaccessibility-c.protocol/accessibilityparent)

# accessibilityParent

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The accessibility element’s parent in the accessibility hierarchy.

## Declaration

```objectivec
@property (weak, nullable) id accessibilityParent;
```

<a id="Discussion"></a>

## Discussion

This property must contain a reference to another element in the accessibility hierarchy. If you create an [NSView](../nsview.md) subclass, you don’t typically need to set this value. The system automatically sets the parent to the nearest ancestor in the view hierarchy that is also in the accessibility hierarchy. If you use an [NSAccessibilityElement](../nsaccessibilityelement-swift.class.md) subclass to represent an interface element that is not backed by a view, you can either set the parent property or you can call the [accessibilityElementWithRole:frame:label:parent:](../nsaccessibilityelement-swift.class/element%28withrole_frame_label_parent_%29.md) convenience method, which sets it automatically.

## See Also

### Related Documentation

- [NSAccessibilityUnignoredAncestor](../nsaccessibility-swift.struct/unignoredancestor%28of_%29.md): Returns an unignored accessibility object, ascending the hierarchy, if necessary.
- [accessibilityElementWithRole:frame:label:parent:](../nsaccessibilityelement-swift.class/element%28withrole_frame_label_parent_%29.md): Instantiates and configures a new accessibility element.
- [accessibilityElement](accessibilityelement.md): A Boolean value that determines whether the accessibility element participates in the accessibility hierarchy.

### Determining relationships

- [accessibilityChildren](accessibilitychildren.md): The child accessibility elements in the accessibility hierarchy.
- [accessibilityChildrenInNavigationOrder](accessibilitychildreninnavigationorder.md): An array of child accessibility elements in order for linear navigation.
- [accessibilitySelectedChildren](accessibilityselectedchildren.md): The accessibility element’s currently selected children.
- [accessibilityTopLevelUIElement](accessibilitytopleveluielement.md): The top-level element that contains the accessibility element.
- [accessibilityVisibleChildren](accessibilityvisiblechildren.md): The accessibility element’s visible child accessibility elements.
