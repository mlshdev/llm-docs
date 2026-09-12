> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdoorlock/writeattributeopenperiod(withvalue:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdoorlock/writeattributeopenperiod(withvalue:completion:))

# writeAttributeOpenPeriod(withValue:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func writeAttributeOpenPeriod(withValue value: NSNumber, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeAttributeOpenPeriod(withValue value: NSNumber) async throws
```

# writeAttributeOpenPeriodWithValue:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) writeAttributeOpenPeriodWithValue:(NSNumber *) value completion:(MTRStatusCompletion) completion;
```
