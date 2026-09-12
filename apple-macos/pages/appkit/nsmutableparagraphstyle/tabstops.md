> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmutableparagraphstyle/tabstops](https://developer.apple.com/documentation/appkit/nsmutableparagraphstyle/tabstops)

# tabStops (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The text tab objects that represent the paragraph’s tab stops.

## Declaration

```swift
var tabStops: [NSTextTab]! { get set }
```

<a id="Discussion"></a>

## Discussion

The [NSTextTab](../nstexttab.md) objects, sorted by location, define the tab stops for the paragraph style. The default value is an array of 12 left-aligned tabs at 28-point intervals.

## See Also

### Specifying tab information

- [addTabStop(\_:)](addtabstop%28__%29.md): Adds the specified tab stop to the paragraph.
- [removeTabStop(\_:)](removetabstop%28__%29.md): Removes the first text tab with a location and type equal to the specified tab stop.
- [defaultTabInterval](defaulttabinterval.md): A number used as the document’s default tab spacing.

# tabStops (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The text tab objects that represent the paragraph’s tab stops.

## Declaration

```objectivec
@property (copy, null_resettable) NSArray<NSTextTab *> * tabStops;
```

<a id="Discussion"></a>

## Discussion

The [NSTextTab](../nstexttab.md) objects, sorted by location, define the tab stops for the paragraph style. The default value is an array of 12 left-aligned tabs at 28-point intervals.

## See Also

### Specifying tab information

- [addTabStop:](addtabstop%28__%29.md): Adds the specified tab stop to the paragraph.
- [removeTabStop:](removetabstop%28__%29.md): Removes the first text tab with a location and type equal to the specified tab stop.
- [defaultTabInterval](defaulttabinterval.md): A number used as the document’s default tab spacing.
