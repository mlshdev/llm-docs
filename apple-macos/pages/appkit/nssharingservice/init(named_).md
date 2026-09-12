> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservice/init(named:)](https://developer.apple.com/documentation/appkit/nssharingservice/init(named:))

# init(named:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.8+

Returns a sharing service instance representing the specified service name.

## Declaration

```swift
init?(named serviceName: NSSharingService.Name)
```

## Parameters

- `serviceName`: The service name. The possible system provided values are listed in `Available Sharing Services`.

<a id="return-value"></a>

## Return Value

An instance of `NSSharingService` for the specified service name.

## See Also

### Related Documentation

- [sharingServices(forItems:)](sharingservices%28foritems_%29.md): Deprecated. Returns a list of sharing services which could share all the provided items together.
- [canPerform(withItems:)](canperform%28withitems_%29.md): Returns whether the service can share all the specified items.

### Creating a Sharing Service

- [init(title:image:alternateImage:handler:)](init%28title_image_alternateimage_handler_%29.md): Creates a custom sharing service object.
- [NSSharingService.Name](name.md): Constants that describe the sharing services that macOS supports.

# sharingServiceNamed: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.8+

Returns a sharing service instance representing the specified service name.

## Declaration

```objectivec
+ (NSSharingService *) sharingServiceNamed:(NSSharingServiceName) serviceName;
```

## Parameters

- `serviceName`: The service name. The possible system provided values are listed in `Available Sharing Services`.

<a id="return-value"></a>

## Return Value

An instance of `NSSharingService` for the specified service name.

## See Also

### Related Documentation

- [sharingServicesForItems:](sharingservices%28foritems_%29.md): Deprecated. Returns a list of sharing services which could share all the provided items together.
- [canPerformWithItems:](canperform%28withitems_%29.md): Returns whether the service can share all the specified items.

### Creating a Sharing Service

- [initWithTitle:image:alternateImage:handler:](init%28title_image_alternateimage_handler_%29.md): Creates a custom sharing service object.
- [NSSharingServiceName](name.md): Constants that describe the sharing services that macOS supports.
