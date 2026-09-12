> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/isprotecteddataavailable](https://developer.apple.com/documentation/uikit/uiapplication/isprotecteddataavailable)

# isProtectedDataAvailable (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether content protection is active.

## Declaration

```swift
nonisolated var isProtectedDataAvailable: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [false](https://developer.apple.com/documentation/swift/false) if data protection is enabled and the device is currently locked. The value of this property is set to [true](https://developer.apple.com/documentation/swift/true) if the device is unlocked or if content protection is not enabled.

When the value of this property is [false](https://developer.apple.com/documentation/swift/false), files that were assigned the [complete](../../foundation/fileprotectiontype/complete.md) or [completeUnlessOpen](../../foundation/fileprotectiontype/completeunlessopen.md) protection key cannot be read or written by your app. The user must unlock the device before your app can access them.

## See Also

### Accessing protected content

- [protectedDataDidBecomeAvailableNotification](protecteddatadidbecomeavailablenotification.md): A notification that posts when the protected files become available for your code to access.
- [protectedDataWillBecomeUnavailableNotification](protecteddatawillbecomeunavailablenotification.md): A notification that posts shortly before protected files are locked down and become inaccessible.

# protectedDataAvailable (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether content protection is active.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isProtectedDataAvailable) BOOL protectedDataAvailable;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [false](https://developer.apple.com/documentation/swift/false) if data protection is enabled and the device is currently locked. The value of this property is set to [true](https://developer.apple.com/documentation/swift/true) if the device is unlocked or if content protection is not enabled.

When the value of this property is [false](https://developer.apple.com/documentation/swift/false), files that were assigned the [NSFileProtectionComplete](../../foundation/fileprotectiontype/complete.md) or [NSFileProtectionCompleteUnlessOpen](../../foundation/fileprotectiontype/completeunlessopen.md) protection key cannot be read or written by your app. The user must unlock the device before your app can access them.

## See Also

### Accessing protected content

- [UIApplicationProtectedDataDidBecomeAvailable](protecteddatadidbecomeavailablenotification.md): A notification that posts when the protected files become available for your code to access.
- [UIApplicationProtectedDataWillBecomeUnavailable](protecteddatawillbecomeunavailablenotification.md): A notification that posts shortly before protected files are locked down and become inaccessible.
