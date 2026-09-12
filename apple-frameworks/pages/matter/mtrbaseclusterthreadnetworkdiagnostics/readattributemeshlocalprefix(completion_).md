> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterthreadnetworkdiagnostics/readattributemeshlocalprefix(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterthreadnetworkdiagnostics/readattributemeshlocalprefix(completion:))

# readAttributeMeshLocalPrefix(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeMeshLocalPrefix(completion: @escaping @Sendable (Data?, (any Error)?) -> Void)
```

```swift
func readAttributeMeshLocalPrefix() async throws -> Data
```

# readAttributeMeshLocalPrefixWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeMeshLocalPrefixWithCompletion:(void (^)(NSData *value, NSError *error)) completion;
```
