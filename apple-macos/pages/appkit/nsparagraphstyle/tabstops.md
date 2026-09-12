> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsparagraphstyle/tabstops](https://developer.apple.com/documentation/appkit/nsparagraphstyle/tabstops)

# tabStops (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The text tab objects that represent the paragraph’s tab stops.

## Declaration

```swift
var tabStops: [NSTextTab] { get }
```

<a id="Discussion"></a>

## Discussion

The [NSTextTab](../nstexttab.md) objects, sorted by location, define the tab stops for the paragraph style. The default value is an array of 12 left-aligned tabs at 28-point intervals.

## See Also

### Accessing tab information

- [NSParagraphStyle.TextTabType](texttabtype.md): Deprecated. Constants that specify the type of tab stop.
- [defaultTabInterval](defaulttabinterval.md): The documentwide default tab interval.

# tabStops (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The text tab objects that represent the paragraph’s tab stops.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSTextTab *> * tabStops;
```

<a id="Discussion"></a>

## Discussion

The [NSTextTab](../nstexttab.md) objects, sorted by location, define the tab stops for the paragraph style. The default value is an array of 12 left-aligned tabs at 28-point intervals.

## See Also

### Accessing tab information

- [NSTextTabType](texttabtype.md): Deprecated. Constants that specify the type of tab stop.
- [defaultTabInterval](defaulttabinterval.md): The documentwide default tab interval.
