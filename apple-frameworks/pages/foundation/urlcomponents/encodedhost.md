> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcomponents/encodedhost](https://developer.apple.com/documentation/foundation/urlcomponents/encodedhost)

# encodedHost

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The host subcomponent, percent-encoded.

## Declaration

```swift
var encodedHost: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The getter for this property retains any percent-encoding this component may have. Setting this property assumes the component string already has the correct percent-encoding. Attempting to set an incorrectly percent-encoded string raises [fatalError(\_:file:line:)](https://developer.apple.com/documentation/swift/fatalerror%28_:file:line:%29).

## See Also

### Accessing components in native format

- [fragment](fragment.md): The fragment subcomponent.
- [host](host.md): The host subcomponent.
- [password](password.md): The password subcomponent of the URL.
- [path](path.md): The path subcomponent.
- [port](port.md): The port subcomponent.
- [query](query.md): The query subcomponent.
- [queryItems](queryitems.md): An array of query items for the URL in the order in which they appear in the original query string.
- [scheme](scheme.md): The scheme subcomponent of the URL.
- [user](user.md): The user subcomponent of the URL.
