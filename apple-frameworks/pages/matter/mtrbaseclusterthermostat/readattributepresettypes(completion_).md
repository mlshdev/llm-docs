> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterthermostat/readattributepresettypes(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterthermostat/readattributepresettypes(completion:))

# readAttributePresetTypes(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
func readAttributePresetTypes(completion: @escaping @Sendable ([Any]?, (any Error)?) -> Void)
```

```swift
func readAttributePresetTypes() async throws -> [Any]
```

# readAttributePresetTypesWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```objectivec
- (void) readAttributePresetTypesWithCompletion:(void (^)(NSArray *value, NSError *error)) completion;
```
