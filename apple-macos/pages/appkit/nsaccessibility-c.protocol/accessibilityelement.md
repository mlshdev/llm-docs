> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-c.protocol/accessibilityelement](https://developer.apple.com/documentation/appkit/nsaccessibility-c.protocol/accessibilityelement)

# accessibilityElement

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value that determines whether the accessibility element participates in the accessibility hierarchy.

## Declaration

```objectivec
@property (getter=isAccessibilityElement) BOOL accessibilityElement;
```

<a id="Discussion"></a>

## Discussion

Use this property to expose this object to accessibility clients as a functional interface element. For example, when you place a button in a window, the system typically creates a button cell inside a button control inside a container view inside a window. Users, however, don’t care about the view hierarchy details. They should only be told that there’s a button in a window.

If this property is set to [false](https://developer.apple.com/documentation/swift/false), accessibility clients ignore this element. By default, `NSView` and its subclasses set this value to [false](https://developer.apple.com/documentation/swift/false); however, if your `NSView` subclass adopts one of the accessibility protocols, the system changes the default value to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Related Documentation

- [NSAccessibilityUnignoredDescendant](../nsaccessibility-swift.struct/unignoreddescendant%28of_%29.md): Returns an unignored accessibility object, descending the hierarchy, if necessary.
- [NSAccessibilityUnignoredAncestor](../nsaccessibility-swift.struct/unignoredancestor%28of_%29.md): Returns an unignored accessibility object, ascending the hierarchy, if necessary.
- [NSAccessibilityUnignoredChildrenForOnlyChild](../nsaccessibility-swift.struct/unignoredchildrenforonlychild%28from_%29.md): Returns a list of unignored accessibility objects, descending the hierarchy, if necessary.
- [NSAccessibilityUnignoredChildren](../nsaccessibility-swift.struct/unignoredchildren%28from_%29.md): Returns a list of unignored accessibility objects, descending the hierarchy, if necessary.

### Configuring accessibility

- [isAccessibilitySelectorAllowed:](../nsaccessibilityprotocol/isaccessibilityselectorallowed%28__%29.md): Returns a Boolean value that indicates whether assistive apps can invoke the specified selector on the accessibility element.
- [accessibilityEnabled](accessibilityenabled.md): A Boolean value that determines whether the accessibility element responds to user events.
- [accessibilityFrame](accessibilityframe.md): The accessibility element’s frame in screen coordinates.
- [accessibilityHelp](accessibilityhelp.md): The help text for the accessibility element.
- [accessibilityLabel](accessibilitylabel.md): A short description of the accessibility element.
- [accessibilityTitle](accessibilitytitle.md): The title of the accessibility element—for example, a button’s visible text.
- [accessibilityValue](accessibilityvalue.md): The accessibility element’s value.
