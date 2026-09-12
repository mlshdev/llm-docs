> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nshttpcookie/cookiewithproperties:](https://developer.apple.com/documentation/foundation/nshttpcookie/cookiewithproperties:)

# cookieWithProperties:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and initializes an HTTP cookie object using the provided properties.

## Declaration

```objectivec
+ (NSHTTPCookie *) cookieWithProperties:(NSDictionary<NSString *,id> *) properties;
```

## Parameters

- `properties`: The properties for the new cookie object, expressed as key value pairs.

<a id="return-value"></a>

## Return Value

The newly created cookie object. Returns `nil` if the provided properties are invalid.

<a id="Discussion"></a>

## Discussion

To successfully create a cookie, you must provide values for (at least) the [NSHTTPCookiePath](../httpcookiepropertykey/path.md), [NSHTTPCookieName](../httpcookiepropertykey/name.md), and [NSHTTPCookieValue](../httpcookiepropertykey/value.md) keys, and either the [NSHTTPCookieOriginURL](../httpcookiepropertykey/originurl.md) key or the [NSHTTPCookieDomain](../httpcookiepropertykey/domain.md) key.

See Accepting cookies for more information on the available cookie attribute constants and the constraints imposed on the values in the dictionary.

## See Also

### Creating cookies

- [cookiesWithResponseHeaderFields:forURL:](../httpcookie/cookies%28withresponseheaderfields_for_%29.md): Creates an array of HTTP cookies that corresponds to the provided response header fields for the provided URL.
- [initWithProperties:](../httpcookie/init%28properties_%29.md): Initializes an HTTP cookie object with the given cookie properties.
