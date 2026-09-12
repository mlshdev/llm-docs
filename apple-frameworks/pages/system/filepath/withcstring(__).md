> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filepath/withcstring(_:)](https://developer.apple.com/documentation/system/filepath/withcstring(_:))

# withCString(\_:)

**Framework:** System  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

For backwards compatibility only. This function is equivalent to the preferred `withPlatformString`.

## Declaration

```swift
func withCString<Result>(_ body: (UnsafePointer<CChar>) throws -> Result) rethrows -> Result
```
