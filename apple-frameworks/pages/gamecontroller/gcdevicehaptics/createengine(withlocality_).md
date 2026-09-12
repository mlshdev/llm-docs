> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdevicehaptics/createengine(withlocality:)](https://developer.apple.com/documentation/gamecontroller/gcdevicehaptics/createengine(withlocality:))

# createEngine(withLocality:) (Swift)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a haptics engine with the specified locality.

## Declaration

```swift
func createEngine(withLocality locality: GCHapticsLocality) -> CHHapticEngine?
```

## Parameters

- `locality`: The location of the haptics on the controller.

<a id="return-value"></a>

## Return Value

A new haptics engine with the specified locality.

<a id="Discussion"></a>

## Discussion

If you create an engine using the [default](../gchapticslocality/default.md) location, users have the expected haptic experience. For example, the engine uses the handle accuators. If you want to create different experiences, such as using the left handle actuator as a woofer and the right actuator as a tweeter, create one or more engines with different localities.

## See Also

### Creating a haptics engine

- [GCHapticDurationInfinite](../gchapticdurationinfinite.md): An infinite duration for a haptics event.

# createEngineWithLocality: (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a haptics engine with the specified locality.

## Declaration

```objectivec
- (CHHapticEngine *) createEngineWithLocality:(GCHapticsLocality) locality;
```

## Parameters

- `locality`: The location of the haptics on the controller.

<a id="return-value"></a>

## Return Value

A new haptics engine with the specified locality.

<a id="Discussion"></a>

## Discussion

If you create an engine using the [GCHapticsLocalityDefault](../gchapticslocality/default.md) location, users have the expected haptic experience. For example, the engine uses the handle accuators. If you want to create different experiences, such as using the left handle actuator as a woofer and the right actuator as a tweeter, create one or more engines with different localities.

## See Also

### Creating a haptics engine

- [GCHapticDurationInfinite](../gchapticdurationinfinite.md): An infinite duration for a haptics event.
