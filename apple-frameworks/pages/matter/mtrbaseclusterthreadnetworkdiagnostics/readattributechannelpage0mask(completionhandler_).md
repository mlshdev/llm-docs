> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterthreadnetworkdiagnostics/readattributechannelpage0mask(completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusterthreadnetworkdiagnostics/readattributechannelpage0mask(completionhandler:))

# readAttributeChannelPage0Mask(completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeChannelPage0MaskWithCompletion:

## Declaration

```swift
func readAttributeChannelPage0Mask(completionHandler: @escaping @Sendable (Data?, (any Error)?) -> Void)
```

```swift
func readAttributeChannelPage0Mask() async throws -> Data
```

# readAttributeChannelPage0MaskWithCompletionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeChannelPage0MaskWithCompletion:

## Declaration

```objectivec
- (void) readAttributeChannelPage0MaskWithCompletionHandler:(void (^)(NSData *value, NSError *error)) completionHandler;
```
