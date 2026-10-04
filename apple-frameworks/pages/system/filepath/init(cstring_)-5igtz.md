> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/system/filepath/init(cstring:)-5igtz

# init(cString:)

**Framework:** System  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 15.0) · iPadOS 14.0+ (deprecated in 15.0) · Mac Catalyst 14.0+ (deprecated in 15.0) · macOS 11.0+ (deprecated in 12.0) · tvOS 14.0+ (deprecated in 15.0) · watchOS 7.0+ (deprecated in 8.0)

For backwards compatibility only. This initializer is equivalent to the preferred `FilePath(platformString:)`.

## Declaration

```swift
init(cString: UnsafePointer<CChar>)
```
