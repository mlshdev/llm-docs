> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/propertylistencoder/userinfo](https://developer.apple.com/documentation/foundation/propertylistencoder/userinfo)

# userInfo

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary you use to customize the encoding process by providing contextual information.

## Declaration

```swift
@preconcurrency var userInfo: [CodingUserInfoKey : any Sendable] { get set }
```

## See Also

### Customizing Encoding

- [outputFormat](outputformat.md): A value that determines which property list format is used during encoding.
