> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterapplicationbasic/readattributeallowedvendorlist(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterapplicationbasic/readattributeallowedvendorlist(completion:))

# readAttributeAllowedVendorList(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeAllowedVendorList(completion: @escaping @Sendable ([Any]?, (any Error)?) -> Void)
```

```swift
func readAttributeAllowedVendorList() async throws -> [Any]
```

# readAttributeAllowedVendorListWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeAllowedVendorListWithCompletion:(void (^)(NSArray *value, NSError *error)) completion;
```
