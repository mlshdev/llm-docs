> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdishwashermode/changetomode(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdishwashermode/changetomode(with:completion:))

# changeToMode(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command ChangeToMode

## Declaration

```swift
func changeToMode(with params: MTRDishwasherModeClusterChangeToModeParams, completion: @escaping @Sendable (MTRDishwasherModeClusterChangeToModeResponseParams?, (any Error)?) -> Void)
```

```swift
func changeToMode(with params: MTRDishwasherModeClusterChangeToModeParams) async throws -> MTRDishwasherModeClusterChangeToModeResponseParams
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
- (void) changeToModeWithParams:(MTRDishwasherModeClusterChangeToModeParams *) params completion:(void (^)(MTRDishwasherModeClusterChangeToModeResponseParams *data, NSError *error)) completion;
```

<a id="discussion"></a>

## Discussion

This command is used to change device modes.
