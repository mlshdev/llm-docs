> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdoorlock/clearaliroreaderconfig(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdoorlock/clearaliroreaderconfig(with:completion:))

# clearAliroReaderConfig(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command ClearAliroReaderConfig

## Declaration

```swift
func clearAliroReaderConfig(with params: MTRDoorLockClusterClearAliroReaderConfigParams?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func clearAliroReaderConfig(with params: MTRDoorLockClusterClearAliroReaderConfigParams?) async throws
```

<a id="discussion"></a>

## Discussion

This command allows clearing an existing Aliro Reader configuration for the lock.

# clearAliroReaderConfigWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command ClearAliroReaderConfig

## Declaration

```objectivec
- (void) clearAliroReaderConfigWithParams:(MTRDoorLockClusterClearAliroReaderConfigParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

This command allows clearing an existing Aliro Reader configuration for the lock.
