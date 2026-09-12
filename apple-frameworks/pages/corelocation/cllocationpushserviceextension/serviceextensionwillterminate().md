> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationpushserviceextension/serviceextensionwillterminate()](https://developer.apple.com/documentation/corelocation/cllocationpushserviceextension/serviceextensionwillterminate())

# serviceExtensionWillTerminate() (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Notifies your app extension that the system is about to terminate the extension because it’s taking too long to complete its task.

## Declaration

```swift
optional func serviceExtensionWillTerminate()
```

<a id="Discussion"></a>

## Discussion

If your [didReceiveLocationPushPayload(\_:completion:)](didreceivelocationpushpayload%28__completion_%29.md) method takes too long to collect a location and call its completion block, the system calls this method on the main thread. Use this method to execute the completion block from [didReceiveLocationPushPayload(\_:completion:)](didreceivelocationpushpayload%28__completion_%29.md) as quickly as possible.

# serviceExtensionWillTerminate (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+

Notifies your app extension that the system is about to terminate the extension because it’s taking too long to complete its task.

## Declaration

```objectivec
- (void) serviceExtensionWillTerminate;
```

<a id="Discussion"></a>

## Discussion

If your [didReceiveLocationPushPayload:completion:](didreceivelocationpushpayload%28__completion_%29.md) method takes too long to collect a location and call its completion block, the system calls this method on the main thread. Use this method to execute the completion block from [didReceiveLocationPushPayload:completion:](didreceivelocationpushpayload%28__completion_%29.md) as quickly as possible.
