> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdoorlock/writeattributeoperatingmode(withvalue:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdoorlock/writeattributeoperatingmode(withvalue:completion:))

# writeAttributeOperatingMode(withValue:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func writeAttributeOperatingMode(withValue value: NSNumber, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeAttributeOperatingMode(withValue value: NSNumber) async throws
```

# writeAttributeOperatingModeWithValue:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) writeAttributeOperatingModeWithValue:(NSNumber *) value completion:(MTRStatusCompletion) completion;
```
