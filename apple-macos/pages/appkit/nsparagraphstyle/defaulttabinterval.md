> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsparagraphstyle/defaulttabinterval](https://developer.apple.com/documentation/appkit/nsparagraphstyle/defaulttabinterval)

# defaultTabInterval (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The documentwide default tab interval.

## Declaration

```swift
var defaultTabInterval: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

This property represents the default tab interval in points. Tabs after the last specified in [tabStops](tabstops.md) are placed at integer multiples of this distance (if positive). Default value is 0.0.

## See Also

### Accessing tab information

- [tabStops](tabstops.md): The text tab objects that represent the paragraph’s tab stops.
- [NSParagraphStyle.TextTabType](texttabtype.md): Deprecated. Constants that specify the type of tab stop.

# defaultTabInterval (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The documentwide default tab interval.

## Declaration

```objectivec
@property (readonly) CGFloat defaultTabInterval;
```

<a id="Discussion"></a>

## Discussion

This property represents the default tab interval in points. Tabs after the last specified in [tabStops](tabstops.md) are placed at integer multiples of this distance (if positive). Default value is 0.0.

## See Also

### Accessing tab information

- [tabStops](tabstops.md): The text tab objects that represent the paragraph’s tab stops.
- [NSTextTabType](texttabtype.md): Deprecated. Constants that specify the type of tab stop.
