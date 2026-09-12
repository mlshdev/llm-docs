> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterenergyevse/readattributerandomizationdelaywindow(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterenergyevse/readattributerandomizationdelaywindow(completion:))

# readAttributeRandomizationDelayWindow(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
func readAttributeRandomizationDelayWindow(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeRandomizationDelayWindow() async throws -> NSNumber
```

# readAttributeRandomizationDelayWindowWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```objectivec
- (void) readAttributeRandomizationDelayWindowWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
