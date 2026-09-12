> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustertemperaturecontrol/settemperaturewith(_:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustertemperaturecontrol/settemperaturewith(_:completion:))

# setTemperatureWith(\_:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command SetTemperature

## Declaration

```swift
func setTemperatureWith(_ params: MTRTemperatureControlClusterSetTemperatureParams?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func setTemperatureWith(_ params: MTRTemperatureControlClusterSetTemperatureParams?) async throws
```

<a id="discussion"></a>

## Discussion

The SetTemperature command SHALL have the following data fields:

# setTemperatureWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command SetTemperature

## Declaration

```objectivec
- (void) setTemperatureWithParams:(MTRTemperatureControlClusterSetTemperatureParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

The SetTemperature command SHALL have the following data fields:
