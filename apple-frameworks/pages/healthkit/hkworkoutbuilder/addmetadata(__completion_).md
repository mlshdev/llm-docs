> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutbuilder/addmetadata(_:completion:)](https://developer.apple.com/documentation/healthkit/hkworkoutbuilder/addmetadata(_:completion:))

# addMetadata(\_:completion:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 5.0+

Adds metadata to be saved with the workout.

## Declaration

```swift
func addMetadata(_ metadata: [String : Any], completion: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func addMetadata(_ metadata: [String : Any]) async throws
```

## See Also

### Adding metadata to the workout

- [metadata](metadata.md): The metadata the builder saves with the workout.

# addMetadata:completion: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 5.0+

Adds metadata to be saved with the workout.

## Declaration

```objectivec
- (void) addMetadata:(NSDictionary<NSString *,id> *) metadata completion:(void (^)(BOOL success, NSError *error)) completion;
```

## See Also

### Adding metadata to the workout

- [metadata](metadata.md): The metadata the builder saves with the workout.
