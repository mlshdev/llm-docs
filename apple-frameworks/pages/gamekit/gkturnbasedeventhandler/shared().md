> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedeventhandler/shared()](https://developer.apple.com/documentation/gamekit/gkturnbasedeventhandler/shared())

# shared() (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 5.0+ (deprecated in 7.0) · iPadOS 5.0+ (deprecated in 7.0) · Mac Catalyst 5.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Returns the shared instance of the event handler.

## Declaration

```swift
class func shared() -> GKTurnBasedEventHandler
```

<a id="return-value"></a>

## Return Value

An event handler object.

<a id="Discussion"></a>

## Discussion

Your game never directly creates a [GKTurnBasedEventHandler](../gkturnbasedeventhandler.md) object. Instead, retrieve the shared instance using this class method.

# sharedTurnBasedEventHandler (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 5.0+ (deprecated in 7.0) · iPadOS 5.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Returns the shared instance of the event handler.

## Declaration

```objectivec
+ (GKTurnBasedEventHandler *) sharedTurnBasedEventHandler;
```

<a id="return-value"></a>

## Return Value

An event handler object.

<a id="Discussion"></a>

## Discussion

Your game never directly creates a [GKTurnBasedEventHandler](../gkturnbasedeventhandler.md) object. Instead, retrieve the shared instance using this class method.
