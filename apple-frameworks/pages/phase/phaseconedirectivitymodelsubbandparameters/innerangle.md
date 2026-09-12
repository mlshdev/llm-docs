> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseconedirectivitymodelsubbandparameters/innerangle](https://developer.apple.com/documentation/phase/phaseconedirectivitymodelsubbandparameters/innerangle)

# innerAngle (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An angle, in degrees, that determines the size of the audio emitting area inside the cone.

## Declaration

```swift
var innerAngle: Double { get }
```

<a id="Discussion"></a>

## Discussion

To set this property, call [setAngles(innerAngle:outerAngle:)](setangles%28innerangle_outerangle_%29.md).

## See Also

### Shaping Directivity

- [outerAngle](outerangle.md): An angle, in degrees, that determines the size of the audio emitting area outside the cone.
- [outerGain](outergain.md): The loudness of the audio the outside area of the cone emits.
- [setAngles(innerAngle:outerAngle:)](setangles%28innerangle_outerangle_%29.md): Configures a focus area for cone-based sound directivity.

# innerAngle (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An angle, in degrees, that determines the size of the audio emitting area inside the cone.

## Declaration

```objectivec
@property (readonly) double innerAngle;
```

<a id="Discussion"></a>

## Discussion

To set this property, call [setInnerAngle:outerAngle:](setangles%28innerangle_outerangle_%29.md).

## See Also

### Shaping Directivity

- [outerAngle](outerangle.md): An angle, in degrees, that determines the size of the audio emitting area outside the cone.
- [outerGain](outergain.md): The loudness of the audio the outside area of the cone emits.
- [setInnerAngle:outerAngle:](setangles%28innerangle_outerangle_%29.md): Configures a focus area for cone-based sound directivity.
