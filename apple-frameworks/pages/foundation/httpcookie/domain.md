> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpcookie/domain](https://developer.apple.com/documentation/foundation/httpcookie/domain)

# domain (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The domain of the cookie.

## Declaration

```swift
var domain: String { get }
```

<a id="Discussion"></a>

## Discussion

If the domain does not start with a dot, then the cookie is only sent to the exact host specified by the domain. If the domain does start with a dot, then the cookie is sent to other hosts in that domain as well, subject to certain restrictions. See [RFC 6265](https://tools.ietf.org/html/rfc6265.html) for more detail.

## See Also

### Getting cookie host properties

- [path](path.md): The cookie’s path.
- [portList](portlist.md): The cookie’s port list.

# domain (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The domain of the cookie.

## Declaration

```objectivec
@property (copy, readonly) NSString * domain;
```

<a id="Discussion"></a>

## Discussion

If the domain does not start with a dot, then the cookie is only sent to the exact host specified by the domain. If the domain does start with a dot, then the cookie is sent to other hosts in that domain as well, subject to certain restrictions. See [RFC 6265](https://tools.ietf.org/html/rfc6265.html) for more detail.

## See Also

### Getting cookie host properties

- [path](path.md): The cookie’s path.
- [portList](portlist.md): The cookie’s port list.
