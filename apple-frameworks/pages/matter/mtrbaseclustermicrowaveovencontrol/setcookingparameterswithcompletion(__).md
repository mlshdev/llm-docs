> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustermicrowaveovencontrol/setcookingparameterswithcompletion(_:)](https://developer.apple.com/documentation/matter/mtrbaseclustermicrowaveovencontrol/setcookingparameterswithcompletion(_:))

# setCookingParametersWithCompletion(\_:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
func setCookingParametersWithCompletion(_ completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func setCookingParameters() async throws
```

# setCookingParametersWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```objectivec
- (void) setCookingParametersWithCompletion:(MTRStatusCompletion) completion;
```
