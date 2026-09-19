> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiapplication/protecteddatadidbecomeavailablenotification

# protectedDataDidBecomeAvailableNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that posts when the protected files become available for your code to access.

## Declaration

```swift
nonisolated class let protectedDataDidBecomeAvailableNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

This notification does not contain a `userInfo` dictionary.

## See Also

### Accessing protected content

- [isProtectedDataAvailable](isprotecteddataavailable.md): A Boolean value that indicates whether content protection is active.
- [protectedDataWillBecomeUnavailableNotification](protecteddatawillbecomeunavailablenotification.md): A notification that posts shortly before protected files are locked down and become inaccessible.

# UIApplicationProtectedDataDidBecomeAvailable (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that posts when the protected files become available for your code to access.

## Declaration

```objectivec
extern NSNotificationName const UIApplicationProtectedDataDidBecomeAvailable;
```

<a id="Discussion"></a>

## Discussion

This notification does not contain a `userInfo` dictionary.

## See Also

### Accessing protected content

- [protectedDataAvailable](isprotecteddataavailable.md): A Boolean value that indicates whether content protection is active.
- [UIApplicationProtectedDataWillBecomeUnavailable](protecteddatawillbecomeunavailablenotification.md): A notification that posts shortly before protected files are locked down and become inaccessible.
