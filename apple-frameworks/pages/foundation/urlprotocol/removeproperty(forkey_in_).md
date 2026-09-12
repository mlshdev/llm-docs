> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlprotocol/removeproperty(forkey:in:)](https://developer.apple.com/documentation/foundation/urlprotocol/removeproperty(forkey:in:))

# removeProperty(forKey:in:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the property associated with the specified key in the specified request.

## Declaration

```swift
class func removeProperty(forKey key: String, in request: NSMutableURLRequest)
```

## Parameters

- `key`: The key whose value should be removed.
- `request`: The request from which to remove the property value.

<a id="Discussion"></a>

## Discussion

This method is used to provide an interface for protocol implementors to customize protocol-specific information associated with [URLRequest](../urlrequest.md) objects, or [NSMutableURLRequest](../nsmutableurlrequest.md) objects in Objective-C.

## See Also

### Getting and setting request properties

- [property(forKey:in:)](property%28forkey_in_%29.md): Fetches the property associated with the specified key in the specified request.
- [setProperty(\_:forKey:in:)](setproperty%28__forkey_in_%29.md): Sets the property associated with the specified key in the specified request.

# removePropertyForKey:inRequest: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the property associated with the specified key in the specified request.

## Declaration

```objectivec
+ (void) removePropertyForKey:(NSString *) key inRequest:(NSMutableURLRequest *) request;
```

## Parameters

- `key`: The key whose value should be removed.
- `request`: The request from which to remove the property value.

<a id="Discussion"></a>

## Discussion

This method is used to provide an interface for protocol implementors to customize protocol-specific information associated with [URLRequest](../urlrequest.md) objects, or [NSMutableURLRequest](../nsmutableurlrequest.md) objects in Objective-C.

## See Also

### Getting and setting request properties

- [propertyForKey:inRequest:](property%28forkey_in_%29.md): Fetches the property associated with the specified key in the specified request.
- [setProperty:forKey:inRequest:](setproperty%28__forkey_in_%29.md): Sets the property associated with the specified key in the specified request.
