> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/propertylistdecoder/userinfo](https://developer.apple.com/documentation/foundation/propertylistdecoder/userinfo)

# userInfo

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary you use to customize decoding by providing contextual information.

## Declaration

```swift
@preconcurrency var userInfo: [CodingUserInfoKey : any Sendable] { get set }
```

## See Also

### Customizing Decoding

- [decode(\_:from:format:)](decode%28__from_format_%29.md): Returns a value of the specified type by decoding a property list using the supplied format.
