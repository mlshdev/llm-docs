> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcomponents/path](https://developer.apple.com/documentation/foundation/urlcomponents/path)

# path

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The path subcomponent.

## Declaration

```swift
var path: String { get set }
```

<a id="Discussion"></a>

## Discussion

The getter for this property removes any percent encoding this component may have (if the component allows percent encoding). Setting this property assumes the subcomponent or component string is not percent encoded and will add percent encoding (if the component allows percent encoding).

## See Also

### Accessing components in native format

- [fragment](fragment.md): The fragment subcomponent.
- [host](host.md): The host subcomponent.
- [encodedHost](encodedhost.md): The host subcomponent, percent-encoded.
- [password](password.md): The password subcomponent of the URL.
- [port](port.md): The port subcomponent.
- [query](query.md): The query subcomponent.
- [queryItems](queryitems.md): An array of query items for the URL in the order in which they appear in the original query string.
- [scheme](scheme.md): The scheme subcomponent of the URL.
- [user](user.md): The user subcomponent of the URL.
