> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usernotifications/unnotification/date

# date (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The delivery date of the notification.

## Declaration

```swift
var date: Date { get }
```

<a id="Discussion"></a>

## Discussion

The system displays this date to the user in Notification Center.

## See Also

### Getting the Notification Details

- [request](request.md): The notification request containing the payload and trigger condition for the notification.

# date (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The delivery date of the notification.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSDate * date;
```

```objectivec
@property (atomic, copy, readonly) NSDate * date;
```

<a id="Discussion"></a>

## Discussion

The system displays this date to the user in Notification Center.

## See Also

### Getting the Notification Details

- [request](request.md): The notification request containing the payload and trigger condition for the notification.
