> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsaccessibility-c.protocol/accessibilitydisclosurelevel

# accessibilityDisclosureLevel

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The indention level for the row.

## Declaration

```objectivec
@property NSInteger accessibilityDisclosureLevel;
```

<a id="Discussion"></a>

## Discussion

Use this property in the elements representing an outline’s row.

## See Also

### Configuring outline rows

- [accessibilityDisclosed](accessibilitydisclosed.md): A Boolean value that determines whether the row is disclosing other rows.
- [accessibilityDisclosedByRow](accessibilitydisclosedbyrow.md): The row disclosing the current row.
- [accessibilityDisclosedRows](accessibilitydisclosedrows.md): The rows that the current row discloses.
