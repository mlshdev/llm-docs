> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterthermostat/readattributehvacsystemtypeconfiguration(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterthermostat/readattributehvacsystemtypeconfiguration(completion:))

# readAttributeHVACSystemTypeConfiguration(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeHVACSystemTypeConfiguration(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeHVACSystemTypeConfiguration() async throws -> NSNumber
```

# readAttributeHVACSystemTypeConfigurationWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeHVACSystemTypeConfigurationWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
