> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterovencavityoperationalstate/start(completion:)

# start(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
func start(completion: @escaping @Sendable (MTROvenCavityOperationalStateClusterOperationalCommandResponseParams?, (any Error)?) -> Void)
```

```swift
func start() async throws -> MTROvenCavityOperationalStateClusterOperationalCommandResponseParams
```

# startWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```objectivec
- (void) startWithCompletion:(void (^)(MTROvenCavityOperationalStateClusterOperationalCommandResponseParams *data, NSError *error)) completion;
```
