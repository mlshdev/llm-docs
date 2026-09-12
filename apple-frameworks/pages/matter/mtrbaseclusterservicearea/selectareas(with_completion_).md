> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterservicearea/selectareas(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterservicearea/selectareas(with:completion:))

# selectAreas(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command SelectAreas

## Declaration

```swift
func selectAreas(with params: MTRServiceAreaClusterSelectAreasParams, completion: @escaping @Sendable (MTRServiceAreaClusterSelectAreasResponseParams?, (any Error)?) -> Void)
```

```swift
func selectAreas(with params: MTRServiceAreaClusterSelectAreasParams) async throws -> MTRServiceAreaClusterSelectAreasResponseParams
```

<a id="discussion"></a>

## Discussion

This command is used to select a set of device areas, where the device is to operate.

# selectAreasWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command SelectAreas

## Declaration

```objectivec
- (void) selectAreasWithParams:(MTRServiceAreaClusterSelectAreasParams *) params completion:(void (^)(MTRServiceAreaClusterSelectAreasResponseParams *data, NSError *error)) completion;
```

<a id="discussion"></a>

## Discussion

This command is used to select a set of device areas, where the device is to operate.
