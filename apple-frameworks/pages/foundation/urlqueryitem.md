> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlqueryitem](https://developer.apple.com/documentation/foundation/urlqueryitem)

# URLQueryItem

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A single name-value pair from the query portion of a URL.

## Declaration

```swift
struct URLQueryItem
```

## Topics

### Creating Query Items

- [init(name:value:)](urlqueryitem/init%28name_value_%29.md): Creates a new query item with the name and value you specify.

### Accessing the Item’s Components

- [name](urlqueryitem/name.md): The name of the query item.
- [value](urlqueryitem/value.md): The value for the query item.

### Using Reference Types

- [NSURLQueryItem](nsurlqueryitem.md): An object representing a single name/value pair for an item in the query portion of a URL.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [ReferenceConvertible](referenceconvertible.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### URLs

- [URL](url.md): A value that identifies the location of a resource, such as an item on a remote server or the path to a local file.
- [URLComponents](urlcomponents.md): A structure that parses URLs into and constructs URLs from their constituent parts.
