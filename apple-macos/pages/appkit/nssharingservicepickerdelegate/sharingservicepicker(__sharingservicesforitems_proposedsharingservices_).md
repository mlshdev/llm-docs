> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservicepickerdelegate/sharingservicepicker(_:sharingservicesforitems:proposedsharingservices:)](https://developer.apple.com/documentation/appkit/nssharingservicepickerdelegate/sharingservicepicker(_:sharingservicesforitems:proposedsharingservices:))

# sharingServicePicker(\_:sharingServicesForItems:proposedSharingServices:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Asks the delegate to specify which services to make available from the sharing service picker.

## Declaration

```swift
optional func sharingServicePicker(_ sharingServicePicker: NSSharingServicePicker, sharingServicesForItems items: [Any], proposedSharingServices proposedServices: [NSSharingService]) -> [NSSharingService]
```

## Parameters

- `sharingServicePicker`: The sharing service picker.
- `items`: The items to share. Use the set of items to determine which services are relevant.
- `proposedServices`: The proposed services to include in the sharing service picker.

<a id="return-value"></a>

## Return Value

An array of services to include in the sharing service picker.

<a id="Discussion"></a>

## Discussion

Use this method to remove default services, add custom services, or reorder the existing services before the picker appears onscreen. Unless you don’t intend to change the proposed services, create a new mutable array and fill it with the services that are appropriate for the specified set of items. The following example appends a custom [NSSharingService](../nssharingservice.md) object to the proposed list of services.

```objc
        NSMutableArray *sharingServices = [proposedServices mutableCopy];
        NSSharingService * customService = [[[NSSharingService alloc]   initWithTitle:@"Service Title"
                                                                        image:image alternateImage:alternateImage
                                                                        handler:^{
                                                                            [self doCustomServiceWithItems:items];
                                           }] autorelease];
        [sharingServices addObject:customService];
        return [sharingServices autorelease];
```

# sharingServicePicker:sharingServicesForItems:proposedSharingServices: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Asks the delegate to specify which services to make available from the sharing service picker.

## Declaration

```objectivec
- (NSArray<NSSharingService *> *) sharingServicePicker:(NSSharingServicePicker *) sharingServicePicker sharingServicesForItems:(NSArray *) items proposedSharingServices:(NSArray<NSSharingService *> *) proposedServices;
```

## Parameters

- `sharingServicePicker`: The sharing service picker.
- `items`: The items to share. Use the set of items to determine which services are relevant.
- `proposedServices`: The proposed services to include in the sharing service picker.

<a id="return-value"></a>

## Return Value

An array of services to include in the sharing service picker.

<a id="Discussion"></a>

## Discussion

Use this method to remove default services, add custom services, or reorder the existing services before the picker appears onscreen. Unless you don’t intend to change the proposed services, create a new mutable array and fill it with the services that are appropriate for the specified set of items. The following example appends a custom [NSSharingService](../nssharingservice.md) object to the proposed list of services.

```objc
        NSMutableArray *sharingServices = [proposedServices mutableCopy];
        NSSharingService * customService = [[[NSSharingService alloc]   initWithTitle:@"Service Title"
                                                                        image:image alternateImage:alternateImage
                                                                        handler:^{
                                                                            [self doCustomServiceWithItems:items];
                                           }] autorelease];
        [sharingServices addObject:customService];
        return [sharingServices autorelease];
```
