> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/cinterop/platformunicodeencoding](https://developer.apple.com/documentation/system/cinterop/platformunicodeencoding)

# CInterop.PlatformUnicodeEncoding

**Framework:** System  
**Kind:** Type Alias  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The platform’s preferred Unicode encoding. On Unix this is UTF-8 and on Windows it is UTF-16. Native strings may contain invalid Unicode, which will be handled by either error-correction or failing, depending on API.

## Declaration

```swift
typealias PlatformUnicodeEncoding = UTF8
```
