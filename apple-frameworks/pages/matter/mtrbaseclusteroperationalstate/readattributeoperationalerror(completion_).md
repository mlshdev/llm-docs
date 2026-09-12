> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusteroperationalstate/readattributeoperationalerror(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusteroperationalstate/readattributeoperationalerror(completion:))

# readAttributeOperationalError(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

## Declaration

```swift
func readAttributeOperationalError(completion: @escaping @Sendable (MTROperationalStateClusterErrorStateStruct?, (any Error)?) -> Void)
```

```swift
func readAttributeOperationalError() async throws -> MTROperationalStateClusterErrorStateStruct
```

# readAttributeOperationalErrorWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

## Declaration

```objectivec
- (void) readAttributeOperationalErrorWithCompletion:(void (^)(MTROperationalStateClusterErrorStateStruct *value, NSError *error)) completion;
```
