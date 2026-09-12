> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inboattrip/arrivalboatterminallocation](https://developer.apple.com/documentation/intents/inboattrip/arrivalboatterminallocation)

# arrivalBoatTerminalLocation (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

The place where the boat trip ends.

## Declaration

```swift
@NSCopying var arrivalBoatTerminalLocation: CLPlacemark { get }
```

## See Also

### Getting the Boat Trip Information

- [provider](provider.md): The operator of the boat line.
- [boatName](boatname.md): The name of the boat.
- [boatNumber](boatnumber.md): The number associated with the boat.
- [tripDuration](tripduration.md): The timespan of the boat trip from departure to arrival.
- [departureBoatTerminalLocation](departureboatterminallocation.md): The place where the boat trip starts.

# arrivalBoatTerminalLocation (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

The place where the boat trip ends.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) CLPlacemark * arrivalBoatTerminalLocation;
```

```objectivec
@property (atomic, copy, readonly) CLPlacemark * arrivalBoatTerminalLocation;
```

## See Also

### Getting the Boat Trip Information

- [provider](provider.md): The operator of the boat line.
- [boatName](boatname.md): The name of the boat.
- [boatNumber](boatnumber.md): The number associated with the boat.
- [tripDuration](tripduration.md): The timespan of the boat trip from departure to arrival.
- [departureBoatTerminalLocation](departureboatterminallocation.md): The place where the boat trip starts.
