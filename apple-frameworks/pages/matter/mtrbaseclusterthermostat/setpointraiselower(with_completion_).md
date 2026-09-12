> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterthermostat/setpointraiselower(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterthermostat/setpointraiselower(with:completion:))

# setpointRaiseLower(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func setpointRaiseLower(with params: MTRThermostatClusterSetpointRaiseLowerParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func setpointRaiseLower(with params: MTRThermostatClusterSetpointRaiseLowerParams) async throws
```

# setpointRaiseLowerWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) setpointRaiseLowerWithParams:(MTRThermostatClusterSetpointRaiseLowerParams *) params completion:(MTRStatusCompletion) completion;
```
