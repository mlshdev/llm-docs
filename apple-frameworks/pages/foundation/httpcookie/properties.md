> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpcookie/properties](https://developer.apple.com/documentation/foundation/httpcookie/properties)

# properties (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The cookie’s properties.

## Declaration

```swift
var properties: [HTTPCookiePropertyKey : Any]? { get }
```

<a id="Discussion"></a>

## Discussion

This dictionary can be used with [init(properties:)](init%28properties_%29.md) (or [cookieWithProperties:](../nshttpcookie/cookiewithproperties_.md) in Objective-C) to create an equivalent [HTTPCookie](../httpcookie.md) object.

See [init(properties:)](init%28properties_%29.md) for more information on the constraints imposed on the `properties` dictionary.

## See Also

### Accessing cookie properties as key-value pairs

- [HTTPCookiePropertyKey](../httpcookiepropertykey.md): Constants that define the supported keys in a cookie attributes dictionary.

# properties (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The cookie’s properties.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDictionary<NSString *,id> * properties;
```

<a id="Discussion"></a>

## Discussion

This dictionary can be used with [initWithProperties:](init%28properties_%29.md) (or [cookieWithProperties:](../nshttpcookie/cookiewithproperties_.md) in Objective-C) to create an equivalent [NSHTTPCookie](../httpcookie.md) object.

See [initWithProperties:](init%28properties_%29.md) for more information on the constraints imposed on the `properties` dictionary.

## See Also

### Accessing cookie properties as key-value pairs

- [NSHTTPCookiePropertyKey](../httpcookiepropertykey.md): Constants that define the supported keys in a cookie attributes dictionary.
