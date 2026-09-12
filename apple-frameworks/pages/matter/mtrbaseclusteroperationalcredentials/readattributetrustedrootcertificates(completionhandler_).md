> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusteroperationalcredentials/readattributetrustedrootcertificates(completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusteroperationalcredentials/readattributetrustedrootcertificates(completionhandler:))

# readAttributeTrustedRootCertificates(completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeTrustedRootCertificatesWithCompletion:

## Declaration

```swift
func readAttributeTrustedRootCertificates(completionHandler: @escaping @Sendable ([Any]?, (any Error)?) -> Void)
```

```swift
func readAttributeTrustedRootCertificates() async throws -> [Any]
```

# readAttributeTrustedRootCertificatesWithCompletionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeTrustedRootCertificatesWithCompletion:

## Declaration

```objectivec
- (void) readAttributeTrustedRootCertificatesWithCompletionHandler:(void (^)(NSArray *value, NSError *error)) completionHandler;
```
