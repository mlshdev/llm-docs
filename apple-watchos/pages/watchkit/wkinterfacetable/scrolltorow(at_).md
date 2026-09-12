> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacetable/scrolltorow(at:)](https://developer.apple.com/documentation/watchkit/wkinterfacetable/scrolltorow(at:))

# scrollToRow(at:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Scrolls the row at the specified index into view.

## Declaration

```swift
func scrollToRow(at index: Int)
```

## Parameters

- `index`: The index of the row to be displayed. Specifying an index less than `0` scrolls to the top of the list. Specifying an index greater than the total number of row controllers scrolls to the bottom of the list.

## See Also

### Scrolling

- [curvesAtBottom](curvesatbottom.md): A Boolean value that determines whether the rows shrink to match the curved corners at the bottom of the screen.
- [curvesAtTop](curvesattop.md): A Boolean value that determines whether the rows shrink to match the curved corners at the top of the screen.

# scrollToRowAtIndex: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Scrolls the row at the specified index into view.

## Declaration

```objectivec
- (void) scrollToRowAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The index of the row to be displayed. Specifying an index less than `0` scrolls to the top of the list. Specifying an index greater than the total number of row controllers scrolls to the bottom of the list.

## See Also

### Scrolling

- [curvesAtBottom](curvesatbottom.md): A Boolean value that determines whether the rows shrink to match the curved corners at the bottom of the screen.
- [curvesAtTop](curvesattop.md): A Boolean value that determines whether the rows shrink to match the curved corners at the top of the screen.
