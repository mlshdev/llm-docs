> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustergeneraldiagnostics/readattributetotaloperationalhours(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustergeneraldiagnostics/readattributetotaloperationalhours(completion:))

# readAttributeTotalOperationalHours(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeTotalOperationalHours(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeTotalOperationalHours() async throws -> NSNumber
```

# readAttributeTotalOperationalHoursWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeTotalOperationalHoursWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
