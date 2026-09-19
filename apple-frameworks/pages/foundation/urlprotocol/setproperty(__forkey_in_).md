> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/urlprotocol/setproperty(_:forkey:in:)

# setProperty(\_:forKey:in:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the property associated with the specified key in the specified request.

## Declaration

```swift
class func setProperty(_ value: Any, forKey key: String, in request: NSMutableURLRequest)
```

## Parameters

- `value`: The value to set for the specified property.
- `key`: The key for the specified property.
- `request`: The request for which to create the property.

<a id="Discussion"></a>

## Discussion

Use this method to provide an interface for protocol implementors to customize protocol-specific information associated with [URLRequest](../urlrequest.md) objects.

## See Also

### Getting and setting request properties

- [property(forKey:in:)](property%28forkey_in_%29.md): Fetches the property associated with the specified key in the specified request.
- [removeProperty(forKey:in:)](removeproperty%28forkey_in_%29.md): Removes the property associated with the specified key in the specified request.

# setProperty:forKey:inRequest: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the property associated with the specified key in the specified request.

## Declaration

```objectivec
+ (void) setProperty:(id) value forKey:(NSString *) key inRequest:(NSMutableURLRequest *) request;
```

## Parameters

- `value`: The value to set for the specified property.
- `key`: The key for the specified property.
- `request`: The request for which to create the property.

<a id="Discussion"></a>

## Discussion

Use this method to provide an interface for protocol implementors to customize protocol-specific information associated with [URLRequest](../urlrequest.md) objects.

## See Also

### Getting and setting request properties

- [propertyForKey:inRequest:](property%28forkey_in_%29.md): Fetches the property associated with the specified key in the specified request.
- [removePropertyForKey:inRequest:](removeproperty%28forkey_in_%29.md): Removes the property associated with the specified key in the specified request.
