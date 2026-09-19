> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/homekit/hmhome/removezone(_:completionhandler:)

# removeZone(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Removes a zone from the home.

## Declaration

```swift
func removeZone(_ zone: HMZone, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func removeZone(_ zone: HMZone) async throws
```

## Parameters

- `zone`: The zone to remove.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Grouping rooms into zones

- [zones](zones.md): An array of all the zones in the home.
- [addZone(withName:completionHandler:)](addzone%28withname_completionhandler_%29.md): Adds a new zone to the home.
- [HMZone](../hmzone.md): A collection of rooms that users think of as a single area, like upstairs or downstairs.

# removeZone:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Removes a zone from the home.

## Declaration

```objectivec
- (void) removeZone:(HMZone *) zone completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `zone`: The zone to remove.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Grouping rooms into zones

- [zones](zones.md): An array of all the zones in the home.
- [addZoneWithName:completionHandler:](addzone%28withname_completionhandler_%29.md): Adds a new zone to the home.
- [HMZone](../hmzone.md): A collection of rooms that users think of as a single area, like upstairs or downstairs.
