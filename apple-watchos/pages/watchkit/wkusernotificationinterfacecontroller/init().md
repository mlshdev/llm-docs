> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkusernotificationinterfacecontroller/init()](https://developer.apple.com/documentation/watchkit/wkusernotificationinterfacecontroller/init())

# init() (Swift)

**Framework:** WatchKit  
**Kind:** Initializer  
**Availability:** watchOS 2.0+

Initializes and returns the interface controller using the specified remote notification data.

## Declaration

```swift
init()
```

<a id="return-value"></a>

## Return Value

The initialized interface controller.

<a id="Discussion"></a>

## Discussion

Use this method to initialize your notification interface controller and prepare it for display. You must call the `super` implementation of this method first. That method creates the interface objects for the outlets declared in your class and referencing items in your storyboard.

At some point after initialization, WatchKit calls the `didReceiveRemoteNotification(_:withCompletion:)` or `didReceive(_:withCompletion:)` method to deliver the notification payload.

## See Also

### Related Documentation

- [App Programming Guide for watchOS](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/index.html#//apple_ref/doc/uid/TP40014969)

# init (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Initializes and returns the interface controller using the specified remote notification data.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="return-value"></a>

## Return Value

The initialized interface controller.

<a id="Discussion"></a>

## Discussion

Use this method to initialize your notification interface controller and prepare it for display. You must call the `super` implementation of this method first. That method creates the interface objects for the outlets declared in your class and referencing items in your storyboard.

At some point after initialization, WatchKit calls the `didReceiveRemoteNotification(_:withCompletion:)` or `didReceive(_:withCompletion:)` method to deliver the notification payload.

## See Also

### Related Documentation

- [App Programming Guide for watchOS](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/index.html#//apple_ref/doc/uid/TP40014969)
