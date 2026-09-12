> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifacefeature/lefteyeclosed-swift.property](https://developer.apple.com/documentation/coreimage/cifacefeature/lefteyeclosed-swift.property)

# leftEyeClosed (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether a closed left eye is detected in the face.

## Declaration

```swift
var leftEyeClosed: Bool { get }
```

<a id="discussion"></a>

## Discussion

To detect closed eyes, `/CIDetector/featuresInImage:options:` needs to be called with the [CIDetectorEyeBlink](../cidetectoreyeblink.md) option set to true.

## See Also

### Identifying Facial Features

- [hasLeftEyePosition](haslefteyeposition-swift.property.md): A Boolean value that indicates whether the detector found the face’s left eye.
- [hasRightEyePosition](hasrighteyeposition-swift.property.md): A Boolean value that indicates whether the detector found the face’s right eye.
- [hasMouthPosition](hasmouthposition-swift.property.md): A Boolean value that indicates whether the detector found the face’s mouth.
- [leftEyePosition](lefteyeposition-swift.property.md): The image coordinate of the center of the left eye.
- [rightEyePosition](righteyeposition-swift.property.md): The image coordinate of the center of the right eye.
- [mouthPosition](mouthposition-swift.property.md): The image coordinate of the center of the mouth.
- [hasSmile](hassmile-swift.property.md): A Boolean value that indicates whether a smile is detected in the face.
- [rightEyeClosed](righteyeclosed-swift.property.md): A Boolean value that indicates whether a closed right eye is detected in the face.

# leftEyeClosed (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether a closed left eye is detected in the face.

## Declaration

```objectivec
@property (assign, readonly) BOOL leftEyeClosed;
```

<a id="discussion"></a>

## Discussion

To detect closed eyes, `/CIDetector/featuresInImage:options:` needs to be called with the [CIDetectorEyeBlink](../cidetectoreyeblink.md) option set to true.

## See Also

### Identifying Facial Features

- [hasLeftEyePosition](haslefteyeposition-swift.property.md): A Boolean value that indicates whether the detector found the face’s left eye.
- [hasRightEyePosition](hasrighteyeposition-swift.property.md): A Boolean value that indicates whether the detector found the face’s right eye.
- [hasMouthPosition](hasmouthposition-swift.property.md): A Boolean value that indicates whether the detector found the face’s mouth.
- [leftEyePosition](lefteyeposition-swift.property.md): The image coordinate of the center of the left eye.
- [rightEyePosition](righteyeposition-swift.property.md): The image coordinate of the center of the right eye.
- [mouthPosition](mouthposition-swift.property.md): The image coordinate of the center of the mouth.
- [hasSmile](hassmile-swift.property.md): A Boolean value that indicates whether a smile is detected in the face.
- [rightEyeClosed](righteyeclosed-swift.property.md): A Boolean value that indicates whether a closed right eye is detected in the face.
