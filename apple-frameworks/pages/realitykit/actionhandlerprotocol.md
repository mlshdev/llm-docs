> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/actionhandlerprotocol](https://developer.apple.com/documentation/realitykit/actionhandlerprotocol)

# ActionHandlerProtocol

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The base protocol for action handlers.

## Declaration

```swift
protocol ActionHandlerProtocol
```

<a id="overview"></a>

## Overview

One of two approaches can be taken when subscribing to, and responding to action events. Which approach is taken is dictated by complexity of the action, and user preference.

The simplest approach is to process action events using an external closure. This saves having to define a formal handler for the action. For example:

```swift
struct MyAction: EntityAction {
    ...
}
MyAction.subscribe(to: .started) { event in
    let action = event.action
    // Do something with the action.
}
```

The other approach is to use a formal handler. This requires defining a structure for the handler that conforms to the `ActionHandlerProtocol` and registering the handler so it can be instantiated when the action animation is played. It is only necessary to define the event functions for the event types that one wishes to respond to.

For example:

```swift
struct MyAction: EntityAction { }

struct MyActionHandler: ActionHandlerProtocol {

   typealias ActionType = MyAction

   // Application data can be stored within the handler.
   var applicationData: ApplicationData

   // Customizable init
   init(action: MyAction, player: Entity, currentLevel: Int) { ... }

   // Process start events
   mutating func actionStarted(event: EventType) { }
}

MyActionHandler.register { event in
    // Create the handler.
    return MyActionHandler(applicationData: appData)
}
```

## Topics

### Associated Types

- [ActionType](actionhandlerprotocol/actiontype.md): The action type associated that is associated with the handler.

### Instance Methods

- [actionEnded(event:)](actionhandlerprotocol/actionended%28event_%29.md): The function used to respond to action ended events.
- [actionPaused(event:)](actionhandlerprotocol/actionpaused%28event_%29.md): The function used to respond to action paused events.
- [actionResumed(event:)](actionhandlerprotocol/actionresumed%28event_%29.md): The function used to respond to action resumed events.
- [actionSkipped(event:)](actionhandlerprotocol/actionskipped%28event_%29.md): The function used to respond to action skipped events.
- [actionStarted(event:)](actionhandlerprotocol/actionstarted%28event_%29.md): The function used to respond to action started events.
- [actionTerminated(event:)](actionhandlerprotocol/actionterminated%28event_%29.md): The function used to respond to action terminated events.
- [actionUpdated(event:)](actionhandlerprotocol/actionupdated%28event_%29.md): The function used to respond to action updated events.

### Type Aliases

- [ActionHandlerProtocol.EventType](actionhandlerprotocol/eventtype.md): The event type returned to each event function in the handler.

### Type Methods

- [register(\_:)](actionhandlerprotocol/register%28__%29.md): Registers a handler that responds to raised action events for a particular action type.

## Relationships

### Inherited By

- [BehaviorTreeActionHandler](behaviortreeactionhandler.md)

## See Also

### Action management

- [EntityAction](entityaction.md): A protocol that defines an action for an entity.
- [ActionAnimation](actionanimation.md): Defines an an action animation.
- [ActionEntityResolution](actionentityresolution.md): Options available to determine the resolution method for a target entity in an action.
