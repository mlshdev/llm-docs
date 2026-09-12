> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilityelement-swift.class/accessibilityaddchildelement(_:)](https://developer.apple.com/documentation/appkit/nsaccessibilityelement-swift.class/accessibilityaddchildelement(_:))

# accessibilityAddChildElement(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Adds a child to the accessibility element in the accessibility hierarchy.

## Declaration

```swift
func accessibilityAddChildElement(_ childElement: NSAccessibilityElement)
```

## Parameters

- `childElement`: The child element to be added.

<a id="Discussion"></a>

## Discussion

Calling this method sets up the proper parent-child relationship between the current element and the provided child element.

## See Also

### Supporting the Accessibility Hierarchy

- [element(withRole:frame:label:parent:)](element%28withrole_frame_label_parent_%29.md): Instantiates and configures a new accessibility element.
- [accessibilityFrameInParentSpace()](accessibilityframeinparentspace%28%29.md): Returns the accessibility element’s frame in its parent’s coordinate system.
- [setAccessibilityFrameInParentSpace(\_:)](setaccessibilityframeinparentspace%28__%29.md): Sets the accessibility element’s frame in its parent’s coordinate system.

# accessibilityAddChildElement: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Adds a child to the accessibility element in the accessibility hierarchy.

## Declaration

```objectivec
- (void) accessibilityAddChildElement:(NSAccessibilityElement *) childElement;
```

## Parameters

- `childElement`: The child element to be added.

<a id="Discussion"></a>

## Discussion

Calling this method sets up the proper parent-child relationship between the current element and the provided child element.

## See Also

### Supporting the Accessibility Hierarchy

- [accessibilityElementWithRole:frame:label:parent:](element%28withrole_frame_label_parent_%29.md): Instantiates and configures a new accessibility element.
- [accessibilityFrameInParentSpace](accessibilityframeinparentspace.md): The accessibility element’s frame in its parent’s coordinate system.
