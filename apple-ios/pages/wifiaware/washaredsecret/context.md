> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/washaredsecret/context](https://developer.apple.com/documentation/wifiaware/washaredsecret/context)

# WASharedSecret.Context

**Framework:** Wi-Fi Aware  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

A unique value that is specific to your App and the use case a given connection will perform, which diversifies the generated secret so that it is unique to your App and connection.

## Declaration

```swift
struct Context
```

## Topics

### Initializers

- [init(\_:)](context/init%28__%29-74fai.md): Creates a new custom context that provides unique data.
- [init(\_:)](context/init%28__%29-8fpqd.md): Creates a new custom context that provides a unique string.

### Type Properties

- [bundleID](context/bundleid.md): A string that provides a unique value specific to your app.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
