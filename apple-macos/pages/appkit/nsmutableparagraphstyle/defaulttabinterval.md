> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmutableparagraphstyle/defaulttabinterval](https://developer.apple.com/documentation/appkit/nsmutableparagraphstyle/defaulttabinterval)

# defaultTabInterval (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

A number used as the document’s default tab spacing.

## Declaration

```swift
var defaultTabInterval: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

This property represents the default tab interval in points. The system places tabs after the last specified in [tabStops](https://developer.apple.com/library/archive/#id%28tabStops%29) at integer multiples of this distance (if positive). Default value is `0.0`.

## See Also

### Specifying tab information

- [addTabStop(\_:)](addtabstop%28__%29.md): Adds the specified tab stop to the paragraph.
- [removeTabStop(\_:)](removetabstop%28__%29.md): Removes the first text tab with a location and type equal to the specified tab stop.
- [tabStops](tabstops.md): The text tab objects that represent the paragraph’s tab stops.

# defaultTabInterval (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

A number used as the document’s default tab spacing.

## Declaration

```objectivec
@property CGFloat defaultTabInterval;
```

<a id="Discussion"></a>

## Discussion

This property represents the default tab interval in points. The system places tabs after the last specified in [tabStops](https://developer.apple.com/library/archive/#id%28tabStops%29) at integer multiples of this distance (if positive). Default value is `0.0`.

## See Also

### Specifying tab information

- [addTabStop:](addtabstop%28__%29.md): Adds the specified tab stop to the paragraph.
- [removeTabStop:](removetabstop%28__%29.md): Removes the first text tab with a location and type equal to the specified tab stop.
- [tabStops](tabstops.md): The text tab objects that represent the paragraph’s tab stops.
