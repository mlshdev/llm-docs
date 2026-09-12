> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlcomponents/percentencodedpassword](https://developer.apple.com/documentation/foundation/nsurlcomponents/percentencodedpassword)

# percentEncodedPassword (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The password URL subcomponent expressed as a URL-encoded string, or `nil` if not present.

## Declaration

```swift
var percentEncodedPassword: String? { get set }
```

<a id="Discussion"></a>

## Discussion

For example, in the URL `http://username:password@www.example.com/index.html`, the password is `password`.

If you set this value to something that is not a valid, percent-encoded string, this class throws an exception.

## See Also

### Accessing components in URL-encoded format

- [percentEncodedFragment](percentencodedfragment.md): The fragment URL component (the part after a `#` symbol) expressed as a URL-encoded string, or `nil` if not present.
- [percentEncodedHost](percentencodedhost.md): Deprecated. The host URL subcomponent expressed as a URL-encoded string, or `nil` if not present.
- [percentEncodedPath](percentencodedpath.md): The path URL component expressed as a URL-encoded string, or `nil` if not present.
- [percentEncodedQuery](percentencodedquery.md): The query URL component expressed as a URL-encoded string, or `nil` if not present.
- [percentEncodedUser](percentencodeduser.md): The username URL subcomponent expressed as a URL-encoded string, or `nil` if not present.

# percentEncodedPassword (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The password URL subcomponent expressed as a URL-encoded string, or `nil` if not present.

## Declaration

```objectivec
@property (copy, nullable) NSString * percentEncodedPassword;
```

<a id="Discussion"></a>

## Discussion

For example, in the URL `http://username:password@www.example.com/index.html`, the password is `password`.

If you set this value to something that is not a valid, percent-encoded string, this class throws an exception.

## See Also

### Accessing components in URL-encoded format

- [percentEncodedFragment](percentencodedfragment.md): The fragment URL component (the part after a `#` symbol) expressed as a URL-encoded string, or `nil` if not present.
- [percentEncodedHost](percentencodedhost.md): Deprecated. The host URL subcomponent expressed as a URL-encoded string, or `nil` if not present.
- [percentEncodedPath](percentencodedpath.md): The path URL component expressed as a URL-encoded string, or `nil` if not present.
- [percentEncodedQuery](percentencodedquery.md): The query URL component expressed as a URL-encoded string, or `nil` if not present.
- [percentEncodedUser](percentencodeduser.md): The username URL subcomponent expressed as a URL-encoded string, or `nil` if not present.
