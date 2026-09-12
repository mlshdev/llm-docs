> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvcollectionviewfullscreenlayoutattributes/normalizedposition](https://developer.apple.com/documentation/tvuikit/tvcollectionviewfullscreenlayoutattributes/normalizedposition)

# normalizedPosition (Swift)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

A value that indicates the distance of the current cell from the collection view’s center cell.

## Declaration

```swift
var normalizedPosition: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

A negative value indicates that the cell is positioned to the left of the center cell in the collection view. A positive value indicates that the cell is positioned to the right of the center cell. A 0 value indicates the cell is in the neutral position, in the center of the collection view.

# normalizedPosition (Objective-C)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

A value that indicates the distance of the current cell from the collection view’s center cell.

## Declaration

```objectivec
@property (nonatomic, assign) CGFloat normalizedPosition;
```

<a id="Discussion"></a>

## Discussion

A negative value indicates that the cell is positioned to the left of the center cell in the collection view. A positive value indicates that the cell is positioned to the right of the center cell. A 0 value indicates the cell is in the neutral position, in the center of the collection view.
