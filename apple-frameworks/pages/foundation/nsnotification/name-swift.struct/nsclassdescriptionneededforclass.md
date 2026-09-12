> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/nsclassdescriptionneededforclass](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/nsclassdescriptionneededforclass)

# NSClassDescriptionNeededForClass (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Posted by [init(for:)](../../nsclassdescription/init%28for_%29.md) when a class description cannot be found for a class.

## Declaration

```swift
static let NSClassDescriptionNeededForClass: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

After the notification is processed, [init(for:)](../../nsclassdescription/init%28for_%29.md) checks for a class description again. This checking allows an observer to register class descriptions lazily. The notification is posted only once for any given class, even if the class description remains undefined.

The notification object is the class object for which the class description is requested. This notification does not contain a `userInfo` dictionary.

# NSClassDescriptionNeededForClassNotification (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Posted by [classDescriptionForClass:](../../nsclassdescription/init%28for_%29.md) when a class description cannot be found for a class.

## Declaration

```objectivec
extern NSNotificationName const NSClassDescriptionNeededForClassNotification;
```

<a id="Discussion"></a>

## Discussion

After the notification is processed, [classDescriptionForClass:](../../nsclassdescription/init%28for_%29.md) checks for a class description again. This checking allows an observer to register class descriptions lazily. The notification is posted only once for any given class, even if the class description remains undefined.

The notification object is the class object for which the class description is requested. This notification does not contain a `userInfo` dictionary.
