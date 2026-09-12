> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusternetworkcommissioning/readattributesupportedwifibands(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusternetworkcommissioning/readattributesupportedwifibands(completion:))

# readAttributeSupportedWiFiBands(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
func readAttributeSupportedWiFiBands(completion: @escaping @Sendable ([Any]?, (any Error)?) -> Void)
```

```swift
func readAttributeSupportedWiFiBands() async throws -> [Any]
```

# readAttributeSupportedWiFiBandsWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```objectivec
- (void) readAttributeSupportedWiFiBandsWithCompletion:(void (^)(NSArray *value, NSError *error)) completion;
```
