> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetcarpowerlevelstatusintentresponse/caridentifier](https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintentresponse/caridentifier)

# carIdentifier (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

A unique identifier for the vehicle.

## Declaration

```swift
var carIdentifier: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The `carIdentifier` is a unique value that your app provides, and must not be the vehicle’s VIN or equivalent identifier. For the best user experience—and to prevent orphaned or duplicate vehicles in the user’s My Vehicles collection—your app must always provide the same identifier for the same vehicle.

# carIdentifier (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

A unique identifier for the vehicle.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSString * carIdentifier;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSString * carIdentifier;
```

<a id="Discussion"></a>

## Discussion

The `carIdentifier` is a unique value that your app provides, and must not be the vehicle’s VIN or equivalent identifier. For the best user experience—and to prevent orphaned or duplicate vehicles in the user’s My Vehicles collection—your app must always provide the same identifier for the same vehicle.
