> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservice/sharingservices(foritems:)](https://developer.apple.com/documentation/appkit/nssharingservice/sharingservices(foritems:))

# sharingServices(forItems:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.8+ (deprecated in 13.0)

Returns a list of sharing services which could share all the provided items together.

> Use -\[NSSharingServicePicker standardShareMenuItem\] instead.

## Declaration

```swift
class func sharingServices(forItems items: [Any]) -> [NSSharingService]
```

## Parameters

- `items`: The items to share.

<a id="return-value"></a>

## Return Value

An array of sharing services to allow for `items`.

<a id="Discussion"></a>

## Discussion

This method can be used to build a custom user interface or to populate a contextual menu.

## See Also

### Related Documentation

- [init(named:)](init%28named_%29.md): Returns a sharing service instance representing the specified service name.

### Querying Service Availability

- [canPerform(withItems:)](canperform%28withitems_%29.md): Returns whether the service can share all the specified items.

# sharingServicesForItems: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.8+ (deprecated in 13.0)

Returns a list of sharing services which could share all the provided items together.

> Use -\[NSSharingServicePicker standardShareMenuItem\] instead.

## Declaration

```objectivec
+ (NSArray<NSSharingService *> *) sharingServicesForItems:(NSArray *) items;
```

## Parameters

- `items`: The items to share.

<a id="return-value"></a>

## Return Value

An array of sharing services to allow for `items`.

<a id="Discussion"></a>

## Discussion

This method can be used to build a custom user interface or to populate a contextual menu.

## See Also

### Related Documentation

- [sharingServiceNamed:](init%28named_%29.md): Returns a sharing service instance representing the specified service name.

### Querying Service Availability

- [canPerformWithItems:](canperform%28withitems_%29.md): Returns whether the service can share all the specified items.
