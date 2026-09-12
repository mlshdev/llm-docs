> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/nsubiquityidentitydidchange](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/nsubiquityidentitydidchange)

# NSUbiquityIdentityDidChange (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent after the iCloud (“ubiquity”) identity has changed.

## Declaration

```swift
static let NSUbiquityIdentityDidChange: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The system generates this notification when the user logs into or out of an iCloud account or enables or disables the syncing of documents and data. This notification is your cue to update caches and any interface elements displaying iCloud–related content. For example, hide all references to iCloud files when the user logs out of iCloud.

When your app receives this notification, get the new token from the [ubiquityIdentityToken](../../filemanager/ubiquityidentitytoken.md) instance property. The value of that token is `nil` if the user disabled iCloud or logged out. There is no `userInfo` dictionary.

# NSUbiquityIdentityDidChangeNotification (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent after the iCloud (“ubiquity”) identity has changed.

## Declaration

```objectivec
extern NSNotificationName const NSUbiquityIdentityDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

The system generates this notification when the user logs into or out of an iCloud account or enables or disables the syncing of documents and data. This notification is your cue to update caches and any interface elements displaying iCloud–related content. For example, hide all references to iCloud files when the user logs out of iCloud.

When your app receives this notification, get the new token from the [ubiquityIdentityToken](../../filemanager/ubiquityidentitytoken.md) instance property. The value of that token is `nil` if the user disabled iCloud or logged out. There is no `userInfo` dictionary.
