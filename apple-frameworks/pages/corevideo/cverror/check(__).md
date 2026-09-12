> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cverror/check(_:)](https://developer.apple.com/documentation/corevideo/cverror/check(_:))

# check(\_:)

**Framework:** Core Video  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Throws an instance of `CVError` if `status` is not `kCVReturnSuccess`

## Declaration

```swift
static func check(_ status: CVReturn) throws(CVError)
```
