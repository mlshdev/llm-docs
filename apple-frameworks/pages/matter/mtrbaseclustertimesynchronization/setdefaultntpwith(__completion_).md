> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclustertimesynchronization/setdefaultntpwith(_:completion:)

# setDefaultNTPWith(\_:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command SetDefaultNTP

## Declaration

```swift
func setDefaultNTPWith(_ params: MTRTimeSynchronizationClusterSetDefaultNTPParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func setDefaultNTPWith(_ params: MTRTimeSynchronizationClusterSetDefaultNTPParams) async throws
```

<a id="discussion"></a>

## Discussion

This command is used to set the DefaultNTP attribute.

# setDefaultNTPWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command SetDefaultNTP

## Declaration

```objectivec
- (void) setDefaultNTPWithParams:(MTRTimeSynchronizationClusterSetDefaultNTPParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

This command is used to set the DefaultNTP attribute.
