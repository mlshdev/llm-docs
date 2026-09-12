> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustermodeselect/readattributesupportedmodes(completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclustermodeselect/readattributesupportedmodes(completionhandler:))

# readAttributeSupportedModes(completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeSupportedModesWithCompletion:

## Declaration

```swift
func readAttributeSupportedModes(completionHandler: @escaping @Sendable ([Any]?, (any Error)?) -> Void)
```

```swift
func readAttributeSupportedModes() async throws -> [Any]
```

# readAttributeSupportedModesWithCompletionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeSupportedModesWithCompletion:

## Declaration

```objectivec
- (void) readAttributeSupportedModesWithCompletionHandler:(void (^)(NSArray *value, NSError *error)) completionHandler;
```
