> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhome/addzone(withname:completionhandler:)](https://developer.apple.com/documentation/homekit/hmhome/addzone(withname:completionhandler:))

# addZone(withName:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Adds a new zone to the home.

## Declaration

```swift
func addZone(withName zoneName: String, completionHandler completion: @escaping @Sendable (HMZone?, (any Error)?) -> Void)
```

```swift
func addZone(named zoneName: String) async throws -> HMZone
```

## Parameters

- `zoneName`: The name of the new zone. Must not be `nil`, and must not be the name of a zone already in the home.
- `completion`: The block executed after the request is processed.

  - **zone**: The newly created zone.
  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Grouping rooms into zones

- [zones](zones.md): An array of all the zones in the home.
- [removeZone(\_:completionHandler:)](removezone%28__completionhandler_%29.md): Removes a zone from the home.
- [HMZone](../hmzone.md): A collection of rooms that users think of as a single area, like upstairs or downstairs.

# addZoneWithName:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Adds a new zone to the home.

## Declaration

```objectivec
- (void) addZoneWithName:(NSString *) zoneName completionHandler:(void (^)(HMZone *zone, NSError *error)) completion;
```

## Parameters

- `zoneName`: The name of the new zone. Must not be `nil`, and must not be the name of a zone already in the home.
- `completion`: The block executed after the request is processed.

  - **zone**: The newly created zone.
  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Grouping rooms into zones

- [zones](zones.md): An array of all the zones in the home.
- [removeZone:completionHandler:](removezone%28__completionhandler_%29.md): Removes a zone from the home.
- [HMZone](../hmzone.md): A collection of rooms that users think of as a single area, like upstairs or downstairs.
