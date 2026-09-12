> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-c.protocol/accessibilitytitleuielement](https://developer.apple.com/documentation/appkit/nsaccessibility-c.protocol/accessibilitytitleuielement)

# accessibilityTitleUIElement

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A static text element that represents the accessibility element’s title.

## Declaration

```objectivec
@property (weak, nullable) id accessibilityTitleUIElement;
```

<a id="Discussion"></a>

## Discussion

Use this property to associate a static text label with another element—for example, to associate a label with its corresponding text field.

## See Also

### Configuring linkage elements

- [accessibilityLinkedUIElements](accessibilitylinkeduielements.md): The elements that have links with the accessibility element.
- [accessibilityServesAsTitleForUIElements](accessibilityservesastitleforuielements.md): The list of elements that the accessibility element is a title for.
