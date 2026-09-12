> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrulerview/invalidatehashmarks()](https://developer.apple.com/documentation/appkit/nsrulerview/invalidatehashmarks())

# invalidateHashMarks() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Forces recalculation of the hash mark spacing for the next time the receiver is displayed.

## Declaration

```swift
func invalidateHashMarks()
```

<a id="Discussion"></a>

## Discussion

You should never need to invoke this method directly, but might need to override it if you override [drawHashMarksAndLabels(in:)](drawhashmarksandlabels%28in_%29.md).

## See Also

### Drawing

- [drawHashMarksAndLabels(in:)](drawhashmarksandlabels%28in_%29.md): Draws the receiver’s hash marks and labels in `aRect`, which is expressed in the receiver’s coordinate system.
- [drawMarkers(in:)](drawmarkers%28in_%29.md): Draws the receiver’s markers in `aRect`, which is expressed in the receiver’s coordinate system.

# invalidateHashMarks (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Forces recalculation of the hash mark spacing for the next time the receiver is displayed.

## Declaration

```objectivec
- (void) invalidateHashMarks;
```

<a id="Discussion"></a>

## Discussion

You should never need to invoke this method directly, but might need to override it if you override [drawHashMarksAndLabelsInRect:](drawhashmarksandlabels%28in_%29.md).

## See Also

### Drawing

- [drawHashMarksAndLabelsInRect:](drawhashmarksandlabels%28in_%29.md): Draws the receiver’s hash marks and labels in `aRect`, which is expressed in the receiver’s coordinate system.
- [drawMarkersInRect:](drawmarkers%28in_%29.md): Draws the receiver’s markers in `aRect`, which is expressed in the receiver’s coordinate system.
