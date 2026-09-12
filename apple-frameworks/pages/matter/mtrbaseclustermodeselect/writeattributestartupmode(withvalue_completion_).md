> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustermodeselect/writeattributestartupmode(withvalue:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustermodeselect/writeattributestartupmode(withvalue:completion:))

# writeAttributeStartUpMode(withValue:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func writeAttributeStartUpMode(withValue value: NSNumber?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeAttributeStartUpMode(withValue value: NSNumber?) async throws
```

# writeAttributeStartUpModeWithValue:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) writeAttributeStartUpModeWithValue:(NSNumber *) value completion:(MTRStatusCompletion) completion;
```
