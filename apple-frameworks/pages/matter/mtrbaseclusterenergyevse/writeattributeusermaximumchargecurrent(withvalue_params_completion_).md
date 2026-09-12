> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterenergyevse/writeattributeusermaximumchargecurrent(withvalue:params:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterenergyevse/writeattributeusermaximumchargecurrent(withvalue:params:completion:))

# writeAttributeUserMaximumChargeCurrent(withValue:params:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
func writeAttributeUserMaximumChargeCurrent(withValue value: NSNumber, params: MTRWriteParams?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeAttributeUserMaximumChargeCurrent(withValue value: NSNumber, params: MTRWriteParams?) async throws
```

# writeAttributeUserMaximumChargeCurrentWithValue:params:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```objectivec
- (void) writeAttributeUserMaximumChargeCurrentWithValue:(NSNumber *) value params:(MTRWriteParams *) params completion:(MTRStatusCompletion) completion;
```
