> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uipointerlockstate/islocked

# isLocked (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A Boolean value that indicates whether the pointer is locked.

## Declaration

```swift
var isLocked: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This value reflects the status of the pointer lock for the scene, as determined by the system. A view controller specifies its preferred pointer lock value, but the system may not honor the request.

This property is key-value observable. The [didChangeNotification](didchangenotification.md) is posted when it changes.

# locked (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A Boolean value that indicates whether the pointer is locked.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isLocked) BOOL locked;
```

<a id="Discussion"></a>

## Discussion

This value reflects the status of the pointer lock for the scene, as determined by the system. A view controller specifies its preferred pointer lock value, but the system may not honor the request.

This property is key-value observable. The [UIPointerLockStateDidChangeNotification](didchangenotification.md) is posted when it changes.
