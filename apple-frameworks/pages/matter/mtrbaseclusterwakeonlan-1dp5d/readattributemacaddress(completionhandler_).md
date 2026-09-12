> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterwakeonlan-1dp5d/readattributemacaddress(completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusterwakeonlan-1dp5d/readattributemacaddress(completionhandler:))

# readAttributeMACAddress(completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeMACAddressWithCompletion:

## Declaration

```swift
func readAttributeMACAddress(completionHandler: @escaping @Sendable (String?, (any Error)?) -> Void)
```

```swift
func readAttributeMACAddress() async throws -> String
```

# readAttributeMACAddressWithCompletionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeMACAddressWithCompletion:

## Declaration

```objectivec
- (void) readAttributeMACAddressWithCompletionHandler:(void (^)(NSString *value, NSError *error)) completionHandler;
```
