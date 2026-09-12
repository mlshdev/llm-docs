> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdeviceenergymanagementmode/changetomode(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdeviceenergymanagementmode/changetomode(with:completion:))

# changeToMode(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command ChangeToMode

## Declaration

```swift
func changeToMode(with params: MTRDeviceEnergyManagementModeClusterChangeToModeParams, completion: @escaping @Sendable (MTRDeviceEnergyManagementModeClusterChangeToModeResponseParams?, (any Error)?) -> Void)
```

```swift
func changeToMode(with params: MTRDeviceEnergyManagementModeClusterChangeToModeParams) async throws -> MTRDeviceEnergyManagementModeClusterChangeToModeResponseParams
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
- (void) changeToModeWithParams:(MTRDeviceEnergyManagementModeClusterChangeToModeParams *) params completion:(void (^)(MTRDeviceEnergyManagementModeClusterChangeToModeResponseParams *data, NSError *error)) completion;
```

<a id="discussion"></a>

## Discussion

This command is used to change device modes.
