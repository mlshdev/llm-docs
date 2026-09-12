> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdvalue/value(as:)](https://developer.apple.com/documentation/usdkit/usdvalue/value(as:))

# value(as:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the wrapped value if it is of type `T`, otherwise `nil`.

## Declaration

```swift
func value<T>(as type: T.Type = T.self) -> T? where T : USDValueProtocol
```
