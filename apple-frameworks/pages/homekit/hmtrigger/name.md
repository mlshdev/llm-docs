> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmtrigger/name](https://developer.apple.com/documentation/homekit/hmtrigger/name)

# name (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The name of the trigger.

## Declaration

```swift
var name: String { get }
```

<a id="Discussion"></a>

## Discussion

Trigger names should be set by the user.

## See Also

### Related Documentation

- [HomeKit Developer Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/HomeKitDeveloperGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40015050)

### Managing Triggers

- [updateName(\_:completionHandler:)](updatename%28__completionhandler_%29.md): Updates the name of the trigger.
- [isEnabled](isenabled.md): State of the trigger.
- [enable(\_:completionHandler:)](enable%28__completionhandler_%29.md): Changes the enabled state of the trigger.
- [lastFireDate](lastfiredate.md): Deprecated. The last time this trigger fired.
- [uniqueIdentifier](uniqueidentifier.md): A unique identifier for this trigger.

# name (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The name of the trigger.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * name;
```

<a id="Discussion"></a>

## Discussion

Trigger names should be set by the user.

## See Also

### Related Documentation

- [HomeKit Developer Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/HomeKitDeveloperGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40015050)

### Managing Triggers

- [updateName:completionHandler:](updatename%28__completionhandler_%29.md): Updates the name of the trigger.
- [enabled](isenabled.md): State of the trigger.
- [enable:completionHandler:](enable%28__completionhandler_%29.md): Changes the enabled state of the trigger.
- [lastFireDate](lastfiredate.md): Deprecated. The last time this trigger fired.
- [uniqueIdentifier](uniqueidentifier.md): A unique identifier for this trigger.
