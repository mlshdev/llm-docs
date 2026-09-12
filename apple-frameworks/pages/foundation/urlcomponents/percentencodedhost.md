> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcomponents/percentencodedhost](https://developer.apple.com/documentation/foundation/urlcomponents/percentencodedhost)

# percentEncodedHost

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 8.0+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

The host subcomponent, percent-encoded.

> Use [encodedHost](encodedhost.md) instead.

## Declaration

```swift
var percentEncodedHost: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The getter for this property retains any percent encoding this component may have. Setting this properties assumes the component string is already correctly percent encoded. Attempting to set an incorrectly percent encoded string will cause a `fatalError`. Although ‘;’ is a legal path character, it is recommended that it be percent-encoded for best compatibility with `URL` (`String.addingPercentEncoding(withAllowedCharacters:)` will percent-encode any ‘;’ characters if you pass `CharacterSet.urlHostAllowed`).

## See Also

### Accessing components in URL-encoded format

- [percentEncodedFragment](percentencodedfragment.md): The fragment subcomponent, percent-encoded.
- [percentEncodedPassword](percentencodedpassword.md): The password subcomponent, percent-encoded.
- [percentEncodedPath](percentencodedpath.md): The path subcomponent, percent-encoded.
- [percentEncodedQuery](percentencodedquery.md): The query subcomponent, percent-encoded.
- [percentEncodedQueryItems](percentencodedqueryitems.md): The query subcomponent, as an array of percent-encoded query items.
- [URLQueryItem](../urlqueryitem.md): A single name-value pair from the query portion of a URL.
- [percentEncodedUser](percentencodeduser.md): The user subcomponent, percent-encoded.
