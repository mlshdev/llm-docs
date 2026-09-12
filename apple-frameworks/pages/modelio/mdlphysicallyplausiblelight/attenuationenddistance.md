> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlphysicallyplausiblelight/attenuationenddistance](https://developer.apple.com/documentation/modelio/mdlphysicallyplausiblelight/attenuationenddistance)

# attenuationEndDistance (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The distance from the light source, in units of local coordinate space, at which its illumination becomes zero.

## Declaration

```swift
var attenuationEndDistance: Float { get set }
```

<a id="Discussion"></a>

## Discussion

At distances less than the start distance, the light’s illumination is at full intensity. At distances greater than the end distance, the light provides no illumination. At distances in between the start and end distance, the attenuationFalloffExponent property defines the transition from full illumination to no illumination.

The default distance is `2.0`.

## See Also

### Managing Attenuation

- [attenuationStartDistance](attenuationstartdistance.md): The distance from the light source, in units of local coordinate space, at which its illumination begins to diminish.

# attenuationEndDistance (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The distance from the light source, in units of local coordinate space, at which its illumination becomes zero.

## Declaration

```objectivec
@property (nonatomic, readwrite) float attenuationEndDistance;
```

<a id="Discussion"></a>

## Discussion

At distances less than the start distance, the light’s illumination is at full intensity. At distances greater than the end distance, the light provides no illumination. At distances in between the start and end distance, the attenuationFalloffExponent property defines the transition from full illumination to no illumination.

The default distance is `2.0`.

## See Also

### Managing Attenuation

- [attenuationStartDistance](attenuationstartdistance.md): The distance from the light source, in units of local coordinate space, at which its illumination begins to diminish.
