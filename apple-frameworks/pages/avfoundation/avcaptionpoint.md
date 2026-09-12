> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionpoint](https://developer.apple.com/documentation/avfoundation/avcaptionpoint)

# AVCaptionPoint (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS

A structure that defines the origin point for a caption.

## Declaration

```swift
struct AVCaptionPoint
```

## Topics

### Inspecting the point

- [x](avcaptionpoint/x.md): The point’s x coordinate.
- [y](avcaptionpoint/y.md): The point’s y coordinate.

### Initializers

- [init()](avcaptionpoint/init%28%29.md): Creates a caption dimension.
- [init(x:y:)](avcaptionpoint/init%28x_y_%29.md): Creates a caption point with x and y coordinates.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Accessing the location

- [origin](avcaptionregion/origin.md): The region’s top-left position.

# AVCaptionPoint (Objective-C)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS

A structure that defines the origin point for a caption.

## Declaration

```objectivec
typedef struct AVCaptionPoint { ... } AVCaptionPoint;
```

## Topics

### Inspecting the point

- [x](avcaptionpoint/x.md): The point’s x coordinate.
- [y](avcaptionpoint/y.md): The point’s y coordinate.

## See Also

### Accessing the location

- [origin](avcaptionregion/origin.md): The region’s top-left position.
- [AVCaptionPointMake](avcaptionpointmake.md): Creates a caption point with the specified x and y positions.
