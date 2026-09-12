> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gceventinteraction/receiveseventsinview](https://developer.apple.com/documentation/gamecontroller/gceventinteraction/receiveseventsinview)

# receivesEventsInView (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

A Boolean value that determines whether events are delivered exclusively through the Game Controller framework.

## Declaration

```swift
var receivesEventsInView: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If `YES`, events of the types specified by `handledEventTypes` are delivered both through the Game Controller framework and as UIKit event objects to your app’s views and gesture recognizers.

If `NO`, events of the types specified by `handledEventTypes` are delivered **exclusively** through the Game Controller framework.

The default value of this property is `NO`. This property has no effect if `handledEventTypes` is `GCUIEventTypeNone`.

## See Also

### Receiving view events

- [GameControllerEventHandlingOptions](../gamecontrollereventhandlingoptions.md)

# receivesEventsInView (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

A Boolean value that determines whether events are delivered exclusively through the Game Controller framework.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL receivesEventsInView;
```

<a id="discussion"></a>

## Discussion

If `YES`, events of the types specified by `handledEventTypes` are delivered both through the Game Controller framework and as UIKit event objects to your app’s views and gesture recognizers.

If `NO`, events of the types specified by `handledEventTypes` are delivered **exclusively** through the Game Controller framework.

The default value of this property is `NO`. This property has no effect if `handledEventTypes` is `GCUIEventTypeNone`.
