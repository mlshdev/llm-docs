> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterenergyevsemode/changetomode(with:completion:)

# changeToMode(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command ChangeToMode

## Declaration

```swift
func changeToMode(with params: MTREnergyEVSEModeClusterChangeToModeParams, completion: @escaping @Sendable (MTREnergyEVSEModeClusterChangeToModeResponseParams?, (any Error)?) -> Void)
```

```swift
func changeToMode(with params: MTREnergyEVSEModeClusterChangeToModeParams) async throws -> MTREnergyEVSEModeClusterChangeToModeResponseParams
```

<a id="discussion"></a>

## Discussion

This command is used to change device modes.

# changeToModeWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command ChangeToMode

## Declaration

```objectivec
- (void) changeToModeWithParams:(MTREnergyEVSEModeClusterChangeToModeParams *) params completion:(void (^)(MTREnergyEVSEModeClusterChangeToModeResponseParams *data, NSError *error)) completion;
```

<a id="discussion"></a>

## Discussion

This command is used to change device modes.
