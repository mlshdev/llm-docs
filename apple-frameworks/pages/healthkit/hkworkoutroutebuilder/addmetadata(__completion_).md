> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkworkoutroutebuilder/addmetadata(_:completion:)

# addMetadata(\_:completion:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

Adds metadata to the builder.

## Declaration

```swift
func addMetadata(_ metadata: [String : Any], completion: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func addMetadata(_ metadata: [String : Any]) async throws
```

## See Also

### Building the route

- [finishRoute(with:metadata:completion:)](finishroute%28with_metadata_completion_%29.md): Creates, saves, and associates the route with the provided workout.
- [insertRouteData(\_:completion:)](insertroutedata%28__completion_%29.md): Adds route data to the builder.

# addMetadata:completion: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

Adds metadata to the builder.

## Declaration

```objectivec
- (void) addMetadata:(NSDictionary<NSString *,id> *) metadata completion:(void (^)(BOOL success, NSError *error)) completion;
```

## See Also

### Building the route

- [finishRouteWithWorkout:metadata:completion:](finishroute%28with_metadata_completion_%29.md): Creates, saves, and associates the route with the provided workout.
- [insertRouteData:completion:](insertroutedata%28__completion_%29.md): Adds route data to the builder.
