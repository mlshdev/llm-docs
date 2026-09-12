> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservicepickerdelegate/sharingservicepicker(_:didchoose:)](https://developer.apple.com/documentation/appkit/nssharingservicepickerdelegate/sharingservicepicker(_:didchoose:))

# sharingServicePicker(\_:didChoose:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Tells the delegate that the person selected a sharing service for the current item.

## Declaration

```swift
optional func sharingServicePicker(_ sharingServicePicker: NSSharingServicePicker, didChoose service: NSSharingService?)
```

## Parameters

- `sharingServicePicker`: The sharing service picker.
- `service`: The selected sharing service. Invoked to give the delegate to the sharing service that is about to be executed.

<a id="Discussion"></a>

## Discussion

After someone chooses a service, the sharing service picker calls this method to let you know which service they picked. The sharing service receives the item sometime after this method returns.

## See Also

### Customizing Behavior

- [sharingServicePicker(\_:delegateFor:)](sharingservicepicker%28__delegatefor_%29.md): Asks your delegate to provide an object that the selected sharing service can use as its delegate.

# sharingServicePicker:didChooseSharingService: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the person selected a sharing service for the current item.

## Declaration

```objectivec
- (void) sharingServicePicker:(NSSharingServicePicker *) sharingServicePicker didChooseSharingService:(NSSharingService *) service;
```

## Parameters

- `sharingServicePicker`: The sharing service picker.
- `service`: The selected sharing service. Invoked to give the delegate to the sharing service that is about to be executed.

<a id="Discussion"></a>

## Discussion

After someone chooses a service, the sharing service picker calls this method to let you know which service they picked. The sharing service receives the item sometime after this method returns.

## See Also

### Customizing Behavior

- [sharingServicePicker:delegateForSharingService:](sharingservicepicker%28__delegatefor_%29.md): Asks your delegate to provide an object that the selected sharing service can use as its delegate.
