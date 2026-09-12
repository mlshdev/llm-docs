> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlprotocol/property(forkey:in:)](https://developer.apple.com/documentation/foundation/urlprotocol/property(forkey:in:))

# property(forKey:in:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Fetches the property associated with the specified key in the specified request.

## Declaration

```swift
class func property(forKey key: String, in request: URLRequest) -> Any?
```

## Parameters

- `key`: The key of the desired property.
- `request`: The request whose properties are to be queried.

<a id="return-value"></a>

## Return Value

The property associated with `key`, or `nil` if no property has been stored for `key`.

<a id="Discussion"></a>

## Discussion

Use this method to access protocol-specific information associated with [URLRequest](../urlrequest.md) objects.

## See Also

### Getting and setting request properties

- [setProperty(\_:forKey:in:)](setproperty%28__forkey_in_%29.md): Sets the property associated with the specified key in the specified request.
- [removeProperty(forKey:in:)](removeproperty%28forkey_in_%29.md): Removes the property associated with the specified key in the specified request.

# propertyForKey:inRequest: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Fetches the property associated with the specified key in the specified request.

## Declaration

```objectivec
+ (id) propertyForKey:(NSString *) key inRequest:(NSURLRequest *) request;
```

## Parameters

- `key`: The key of the desired property.
- `request`: The request whose properties are to be queried.

<a id="return-value"></a>

## Return Value

The property associated with `key`, or `nil` if no property has been stored for `key`.

<a id="Discussion"></a>

## Discussion

Use this method to access protocol-specific information associated with [URLRequest](../urlrequest.md) objects.

## See Also

### Getting and setting request properties

- [setProperty:forKey:inRequest:](setproperty%28__forkey_in_%29.md): Sets the property associated with the specified key in the specified request.
- [removePropertyForKey:inRequest:](removeproperty%28forkey_in_%29.md): Removes the property associated with the specified key in the specified request.
