> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustermicrowaveovencontrol/addmoretime(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustermicrowaveovencontrol/addmoretime(with:completion:))

# addMoreTime(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command AddMoreTime

## Declaration

```swift
func addMoreTime(with params: MTRMicrowaveOvenControlClusterAddMoreTimeParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func addMoreTime(with params: MTRMicrowaveOvenControlClusterAddMoreTimeParams) async throws
```

<a id="discussion"></a>

## Discussion

This command is used to add more time to the CookTime attribute of the server.

# addMoreTimeWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command AddMoreTime

## Declaration

```objectivec
- (void) addMoreTimeWithParams:(MTRMicrowaveOvenControlClusterAddMoreTimeParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

This command is used to add more time to the CookTime attribute of the server.
