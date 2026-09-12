> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-c.protocol/accessibilitycolumncount](https://developer.apple.com/documentation/appkit/nsaccessibility-c.protocol/accessibilitycolumncount)

# accessibilityColumnCount

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The number of columns in the accessibility element’s grid.

## Declaration

```objectivec
@property NSInteger accessibilityColumnCount;
```

<a id="Discussion"></a>

## Discussion

Use this property for UI elements that present a grid of child elements.

## See Also

### Configuring grid views

- [accessibilityOrderedByRow](accessibilityorderedbyrow.md): A Boolean value that determines whether the accessibility element’s grid is in row major order or in column major order.
- [accessibilityRowCount](accessibilityrowcount.md): The number of rows in the accessibility element’s grid.
