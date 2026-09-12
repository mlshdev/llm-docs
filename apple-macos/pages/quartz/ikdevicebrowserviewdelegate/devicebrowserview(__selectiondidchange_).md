> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikdevicebrowserviewdelegate/devicebrowserview(_:selectiondidchange:)](https://developer.apple.com/documentation/quartz/ikdevicebrowserviewdelegate/devicebrowserview(_:selectiondidchange:))

# deviceBrowserView(\_:selectionDidChange:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Sent to the delegate when the selection changes in the browser view.

## Declaration

```swift
func deviceBrowserView(_ deviceBrowserView: IKDeviceBrowserView!, selectionDidChange device: ICDevice!)
```

## Parameters

- `deviceBrowserView`: The object that sent the message.
- `device`: The newly selected device.

# deviceBrowserView:selectionDidChange: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Sent to the delegate when the selection changes in the browser view.

## Declaration

```objectivec
- (void) deviceBrowserView:(IKDeviceBrowserView *) deviceBrowserView selectionDidChange:(ICDevice *) device;
```

## Parameters

- `deviceBrowserView`: The object that sent the message.
- `device`: The newly selected device.
