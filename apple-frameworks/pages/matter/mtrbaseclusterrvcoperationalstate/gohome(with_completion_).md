> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterrvcoperationalstate/gohome(with:completion:)

# goHome(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command GoHome

## Declaration

```swift
func goHome(with params: MTRRVCOperationalStateClusterGoHomeParams?, completion: @escaping @Sendable (MTRRVCOperationalStateClusterOperationalCommandResponseParams?, (any Error)?) -> Void)
```

```swift
func goHome(with params: MTRRVCOperationalStateClusterGoHomeParams?) async throws -> MTRRVCOperationalStateClusterOperationalCommandResponseParams
```

<a id="discussion"></a>

## Discussion

On receipt of this command, the device SHALL start seeking the charging dock, if possible in the current state of the device.

# goHomeWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command GoHome

## Declaration

```objectivec
- (void) goHomeWithParams:(MTRRVCOperationalStateClusterGoHomeParams *) params completion:(void (^)(MTRRVCOperationalStateClusterOperationalCommandResponseParams *data, NSError *error)) completion;
```

<a id="discussion"></a>

## Discussion

On receipt of this command, the device SHALL start seeking the charging dock, if possible in the current state of the device.
