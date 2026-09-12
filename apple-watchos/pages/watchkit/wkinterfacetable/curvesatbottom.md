> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacetable/curvesatbottom](https://developer.apple.com/documentation/watchkit/wkinterfacetable/curvesatbottom)

# curvesAtBottom (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.1+

A Boolean value that determines whether the rows shrink to match the curved corners at the bottom of the screen.

## Declaration

```swift
var curvesAtBottom: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Defaults to [false](https://developer.apple.com/documentation/swift/false). If [true](https://developer.apple.com/documentation/swift/true), table rows near the bottom of the screen shrink so that the curved corners don’t clip them. This property has no effect on Apple Watch Series 3 or earlier.

## See Also

### Scrolling

- [scrollToRow(at:)](scrolltorow%28at_%29.md): Scrolls the row at the specified index into view.
- [curvesAtTop](curvesattop.md): A Boolean value that determines whether the rows shrink to match the curved corners at the top of the screen.

# curvesAtBottom (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.1+

A Boolean value that determines whether the rows shrink to match the curved corners at the bottom of the screen.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL curvesAtBottom;
```

<a id="Discussion"></a>

## Discussion

Defaults to [false](https://developer.apple.com/documentation/swift/false). If [true](https://developer.apple.com/documentation/swift/true), table rows near the bottom of the screen shrink so that the curved corners don’t clip them. This property has no effect on Apple Watch Series 3 or earlier.

## See Also

### Scrolling

- [scrollToRowAtIndex:](scrolltorow%28at_%29.md): Scrolls the row at the specified index into view.
- [curvesAtTop](curvesattop.md): A Boolean value that determines whether the rows shrink to match the curved corners at the top of the screen.
