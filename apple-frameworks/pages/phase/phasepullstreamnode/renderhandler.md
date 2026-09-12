> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasepullstreamnode/renderhandler](https://developer.apple.com/documentation/phase/phasepullstreamnode/renderhandler)

# renderHandler (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```swift
var renderHandler: PHASEPullStreamRenderHandler { get set }
```

<a id="discussion"></a>

## Discussion

A property to set the render block callback that will render the samplesIW

The renderBlock must be set before the PHASESoundEvent is prepared or started.  The callback will be called from a high priority realtime thread. Your implementation must be performant and not perform any realtime unsafe operations such as lock mutexes or allocate memory.

# renderBlock (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```objectivec
@property (nonatomic, strong) PHASEPullStreamRenderBlock renderBlock;
```

<a id="discussion"></a>

## Discussion

A property to set the render block callback that will render the samplesIW

The renderBlock must be set before the PHASESoundEvent is prepared or started.  The callback will be called from a high priority realtime thread. Your implementation must be performant and not perform any realtime unsafe operations such as lock mutexes or allocate memory.
