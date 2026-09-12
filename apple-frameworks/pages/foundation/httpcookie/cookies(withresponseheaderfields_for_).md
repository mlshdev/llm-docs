> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpcookie/cookies(withresponseheaderfields:for:)](https://developer.apple.com/documentation/foundation/httpcookie/cookies(withresponseheaderfields:for:))

# cookies(withResponseHeaderFields:for:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an array of HTTP cookies that corresponds to the provided response header fields for the provided URL.

## Declaration

```swift
class func cookies(withResponseHeaderFields headerFields: [String : String], for URL: URL) -> [HTTPCookie]
```

## Parameters

- `headerFields`: The header fields used to create the [HTTPCookie](../httpcookie.md) objects.
- `URL`: The URL associated with the created cookies.

<a id="return-value"></a>

## Return Value

The array of created cookies.

<a id="Discussion"></a>

## Discussion

This method ignores irrelevant header fields in `headerFields`, allowing dictionaries to contain additional data.

If `headerFields` doesn’t specify a domain for a given cookie, the cookie is created with a default domain value of `URL`.

If `headerFields` doesn’t specify a path for a given cookie, the cookie is created with a default path value of `"/"`.

## See Also

### Creating cookies

- [init(properties:)](init%28properties_%29.md): Initializes an HTTP cookie object with the given cookie properties.

# cookiesWithResponseHeaderFields:forURL: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an array of HTTP cookies that corresponds to the provided response header fields for the provided URL.

## Declaration

```objectivec
+ (NSArray<NSHTTPCookie *> *) cookiesWithResponseHeaderFields:(NSDictionary<NSString *,NSString *> *) headerFields forURL:(NSURL *) URL;
```

## Parameters

- `headerFields`: The header fields used to create the [NSHTTPCookie](../httpcookie.md) objects.
- `URL`: The URL associated with the created cookies.

<a id="return-value"></a>

## Return Value

The array of created cookies.

<a id="Discussion"></a>

## Discussion

This method ignores irrelevant header fields in `headerFields`, allowing dictionaries to contain additional data.

If `headerFields` doesn’t specify a domain for a given cookie, the cookie is created with a default domain value of `URL`.

If `headerFields` doesn’t specify a path for a given cookie, the cookie is created with a default path value of `"/"`.

## See Also

### Creating cookies

- [cookieWithProperties:](../nshttpcookie/cookiewithproperties_.md): Creates and initializes an HTTP cookie object using the provided properties.
- [initWithProperties:](init%28properties_%29.md): Initializes an HTTP cookie object with the given cookie properties.
