> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilityelement-swift.class/accessibilityframeinparentspace](https://developer.apple.com/documentation/appkit/nsaccessibilityelement-swift.class/accessibilityframeinparentspace)

# accessibilityFrameInParentSpace

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The accessibility element’s frame in its parent’s coordinate system.

## Declaration

```objectivec
@property NSRect accessibilityFrameInParentSpace;
```

<a id="Discussion"></a>

## Discussion

Setting this property ensures that the accessibility client receives the correct frame (in screen coordinates) as the element’s parent moves.

## See Also

### Supporting the Accessibility Hierarchy

- [accessibilityElementWithRole:frame:label:parent:](element%28withrole_frame_label_parent_%29.md): Instantiates and configures a new accessibility element.
- [accessibilityAddChildElement:](accessibilityaddchildelement%28__%29.md): Adds a child to the accessibility element in the accessibility hierarchy.
