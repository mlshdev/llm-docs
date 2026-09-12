> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhome/zones](https://developer.apple.com/documentation/homekit/hmhome/zones)

# zones (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An array of all the zones in the home.

## Declaration

```swift
var zones: [HMZone] { get }
```

## See Also

### Grouping rooms into zones

- [addZone(withName:completionHandler:)](addzone%28withname_completionhandler_%29.md): Adds a new zone to the home.
- [removeZone(\_:completionHandler:)](removezone%28__completionhandler_%29.md): Removes a zone from the home.
- [HMZone](../hmzone.md): A collection of rooms that users think of as a single area, like upstairs or downstairs.

# zones (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An array of all the zones in the home.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<HMZone *> * zones;
```

## See Also

### Grouping rooms into zones

- [addZoneWithName:completionHandler:](addzone%28withname_completionhandler_%29.md): Adds a new zone to the home.
- [removeZone:completionHandler:](removezone%28__completionhandler_%29.md): Removes a zone from the home.
- [HMZone](../hmzone.md): A collection of rooms that users think of as a single area, like upstairs or downstairs.
