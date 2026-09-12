> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextselectionnavigation/modifier/multiple](https://developer.apple.com/documentation/appkit/nstextselectionnavigation/modifier/multiple)

# multiple (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 12.0+

The value that indicates the framework extends the selection visually inside the rectangular area defined by the anchor and dragged positions.

## Declaration

```swift
static var multiple: NSTextSelectionNavigation.Modifier { get }
```

<a id="Discussion"></a>

## Discussion

This produces an [NSTextSelection](../../nstextselection.md) per line.

## See Also

### Navigation modifier characteristics

- [extend](extend.md): The value that indicates the framework extends the selection by not moving the initial location while in a drag selection.
- [visual](visual.md): The value that indicates the framework extends the selection visually inside the rectangular area defined by the anchor and drag positions.

# NSTextSelectionNavigationModifierMultiple (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 12.0+

The value that indicates the framework extends the selection visually inside the rectangular area defined by the anchor and dragged positions.

## Declaration

```objectivec
NSTextSelectionNavigationModifierMultiple
```

<a id="Discussion"></a>

## Discussion

This produces an [NSTextSelection](../../nstextselection.md) per line.

## See Also

### Navigation modifier characteristics

- [NSTextSelectionNavigationModifierExtend](extend.md): The value that indicates the framework extends the selection by not moving the initial location while in a drag selection.
- [NSTextSelectionNavigationModifierVisual](visual.md): The value that indicates the framework extends the selection visually inside the rectangular area defined by the anchor and drag positions.
