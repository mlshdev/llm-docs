> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterovencavityoperationalstate/stop(completion:)

# stop(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
func stop(completion: @escaping @Sendable (MTROvenCavityOperationalStateClusterOperationalCommandResponseParams?, (any Error)?) -> Void)
```

```swift
func stop() async throws -> MTROvenCavityOperationalStateClusterOperationalCommandResponseParams
```

# stopWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```objectivec
- (void) stopWithCompletion:(void (^)(MTROvenCavityOperationalStateClusterOperationalCommandResponseParams *data, NSError *error)) completion;
```
