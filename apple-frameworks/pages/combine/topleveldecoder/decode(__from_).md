> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/topleveldecoder/decode(_:from:)](https://developer.apple.com/documentation/combine/topleveldecoder/decode(_:from:))

# decode(\_:from:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Decodes an instance of the indicated type.

## Declaration

```swift
func decode<T>(_ type: T.Type, from: Self.Input) throws -> T where T : Decodable
```
