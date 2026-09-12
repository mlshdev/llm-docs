> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnactionable](https://developer.apple.com/documentation/scenekit/scnactionable)

# SCNActionable (Swift)

**Framework:** SceneKit  
**Kind:** Protocol  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Methods for running actions on nodes.

## Declaration

```swift
protocol SCNActionable : NSObjectProtocol
```

<a id="overview"></a>

## Overview

[SCNAction](scnaction.md) objects represent reusable, animated actions that can be performed on nodes, such as moving or rotating them. You use an [SCNAction](scnaction.md) class method to create an action and then use methods in the [SCNActionable](scnactionable.md) protocol to run the action on a node. This protocol also defines methods for checking whether a node has any currently running actions and, if so, canceling them.

## Topics

### Running Actions

- [runAction(\_:)](scnactionable/runaction%28__%29.md): Adds an action to the list of actions executed by the node.
- [runAction(\_:completionHandler:)](scnactionable/runaction%28__completionhandler_%29.md): Adds an action to the list of actions executed by the node. SceneKit calls the specified block when the action completes.
- [runAction(\_:forKey:)](scnactionable/runaction%28__forkey_%29.md): Adds an identifiable action to the list of actions executed by the node.
- [runAction(\_:forKey:completionHandler:)](scnactionable/runaction%28__forkey_completionhandler_%29.md): Adds an identifiable action to the list of actions executed by the node. SceneKit calls the specified block when the action completes.

### Inspecting a Node’s Running Actions

- [action(forKey:)](scnactionable/action%28forkey_%29.md): Returns an action associated with a specific key.
- [hasActions](scnactionable/hasactions.md): A Boolean value that indicates whether the node is currently executing any actions.
- [actionKeys](scnactionable/actionkeys.md): The list of keys for which the node has attached actions.

### Canceling a Node’s Running Actions

- [removeAction(forKey:)](scnactionable/removeaction%28forkey_%29.md): Removes an action associated with a specific key.
- [removeAllActions()](scnactionable/removeallactions%28%29.md): Ends and removes all actions from the node.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [SCNNode](scnnode.md)
- [SCNReferenceNode](scnreferencenode.md)

## See Also

### Actions

- [SCNAction](scnaction.md): A simple, reusable animation that changes attributes of any node you attach it to.

# SCNActionable (Objective-C)

**Framework:** SceneKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Methods for running actions on nodes.

## Declaration

```objectivec
@protocol SCNActionable <NSObject>
```

<a id="overview"></a>

## Overview

[SCNAction](scnaction.md) objects represent reusable, animated actions that can be performed on nodes, such as moving or rotating them. You use an [SCNAction](scnaction.md) class method to create an action and then use methods in the [SCNActionable](scnactionable.md) protocol to run the action on a node. This protocol also defines methods for checking whether a node has any currently running actions and, if so, canceling them.

## Topics

### Running Actions

- [runAction:](scnactionable/runaction%28__%29.md): Adds an action to the list of actions executed by the node.
- [runAction:completionHandler:](scnactionable/runaction%28__completionhandler_%29.md): Adds an action to the list of actions executed by the node. SceneKit calls the specified block when the action completes.
- [runAction:forKey:](scnactionable/runaction%28__forkey_%29.md): Adds an identifiable action to the list of actions executed by the node.
- [runAction:forKey:completionHandler:](scnactionable/runaction%28__forkey_completionhandler_%29.md): Adds an identifiable action to the list of actions executed by the node. SceneKit calls the specified block when the action completes.

### Inspecting a Node’s Running Actions

- [actionForKey:](scnactionable/action%28forkey_%29.md): Returns an action associated with a specific key.
- [hasActions](scnactionable/hasactions.md): A Boolean value that indicates whether the node is currently executing any actions.
- [actionKeys](scnactionable/actionkeys.md): The list of keys for which the node has attached actions.

### Canceling a Node’s Running Actions

- [removeActionForKey:](scnactionable/removeaction%28forkey_%29.md): Removes an action associated with a specific key.
- [removeAllActions](scnactionable/removeallactions%28%29.md): Ends and removes all actions from the node.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [SCNNode](scnnode.md)

## See Also

### Actions

- [SCNAction](scnaction.md): A simple, reusable animation that changes attributes of any node you attach it to.
