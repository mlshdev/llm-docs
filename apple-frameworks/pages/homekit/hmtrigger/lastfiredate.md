> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmtrigger/lastfiredate](https://developer.apple.com/documentation/homekit/hmtrigger/lastfiredate)

# lastFireDate (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 17.0) · iPadOS 8.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · tvOS 10.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 10.0)

The last time this trigger fired.

> This property is no longer supported.

## Declaration

```swift
var lastFireDate: Date? { get }
```

<a id="Discussion"></a>

## Discussion

`nil` if the trigger has never fired.

## See Also

### Managing Triggers

- [name](name.md): The name of the trigger.
- [updateName(\_:completionHandler:)](updatename%28__completionhandler_%29.md): Updates the name of the trigger.
- [isEnabled](isenabled.md): State of the trigger.
- [enable(\_:completionHandler:)](enable%28__completionhandler_%29.md): Changes the enabled state of the trigger.
- [uniqueIdentifier](uniqueidentifier.md): A unique identifier for this trigger.

# lastFireDate (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 17.0) · iPadOS 8.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · tvOS 10.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 10.0)

The last time this trigger fired.

> This property is no longer supported.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDate * lastFireDate;
```

<a id="Discussion"></a>

## Discussion

`nil` if the trigger has never fired.

## See Also

### Managing Triggers

- [name](name.md): The name of the trigger.
- [updateName:completionHandler:](updatename%28__completionhandler_%29.md): Updates the name of the trigger.
- [enabled](isenabled.md): State of the trigger.
- [enable:completionHandler:](enable%28__completionhandler_%29.md): Changes the enabled state of the trigger.
- [uniqueIdentifier](uniqueidentifier.md): A unique identifier for this trigger.
