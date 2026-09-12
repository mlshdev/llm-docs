> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutroutebuilder/init(healthstore:device:)](https://developer.apple.com/documentation/healthkit/hkworkoutroutebuilder/init(healthstore:device:))

# init(healthStore:device:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

Creates and returns a new workout route builder.

## Declaration

```swift
init(healthStore: HKHealthStore, device: HKDevice?)
```

## Parameters

- `healthStore`: The HealthKit store.
- `device`: An object representing the device that provided the location data. Pass `nil` if the app is generating its own location data (for example, using [Core Location](../../corelocation.md)).

<a id="return-value"></a>

## Return Value

A newly initialized workout route builder.

<a id="Discussion"></a>

### Discussion

Use of this initializer is discouraged. Use [seriesBuilder(for:)](../hkworkoutbuilder/seriesbuilder%28for_%29.md) instead.

## See Also

### Creating the builder

- [seriesBuilder(for:)](../hkworkoutbuilder/seriesbuilder%28for_%29.md): Returns the series builder for the specified type, creating a new builder, if necessary.

# initWithHealthStore:device: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

Creates and returns a new workout route builder.

## Declaration

```objectivec
- (instancetype) initWithHealthStore:(HKHealthStore *) healthStore device:(HKDevice *) device;
```

## Parameters

- `healthStore`: The HealthKit store.
- `device`: An object representing the device that provided the location data. Pass `nil` if the app is generating its own location data (for example, using [Core Location](../../corelocation.md)).

<a id="return-value"></a>

## Return Value

A newly initialized workout route builder.

<a id="Discussion"></a>

### Discussion

Use of this initializer is discouraged. Use [seriesBuilderForType:](../hkworkoutbuilder/seriesbuilder%28for_%29.md) instead.

## See Also

### Creating the builder

- [seriesBuilderForType:](../hkworkoutbuilder/seriesbuilder%28for_%29.md): Returns the series builder for the specified type, creating a new builder, if necessary.
