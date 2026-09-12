> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inlistrideoptionsintent/dropofflocation](https://developer.apple.com/documentation/intents/inlistrideoptionsintent/dropofflocation)

# dropOffLocation (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The user’s destination.

## Declaration

```swift
@NSCopying var dropOffLocation: CLPlacemark? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property with the [pickupLocation](pickuplocation.md) property to determine availability, pricing, and timing information for your rides.

## See Also

### Getting the Pickup and Drop Off Locations

- [pickupLocation](pickuplocation.md): The user’s starting location.

# dropOffLocation (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The user’s destination.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) CLPlacemark * dropOffLocation;
```

```objectivec
@property (atomic, copy, readonly, nullable) CLPlacemark * dropOffLocation;
```

<a id="Discussion"></a>

## Discussion

Use this property with the [pickupLocation](pickuplocation.md) property to determine availability, pricing, and timing information for your rides.

## See Also

### Getting the Pickup and Drop Off Locations

- [pickupLocation](pickuplocation.md): The user’s starting location.
