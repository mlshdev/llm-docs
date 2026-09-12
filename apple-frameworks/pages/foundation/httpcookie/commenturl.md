> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpcookie/commenturl](https://developer.apple.com/documentation/foundation/httpcookie/commenturl)

# commentURL (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The cookie’s comment URL.

## Declaration

```swift
var commentURL: URL? { get }
```

<a id="Discussion"></a>

## Discussion

This value is `nil` if the cookie has no comment URL. This value specifies a URL that can be presented to the user as a link for further information about this cookie.

## See Also

### Getting user-readable cookie metadata

- [comment](comment.md): The cookie’s comment string.

# commentURL (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The cookie’s comment URL.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSURL * commentURL;
```

<a id="Discussion"></a>

## Discussion

This value is `nil` if the cookie has no comment URL. This value specifies a URL that can be presented to the user as a link for further information about this cookie.

## See Also

### Getting user-readable cookie metadata

- [comment](comment.md): The cookie’s comment string.
