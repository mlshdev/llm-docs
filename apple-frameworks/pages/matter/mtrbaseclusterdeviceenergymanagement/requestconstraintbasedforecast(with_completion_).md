> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdeviceenergymanagement/requestconstraintbasedforecast(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdeviceenergymanagement/requestconstraintbasedforecast(with:completion:))

# requestConstraintBasedForecast(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command RequestConstraintBasedForecast

## Declaration

```swift
func requestConstraintBasedForecast(with params: MTRDeviceEnergyManagementClusterRequestConstraintBasedForecastParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func requestConstraintBasedForecast(with params: MTRDeviceEnergyManagementClusterRequestConstraintBasedForecastParams) async throws
```

<a id="discussion"></a>

## Discussion

Allows a client to ask the ESA to recompute its Forecast based on power and time constraints.

# requestConstraintBasedForecastWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command RequestConstraintBasedForecast

## Declaration

```objectivec
- (void) requestConstraintBasedForecastWithParams:(MTRDeviceEnergyManagementClusterRequestConstraintBasedForecastParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

Allows a client to ask the ESA to recompute its Forecast based on power and time constraints.
