> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-c.protocol/accessibilitydisclosed](https://developer.apple.com/documentation/appkit/nsaccessibility-c.protocol/accessibilitydisclosed)

# accessibilityDisclosed

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value that determines whether the row is disclosing other rows.

## Declaration

```objectivec
@property (getter=isAccessibilityDisclosed) BOOL accessibilityDisclosed;
```

<a id="Discussion"></a>

## Discussion

Use this property in the elements representing an outline’s row.

## See Also

### Configuring outline rows

- [accessibilityDisclosedByRow](accessibilitydisclosedbyrow.md): The row disclosing the current row.
- [accessibilityDisclosedRows](accessibilitydisclosedrows.md): The rows that the current row discloses.
- [accessibilityDisclosureLevel](accessibilitydisclosurelevel.md): The indention level for the row.
