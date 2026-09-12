> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamesession/remove(listener:)](https://developer.apple.com/documentation/gamekit/gkgamesession/remove(listener:))

# remove(listener:) (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Stops listening to the event listener object.

## Declaration

```swift
class func remove(listener: any GKGameSessionEventListener)
```

## Parameters

- `listener`: The `GKGameSessionEventListener` that is to be removed.

## See Also

### Listening for Events

- [add(listener:)](add%28listener_%29.md): Deprecated. Adds a new event listener object.

# removeEventListener: (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Stops listening to the event listener object.

## Declaration

```objectivec
+ (void) removeEventListener:(NSObject<GKGameSessionEventListener> *) listener;
```

## Parameters

- `listener`: The `GKGameSessionEventListener` that is to be removed.

## See Also

### Listening for Events

- [addEventListener:](add%28listener_%29.md): Deprecated. Adds a new event listener object.
