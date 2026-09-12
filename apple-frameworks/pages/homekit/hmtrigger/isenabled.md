> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmtrigger/isenabled](https://developer.apple.com/documentation/homekit/hmtrigger/isenabled)

# isEnabled (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

State of the trigger.

## Declaration

```swift
var isEnabled: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Triggers that are not enabled never fire.

## See Also

### Managing Triggers

- [name](name.md): The name of the trigger.
- [updateName(\_:completionHandler:)](updatename%28__completionhandler_%29.md): Updates the name of the trigger.
- [enable(\_:completionHandler:)](enable%28__completionhandler_%29.md): Changes the enabled state of the trigger.
- [lastFireDate](lastfiredate.md): Deprecated. The last time this trigger fired.
- [uniqueIdentifier](uniqueidentifier.md): A unique identifier for this trigger.

# enabled (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

State of the trigger.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isEnabled) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

Triggers that are not enabled never fire.

## See Also

### Managing Triggers

- [name](name.md): The name of the trigger.
- [updateName:completionHandler:](updatename%28__completionhandler_%29.md): Updates the name of the trigger.
- [enable:completionHandler:](enable%28__completionhandler_%29.md): Changes the enabled state of the trigger.
- [lastFireDate](lastfiredate.md): Deprecated. The last time this trigger fired.
- [uniqueIdentifier](uniqueidentifier.md): A unique identifier for this trigger.
