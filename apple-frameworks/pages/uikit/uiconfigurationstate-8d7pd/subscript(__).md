> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiconfigurationstate-8d7pd/subscript(_:)](https://developer.apple.com/documentation/uikit/uiconfigurationstate-8d7pd/subscript(_:))

# subscript(\_:)

**Framework:** UIKit  
**Kind:** Instance Subscript  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Accesses custom states by key.

## Declaration

```swift
subscript(key: UIConfigurationStateCustomKey) -> AnyHashable? { get set }
```

## See Also

### Managing configuration states

- [traitCollection](traitcollection.md): The traits that describe the current layout environment of the view, such as the user interface style and layout direction.
