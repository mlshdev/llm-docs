> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifacefeature/hassmile-swift.property](https://developer.apple.com/documentation/coreimage/cifacefeature/hassmile-swift.property)

# hasSmile (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether a smile is detected in the face.

## Declaration

```swift
var hasSmile: Bool { get }
```

<a id="discussion"></a>

## Discussion

To detect smiles, `/CIDetector/featuresInImage:options:` needs to be called with the [CIDetectorSmile](../cidetectorsmile.md) option set to true.

## See Also

### Identifying Facial Features

- [hasLeftEyePosition](haslefteyeposition-swift.property.md): A Boolean value that indicates whether the detector found the face’s left eye.
- [hasRightEyePosition](hasrighteyeposition-swift.property.md): A Boolean value that indicates whether the detector found the face’s right eye.
- [hasMouthPosition](hasmouthposition-swift.property.md): A Boolean value that indicates whether the detector found the face’s mouth.
- [leftEyePosition](lefteyeposition-swift.property.md): The image coordinate of the center of the left eye.
- [rightEyePosition](righteyeposition-swift.property.md): The image coordinate of the center of the right eye.
- [mouthPosition](mouthposition-swift.property.md): The image coordinate of the center of the mouth.
- [leftEyeClosed](lefteyeclosed-swift.property.md): A Boolean value that indicates whether a closed left eye is detected in the face.
- [rightEyeClosed](righteyeclosed-swift.property.md): A Boolean value that indicates whether a closed right eye is detected in the face.

# hasSmile (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether a smile is detected in the face.

## Declaration

```objectivec
@property (assign, readonly) BOOL hasSmile;
```

<a id="discussion"></a>

## Discussion

To detect smiles, `/CIDetector/featuresInImage:options:` needs to be called with the [CIDetectorSmile](../cidetectorsmile.md) option set to true.

## See Also

### Identifying Facial Features

- [hasLeftEyePosition](haslefteyeposition-swift.property.md): A Boolean value that indicates whether the detector found the face’s left eye.
- [hasRightEyePosition](hasrighteyeposition-swift.property.md): A Boolean value that indicates whether the detector found the face’s right eye.
- [hasMouthPosition](hasmouthposition-swift.property.md): A Boolean value that indicates whether the detector found the face’s mouth.
- [leftEyePosition](lefteyeposition-swift.property.md): The image coordinate of the center of the left eye.
- [rightEyePosition](righteyeposition-swift.property.md): The image coordinate of the center of the right eye.
- [mouthPosition](mouthposition-swift.property.md): The image coordinate of the center of the mouth.
- [leftEyeClosed](lefteyeclosed-swift.property.md): A Boolean value that indicates whether a closed left eye is detected in the face.
- [rightEyeClosed](righteyeclosed-swift.property.md): A Boolean value that indicates whether a closed right eye is detected in the face.
