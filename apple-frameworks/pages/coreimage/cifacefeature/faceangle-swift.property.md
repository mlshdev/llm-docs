> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifacefeature/faceangle-swift.property](https://developer.apple.com/documentation/coreimage/cifacefeature/faceangle-swift.property)

# faceAngle (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+

The rotation of the face.

## Declaration

```swift
var faceAngle: Float { get }
```

<a id="discussion"></a>

## Discussion

Rotation is measured counterclockwise in degrees, with zero indicating that a line drawn between the eyes is horizontal relative to the image orientation.

## See Also

### Locating Faces

- [bounds](bounds-swift.property.md): A rectangle indicating the position and extent of the face feature in image coordinates.
- [hasFaceAngle](hasfaceangle-swift.property.md): A Boolean value that indicates whether information about face rotation is available.

# faceAngle (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+

The rotation of the face.

## Declaration

```objectivec
@property (assign, readonly) float faceAngle;
```

<a id="discussion"></a>

## Discussion

Rotation is measured counterclockwise in degrees, with zero indicating that a line drawn between the eyes is horizontal relative to the image orientation.

## See Also

### Locating Faces

- [bounds](bounds-swift.property.md): A rectangle indicating the position and extent of the face feature in image coordinates.
- [hasFaceAngle](hasfaceangle-swift.property.md): A Boolean value that indicates whether information about face rotation is available.
