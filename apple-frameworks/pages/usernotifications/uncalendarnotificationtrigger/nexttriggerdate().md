> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usernotifications/uncalendarnotificationtrigger/nexttriggerdate()

# nextTriggerDate() (Swift)

**Framework:** User Notifications  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The next date at which the trigger conditions are met.

## Declaration

```swift
func nextTriggerDate() -> Date?
```

<a id="return-value"></a>

## Return Value

The next trigger date.

<a id="Discussion"></a>

## Discussion

Use this property to find out when the system will deliver a notification associated with this trigger.

## See Also

### Getting the Trigger Information

- [dateComponents](datecomponents.md): The date components to construct this object.

# nextTriggerDate (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The next date at which the trigger conditions are met.

## Declaration

```objectivec
- (NSDate *) nextTriggerDate;
```

<a id="return-value"></a>

## Return Value

The next trigger date.

<a id="Discussion"></a>

## Discussion

Use this property to find out when the system will deliver a notification associated with this trigger.

## See Also

### Getting the Trigger Information

- [dateComponents](datecomponents.md): The date components to construct this object.
