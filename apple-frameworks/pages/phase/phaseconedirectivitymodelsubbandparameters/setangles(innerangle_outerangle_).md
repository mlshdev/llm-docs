> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseconedirectivitymodelsubbandparameters/setangles(innerangle:outerangle:)](https://developer.apple.com/documentation/phase/phaseconedirectivitymodelsubbandparameters/setangles(innerangle:outerangle:))

# setAngles(innerAngle:outerAngle:) (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Configures a focus area for cone-based sound directivity.

## Declaration

```swift
func setAngles(innerAngle: Double, outerAngle: Double)
```

## Parameters

- `innerAngle`: An angle that determines the size of the audio emitting area inside the cone.
- `outerAngle`: An angle that determines the size of the audio emitting area outside the cone.

<a id="Discussion"></a>

## Discussion

The default value for each angle is `360.0`. The outer angle needs to be greater than or equal to the inner angle.

## See Also

### Shaping Directivity

- [innerAngle](innerangle.md): An angle, in degrees, that determines the size of the audio emitting area inside the cone.
- [outerAngle](outerangle.md): An angle, in degrees, that determines the size of the audio emitting area outside the cone.
- [outerGain](outergain.md): The loudness of the audio the outside area of the cone emits.

# setInnerAngle:outerAngle: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Configures a focus area for cone-based sound directivity.

## Declaration

```objectivec
- (void) setInnerAngle:(double) innerAngle outerAngle:(double) outerAngle;
```

## Parameters

- `innerAngle`: An angle that determines the size of the audio emitting area inside the cone.
- `outerAngle`: An angle that determines the size of the audio emitting area outside the cone.

<a id="Discussion"></a>

## Discussion

The default value for each angle is `360.0`. The outer angle needs to be greater than or equal to the inner angle.

## See Also

### Shaping Directivity

- [innerAngle](innerangle.md): An angle, in degrees, that determines the size of the audio emitting area inside the cone.
- [outerAngle](outerangle.md): An angle, in degrees, that determines the size of the audio emitting area outside the cone.
- [outerGain](outergain.md): The loudness of the audio the outside area of the cone emits.
