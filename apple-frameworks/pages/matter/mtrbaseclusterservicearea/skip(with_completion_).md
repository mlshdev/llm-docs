> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterservicearea/skip(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterservicearea/skip(with:completion:))

# skip(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command SkipArea

## Declaration

```swift
func skip(with params: MTRServiceAreaClusterSkipAreaParams, completion: @escaping @Sendable (MTRServiceAreaClusterSkipAreaResponseParams?, (any Error)?) -> Void)
```

```swift
func skip(with params: MTRServiceAreaClusterSkipAreaParams) async throws -> MTRServiceAreaClusterSkipAreaResponseParams
```

<a id="discussion"></a>

## Discussion

This command is used to skip the given area, and to attempt operating at other areas on the SupportedAreas attribute list.

# skipAreaWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command SkipArea

## Declaration

```objectivec
- (void) skipAreaWithParams:(MTRServiceAreaClusterSkipAreaParams *) params completion:(void (^)(MTRServiceAreaClusterSkipAreaResponseParams *data, NSError *error)) completion;
```

<a id="discussion"></a>

## Discussion

This command is used to skip the given area, and to attempt operating at other areas on the SupportedAreas attribute list.
