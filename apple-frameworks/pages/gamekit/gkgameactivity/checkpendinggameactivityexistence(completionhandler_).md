> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgameactivity/checkpendinggameactivityexistence(completionhandler:)](https://developer.apple.com/documentation/gamekit/gkgameactivity/checkpendinggameactivityexistence(completionhandler:))

# checkPendingGameActivityExistence(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Checks whether there is a pending activity to handle for the current game.

## Declaration

```swift
class func checkPendingGameActivityExistence(completionHandler: @escaping @Sendable (Bool) -> Void)
```

```swift
class var hasPendingGameActivities: Bool { get async }
```

<a id="discussion"></a>

## Discussion

You can call this method before you initialize Game Center to avoid activating the system banner or welcome experience.

# checkPendingGameActivityExistenceWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Checks whether there is a pending activity to handle for the current game.

## Declaration

```objectivec
+ (void) checkPendingGameActivityExistenceWithCompletionHandler:(void (^)(BOOL )) completionHandler;
```

<a id="discussion"></a>

## Discussion

You can call this method before you initialize Game Center to avoid activating the system banner or welcome experience.
