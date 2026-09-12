> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustercommissionercontrol/readattributesupporteddevicecategories(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustercommissionercontrol/readattributesupporteddevicecategories(completion:))

# readAttributeSupportedDeviceCategories(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
func readAttributeSupportedDeviceCategories(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeSupportedDeviceCategories() async throws -> NSNumber
```

# readAttributeSupportedDeviceCategoriesWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```objectivec
- (void) readAttributeSupportedDeviceCategoriesWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
