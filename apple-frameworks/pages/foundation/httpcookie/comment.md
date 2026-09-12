> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpcookie/comment](https://developer.apple.com/documentation/foundation/httpcookie/comment)

# comment (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The cookie’s comment string.

## Declaration

```swift
var comment: String? { get }
```

<a id="Discussion"></a>

## Discussion

This value is `nil` if the cookie has no comment. You can present this string to the user, explaining the contents and purpose of this cookie.

## See Also

### Getting user-readable cookie metadata

- [commentURL](commenturl.md): The cookie’s comment URL.

# comment (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The cookie’s comment string.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * comment;
```

<a id="Discussion"></a>

## Discussion

This value is `nil` if the cookie has no comment. You can present this string to the user, explaining the contents and purpose of this cookie.

## See Also

### Getting user-readable cookie metadata

- [commentURL](commenturl.md): The cookie’s comment URL.
