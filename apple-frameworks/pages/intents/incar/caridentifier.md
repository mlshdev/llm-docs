> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incar/caridentifier](https://developer.apple.com/documentation/intents/incar/caridentifier)

# carIdentifier (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

The electric vehicle’s unique identifier.

## Declaration

```swift
var carIdentifier: String { get }
```

<a id="Discussion"></a>

## Discussion

The identifier is a unique value that your app provides that isn’t the vehicle’s VIN or equivalent identifier.

Use `carIdentifier` when handling [INGetCarPowerLevelStatusIntent](../ingetcarpowerlevelstatusintent.md) requests so that the response can match the appropriate vehicle in the user’s My Vehicles collection.

## See Also

### Identifying the Car

- [displayName](displayname.md): The electric vehicle’s user-defined display name.

# carIdentifier (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

The electric vehicle’s unique identifier.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * carIdentifier;
```

```objectivec
@property (atomic, copy, readonly) NSString * carIdentifier;
```

<a id="Discussion"></a>

## Discussion

The identifier is a unique value that your app provides that isn’t the vehicle’s VIN or equivalent identifier.

Use `carIdentifier` when handling [INGetCarPowerLevelStatusIntent](../ingetcarpowerlevelstatusintent.md) requests so that the response can match the appropriate vehicle in the user’s My Vehicles collection.

## See Also

### Identifying the Car

- [displayName](displayname.md): The electric vehicle’s user-defined display name.
