> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterunittesting/timedinvokerequest(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterunittesting/timedinvokerequest(with:completion:))

# timedInvokeRequest(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func timedInvokeRequest(with params: MTRUnitTestingClusterTimedInvokeRequestParams?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func timedInvokeRequest(with params: MTRUnitTestingClusterTimedInvokeRequestParams?) async throws
```

# timedInvokeRequestWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) timedInvokeRequestWithParams:(MTRUnitTestingClusterTimedInvokeRequestParams *) params completion:(MTRStatusCompletion) completion;
```
