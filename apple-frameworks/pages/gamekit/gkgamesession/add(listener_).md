> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamesession/add(listener:)](https://developer.apple.com/documentation/gamekit/gkgamesession/add(listener:))

# add(listener:) (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Adds a new event listener object.

## Declaration

```swift
class func add(listener: any GKGameSessionEventListener)
```

## Parameters

- `listener`: The `GKGameSessionEventLister` object being listened for.

## See Also

### Listening for Events

- [remove(listener:)](remove%28listener_%29.md): Deprecated. Stops listening to the event listener object.

# addEventListener: (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Adds a new event listener object.

## Declaration

```objectivec
+ (void) addEventListener:(NSObject<GKGameSessionEventListener> *) listener;
```

## Parameters

- `listener`: The `GKGameSessionEventLister` object being listened for.

## See Also

### Listening for Events

- [removeEventListener:](remove%28listener_%29.md): Deprecated. Stops listening to the event listener object.
