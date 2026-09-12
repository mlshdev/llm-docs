> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmerror/cannotactivatetriggertoofarinfuture](https://developer.apple.com/documentation/homekit/hmerror/cannotactivatetriggertoofarinfuture)

# cannotActivateTriggerTooFarInFuture

**Framework:** HomeKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An error indicating the trigger cannot be activated because it is set too far in the future.

## Declaration

```swift
static var cannotActivateTriggerTooFarInFuture: HMError.Code { get }
```

## See Also

### Detecting limit errors

- [dateMustBeOnSpecifiedBoundaries](datemustbeonspecifiedboundaries.md): An error indicating the date is not on the specified boundaries.
- [fireDateInPast](firedateinpast.md): An attempt to activate a timer trigger with a date in the past.
- [invalidMessageSize](invalidmessagesize.md): An error indicating an invalid message size.
- [maximumObjectLimitReached](maximumobjectlimitreached.md): An error indicating the maximum object count has been reached.
- [recurrenceTooLarge](recurrencetoolarge.md): An attempt to use a recurrence period that is too large.
- [recurrenceTooSmall](recurrencetoosmall.md): An error indicating the recurrence interval is too short.
- [recurrenceMustBeOnSpecifiedBoundaries](recurrencemustbeonspecifiedboundaries.md): An error indicating the recurrence rule is not on the specified boundaries.
