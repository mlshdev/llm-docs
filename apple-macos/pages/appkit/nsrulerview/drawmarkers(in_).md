> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrulerview/drawmarkers(in:)](https://developer.apple.com/documentation/appkit/nsrulerview/drawmarkers(in:))

# drawMarkers(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the receiver’s markers in `aRect`, which is expressed in the receiver’s coordinate system.

## Declaration

```swift
func drawMarkers(in rect: NSRect)
```

<a id="Discussion"></a>

## Discussion

This method is invoked by [draw(\_:)](../nsrulermarker/draw%28__%29.md); you should never need to invoke it directly, but you might want to override it if you want to do something different when drawing markers.

## See Also

### Related Documentation

- [reservedThicknessForMarkers](reservedthicknessformarkers.md): The room available for ruler markers to `thickness`.

### Drawing

- [drawHashMarksAndLabels(in:)](drawhashmarksandlabels%28in_%29.md): Draws the receiver’s hash marks and labels in `aRect`, which is expressed in the receiver’s coordinate system.
- [invalidateHashMarks()](invalidatehashmarks%28%29.md): Forces recalculation of the hash mark spacing for the next time the receiver is displayed.

# drawMarkersInRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the receiver’s markers in `aRect`, which is expressed in the receiver’s coordinate system.

## Declaration

```objectivec
- (void) drawMarkersInRect:(NSRect) rect;
```

<a id="Discussion"></a>

## Discussion

This method is invoked by [drawRect:](../nsrulermarker/draw%28__%29.md); you should never need to invoke it directly, but you might want to override it if you want to do something different when drawing markers.

## See Also

### Related Documentation

- [reservedThicknessForMarkers](reservedthicknessformarkers.md): The room available for ruler markers to `thickness`.

### Drawing

- [drawHashMarksAndLabelsInRect:](drawhashmarksandlabels%28in_%29.md): Draws the receiver’s hash marks and labels in `aRect`, which is expressed in the receiver’s coordinate system.
- [invalidateHashMarks](invalidatehashmarks%28%29.md): Forces recalculation of the hash mark spacing for the next time the receiver is displayed.
