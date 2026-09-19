> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sharedwithyoucore/swcollaborationcoordinator/actionhandler

# actionHandler (Swift)

**Framework:** Shared with You Core  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The collaboration action handler.

## Declaration

```swift
weak var actionHandler: (any SWCollaborationActionHandler)? { get set }
```

<a id="Discussion"></a>

## Discussion

Register the delegate soon after launch and handle actions immediately to avoid timeouts.

## See Also

### Accessing coordinator attributes

- [shared](shared.md): The shared collaboration coordinator.

# actionHandler (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The collaboration action handler.

## Declaration

```objectivec
@property (nonatomic, weak, readwrite) id<SWCollaborationActionHandler> actionHandler;
```

<a id="Discussion"></a>

## Discussion

Register the delegate soon after launch and handle actions immediately to avoid timeouts.

## See Also

### Accessing coordinator attributes

- [sharedCoordinator](shared.md): The shared collaboration coordinator.
