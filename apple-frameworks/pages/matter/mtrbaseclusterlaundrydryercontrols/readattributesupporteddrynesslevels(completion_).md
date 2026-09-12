> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterlaundrydryercontrols/readattributesupporteddrynesslevels(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterlaundrydryercontrols/readattributesupporteddrynesslevels(completion:))

# readAttributeSupportedDrynessLevels(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
func readAttributeSupportedDrynessLevels(completion: @escaping @Sendable ([Any]?, (any Error)?) -> Void)
```

```swift
func readAttributeSupportedDrynessLevels() async throws -> [Any]
```

# readAttributeSupportedDrynessLevelsWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```objectivec
- (void) readAttributeSupportedDrynessLevelsWithCompletion:(void (^)(NSArray *value, NSError *error)) completion;
```
