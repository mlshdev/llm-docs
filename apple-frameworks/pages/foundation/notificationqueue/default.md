> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/notificationqueue/default

# default (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the default notification queue for the current thread.

## Declaration

```swift
class var `default`: NotificationQueue { get }
```

<a id="return-value"></a>

## Return Value

Returns the default notification queue for the current thread.

<a id="Discussion"></a>

## Discussion

This notification queue uses the default notification center.

# defaultQueue (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the default notification queue for the current thread.

## Declaration

```objectivec
@property (class, strong, readonly) NSNotificationQueue * defaultQueue;
```

<a id="return-value"></a>

## Return Value

Returns the default notification queue for the current thread.

<a id="Discussion"></a>

## Discussion

This notification queue uses the default notification center.
