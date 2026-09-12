> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-c.protocol/accessibilityservesastitleforuielements](https://developer.apple.com/documentation/appkit/nsaccessibility-c.protocol/accessibilityservesastitleforuielements)

# accessibilityServesAsTitleForUIElements

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The list of elements that the accessibility element is a title for.

## Declaration

```objectivec
@property (copy, nullable) NSArray * accessibilityServesAsTitleForUIElements;
```

<a id="Discussion"></a>

## Discussion

Use on a static text label to associate that label with one or more user interface elements.

## See Also

### Configuring linkage elements

- [accessibilityLinkedUIElements](accessibilitylinkeduielements.md): The elements that have links with the accessibility element.
- [accessibilityTitleUIElement](accessibilitytitleuielement.md): A static text element that represents the accessibility element’s title.
