> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvcollectionviewfullscreencell/normalizedposition](https://developer.apple.com/documentation/tvuikit/tvcollectionviewfullscreencell/normalizedposition)

# normalizedPosition (Swift)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

The value that determines the current cell’s relative position on the screen.

## Declaration

```swift
var normalizedPosition: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

A value of 0 indicates that the cell is positioned at the center of the collection view. A negative value indicates that the cell is positioned to the left of the center. A positive value indicates that the cell is positioned to the right of the center.

# normalizedPosition (Objective-C)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

The value that determines the current cell’s relative position on the screen.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat normalizedPosition;
```

<a id="Discussion"></a>

## Discussion

A value of 0 indicates that the cell is positioned at the center of the collection view. A negative value indicates that the cell is positioned to the left of the center. A positive value indicates that the cell is positioned to the right of the center.
