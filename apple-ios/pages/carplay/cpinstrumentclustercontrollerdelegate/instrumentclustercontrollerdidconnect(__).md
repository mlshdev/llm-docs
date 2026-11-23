> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpinstrumentclustercontrollerdelegate/instrumentclustercontrollerdidconnect(_:)

# instrumentClusterControllerDidConnect(\_:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

Tells the delegate that there’s a new window for displaying your content.

## Declaration

```swift
func instrumentClusterControllerDidConnect(_ instrumentClusterWindow: UIWindow)
```

## Parameters

- `instrumentClusterWindow`: The window object for displaying your content. Install the view controller with your custom content in the window’s [rootViewController](https://developer.apple.com/documentation/uikit/uiwindow/rootviewcontroller) property.

<a id="discussion"></a>

## Discussion

The system creates the window as part of the initial scene setup. However, when you assign a new delegate object to the [delegate](../cpinstrumentclustercontroller/delegate.md) property of the controller, the system calls this method on your delegate object to give it a chance to handle the event.

## See Also

### Responding to life-cycle events

- [instrumentClusterControllerDidDisconnectWindow(\_:)](instrumentclustercontrollerdiddisconnectwindow%28__%29.md): Tells the delegate that the system removed the window you use to draw your content.

# instrumentClusterControllerDidConnectWindow: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

Tells the delegate that there’s a new window for displaying your content.

## Declaration

```objectivec
- (void) instrumentClusterControllerDidConnectWindow:(UIWindow *) instrumentClusterWindow;
```

## Parameters

- `instrumentClusterWindow`: The window object for displaying your content. Install the view controller with your custom content in the window’s [rootViewController](https://developer.apple.com/documentation/uikit/uiwindow/rootviewcontroller) property.

<a id="discussion"></a>

## Discussion

The system creates the window as part of the initial scene setup. However, when you assign a new delegate object to the [delegate](../cpinstrumentclustercontroller/delegate.md) property of the controller, the system calls this method on your delegate object to give it a chance to handle the event.

## See Also

### Responding to life-cycle events

- [instrumentClusterControllerDidDisconnectWindow:](instrumentclustercontrollerdiddisconnectwindow%28__%29.md): Tells the delegate that the system removed the window you use to draw your content.
