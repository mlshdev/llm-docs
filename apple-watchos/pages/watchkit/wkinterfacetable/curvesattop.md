> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacetable/curvesattop](https://developer.apple.com/documentation/watchkit/wkinterfacetable/curvesattop)

# curvesAtTop (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.1+

A Boolean value that determines whether the rows shrink to match the curved corners at the top of the screen.

## Declaration

```swift
var curvesAtTop: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Defaults to [false](https://developer.apple.com/documentation/swift/false). If [true](https://developer.apple.com/documentation/swift/true), table rows near the top of the screen shrink so that the curved corners don’t clip them. Typically, this property has no effect when the status bar is visible. It also has no effect on Apple Watch Series 3 or earlier.

## See Also

### Scrolling

- [scrollToRow(at:)](scrolltorow%28at_%29.md): Scrolls the row at the specified index into view.
- [curvesAtBottom](curvesatbottom.md): A Boolean value that determines whether the rows shrink to match the curved corners at the bottom of the screen.

# curvesAtTop (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.1+

A Boolean value that determines whether the rows shrink to match the curved corners at the top of the screen.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL curvesAtTop;
```

<a id="Discussion"></a>

## Discussion

Defaults to [false](https://developer.apple.com/documentation/swift/false). If [true](https://developer.apple.com/documentation/swift/true), table rows near the top of the screen shrink so that the curved corners don’t clip them. Typically, this property has no effect when the status bar is visible. It also has no effect on Apple Watch Series 3 or earlier.

## See Also

### Scrolling

- [scrollToRowAtIndex:](scrolltorow%28at_%29.md): Scrolls the row at the specified index into view.
- [curvesAtBottom](curvesatbottom.md): A Boolean value that determines whether the rows shrink to match the curved corners at the bottom of the screen.
