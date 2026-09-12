> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmtrigger/uniqueidentifier](https://developer.apple.com/documentation/homekit/hmtrigger/uniqueidentifier)

# uniqueIdentifier (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A unique identifier for this trigger.

## Declaration

```swift
var uniqueIdentifier: UUID { get }
```

## See Also

### Managing Triggers

- [name](name.md): The name of the trigger.
- [updateName(\_:completionHandler:)](updatename%28__completionhandler_%29.md): Updates the name of the trigger.
- [isEnabled](isenabled.md): State of the trigger.
- [enable(\_:completionHandler:)](enable%28__completionhandler_%29.md): Changes the enabled state of the trigger.
- [lastFireDate](lastfiredate.md): Deprecated. The last time this trigger fired.

# uniqueIdentifier (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A unique identifier for this trigger.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSUUID * uniqueIdentifier;
```

## See Also

### Managing Triggers

- [name](name.md): The name of the trigger.
- [updateName:completionHandler:](updatename%28__completionhandler_%29.md): Updates the name of the trigger.
- [enabled](isenabled.md): State of the trigger.
- [enable:completionHandler:](enable%28__completionhandler_%29.md): Changes the enabled state of the trigger.
- [lastFireDate](lastfiredate.md): Deprecated. The last time this trigger fired.
