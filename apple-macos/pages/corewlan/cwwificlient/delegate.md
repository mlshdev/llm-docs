> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwwificlient/delegate](https://developer.apple.com/documentation/corewlan/cwwificlient/delegate)

# delegate (Swift)

**Framework:** Core WLAN  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

An object that provides Wi-Fi event handling.

## Declaration

```swift
weak var delegate: AnyObject? { get set }
```

<a id="Discussion"></a>

## Discussion

When a client registers for Wi-Fi events with the [startMonitoringEvent(with:)](startmonitoringevent%28with_%29.md) method, the client’s delegate receives messages in response to Wi-Fi events. The delegate should adopt the [CWEventDelegate](../cweventdelegate.md) protocol to receive these messages.

# delegate (Objective-C)

**Framework:** Core WLAN  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

An object that provides Wi-Fi event handling.

## Declaration

```objectivec
@property (nonatomic, weak) id delegate;
```

<a id="Discussion"></a>

## Discussion

When a client registers for Wi-Fi events with the [startMonitoringEventWithType:error:](startmonitoringevent%28with_%29.md) method, the client’s delegate receives messages in response to Wi-Fi events. The delegate should adopt the [CWEventDelegate](../cweventdelegate.md) protocol to receive these messages.
