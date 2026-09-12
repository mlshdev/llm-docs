> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/ecs-events](https://developer.apple.com/documentation/realitykit/ecs-events)

# Events

**Framework:** RealityKit  
**Kind:** API Collection

Respond to things happening in your RealityKit scene by subscribing to specific event types.

<a id="Overview"></a>

## Overview

You can receive notifications to specific RealityKit events — all of which conform to the Event protocol — by subscribing to specific events. The kinds of events you can subscribe to include the following:

- Two entities colliding
- An entity receiving a new component
- Audio playback reaching the end of its content

For example, you can receive a notification:

- When two objects begin colliding by subscribing to [CollisionEvents.Began](collisionevents/began.md) event
- When the scene redraws by subscribing to the [SceneEvents.Update](sceneevents/update.md) event

## Topics

### Core event types

- [Event](event.md): A type that can be sent as an event.
- [EventSource](eventsource.md): A type on which events can be published and subscribed.
- [EventSubscription](eventsubscription.md): A subscription to an event.

### Scene and entity lifecycle events

- [SceneEvents](sceneevents.md): Events the scene invokes.
- [AnchorStateEvents](anchorstateevents.md): Events that trigger on an entity to indicate a change in anchor state.
- [ComponentEvents](componentevents.md): Provides the events related to components.

### Input and interaction events

- [AccessibilityEvents](accessibilityevents.md)
- [ManipulationEvents](manipulationevents.md): Events that occur while a person manipulates an entity.

### Physics and motion events

- [AnimationEvents](animationevents.md): Notable milestones that the framework signals during animation playback.
- [CollisionEvents](collisionevents.md)
- [PhysicsSimulationEvents](physicssimulationevents.md): Types of events that fire during physics simulations

### Media events

- [AudioEvents](audioevents.md): Events associated with audio playback.
- [VideoPlayerEvents](videoplayerevents.md): Events associated with video playback for VideoPlayerComponent.
- [ImagePresentationEvents](imagepresentationevents.md): Events associated with viewing mode transitions for image presentation components.

### Network synchronization events

- [SynchronizationEvents](synchronizationevents.md): Events associated with network synchronization of scene information.

## See Also

### Scene management and logic

- [Scenes](ecs-scenes.md): The context that holds all RealityKit entities.
- [Systems](ecs-systems.md): Apply behaviors and physical effects to the entities in a RealityKit scene.
- [Entity actions](ecs-entity-actions.md): Create simple, reusable actions that can change your app state, RealityKit scene, or animate an entity.
