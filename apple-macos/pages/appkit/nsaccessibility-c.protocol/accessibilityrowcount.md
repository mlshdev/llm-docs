> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-c.protocol/accessibilityrowcount](https://developer.apple.com/documentation/appkit/nsaccessibility-c.protocol/accessibilityrowcount)

# accessibilityRowCount

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The number of rows in the accessibility element’s grid.

## Declaration

```objectivec
@property NSInteger accessibilityRowCount;
```

<a id="Discussion"></a>

## Discussion

Use this property for elements that present a grid of child elements.

## See Also

### Configuring grid views

- [accessibilityColumnCount](accessibilitycolumncount.md): The number of columns in the accessibility element’s grid.
- [accessibilityOrderedByRow](accessibilityorderedbyrow.md): A Boolean value that determines whether the accessibility element’s grid is in row major order or in column major order.
