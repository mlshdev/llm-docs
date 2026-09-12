> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlcomponents/host](https://developer.apple.com/documentation/foundation/nsurlcomponents/host)

# host (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The host URL subcomponent, or nil if not present.

## Declaration

```swift
var host: String? { get set }
```

<a id="Discussion"></a>

## Discussion

For example, in the URL `http://www.example.com/index.html`, the host is `www.example.com`.

The getter for this property removes any percent encoding this component may have (if the component allows percent encoding). Setting this property assumes the subcomponent or component string isn’t percent encoded and adds percent encoding (if the component allows percent encoding).

## See Also

### Accessing components in native format

- [fragment](fragment.md): The fragment URL component (the part after a `#` symbol), or nil if not present.
- [encodedHost](encodedhost.md): The host subcomponent, percent-encoded.
- [password](password.md): The password URL subcomponent, or nil if not present.
- [path](path.md): The path URL component, or nil if not present.
- [port](port.md): The port number URL component, or nil if not present.
- [query](query.md): The query URL component as a string, or nil if not present.
- [queryItems](queryitems.md): The query URL component as an array of name/value pairs.
- [scheme](scheme.md): The scheme URL component, or nil if not present.
- [user](user.md): The username URL subcomponent, or nil if not present.

# host (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The host URL subcomponent, or nil if not present.

## Declaration

```objectivec
@property (copy, nullable) NSString * host;
```

<a id="Discussion"></a>

## Discussion

For example, in the URL `http://www.example.com/index.html`, the host is `www.example.com`.

The getter for this property removes any percent encoding this component may have (if the component allows percent encoding). Setting this property assumes the subcomponent or component string isn’t percent encoded and adds percent encoding (if the component allows percent encoding).

## See Also

### Accessing components in native format

- [fragment](fragment.md): The fragment URL component (the part after a `#` symbol), or nil if not present.
- [encodedHost](encodedhost.md): The host subcomponent, percent-encoded.
- [password](password.md): The password URL subcomponent, or nil if not present.
- [path](path.md): The path URL component, or nil if not present.
- [port](port.md): The port number URL component, or nil if not present.
- [query](query.md): The query URL component as a string, or nil if not present.
- [queryItems](queryitems.md): The query URL component as an array of name/value pairs.
- [scheme](scheme.md): The scheme URL component, or nil if not present.
- [user](user.md): The username URL subcomponent, or nil if not present.
