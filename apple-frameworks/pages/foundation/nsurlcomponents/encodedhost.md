> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlcomponents/encodedhost](https://developer.apple.com/documentation/foundation/nsurlcomponents/encodedhost)

# encodedHost (Swift)

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

- [fragment](fragment.md): The fragment URL component (the part after a `#` symbol), or nil if not present.
- [host](host.md): The host URL subcomponent, or nil if not present.
- [password](password.md): The password URL subcomponent, or nil if not present.
- [path](path.md): The path URL component, or nil if not present.
- [port](port.md): The port number URL component, or nil if not present.
- [query](query.md): The query URL component as a string, or nil if not present.
- [queryItems](queryitems.md): The query URL component as an array of name/value pairs.
- [scheme](scheme.md): The scheme URL component, or nil if not present.
- [user](user.md): The username URL subcomponent, or nil if not present.

# encodedHost (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The host subcomponent, percent-encoded.

## Declaration

```objectivec
@property (copy, nullable) NSString * encodedHost;
```

<a id="Discussion"></a>

## Discussion

The getter for this property retains any percent-encoding this component may have. Setting this property assumes the component string already has the correct percent-encoding. Attempting to set an incorrectly percent-encoded string raises [fatalError(\_:file:line:)](https://developer.apple.com/documentation/swift/fatalerror%28_:file:line:%29).

## See Also

### Accessing components in native format

- [fragment](fragment.md): The fragment URL component (the part after a `#` symbol), or nil if not present.
- [host](host.md): The host URL subcomponent, or nil if not present.
- [password](password.md): The password URL subcomponent, or nil if not present.
- [path](path.md): The path URL component, or nil if not present.
- [port](port.md): The port number URL component, or nil if not present.
- [query](query.md): The query URL component as a string, or nil if not present.
- [queryItems](queryitems.md): The query URL component as an array of name/value pairs.
- [scheme](scheme.md): The scheme URL component, or nil if not present.
- [user](user.md): The username URL subcomponent, or nil if not present.
