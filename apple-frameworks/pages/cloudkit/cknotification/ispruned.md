> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cknotification/ispruned](https://developer.apple.com/documentation/cloudkit/cknotification/ispruned)

# isPruned (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether the system removes some push notification content before delivery.

## Declaration

```swift
var isPruned: Bool { get }
```

<a id="discussion"></a>

## Discussion

The server may truncate the payload data of a push notification if the size of that data exceeds the allowed maximum. For notifications you create using a payload dictionary, the value of this property is [true](https://developer.apple.com/documentation/swift/true) if the payload data doesn’t contain all information regarding the change. The value is [false](https://developer.apple.com/documentation/swift/false) if the payload data is complete.

For notifications you fetch from the database using a `CKFetchNotificationChangesOperation` operation, this property’s value is always [true](https://developer.apple.com/documentation/swift/true).

When CloudKit must remove payload data, it removes it in a specific order. This class’s properties are among the last that CloudKit removes because they define information about how to deliver the push notification. The following list shows the properties that CloudKit removes, and the order for removing them:

1. [containerIdentifier](containeridentifier.md)
2. Keys that subclasses of `CKNotification` define.
3. [soundName](soundname.md)
4. [alertLaunchImage](alertlaunchimage.md)
5. [alertActionLocalizationKey](alertactionlocalizationkey.md)
6. [alertBody](alertbody.md)
7. [alertLocalizationArgs](alertlocalizationargs.md)
8. [alertLocalizationKey](alertlocalizationkey.md)
9. [badge](badge.md)
10. [notificationID](notificationid.md)

# isPruned (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether the system removes some push notification content before delivery.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL isPruned;
```

<a id="discussion"></a>

## Discussion

The server may truncate the payload data of a push notification if the size of that data exceeds the allowed maximum. For notifications you create using a payload dictionary, the value of this property is [true](https://developer.apple.com/documentation/swift/true) if the payload data doesn’t contain all information regarding the change. The value is [false](https://developer.apple.com/documentation/swift/false) if the payload data is complete.

For notifications you fetch from the database using a `CKFetchNotificationChangesOperation` operation, this property’s value is always [true](https://developer.apple.com/documentation/swift/true).

When CloudKit must remove payload data, it removes it in a specific order. This class’s properties are among the last that CloudKit removes because they define information about how to deliver the push notification. The following list shows the properties that CloudKit removes, and the order for removing them:

1. [containerIdentifier](containeridentifier.md)
2. Keys that subclasses of `CKNotification` define.
3. [soundName](soundname.md)
4. [alertLaunchImage](alertlaunchimage.md)
5. [alertActionLocalizationKey](alertactionlocalizationkey.md)
6. [alertBody](alertbody.md)
7. [alertLocalizationArgs](alertlocalizationargs.md)
8. [alertLocalizationKey](alertlocalizationkey.md)
9. [badge](badge.md)
10. [notificationID](notificationid.md)
