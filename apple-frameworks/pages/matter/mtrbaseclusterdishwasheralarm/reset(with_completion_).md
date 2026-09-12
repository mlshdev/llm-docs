> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdishwasheralarm/reset(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdishwasheralarm/reset(with:completion:))

# reset(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command Reset

## Declaration

```swift
func reset(with params: MTRDishwasherAlarmClusterResetParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func reset(with params: MTRDishwasherAlarmClusterResetParams) async throws
```

<a id="discussion"></a>

## Discussion

This command resets active and latched alarms (if possible).

# resetWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command Reset

## Declaration

```objectivec
- (void) resetWithParams:(MTRDishwasherAlarmClusterResetParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

This command resets active and latched alarms (if possible).
