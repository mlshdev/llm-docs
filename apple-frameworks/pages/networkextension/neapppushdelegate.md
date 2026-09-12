> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neapppushdelegate](https://developer.apple.com/documentation/networkextension/neapppushdelegate)

# NEAppPushDelegate (Swift)

**Framework:** Network Extension  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A protocol that defines how an app push manager instance interacts with the framework.

## Declaration

```swift
protocol NEAppPushDelegate : NSObjectProtocol
```

## Topics

### Receiving calls

- [appPushManager(\_:didReceiveIncomingCallWithUserInfo:)](neapppushdelegate/apppushmanager%28__didreceiveincomingcallwithuserinfo_%29.md): A delegate method that the framework invokes when the provider reports an incoming call.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Working with a delegate

- [delegate](neapppushmanager/delegate.md): A delegate that receives incoming call information from the provider.

# NEAppPushDelegate (Objective-C)

**Framework:** Network Extension  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A protocol that defines how an app push manager instance interacts with the framework.

## Declaration

```objectivec
@protocol NEAppPushDelegate <NSObject>
```

## Topics

### Receiving calls

- [appPushManager:didReceiveIncomingCallWithUserInfo:](neapppushdelegate/apppushmanager%28__didreceiveincomingcallwithuserinfo_%29.md): A delegate method that the framework invokes when the provider reports an incoming call.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Working with a delegate

- [delegate](neapppushmanager/delegate.md): A delegate that receives incoming call information from the provider.
