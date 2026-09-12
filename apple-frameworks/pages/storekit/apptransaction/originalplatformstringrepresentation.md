> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/apptransaction/originalplatformstringrepresentation](https://developer.apple.com/documentation/storekit/apptransaction/originalplatformstringrepresentation)

# originalPlatformStringRepresentation

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ (deprecated in 18.4) · iPadOS 16.0+ (deprecated in 18.4) · Mac Catalyst 16.0+ (deprecated in 18.4) · macOS 13.0+ (deprecated in 15.4) · tvOS 16.0+ (deprecated in 18.4) · visionOS 1.0+ (deprecated in 2.4) · watchOS 9.0+ (deprecated in 11.4)

The string representation of the platform on which the customer originally purchased the app.

> Use the originalPlatform property instead

## Declaration

```swift
@backDeployed(before: iOS 18.4, macOS 15.4, tvOS 18.4, watchOS 11.4, visionOS 2.4)
var originalPlatformStringRepresentation: String { get }
```
