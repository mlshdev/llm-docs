> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inlistrideoptionsintent/pickuplocation

# pickupLocation (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The user’s starting location.

## Declaration

```swift
@NSCopying var pickupLocation: CLPlacemark? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to determine what vehicles are in the vicinity. Combine this property with the [dropOffLocation](dropofflocation.md) property to determine pricing and timing information.

## See Also

### Getting the Pickup and Drop Off Locations

- [dropOffLocation](dropofflocation.md): The user’s destination.

# pickupLocation (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The user’s starting location.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) CLPlacemark * pickupLocation;
```

```objectivec
@property (atomic, copy, readonly, nullable) CLPlacemark * pickupLocation;
```

<a id="Discussion"></a>

## Discussion

Use this property to determine what vehicles are in the vicinity. Combine this property with the [dropOffLocation](dropofflocation.md) property to determine pricing and timing information.

## See Also

### Getting the Pickup and Drop Off Locations

- [dropOffLocation](dropofflocation.md): The user’s destination.
