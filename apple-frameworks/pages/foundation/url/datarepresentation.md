> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/datarepresentation](https://developer.apple.com/documentation/foundation/url/datarepresentation)

# dataRepresentation

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The data representation of the URL’s relativeString.

## Declaration

```swift
var dataRepresentation: Data { get }
```

<a id="Discussion"></a>

## Discussion

If the URL was initialized with `init?(dataRepresentation:relativeTo:isAbsolute:)`, the data representation returned are the same bytes as those used at initialization; otherwise, the data representation returned are the bytes of the `relativeString` encoded with UTF8 string encoding.

## See Also

### Working with the data representation of a URL

- [init(dataRepresentation:relativeTo:isAbsolute:)](init%28datarepresentation_relativeto_isabsolute_%29.md): Initializes a newly created URL using the contents of the given data, relative to a base URL.
