> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-c.protocol/accessibilityorderedbyrow](https://developer.apple.com/documentation/appkit/nsaccessibility-c.protocol/accessibilityorderedbyrow)

# accessibilityOrderedByRow

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value that determines whether the accessibility element’s grid is in row major order or in column major order.

## Declaration

```objectivec
@property (getter=isAccessibilityOrderedByRow) BOOL accessibilityOrderedByRow;
```

<a id="Discussion"></a>

## Discussion

Use this property for UI elements that present a grid of child elements. Set the property to [true](https://developer.apple.com/documentation/swift/true) if the grid is ordered row major; otherwise, set to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring grid views

- [accessibilityColumnCount](accessibilitycolumncount.md): The number of columns in the accessibility element’s grid.
- [accessibilityRowCount](accessibilityrowcount.md): The number of rows in the accessibility element’s grid.
