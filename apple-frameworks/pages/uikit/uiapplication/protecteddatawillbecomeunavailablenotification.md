> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/protecteddatawillbecomeunavailablenotification](https://developer.apple.com/documentation/uikit/uiapplication/protecteddatawillbecomeunavailablenotification)

# protectedDataWillBecomeUnavailableNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that posts shortly before protected files are locked down and become inaccessible.

## Declaration

```swift
nonisolated class let protectedDataWillBecomeUnavailableNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

Upon receiving this notification, clients should release any references to protected files. This notification does not contain a `userInfo` dictionary.

## See Also

### Accessing protected content

- [isProtectedDataAvailable](isprotecteddataavailable.md): A Boolean value that indicates whether content protection is active.
- [protectedDataDidBecomeAvailableNotification](protecteddatadidbecomeavailablenotification.md): A notification that posts when the protected files become available for your code to access.

# UIApplicationProtectedDataWillBecomeUnavailable (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that posts shortly before protected files are locked down and become inaccessible.

## Declaration

```objectivec
extern NSNotificationName const UIApplicationProtectedDataWillBecomeUnavailable;
```

<a id="Discussion"></a>

## Discussion

Upon receiving this notification, clients should release any references to protected files. This notification does not contain a `userInfo` dictionary.

## See Also

### Accessing protected content

- [protectedDataAvailable](isprotecteddataavailable.md): A Boolean value that indicates whether content protection is active.
- [UIApplicationProtectedDataDidBecomeAvailable](protecteddatadidbecomeavailablenotification.md): A notification that posts when the protected files become available for your code to access.
