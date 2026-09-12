> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlcomponents/password](https://developer.apple.com/documentation/foundation/nsurlcomponents/password)

# password (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The password URL subcomponent, or nil if not present.

## Declaration

```swift
var password: String? { get set }
```

<a id="Discussion"></a>

## Discussion

For example, in the URL `http://username:password@www.example.com/index.html`, the password is `password`.

## See Also

### Accessing components in native format

- [fragment](fragment.md): The fragment URL component (the part after a `#` symbol), or nil if not present.
- [host](host.md): The host URL subcomponent, or nil if not present.
- [encodedHost](encodedhost.md): The host subcomponent, percent-encoded.
- [path](path.md): The path URL component, or nil if not present.
- [port](port.md): The port number URL component, or nil if not present.
- [query](query.md): The query URL component as a string, or nil if not present.
- [queryItems](queryitems.md): The query URL component as an array of name/value pairs.
- [scheme](scheme.md): The scheme URL component, or nil if not present.
- [user](user.md): The username URL subcomponent, or nil if not present.

# password (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The password URL subcomponent, or nil if not present.

## Declaration

```objectivec
@property (copy, nullable) NSString * password;
```

<a id="Discussion"></a>

## Discussion

For example, in the URL `http://username:password@www.example.com/index.html`, the password is `password`.

## See Also

### Accessing components in native format

- [fragment](fragment.md): The fragment URL component (the part after a `#` symbol), or nil if not present.
- [host](host.md): The host URL subcomponent, or nil if not present.
- [encodedHost](encodedhost.md): The host subcomponent, percent-encoded.
- [path](path.md): The path URL component, or nil if not present.
- [port](port.md): The port number URL component, or nil if not present.
- [query](query.md): The query URL component as a string, or nil if not present.
- [queryItems](queryitems.md): The query URL component as an array of name/value pairs.
- [scheme](scheme.md): The scheme URL component, or nil if not present.
- [user](user.md): The username URL subcomponent, or nil if not present.
