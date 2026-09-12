> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/apptransaction/storetypestringrepresentation](https://developer.apple.com/documentation/storekit/apptransaction/storetypestringrepresentation)

# storeTypeStringRepresentation

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ (deprecated in 27.0) · iPadOS 16.0+ (deprecated in 27.0) · Mac Catalyst 16.0+ (deprecated in 27.0) · macOS 13.0+ (deprecated in 27.0) · tvOS 16.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 9.0+ (deprecated in 27.0)

The string representation of the store where the original purchase of the app was made.

> Use the  [storeType](storetype-swift.property.md) property instead.

## Declaration

```swift
@backDeployed(before: iOS 27.0, macOS 27.0, tvOS 27.0, watchOS 27.0, visionOS 27.0)
var storeTypeStringRepresentation: String { get }
```
