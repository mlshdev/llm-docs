> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterunittesting/testnothandled(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterunittesting/testnothandled(with:completion:))

# testNotHandled(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func testNotHandled(with params: MTRUnitTestingClusterTestNotHandledParams?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func testNotHandled(with params: MTRUnitTestingClusterTestNotHandledParams?) async throws
```

# testNotHandledWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) testNotHandledWithParams:(MTRUnitTestingClusterTestNotHandledParams *) params completion:(MTRStatusCompletion) completion;
```
