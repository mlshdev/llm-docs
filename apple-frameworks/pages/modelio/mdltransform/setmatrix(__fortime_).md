> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltransform/setmatrix(_:fortime:)](https://developer.apple.com/documentation/modelio/mdltransform/setmatrix(_:fortime:))

# setMatrix(\_:forTime:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
func setMatrix(_ matrix: matrix_float4x4, forTime time: TimeInterval)
```

## See Also

### Using Factors of an Animated Transform

- [translation(atTime:)](translation%28attime_%29.md): Returns the x-, y-, and z-axis offsets of the transform relative to its parent coordinate space, as of the specified time sample.
- [setTranslation(\_:forTime:)](settranslation%28__fortime_%29.md): Sets the x-, y-, and z-axis offsets of the transform for the specified time sample.
- [rotation(atTime:)](rotation%28attime_%29.md): Returns the orientation of the transform relative to its parent coordinate space, as of the specified time sample.
- [rotationMatrix(atTime:)](rotationmatrix%28attime_%29.md): Returns the orientation of the transform as a rotation matrix, as of the specified time sample.
- [setRotation(\_:forTime:)](setrotation%28__fortime_%29.md): Sets the orientation of the transform for the specified time sample.
- [scale(atTime:)](scale%28attime_%29.md): Returns the x-, y-, and z-axis scale factors of the transform relative to its parent coordinate space, as of the specified time sample.
- [setScale(\_:forTime:)](setscale%28__fortime_%29.md): Sets the x-, y-, and z-axis scale factors of the transform for the specified time sample.
- [shear(atTime:)](shear%28attime_%29.md): Returns the x-, y-, and z-axis shear factors of the transform relative to its parent coordinate space, as of the specified time sample.
- [setShear(\_:forTime:)](setshear%28__fortime_%29.md): Sets the x-, y-, and z-axis shear factors of the transform for the specified time sample.

# setMatrix:forTime: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) setMatrix:(matrix_float4x4) matrix forTime:(NSTimeInterval) time;
```

## See Also

### Using Factors of an Animated Transform

- [translationAtTime:](translation%28attime_%29.md): Returns the x-, y-, and z-axis offsets of the transform relative to its parent coordinate space, as of the specified time sample.
- [setTranslation:forTime:](settranslation%28__fortime_%29.md): Sets the x-, y-, and z-axis offsets of the transform for the specified time sample.
- [rotationAtTime:](rotation%28attime_%29.md): Returns the orientation of the transform relative to its parent coordinate space, as of the specified time sample.
- [rotationMatrixAtTime:](rotationmatrix%28attime_%29.md): Returns the orientation of the transform as a rotation matrix, as of the specified time sample.
- [setRotation:forTime:](setrotation%28__fortime_%29.md): Sets the orientation of the transform for the specified time sample.
- [scaleAtTime:](scale%28attime_%29.md): Returns the x-, y-, and z-axis scale factors of the transform relative to its parent coordinate space, as of the specified time sample.
- [setScale:forTime:](setscale%28__fortime_%29.md): Sets the x-, y-, and z-axis scale factors of the transform for the specified time sample.
- [shearAtTime:](shear%28attime_%29.md): Returns the x-, y-, and z-axis shear factors of the transform relative to its parent coordinate space, as of the specified time sample.
- [setShear:forTime:](setshear%28__fortime_%29.md): Sets the x-, y-, and z-axis shear factors of the transform for the specified time sample.
