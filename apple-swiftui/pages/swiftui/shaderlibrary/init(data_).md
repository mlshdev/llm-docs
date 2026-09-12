> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shaderlibrary/init(data:)](https://developer.apple.com/documentation/swiftui/shaderlibrary/init(data:))

# init(data:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a new Metal shader library from `data`, which must be the contents of precompiled Metal library. Functions compiled from the returned library will only be cached as long as the returned library exists.

## Declaration

```swift
init(data: Data)
```

## See Also

### Creating a shader library

- [init(url:)](init%28url_%29.md): Creates a new Metal shader library from the contents of `url`, which must be the location of precompiled Metal library. Functions compiled from the returned library will only be cached as long as the returned library exists.
