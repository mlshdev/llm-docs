> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterotasoftwareupdaterequestor-9n6nb/readattributeupdatestateprogress(completion:)

# readAttributeUpdateStateProgress(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeUpdateStateProgress(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeUpdateStateProgress() async throws -> NSNumber
```

# readAttributeUpdateStateProgressWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeUpdateStateProgressWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
