> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservice/init(title:image:alternateimage:handler:)](https://developer.apple.com/documentation/appkit/nssharingservice/init(title:image:alternateimage:handler:))

# init(title:image:alternateImage:handler:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.8+

Creates a custom sharing service object.

## Declaration

```swift
init(title: String, image: NSImage, alternateImage: NSImage?, handler block: @escaping () -> Void)
```

## Parameters

- `title`: The custom sharing service name.
- `image`: The image that represents the sharing service
- `alternateImage`: The alternate image that represents the sharing service
- `block`: The block that actually interacts with the service.

<a id="return-value"></a>

## Return Value

An instance of the custom sharing object.

<a id="Discussion"></a>

## Discussion

Custom sharing services can be added to the [NSSharingServicePicker](../nssharingservicepicker.md) with the [sharingServicePicker(\_:sharingServicesForItems:proposedSharingServices:)](../nssharingservicepickerdelegate/sharingservicepicker%28__sharingservicesforitems_proposedsharingservices_%29.md) delegate method.

When implementing this method, consider subclassing `NSSharingService` so the [canPerform(withItems:)](canperform%28withitems_%29.md) and [sharingServices(forItems:)](sharingservices%28foritems_%29.md) can provide accurate results.

## See Also

### Creating a Sharing Service

- [init(named:)](init%28named_%29.md): Returns a sharing service instance representing the specified service name.
- [NSSharingService.Name](name.md): Constants that describe the sharing services that macOS supports.

# initWithTitle:image:alternateImage:handler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Creates a custom sharing service object.

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title image:(NSImage *) image alternateImage:(NSImage *) alternateImage handler:(void (^)()) block;
```

## Parameters

- `title`: The custom sharing service name.
- `image`: The image that represents the sharing service
- `alternateImage`: The alternate image that represents the sharing service
- `block`: The block that actually interacts with the service.

<a id="return-value"></a>

## Return Value

An instance of the custom sharing object.

<a id="Discussion"></a>

## Discussion

Custom sharing services can be added to the [NSSharingServicePicker](../nssharingservicepicker.md) with the [sharingServicePicker:sharingServicesForItems:proposedSharingServices:](../nssharingservicepickerdelegate/sharingservicepicker%28__sharingservicesforitems_proposedsharingservices_%29.md) delegate method.

When implementing this method, consider subclassing `NSSharingService` so the [canPerformWithItems:](canperform%28withitems_%29.md) and [sharingServicesForItems:](sharingservices%28foritems_%29.md) can provide accurate results.

## See Also

### Creating a Sharing Service

- [sharingServiceNamed:](init%28named_%29.md): Returns a sharing service instance representing the specified service name.
- [NSSharingServiceName](name.md): Constants that describe the sharing services that macOS supports.
