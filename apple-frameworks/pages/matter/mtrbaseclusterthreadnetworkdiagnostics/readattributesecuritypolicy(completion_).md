> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterthreadnetworkdiagnostics/readattributesecuritypolicy(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterthreadnetworkdiagnostics/readattributesecuritypolicy(completion:))

# readAttributeSecurityPolicy(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeSecurityPolicy(completion: @escaping @Sendable (MTRThreadNetworkDiagnosticsClusterSecurityPolicy?, (any Error)?) -> Void)
```

```swift
func readAttributeSecurityPolicy() async throws -> MTRThreadNetworkDiagnosticsClusterSecurityPolicy
```

# readAttributeSecurityPolicyWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeSecurityPolicyWithCompletion:(void (^)(MTRThreadNetworkDiagnosticsClusterSecurityPolicy *value, NSError *error)) completion;
```
