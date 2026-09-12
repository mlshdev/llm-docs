> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustermicrowaveovencontrol/setcookingparameterswith(_:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustermicrowaveovencontrol/setcookingparameterswith(_:completion:))

# setCookingParametersWith(\_:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command SetCookingParameters

## Declaration

```swift
func setCookingParametersWith(_ params: MTRMicrowaveOvenControlClusterSetCookingParametersParams?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func setCookingParametersWith(_ params: MTRMicrowaveOvenControlClusterSetCookingParametersParams?) async throws
```

<a id="discussion"></a>

## Discussion

This command is used to set the cooking parameters associated with the operation of the device.

# setCookingParametersWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command SetCookingParameters

## Declaration

```objectivec
- (void) setCookingParametersWithParams:(MTRMicrowaveOvenControlClusterSetCookingParametersParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

This command is used to set the cooking parameters associated with the operation of the device.
