> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpurlresponse/statuscode](https://developer.apple.com/documentation/foundation/httpurlresponse/statuscode)

# statusCode (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The response’s HTTP status code.

## Declaration

```swift
var statusCode: Int { get }
```

<a id="Discussion"></a>

## Discussion

See [RFC 2616](http://www.ietf.org/rfc/rfc2616.txt) for details.

## See Also

### Getting response status codes

- [localizedString(forStatusCode:)](localizedstring%28forstatuscode_%29.md): Returns a localized string corresponding to a specified HTTP status code.

# statusCode (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The response’s HTTP status code.

## Declaration

```objectivec
@property (readonly) NSInteger statusCode;
```

<a id="Discussion"></a>

## Discussion

See [RFC 2616](http://www.ietf.org/rfc/rfc2616.txt) for details.

## See Also

### Getting response status codes

- [localizedStringForStatusCode:](localizedstring%28forstatuscode_%29.md): Returns a localized string corresponding to a specified HTTP status code.
