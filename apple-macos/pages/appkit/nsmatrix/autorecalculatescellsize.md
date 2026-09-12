> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/autorecalculatescellsize](https://developer.apple.com/documentation/appkit/nsmatrix/autorecalculatescellsize)

# autorecalculatesCellSize (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

A Boolean that indicates whether the matrix auto-recalculates its cell size.

## Declaration

```swift
var autorecalculatesCellSize: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), auto-recalculation occurs. The matrix will adjust its [cellSize](cellsize.md) to accommodate its largest cell. Changing the `cellSize` does not directly affect the frame of the matrix; however it does affect the intrinsic content size, which may cause the receiver to resize under Auto Layout. When using Auto Layout, you typically want this to be set to [true](https://developer.apple.com/documentation/swift/true).

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

# autorecalculatesCellSize (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

A Boolean that indicates whether the matrix auto-recalculates its cell size.

## Declaration

```objectivec
@property BOOL autorecalculatesCellSize;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), auto-recalculation occurs. The matrix will adjust its [cellSize](cellsize.md) to accommodate its largest cell. Changing the `cellSize` does not directly affect the frame of the matrix; however it does affect the intrinsic content size, which may cause the receiver to resize under Auto Layout. When using Auto Layout, you typically want this to be set to [true](https://developer.apple.com/documentation/swift/true).

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).
