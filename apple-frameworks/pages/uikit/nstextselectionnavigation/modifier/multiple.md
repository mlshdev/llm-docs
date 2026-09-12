> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextselectionnavigation/modifier/multiple](https://developer.apple.com/documentation/uikit/nstextselectionnavigation/modifier/multiple)

# multiple (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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
