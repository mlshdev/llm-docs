> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/phase/phaseengine/unitspermeter

# unitsPerMeter (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A conversion factor from meters to your app’s preferred unit of measurement.

## Declaration

```swift
var unitsPerMeter: Double { get set }
```

## Mentioned In

- [Playing sound from a location in a 3D scene](../playing-sound-from-a-location-in-a-3d-scene.md)

<a id="Discussion"></a>

## Discussion

Distance-based properties throughout the framework apply the value you supply for this property to their value.

## See Also

### Measuring Units

- [unitsPerSecond](unitspersecond.md): A conversion factor from seconds to your app’s preferred unit of time.

# unitsPerMeter (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A conversion factor from meters to your app’s preferred unit of measurement.

## Declaration

```objectivec
@property (nonatomic, assign) double unitsPerMeter;
```

## Mentioned In

- [Playing sound from a location in a 3D scene](../playing-sound-from-a-location-in-a-3d-scene.md)

<a id="Discussion"></a>

## Discussion

Distance-based properties throughout the framework apply the value you supply for this property to their value.

## See Also

### Measuring Units

- [unitsPerSecond](unitspersecond.md): A conversion factor from seconds to your app’s preferred unit of time.
