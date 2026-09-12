> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservicepickerdelegate/sharingservicepicker(_:delegatefor:)](https://developer.apple.com/documentation/appkit/nssharingservicepickerdelegate/sharingservicepicker(_:delegatefor:))

# sharingServicePicker(\_:delegateFor:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Asks your delegate to provide an object that the selected sharing service can use as its delegate.

## Declaration

```swift
optional func sharingServicePicker(_ sharingServicePicker: NSSharingServicePicker, delegateFor sharingService: NSSharingService) -> (any NSSharingServiceDelegate)?
```

## Parameters

- `sharingServicePicker`: The sharing service picker.
- `sharingService`: The selected sharing service.

<a id="return-value"></a>

## Return Value

An object that adopts the [NSSharingServiceDelegate](../nssharingservicedelegate.md) protocol.

<a id="Discussion"></a>

## Discussion

The sharing service assigns the returned object to its [delegate](../nssharingservice/delegate.md) property.

## See Also

### Customizing Behavior

- [sharingServicePicker(\_:didChoose:)](sharingservicepicker%28__didchoose_%29.md): Tells the delegate that the person selected a sharing service for the current item.

# sharingServicePicker:delegateForSharingService: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Asks your delegate to provide an object that the selected sharing service can use as its delegate.

## Declaration

```objectivec
- (id<NSSharingServiceDelegate>) sharingServicePicker:(NSSharingServicePicker *) sharingServicePicker delegateForSharingService:(NSSharingService *) sharingService;
```

## Parameters

- `sharingServicePicker`: The sharing service picker.
- `sharingService`: The selected sharing service.

<a id="return-value"></a>

## Return Value

An object that adopts the [NSSharingServiceDelegate](../nssharingservicedelegate.md) protocol.

<a id="Discussion"></a>

## Discussion

The sharing service assigns the returned object to its [delegate](../nssharingservice/delegate.md) property.

## See Also

### Customizing Behavior

- [sharingServicePicker:didChooseSharingService:](sharingservicepicker%28__didchoose_%29.md): Tells the delegate that the person selected a sharing service for the current item.
