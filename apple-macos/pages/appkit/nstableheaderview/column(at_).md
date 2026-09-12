> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableheaderview/column(at:)](https://developer.apple.com/documentation/appkit/nstableheaderview/column(at:))

# column(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index of the column whose header lies under `aPoint` in the receiver, or –1 if no such column is found.

## Declaration

```swift
func column(at point: NSPoint) -> Int
```

<a id="Discussion"></a>

## Discussion

`aPoint` is expressed in the receiver’s coordinate system.

## See Also

### Utility methods

- [headerRect(ofColumn:)](headerrect%28ofcolumn_%29.md): Returns the rectangle containing the header tile for the column at `columnIndex`.

# columnAtPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index of the column whose header lies under `aPoint` in the receiver, or –1 if no such column is found.

## Declaration

```objectivec
- (NSInteger) columnAtPoint:(NSPoint) point;
```

<a id="Discussion"></a>

## Discussion

`aPoint` is expressed in the receiver’s coordinate system.

## See Also

### Utility methods

- [headerRectOfColumn:](headerrect%28ofcolumn_%29.md): Returns the rectangle containing the header tile for the column at `columnIndex`.
