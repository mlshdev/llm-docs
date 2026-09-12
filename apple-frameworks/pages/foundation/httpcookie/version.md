> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpcookie/version](https://developer.apple.com/documentation/foundation/httpcookie/version)

# version (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The cookie’s version.

## Declaration

```swift
var version: Int { get }
```

<a id="Discussion"></a>

## Discussion

Version 0 maps to “old-style” Netscape cookies. Version 1 maps to [RFC 6265](https://tools.ietf.org/html/rfc6265) cookies.

## See Also

### Getting cookie metadata

- [name](name.md): The cookie’s name.
- [value](value.md): The cookie’s string value.

# version (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The cookie’s version.

## Declaration

```objectivec
@property (readonly) NSUInteger version;
```

<a id="Discussion"></a>

## Discussion

Version 0 maps to “old-style” Netscape cookies. Version 1 maps to [RFC 6265](https://tools.ietf.org/html/rfc6265) cookies.

## See Also

### Getting cookie metadata

- [name](name.md): The cookie’s name.
- [value](value.md): The cookie’s string value.
