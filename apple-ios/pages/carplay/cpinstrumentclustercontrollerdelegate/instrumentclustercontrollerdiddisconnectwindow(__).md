> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpinstrumentclustercontrollerdelegate/instrumentclustercontrollerdiddisconnectwindow(_:)

# instrumentClusterControllerDidDisconnectWindow(\_:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

Tells the delegate that the system removed the window you use to draw your content.

## Declaration

```swift
func instrumentClusterControllerDidDisconnectWindow(_ instrumentClusterWindow: UIWindow)
```

## Parameters

- `instrumentClusterWindow`: The window that the system removed. This parameter can be `nil`.

<a id="discussion"></a>

## Discussion

When CarPlay stops displaying your content in the instrument cluster, it removes the window and calls this method. In your implementation, perform any needed cleanup of your app-specific content.

## See Also

### Responding to life-cycle events

- [instrumentClusterControllerDidConnect(\_:)](instrumentclustercontrollerdidconnect%28__%29.md): Tells the delegate that there’s a new window for displaying your content.

# instrumentClusterControllerDidDisconnectWindow: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

Tells the delegate that the system removed the window you use to draw your content.

## Declaration

```objectivec
- (void) instrumentClusterControllerDidDisconnectWindow:(UIWindow *) instrumentClusterWindow;
```

## Parameters

- `instrumentClusterWindow`: The window that the system removed. This parameter can be `nil`.

<a id="discussion"></a>

## Discussion

When CarPlay stops displaying your content in the instrument cluster, it removes the window and calls this method. In your implementation, perform any needed cleanup of your app-specific content.

## See Also

### Responding to life-cycle events

- [instrumentClusterControllerDidConnectWindow:](instrumentclustercontrollerdidconnect%28__%29.md): Tells the delegate that there’s a new window for displaying your content.
