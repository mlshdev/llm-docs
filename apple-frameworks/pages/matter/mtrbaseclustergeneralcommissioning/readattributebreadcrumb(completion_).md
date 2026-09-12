> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustergeneralcommissioning/readattributebreadcrumb(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustergeneralcommissioning/readattributebreadcrumb(completion:))

# readAttributeBreadcrumb(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeBreadcrumb(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeBreadcrumb() async throws -> NSNumber
```

# readAttributeBreadcrumbWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeBreadcrumbWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
