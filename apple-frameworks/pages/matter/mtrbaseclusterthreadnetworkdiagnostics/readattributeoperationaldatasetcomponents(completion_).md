> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterthreadnetworkdiagnostics/readattributeoperationaldatasetcomponents(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterthreadnetworkdiagnostics/readattributeoperationaldatasetcomponents(completion:))

# readAttributeOperationalDatasetComponents(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeOperationalDatasetComponents(completion: @escaping @Sendable (MTRThreadNetworkDiagnosticsClusterOperationalDatasetComponents?, (any Error)?) -> Void)
```

```swift
func readAttributeOperationalDatasetComponents() async throws -> MTRThreadNetworkDiagnosticsClusterOperationalDatasetComponents
```

# readAttributeOperationalDatasetComponentsWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeOperationalDatasetComponentsWithCompletion:(void (^)(MTRThreadNetworkDiagnosticsClusterOperationalDatasetComponents *value, NSError *error)) completion;
```
