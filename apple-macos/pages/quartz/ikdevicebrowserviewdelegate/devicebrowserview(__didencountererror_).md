> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikdevicebrowserviewdelegate/devicebrowserview(_:didencountererror:)](https://developer.apple.com/documentation/quartz/ikdevicebrowserviewdelegate/devicebrowserview(_:didencountererror:))

# deviceBrowserView(\_:didEncounterError:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Invoked when the device browser encounters an error.

## Declaration

```swift
optional func deviceBrowserView(_ deviceBrowserView: IKDeviceBrowserView!, didEncounterError error: (any Error)!)
```

## Parameters

- `deviceBrowserView`: The object that sent the message.
- `error`: The error the device browser encountered.

<a id="Discussion"></a>

## Discussion

The user should handle the error in some fashion, for example, presenting an error panel to the user.

# deviceBrowserView:didEncounterError: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Invoked when the device browser encounters an error.

## Declaration

```objectivec
- (void) deviceBrowserView:(IKDeviceBrowserView *) deviceBrowserView didEncounterError:(NSError *) error;
```

## Parameters

- `deviceBrowserView`: The object that sent the message.
- `error`: The error the device browser encountered.

<a id="Discussion"></a>

## Discussion

The user should handle the error in some fashion, for example, presenting an error panel to the user.
