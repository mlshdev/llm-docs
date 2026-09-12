> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustertemperaturecontrol/settemperaturewithcompletion(_:)](https://developer.apple.com/documentation/matter/mtrbaseclustertemperaturecontrol/settemperaturewithcompletion(_:))

# setTemperatureWithCompletion(\_:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
func setTemperatureWithCompletion(_ completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func setTemperature() async throws
```

# setTemperatureWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```objectivec
- (void) setTemperatureWithCompletion:(MTRStatusCompletion) completion;
```
