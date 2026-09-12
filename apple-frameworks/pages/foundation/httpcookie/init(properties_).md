> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpcookie/init(properties:)](https://developer.apple.com/documentation/foundation/httpcookie/init(properties:))

# init(properties:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes an HTTP cookie object with the given cookie properties.

## Declaration

```swift
init?(properties: [HTTPCookiePropertyKey : Any])
```

## Parameters

- `properties`: The properties for the new cookie object, expressed as key-value pairs.

<a id="return-value"></a>

## Return Value

A new cookie object, with the given properies.

<a id="Discussion"></a>

## Discussion

This initializer returns `nil` if the provided properties are invalid. To successfully create a cookie, you must provide values for (at least) the [path](../httpcookiepropertykey/path.md), [name](../httpcookiepropertykey/name.md), and [value](../httpcookiepropertykey/value.md) keys, and either the [originURL](../httpcookiepropertykey/originurl.md) key or the [domain](../httpcookiepropertykey/domain.md) key.

See Accepting cookies for more information on the available cookie attribute constants and the constraints imposed on the values in the dictionary.

## See Also

### Creating cookies

- [cookies(withResponseHeaderFields:for:)](cookies%28withresponseheaderfields_for_%29.md): Creates an array of HTTP cookies that corresponds to the provided response header fields for the provided URL.

# initWithProperties: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes an HTTP cookie object with the given cookie properties.

## Declaration

```objectivec
- (instancetype) initWithProperties:(NSDictionary<NSString *,id> *) properties;
```

## Parameters

- `properties`: The properties for the new cookie object, expressed as key-value pairs.

<a id="return-value"></a>

## Return Value

A new cookie object, with the given properies.

<a id="Discussion"></a>

## Discussion

This initializer returns `nil` if the provided properties are invalid. To successfully create a cookie, you must provide values for (at least) the [NSHTTPCookiePath](../httpcookiepropertykey/path.md), [NSHTTPCookieName](../httpcookiepropertykey/name.md), and [NSHTTPCookieValue](../httpcookiepropertykey/value.md) keys, and either the [NSHTTPCookieOriginURL](../httpcookiepropertykey/originurl.md) key or the [NSHTTPCookieDomain](../httpcookiepropertykey/domain.md) key.

See Accepting cookies for more information on the available cookie attribute constants and the constraints imposed on the values in the dictionary.

## See Also

### Related Documentation

- [cookieWithProperties:](../nshttpcookie/cookiewithproperties_.md): Creates and initializes an HTTP cookie object using the provided properties.

### Creating cookies

- [cookiesWithResponseHeaderFields:forURL:](cookies%28withresponseheaderfields_for_%29.md): Creates an array of HTTP cookies that corresponds to the provided response header fields for the provided URL.
- [cookieWithProperties:](../nshttpcookie/cookiewithproperties_.md): Creates and initializes an HTTP cookie object using the provided properties.
