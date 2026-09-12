> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterkeypadinput/sendkey(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterkeypadinput/sendkey(with:completion:))

# sendKey(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func sendKey(with params: MTRKeypadInputClusterSendKeyParams, completion: @escaping @Sendable (MTRKeypadInputClusterSendKeyResponseParams?, (any Error)?) -> Void)
```

```swift
func sendKey(with params: MTRKeypadInputClusterSendKeyParams) async throws -> MTRKeypadInputClusterSendKeyResponseParams
```

# sendKeyWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) sendKeyWithParams:(MTRKeypadInputClusterSendKeyParams *) params completion:(void (^)(MTRKeypadInputClusterSendKeyResponseParams *data, NSError *error)) completion;
```
