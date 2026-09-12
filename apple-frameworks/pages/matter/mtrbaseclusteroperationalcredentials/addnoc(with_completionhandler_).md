> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusteroperationalcredentials/addnoc(with:completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusteroperationalcredentials/addnoc(with:completionhandler:))

# addNOC(with:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use addNOCWithParams:completion:

## Declaration

```swift
func addNOC(with params: MTROperationalCredentialsClusterAddNOCParams, completionHandler: @escaping @Sendable (MTROperationalCredentialsClusterNOCResponseParams?, (any Error)?) -> Void)
```

```swift
func addNOC(with params: MTROperationalCredentialsClusterAddNOCParams) async throws -> MTROperationalCredentialsClusterNOCResponseParams
```

# addNOCWithParams:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use addNOCWithParams:completion:

## Declaration

```objectivec
- (void) addNOCWithParams:(MTROperationalCredentialsClusterAddNOCParams *) params completionHandler:(void (^)(MTROperationalCredentialsClusterNOCResponseParams *data, NSError *error)) completionHandler;
```
