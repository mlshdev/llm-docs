> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterdoorlock/setaliroreaderconfigwith(_:completion:)

# setAliroReaderConfigWith(\_:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command SetAliroReaderConfig

## Declaration

```swift
func setAliroReaderConfigWith(_ params: MTRDoorLockClusterSetAliroReaderConfigParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func setAliroReaderConfigWith(_ params: MTRDoorLockClusterSetAliroReaderConfigParams) async throws
```

<a id="discussion"></a>

## Discussion

This command allows communicating an Aliro Reader configuration, as defined in Aliro, to the lock.

# setAliroReaderConfigWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command SetAliroReaderConfig

## Declaration

```objectivec
- (void) setAliroReaderConfigWithParams:(MTRDoorLockClusterSetAliroReaderConfigParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

This command allows communicating an Aliro Reader configuration, as defined in Aliro, to the lock.
