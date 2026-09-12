> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpcookie/path](https://developer.apple.com/documentation/foundation/httpcookie/path)

# path (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The cookie’s path.

## Declaration

```swift
var path: String { get }
```

<a id="Discussion"></a>

## Discussion

The cookie will be sent with requests for this path in the cookie’s domain, and all paths that have this prefix. A path of `"/"` means the cookie will be sent for all URLs in the domain.

## See Also

### Getting cookie host properties

- [domain](domain.md): The domain of the cookie.
- [portList](portlist.md): The cookie’s port list.

# path (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The cookie’s path.

## Declaration

```objectivec
@property (copy, readonly) NSString * path;
```

<a id="Discussion"></a>

## Discussion

The cookie will be sent with requests for this path in the cookie’s domain, and all paths that have this prefix. A path of `"/"` means the cookie will be sent for all URLs in the domain.

## See Also

### Getting cookie host properties

- [domain](domain.md): The domain of the cookie.
- [portList](portlist.md): The cookie’s port list.
