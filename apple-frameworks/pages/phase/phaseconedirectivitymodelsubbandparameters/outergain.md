> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseconedirectivitymodelsubbandparameters/outergain](https://developer.apple.com/documentation/phase/phaseconedirectivitymodelsubbandparameters/outergain)

# outerGain (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The loudness of the audio the outside area of the cone emits.

## Declaration

```swift
var outerGain: Double { get set }
```

<a id="Discussion"></a>

## Discussion

The framework clamps the value of this property to the range `[0,` `1]`, where `0` silences loudness and `1` doesn’t modify loudness.

## See Also

### Shaping Directivity

- [innerAngle](innerangle.md): An angle, in degrees, that determines the size of the audio emitting area inside the cone.
- [outerAngle](outerangle.md): An angle, in degrees, that determines the size of the audio emitting area outside the cone.
- [setAngles(innerAngle:outerAngle:)](setangles%28innerangle_outerangle_%29.md): Configures a focus area for cone-based sound directivity.

# outerGain (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The loudness of the audio the outside area of the cone emits.

## Declaration

```objectivec
@property (nonatomic) double outerGain;
```

<a id="Discussion"></a>

## Discussion

The framework clamps the value of this property to the range `[0,` `1]`, where `0` silences loudness and `1` doesn’t modify loudness.

## See Also

### Shaping Directivity

- [innerAngle](innerangle.md): An angle, in degrees, that determines the size of the audio emitting area inside the cone.
- [outerAngle](outerangle.md): An angle, in degrees, that determines the size of the audio emitting area outside the cone.
- [setInnerAngle:outerAngle:](setangles%28innerangle_outerangle_%29.md): Configures a focus area for cone-based sound directivity.
