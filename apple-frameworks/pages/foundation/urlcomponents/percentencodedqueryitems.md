> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcomponents/percentencodedqueryitems](https://developer.apple.com/documentation/foundation/urlcomponents/percentencodedqueryitems)

# percentEncodedQueryItems

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The query subcomponent, as an array of percent-encoded query items.

## Declaration

```swift
var percentEncodedQueryItems: [URLQueryItem]? { get set }
```

<a id="Discussion"></a>

## Discussion

The setter combines an array containing any number of [URLQueryItem](../urlqueryitem.md) key-value pairs into a query string and sets the `URLComponents` query property. This property assumes the query item names and values are already correctly percent-encoded. It also assumes that the query item names don’t contain the query item delimiter characters `&` and `=`. Attempting to set an incorrectly percent-encoded query item or a query item name with the query item delimiter characters `&` and `=` raises [fatalError(\_:file:line:)](https://developer.apple.com/documentation/swift/fatalerror%28_:file:line:%29).

## See Also

### Accessing components in URL-encoded format

- [percentEncodedFragment](percentencodedfragment.md): The fragment subcomponent, percent-encoded.
- [percentEncodedHost](percentencodedhost.md): Deprecated. The host subcomponent, percent-encoded.
- [percentEncodedPassword](percentencodedpassword.md): The password subcomponent, percent-encoded.
- [percentEncodedPath](percentencodedpath.md): The path subcomponent, percent-encoded.
- [percentEncodedQuery](percentencodedquery.md): The query subcomponent, percent-encoded.
- [URLQueryItem](../urlqueryitem.md): A single name-value pair from the query portion of a URL.
- [percentEncodedUser](percentencodeduser.md): The user subcomponent, percent-encoded.
