> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpurlresponse/localizedstring(forstatuscode:)](https://developer.apple.com/documentation/foundation/httpurlresponse/localizedstring(forstatuscode:))

# localizedString(forStatusCode:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a localized string corresponding to a specified HTTP status code.

## Declaration

```swift
class func localizedString(forStatusCode statusCode: Int) -> String
```

## Parameters

- `statusCode`: The HTTP status code. See [RFC 2616](http://www.ietf.org/rfc/rfc2616.txt) for details.

<a id="return-value"></a>

## Return Value

A localized string suitable for displaying to users that describes the specified status code.

## See Also

### Getting response status codes

- [statusCode](statuscode.md): The response’s HTTP status code.

# localizedStringForStatusCode: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a localized string corresponding to a specified HTTP status code.

## Declaration

```objectivec
+ (NSString *) localizedStringForStatusCode:(NSInteger) statusCode;
```

## Parameters

- `statusCode`: The HTTP status code. See [RFC 2616](http://www.ietf.org/rfc/rfc2616.txt) for details.

<a id="return-value"></a>

## Return Value

A localized string suitable for displaying to users that describes the specified status code.

## See Also

### Getting response status codes

- [statusCode](statuscode.md): The response’s HTTP status code.
