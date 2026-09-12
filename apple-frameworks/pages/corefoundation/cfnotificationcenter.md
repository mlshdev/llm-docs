> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfnotificationcenter](https://developer.apple.com/documentation/corefoundation/cfnotificationcenter)

# CFNotificationCenter (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFNotificationCenter
```

<a id="Overview"></a>

## Overview

A CFNotificationCenter object provides the means by which you can send a message, or notification, to any number of recipients, or observers, without having to know anything about the recipients. A notification message consists of a notification name (a CFString), a pointer value that identifies the object posting the notification, and an optional dictionary that contains additional information about the particular notification.

To register as an observer of a notification, you call [CFNotificationCenterAddObserver(\_:\_:\_:\_:\_:\_:)](cfnotificationcenteraddobserver%28____________%29.md), providing an identifier for your observer, the callback function that should be called when the notification is posted, and the name of the notification and the object in which you are interested. The observer identifier is passed back to the callback function, along with the notification information. You can use the identifier to distinguish multiple observers using the same callback function. The identifier is also used to unregister the observer with [CFNotificationCenterRemoveObserver(\_:\_:\_:\_:)](cfnotificationcenterremoveobserver%28________%29.md) and [CFNotificationCenterRemoveEveryObserver(\_:\_:)](cfnotificationcenterremoveeveryobserver%28____%29.md).

To send a notification, you call [CFNotificationCenterPostNotification(\_:\_:\_:\_:\_:)](cfnotificationcenterpostnotification%28__________%29.md), passing in the notification information. The notification center then looks up all the observers that registered for this notification and sends the notification information to their callback functions.

There are three types of CFNotificationCenter—a distributed notification center, a local notification center, and a Darwin notification center—an application may have at most one of each type. The distributed notification is obtained with [CFNotificationCenterGetDistributedCenter()](cfnotificationcentergetdistributedcenter%28%29.md). A distributed notification center delivers notifications between applications. In this case, the notification object must always be a CFString object and the notification dictionary must contain only property list values. The local and Darwin notification centers are available in macOS 10.4 and later, and obtained using [CFNotificationCenterGetLocalCenter()](cfnotificationcentergetlocalcenter%28%29.md) and [CFNotificationCenterGetDarwinNotifyCenter()](cfnotificationcentergetdarwinnotifycenter%28%29.md) respectively.

Unlike some other Core Foundation opaque types with names similar to a Cocoa Foundation class (such as CFString and `NSString`), CFNotificationCenter objects cannot be cast (“toll-free bridged”) to [NotificationCenter](../foundation/notificationcenter.md) objects or vice-versa.

## Topics

### Accessing a Notification Center

- [CFNotificationCenterGetDarwinNotifyCenter()](cfnotificationcentergetdarwinnotifycenter%28%29.md): Returns the application’s Darwin notification center.
- [CFNotificationCenterGetDistributedCenter()](cfnotificationcentergetdistributedcenter%28%29.md): Returns the application’s distributed notification center.
- [CFNotificationCenterGetLocalCenter()](cfnotificationcentergetlocalcenter%28%29.md): Returns the application’s local notification center.

### Posting a Notification

- [CFNotificationCenterPostNotification(\_:\_:\_:\_:\_:)](cfnotificationcenterpostnotification%28__________%29.md): Posts a notification for an object.
- [CFNotificationCenterPostNotificationWithOptions(\_:\_:\_:\_:\_:)](cfnotificationcenterpostnotificationwithoptions%28__________%29.md): Posts a notification for an object using specified options.

### Adding and Removing Observers

- [CFNotificationCenterAddObserver(\_:\_:\_:\_:\_:\_:)](cfnotificationcenteraddobserver%28____________%29.md): Registers an observer to receive notifications.
- [CFNotificationCenterRemoveEveryObserver(\_:\_:)](cfnotificationcenterremoveeveryobserver%28____%29.md): Stops an observer from receiving any notifications from any object.
- [CFNotificationCenterRemoveObserver(\_:\_:\_:\_:)](cfnotificationcenterremoveobserver%28________%29.md): Stops an observer from receiving certain notifications.

### Getting the CFNotificationCenter Type ID

- [CFNotificationCenterGetTypeID()](cfnotificationcentergettypeid%28%29.md): Returns the type identifier for the CFNotificationCenter opaque type.

### Callbacks

- [CFNotificationCallback](cfnotificationcallback.md): Callback function invoked for each observer of a notification when the notification is posted.

### Constants

- [CFNotificationSuspensionBehavior](cfnotificationsuspensionbehavior.md): Suspension flags that indicate how distributed notifications should be handled when the receiving application is in the background.
- [Notification Posting Options](1569610-notification-posting-options.md): Possible options when posting notifications.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Related Documentation

- [Notification Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Notifications/Introduction/introNotifications.html#//apple_ref/doc/uid/10000043i)

### Opaque Types

- [CFAllocator](cfallocator.md)
- [CFArray](cfarray.md)
- [CFAttributedString](cfattributedstring.md)
- [CFBag](cfbag.md)
- [CFBinaryHeap](cfbinaryheap.md)
- [CFBitVector](cfbitvector.md)
- [CFBoolean](cfboolean.md)
- [CFBundle](cfbundle.md)
- [CFCalendar](cfcalendar.md)
- [CFCharacterSet](cfcharacterset.md)
- [CFData](cfdata.md)
- [CFDate](cfdate.md)
- [CFDateFormatter](cfdateformatter.md)
- [CFDictionary](cfdictionary.md)
- [CFError](cferror.md)

# CFNotificationCenterRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef struct __CFNotificationCenter * CFNotificationCenterRef;
```

<a id="Overview"></a>

## Overview

A CFNotificationCenter object provides the means by which you can send a message, or notification, to any number of recipients, or observers, without having to know anything about the recipients. A notification message consists of a notification name (a CFString), a pointer value that identifies the object posting the notification, and an optional dictionary that contains additional information about the particular notification.

To register as an observer of a notification, you call [CFNotificationCenterAddObserver](cfnotificationcenteraddobserver%28____________%29.md), providing an identifier for your observer, the callback function that should be called when the notification is posted, and the name of the notification and the object in which you are interested. The observer identifier is passed back to the callback function, along with the notification information. You can use the identifier to distinguish multiple observers using the same callback function. The identifier is also used to unregister the observer with [CFNotificationCenterRemoveObserver](cfnotificationcenterremoveobserver%28________%29.md) and [CFNotificationCenterRemoveEveryObserver](cfnotificationcenterremoveeveryobserver%28____%29.md).

To send a notification, you call [CFNotificationCenterPostNotification](cfnotificationcenterpostnotification%28__________%29.md), passing in the notification information. The notification center then looks up all the observers that registered for this notification and sends the notification information to their callback functions.

There are three types of CFNotificationCenter—a distributed notification center, a local notification center, and a Darwin notification center—an application may have at most one of each type. The distributed notification is obtained with [CFNotificationCenterGetDistributedCenter](cfnotificationcentergetdistributedcenter%28%29.md). A distributed notification center delivers notifications between applications. In this case, the notification object must always be a CFString object and the notification dictionary must contain only property list values. The local and Darwin notification centers are available in macOS 10.4 and later, and obtained using [CFNotificationCenterGetLocalCenter](cfnotificationcentergetlocalcenter%28%29.md) and [CFNotificationCenterGetDarwinNotifyCenter](cfnotificationcentergetdarwinnotifycenter%28%29.md) respectively.

Unlike some other Core Foundation opaque types with names similar to a Cocoa Foundation class (such as CFString and `NSString`), CFNotificationCenter objects cannot be cast (“toll-free bridged”) to [NSNotificationCenter](../foundation/notificationcenter.md) objects or vice-versa.

## Topics

### Accessing a Notification Center

- [CFNotificationCenterGetDarwinNotifyCenter](cfnotificationcentergetdarwinnotifycenter%28%29.md): Returns the application’s Darwin notification center.
- [CFNotificationCenterGetDistributedCenter](cfnotificationcentergetdistributedcenter%28%29.md): Returns the application’s distributed notification center.
- [CFNotificationCenterGetLocalCenter](cfnotificationcentergetlocalcenter%28%29.md): Returns the application’s local notification center.

### Posting a Notification

- [CFNotificationCenterPostNotification](cfnotificationcenterpostnotification%28__________%29.md): Posts a notification for an object.
- [CFNotificationCenterPostNotificationWithOptions](cfnotificationcenterpostnotificationwithoptions%28__________%29.md): Posts a notification for an object using specified options.

### Adding and Removing Observers

- [CFNotificationCenterAddObserver](cfnotificationcenteraddobserver%28____________%29.md): Registers an observer to receive notifications.
- [CFNotificationCenterRemoveEveryObserver](cfnotificationcenterremoveeveryobserver%28____%29.md): Stops an observer from receiving any notifications from any object.
- [CFNotificationCenterRemoveObserver](cfnotificationcenterremoveobserver%28________%29.md): Stops an observer from receiving certain notifications.

### Getting the CFNotificationCenter Type ID

- [CFNotificationCenterGetTypeID](cfnotificationcentergettypeid%28%29.md): Returns the type identifier for the CFNotificationCenter opaque type.

### Callbacks

- [CFNotificationCallback](cfnotificationcallback.md): Callback function invoked for each observer of a notification when the notification is posted.

### Constants

- [CFNotificationSuspensionBehavior](cfnotificationsuspensionbehavior.md): Suspension flags that indicate how distributed notifications should be handled when the receiving application is in the background.
- [Notification Posting Options](1569610-notification-posting-options.md): Possible options when posting notifications.

## See Also

### Related Documentation

- [Notification Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Notifications/Introduction/introNotifications.html#//apple_ref/doc/uid/10000043i)

### Opaque Types

- [CFAllocatorRef](cfallocator.md)
- [CFArrayRef](cfarray.md)
- [CFAttributedStringRef](cfattributedstring.md)
- [CFBagRef](cfbag.md)
- [CFBinaryHeapRef](cfbinaryheap.md)
- [CFBitVectorRef](cfbitvector.md)
- [CFBooleanRef](cfboolean.md)
- [CFBundleRef](cfbundle.md)
- [CFCalendarRef](cfcalendar.md)
- [CFCharacterSetRef](cfcharacterset.md)
- [CFDataRef](cfdata.md)
- [CFDateRef](cfdate.md)
- [CFDateFormatterRef](cfdateformatter.md)
- [CFDictionaryRef](cfdictionary.md)
- [CFErrorRef](cferror.md)
