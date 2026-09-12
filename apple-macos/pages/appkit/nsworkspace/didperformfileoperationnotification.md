> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/didperformfileoperationnotification](https://developer.apple.com/documentation/appkit/nsworkspace/didperformfileoperationnotification)

# didPerformFileOperationNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Posted when a file operation has been performed in the receiving app.

## Declaration

```swift
class let didPerformFileOperationNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the shared `NSWorkspace` instance. The `userInfo` dictionary contains a key `@"NSOperationNumber"` with a `NSNumber` object containing an integer indicating the type of file operation

# NSWorkspaceDidPerformFileOperationNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Posted when a file operation has been performed in the receiving app.

## Declaration

```objectivec
extern NSNotificationName NSWorkspaceDidPerformFileOperationNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the shared `NSWorkspace` instance. The `userInfo` dictionary contains a key `@"NSOperationNumber"` with a `NSNumber` object containing an integer indicating the type of file operation
