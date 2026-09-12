> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inupcomingmediamanager/shared](https://developer.apple.com/documentation/intents/inupcomingmediamanager/shared)

# shared (Swift)

**Framework:** Intents  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

The shared upcoming media manager.

## Declaration

```swift
class var shared: INUpcomingMediaManager { get }
```

<a id="Discussion"></a>

## Discussion

Always use the shared upcoming media manager instead of creating an instance of [INUpcomingMediaManager](../inupcomingmediamanager.md) with an initializer method.

# sharedManager (Objective-C)

**Framework:** Intents  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

The shared upcoming media manager.

## Declaration

```objectivec
@property (class, nonatomic, readonly) INUpcomingMediaManager * sharedManager;
```

```objectivec
@property (class, atomic, readonly) INUpcomingMediaManager * sharedManager;
```

<a id="Discussion"></a>

## Discussion

Always use the shared upcoming media manager instead of creating an instance of [INUpcomingMediaManager](../inupcomingmediamanager.md) with an initializer method.
