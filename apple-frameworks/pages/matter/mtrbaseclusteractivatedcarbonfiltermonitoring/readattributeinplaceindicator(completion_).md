> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusteractivatedcarbonfiltermonitoring/readattributeinplaceindicator(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusteractivatedcarbonfiltermonitoring/readattributeinplaceindicator(completion:))

# readAttributeInPlaceIndicator(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```swift
func readAttributeInPlaceIndicator(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeInPlaceIndicator() async throws -> NSNumber
```

# readAttributeInPlaceIndicatorWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```objectivec
- (void) readAttributeInPlaceIndicatorWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
