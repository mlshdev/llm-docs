> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdoorlock/readattributealiroreadergroupidentifier(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdoorlock/readattributealiroreadergroupidentifier(completion:))

# readAttributeAliroReaderGroupIdentifier(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
func readAttributeAliroReaderGroupIdentifier(completion: @escaping @Sendable (Data?, (any Error)?) -> Void)
```

```swift
func readAttributeAliroReaderGroupIdentifier() async throws -> Data
```

# readAttributeAliroReaderGroupIdentifierWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```objectivec
- (void) readAttributeAliroReaderGroupIdentifierWithCompletion:(void (^)(NSData *value, NSError *error)) completion;
```
