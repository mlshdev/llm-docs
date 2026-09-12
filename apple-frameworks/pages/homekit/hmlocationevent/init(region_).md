> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmlocationevent/init(region:)](https://developer.apple.com/documentation/homekit/hmlocationevent/init(region:))

# init(region:) (Swift)

**Framework:** HomeKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+

Creates a new location event with the specified region.

## Declaration

```swift
init(region: CLRegion)
```

## Parameters

- `region`: Region on which the event is triggered. The region object must have at least one of [notifyOnEntry](../../corelocation/clregion/notifyonentry.md) or [notifyOnExit](../../corelocation/clregion/notifyonexit.md) set to [true](https://developer.apple.com/documentation/swift/true).

<a id="return-value"></a>

## Return Value

An initialized instance representing the location event.

# initWithRegion: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+

Creates a new location event with the specified region.

## Declaration

```objectivec
- (instancetype) initWithRegion:(CLRegion *) region;
```

## Parameters

- `region`: Region on which the event is triggered. The region object must have at least one of [notifyOnEntry](../../corelocation/clregion/notifyonentry.md) or [notifyOnExit](../../corelocation/clregion/notifyonexit.md) set to [true](https://developer.apple.com/documentation/swift/true).

<a id="return-value"></a>

## Return Value

An initialized instance representing the location event.
