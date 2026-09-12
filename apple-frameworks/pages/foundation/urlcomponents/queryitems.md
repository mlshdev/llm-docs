> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcomponents/queryitems](https://developer.apple.com/documentation/foundation/urlcomponents/queryitems)

# queryItems

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of query items for the URL in the order in which they appear in the original query string.

## Declaration

```swift
var queryItems: [URLQueryItem]? { get set }
```

<a id="Discussion"></a>

## Discussion

Each `URLQueryItem` represents a single key-value pair,

Note that a name may appear more than once in a single query string, so the name values are not guaranteed to be unique. If the `URLComponents` has an empty query component, returns an empty array. If the `URLComponents` has no query component, returns nil.

The setter combines an array containing any number of `URLQueryItem`s, each of which represents a single key-value pair, into a query string and sets the `URLComponents` query property. Passing an empty array sets the query component of the `URLComponents` to an empty string. Passing nil removes the query component of the `URLComponents`.

> **Note**

>  If a name-value pair in a query is empty (i.e. the query string starts with ‘&’, ends with ‘&’, or has “&&” within it), you get a `URLQueryItem` with a zero-length name and a nil value. If a query’s name-value pair has nothing before the equals sign, you get a zero-length name. If a query’s name-value pair has nothing after the equals sign, you get a zero-length value. If a query’s name-value pair has no equals sign, the query name-value pair string is the name and you get a nil value.

## See Also

### Accessing components in native format

- [fragment](fragment.md): The fragment subcomponent.
- [host](host.md): The host subcomponent.
- [encodedHost](encodedhost.md): The host subcomponent, percent-encoded.
- [password](password.md): The password subcomponent of the URL.
- [path](path.md): The path subcomponent.
- [port](port.md): The port subcomponent.
- [query](query.md): The query subcomponent.
- [scheme](scheme.md): The scheme subcomponent of the URL.
- [user](user.md): The user subcomponent of the URL.
