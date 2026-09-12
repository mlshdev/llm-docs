> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/uncalendarnotificationtrigger/datecomponents](https://developer.apple.com/documentation/usernotifications/uncalendarnotificationtrigger/datecomponents)

# dateComponents (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The date components to construct this object.

## Declaration

```swift
var dateComponents: DateComponents { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to review the date components associated with this trigger.

## See Also

### Getting the Trigger Information

- [nextTriggerDate()](nexttriggerdate%28%29.md): The next date at which the trigger conditions are met.

# dateComponents (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The date components to construct this object.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSDateComponents * dateComponents;
```

```objectivec
@property (atomic, copy, readonly) NSDateComponents * dateComponents;
```

<a id="Discussion"></a>

## Discussion

Use this property to review the date components associated with this trigger.

## See Also

### Getting the Trigger Information

- [nextTriggerDate](nexttriggerdate%28%29.md): The next date at which the trigger conditions are met.
