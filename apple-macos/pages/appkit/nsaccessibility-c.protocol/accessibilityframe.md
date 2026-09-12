> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-c.protocol/accessibilityframe](https://developer.apple.com/documentation/appkit/nsaccessibility-c.protocol/accessibilityframe)

# accessibilityFrame

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The accessibility element’s frame in screen coordinates.

## Declaration

```objectivec
@property NSRect accessibilityFrame;
```

<a id="Discussion"></a>

## Discussion

This property is accessed by the system whenever an accessibility client requests the element’s size or position.

> **Note**

>  If you are working with an [NSAccessibilityElement](../nsaccessibilityelement-swift.class.md) subclass, use the [accessibilityFrameInParentSpace](../nsaccessibilityelement-swift.class/accessibilityframeinparentspace.md) property instead. The [accessibilityFrameInParentSpace](../nsaccessibilityelement-swift.class/accessibilityframeinparentspace.md) property ensures that accessibility element objects move when their parents move.

## See Also

### Related Documentation

- [NSAccessibilityFrameInView](../nsaccessibility-swift.struct/screenrect%28fromview_rect_%29.md): Returns the frame in screen coordinates.
- [accessibilityFrameInParentSpace](../nsaccessibilityelement-swift.class/accessibilityframeinparentspace.md): The accessibility element’s frame in its parent’s coordinate system.

### Configuring accessibility

- [isAccessibilitySelectorAllowed:](../nsaccessibilityprotocol/isaccessibilityselectorallowed%28__%29.md): Returns a Boolean value that indicates whether assistive apps can invoke the specified selector on the accessibility element.
- [accessibilityElement](accessibilityelement.md): A Boolean value that determines whether the accessibility element participates in the accessibility hierarchy.
- [accessibilityEnabled](accessibilityenabled.md): A Boolean value that determines whether the accessibility element responds to user events.
- [accessibilityHelp](accessibilityhelp.md): The help text for the accessibility element.
- [accessibilityLabel](accessibilitylabel.md): A short description of the accessibility element.
- [accessibilityTitle](accessibilitytitle.md): The title of the accessibility element—for example, a button’s visible text.
- [accessibilityValue](accessibilityvalue.md): The accessibility element’s value.
