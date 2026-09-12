> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-c.protocol/accessibilitylinkeduielements](https://developer.apple.com/documentation/appkit/nsaccessibility-c.protocol/accessibilitylinkeduielements)

# accessibilityLinkedUIElements

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The elements that have links with the accessibility element.

## Declaration

```objectivec
@property (copy, nullable) NSArray * accessibilityLinkedUIElements;
```

<a id="Discussion"></a>

## Discussion

Use this property to define a relationship between different user interface elements. For example, use this property to link a list item with contents displayed in another pane or window.

## See Also

### Configuring linkage elements

- [accessibilityServesAsTitleForUIElements](accessibilityservesastitleforuielements.md): The list of elements that the accessibility element is a title for.
- [accessibilityTitleUIElement](accessibilitytitleuielement.md): A static text element that represents the accessibility element’s title.
