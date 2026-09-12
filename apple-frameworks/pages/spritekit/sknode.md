> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode](https://developer.apple.com/documentation/spritekit/sknode)

# SKNode (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The base class of all SpriteKit nodes.

## Declaration

```swift
@MainActor class SKNode
```

```swift
class SKNode
```

## Mentioned In

- [Customizing the Behavior of a Node](customizing-the-behavior-of-a-node.md)
- [Accessing and Modifying the Node Tree](accessing-and-modifying-the-node-tree.md)
- [Animate the Warping of a Sprite](animate-the-warping-of-a-sprite.md)
- [Connecting Bodies with Joints](connecting-bodies-with-joints.md)
- [Controlling User Interaction on Nodes](controlling-user-interaction-on-nodes.md)
- [Detecting Changes at Each Step of an Animation](detecting-changes-at-each-step-of-an-animation.md)
- [Resizing a Sprite in Nine Parts](resizing-a-sprite-in-nine-parts.md)
- [Searching the Node Tree](searching-the-node-tree.md)
- [Using Base Nodes to Lay Out SpriteKit Content](using-base-nodes-to-lay-out-spritekit-content.md)

<a id="overview"></a>

## Overview

`SKNode` provides base properties for its subclasses and it can be used as a container or layout tool for other nodes. For example, you might add a collection of nodes as children to an `SKNode` that all move together within the scene; because nodes inherit the properties of their parent, changing the parent node’s [position](sknode/position.md) propagates the change to its children as well.

`SKNode` does not draw any content itself. Its visual counterparts are listed in Nodes that Draw in [Nodes for Scene Building](nodes-for-scene-building.md).

## Topics

### First Steps

- [Getting Started with Nodes](getting-started-with-nodes.md): Learn about the fundamental properties that provide a foundation for all other nodes.
- [init()](sknode/init%28%29.md): Initializes a blank node.
- [init(fileNamed:)](sknode/init%28filenamed_%29.md): Creates a new node by loading an archive file from the game’s main bundle.
- [init(coder:)](sknode/init%28coder_%29.md): Called when a node is initialized from an .sks file.
- [init(fileNamed:securelyWithClasses:)](sknode/init%28filenamed_securelywithclasses_%29.md)

### Positioning Content in a Scene

Lay out content in a scene by positioning it within its parent’s coordinate system.

- [position](sknode/position.md): The position of the node in its parent’s coordinate system.

### Querying the Content Size

Read the location and size of a node or its children in the parent’s coordinate space.

- [frame](sknode/frame.md): A rectangle in the parent’s coordinate system that contains the node’s content, ignoring the node’s children.
- [calculateAccumulatedFrame()](sknode/calculateaccumulatedframe%28%29.md): Returns a rectangle in the parent’s coordinate system that contains the position and size of itself and all child nodes.

### Configuring Draw Order

- [About Node Drawing Order](about-node-drawing-order.md): Understand how SpriteKit layers your scene’s nodes from top to bottom.
- [zPosition](sknode/zposition.md): The height of the node relative to its parent.

### Scaling and Rotating

- [zRotation](sknode/zrotation.md): The Euler rotation about the z axis (in radians).
- [setScale(\_:)](sknode/setscale%28__%29.md): Sets the [xScale](sknode/xscale.md) and [yScale](sknode/yscale.md) properties of the node.
- [xScale](sknode/xscale.md): A scaling factor that multiplies the width of a node and its children.
- [yScale](sknode/yscale.md): A scaling factor that multiplies the height of a node and its children.

### Accessing Related Nodes

- [About SpriteKit Coordinate Systems](about-spritekit-coordinate-systems.md): Learn how a node conforms to its coordinate systems.
- [scene](sknode/scene.md): The scene node that contains this node.
- [parent](sknode/parent.md): The node’s parent node.
- [children](sknode/children.md): The node’s children.

### Modifying the Node Tree

- [Accessing and Modifying the Node Tree](accessing-and-modifying-the-node-tree.md): See the objects and functions you use to control the node tree’s composition.
- [addChild(\_:)](sknode/addchild%28__%29.md): Adds a node to the end of the receiver’s list of child nodes.
- [insertChild(\_:at:)](sknode/insertchild%28__at_%29.md): Inserts a node into a specific position in the receiver’s list of child nodes.
- [isEqual(to:)](sknode/isequal%28to_%29.md): Compares the parameter node to the receiving node.
- [move(toParent:)](sknode/move%28toparent_%29.md): Moves the node to a new parent node in the scene.
- [removeFromParent()](sknode/removefromparent%28%29.md): Removes the receiving node from its parent.
- [removeAllChildren()](sknode/removeallchildren%28%29.md): Removes all of the node’s children.
- [removeChildren(in:)](sknode/removechildren%28in_%29.md): Removes a list of children from the receiving node.
- [inParentHierarchy(\_:)](sknode/inparenthierarchy%28__%29.md): Returns a Boolean value that indicates whether the node is a descendant of the target node.

### Customizing Nodes

- [Customizing the Behavior of a Node](customizing-the-behavior-of-a-node.md): Organize your app’s logic and display code with nodes.

### Propagating Properties to Children

- [About Node Property Propagation](about-node-property-propagation.md): Learn which properties of a node affect its child nodes.

### Accessing Nodes by Name

Access nodes by name instead of instance properties.

- [Searching the Node Tree](searching-the-node-tree.md): Access nodes by name to avoid needing an instance variable.
- [name](sknode/name.md): The node’s assignable name.
- [childNode(withName:)](sknode/childnode%28withname_%29.md): Searches the children of the receiving node for a node with a specific name.
- [enumerateChildNodes(withName:using:)](sknode/enumeratechildnodes%28withname_using_%29.md): Searches the children of the receiving node to perform processing for nodes that share a name.
- [subscript(\_:)](sknode/subscript%28__%29.md): Returns an array of nodes that match the name parameter.

### Altering Node Visibility

Control whether a node is visible or semitransparent.

- [alpha](sknode/alpha.md): The transparency value applied to the node’s contents.
- [isHidden](sknode/ishidden.md): A Boolean value that determines whether a node and its descendants are rendered.

### Running Actions

Run actions on a node and control their timing.

- [Getting Started with Actions](getting-started-with-actions.md): Create, configure, and run actions in SpriteKit.
- [run(\_:)](sknode/run%28__%29.md): Adds an action to the list of actions executed by the node.
- [run(\_:completion:)](sknode/run%28__completion_%29.md): Adds an action to the list of actions executed by the node and schedules the argument block to be run upon completion of the action.
- [run(\_:withKey:)](sknode/run%28__withkey_%29.md): Adds an identifiable action to the list of actions executed by the node.
- [speed](sknode/speed.md): A speed modifier applied to all actions executed by a node and its descendants.
- [isPaused](sknode/ispaused.md): A Boolean value that determines whether actions on the node and its descendants are processed.
- [action(forKey:)](sknode/action%28forkey_%29.md): Returns an action associated with a specific key.
- [hasActions()](sknode/hasactions%28%29.md): Returns a Boolean value that indicates whether the node is executing actions.
- [removeAllActions()](sknode/removeallactions%28%29.md): Ends and removes all actions from the node.
- [removeAction(forKey:)](sknode/removeaction%28forkey_%29.md): Removes an action associated with a specific key.

### Adding Physics Behaviors

Enable physics behaviors by adding a body.

- [Getting Started with Physics Bodies](getting-started-with-physics-bodies.md): Create and assign a physics body to enable physics.
- [physicsBody](sknode/physicsbody.md): The physics body associated with the node.

### Constraining Node Position or Rotation

Define positional contraints relating to other nodes in the scene.

- [constraints](sknode/constraints.md): A list of constraints to apply to the node.
- [reachConstraints](sknode/reachconstraints.md): The reach constraints to apply to the node when executing a reach action.

### Detecting Collisions Manually

As an alternative to [SKPhysicsContactDelegate](skphysicscontactdelegate.md), manually check if two nodes overlap.

- [intersects(\_:)](sknode/intersects%28__%29.md): Returns a Boolean value that indicates whether this node intersects the specified node.

### Adding GameplayKit Behaviors

Enable GameplayKit behaviors by defining an entity and its obstacles in a scene.

- [entity](sknode/entity.md): The GameplayKit entity this node represents.
- [obstacles(fromNodeBounds:)](sknode/obstacles%28fromnodebounds_%29.md): Converts each node into an obstacle by transforming its bounds into the scene’s coordinate system.
- [obstacles(fromNodePhysicsBodies:)](sknode/obstacles%28fromnodephysicsbodies_%29.md): Converts each node into an obstacle by transforming the node’s physics body shape into the scene’s coordinate system.
- [obstacles(fromSpriteTextures:accuracy:)](sknode/obstacles%28fromspritetextures_accuracy_%29.md): Turns each node into an obstacle by changing the node’s texture into a physics shape and converting it into the scene’s coordinate system.

### Handling User Input

Enable user interaction to allow a node to respond to user input.

- [Controlling User Interaction on Nodes](controlling-user-interaction-on-nodes.md): Enable your node to respond to user input, like touches or mouse clicks.
- [isUserInteractionEnabled](sknode/isuserinteractionenabled.md): A Boolean value that indicates whether the node receives touch events.
- [focusBehavior](sknode/focusbehavior.md): The focus behavior for a node.

### Hit Testing

- [Understanding Hit-Testing](understanding-hit-testing.md): Learn how find child nodes at a given point by using hit-testing.
- [contains(\_:)](sknode/contains%28__%29.md): Returns a Boolean value that indicates whether a point lies inside the parent’s coordinate system.
- [atPoint(\_:)](sknode/atpoint%28__%29.md): Returns the deepest visible descendant that intersects a point.
- [nodes(at:)](sknode/nodes%28at_%29.md): Returns an array of all visible descendants that intersect a point.

### Converting Between Coordinate Systems of Different Nodes

- [Converting Coordinate Spaces](converting-coordinate-spaces.md): Convert positions across the various coordinate spaces in a scene.
- [convert(\_:from:)](sknode/convert%28__from_%29.md): Converts a point from the coordinate system of another node in the node tree to the coordinate system of this node.
- [convert(\_:to:)](sknode/convert%28__to_%29.md): Converts a point in this node’s coordinate system to the coordinate system of another node in the node tree.

### Adding Custom Data Without Subclassing

Quickly add data to a node without having to subclass it.

- [userData](sknode/userdata.md): A dictionary containing arbitrary data.

### Providing Accessibility

Extend your app’s usability by exposing certain nodes in your scene as Accessibility user interface elements.

- [accessibilityChildren](sknode/accessibilitychildren.md): An array of user interface elements that represent children of this element.
- [accessibilityFrame](sknode/accessibilityframe.md): The size of this user interface element, in screen points.
- [accessibilityHelp](sknode/accessibilityhelp.md): The help description of this user interface element; for example, the text shown in a tooltip.
- [accessibilityLabel](sknode/accessibilitylabel.md): A short description of this user interface element.
- [accessibilityParent](sknode/accessibilityparent.md): The user interface element that contains this element.
- [accessibilityRole](sknode/accessibilityrole.md): A string value describing the user interface element type; for example, a button.
- [accessibilityRoleDescription](sknode/accessibilityroledescription.md): A string value describing the user interface element name and type; for example, the Buy button.
- [accessibilitySubrole](sknode/accessibilitysubrole.md): A string that defines this user interface element’s subrole; for example, a full-screen button.
- [isAccessibilityElement](sknode/isaccessibilityelement.md): A toggle you implement to indicate to the system whether this user interface element should be exposed to the user.
- [isAccessibilityEnabled](sknode/isaccessibilityenabled.md): A toggle you implement to indicate to the system whether this user interface element should respond to user input.
- [accessibilityHitTest(\_:)](sknode/accessibilityhittest%28__%29.md): Returns the frontmost user interface element in the element hierarchy.

### Setting a Node’s Unique Attributes for a Shader

Set the values that make a node unique to a shader.

- [attributeValues](sknode/attributevalues.md): Deprecated. The values of each attribute associated with the node’s attached shader.
- [setValue(\_:forAttribute:)](sknode/setvalue%28__forattribute_%29.md): Deprecated. Sets an attribute value for an attached shader
- [value(forAttributeNamed:)](sknode/value%28forattributenamed_%29.md): Deprecated. The value of a shader attribute.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
- [NSResponder](https://developer.apple.com/documentation/appkit/nsresponder)
- [UIResponder](../uikit/uiresponder.md)

### Inherited By

- [SK3DNode](sk3dnode.md)
- [SKAudioNode](skaudionode.md)
- [SKCameraNode](skcameranode.md)
- [SKCropNode](skcropnode.md)
- [SKEffectNode](skeffectnode.md)
- [SKEmitterNode](skemitternode.md)
- [SKFieldNode](skfieldnode.md)
- [SKLabelNode](sklabelnode.md)
- [SKLightNode](sklightnode.md)
- [SKReferenceNode](skreferencenode.md)
- [SKShapeNode](skshapenode.md)
- [SKSpriteNode](skspritenode.md)
- [SKTileMapNode](sktilemapnode.md)
- [SKTransformNode](sktransformnode.md)
- [SKVideoNode](skvideonode.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UICoordinateSpace](../uikit/uicoordinatespace.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIFocusItem](../uikit/uifocusitem.md)
- [UIFocusItemContainer](../uikit/uifocusitemcontainer.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Base Nodes

- [Using Base Nodes to Lay Out SpriteKit Content](using-base-nodes-to-lay-out-spritekit-content.md): Use nonvisual nodes to define the layout of a scene.
- [SKCameraNode](skcameranode.md): A node that determines which parts of the scene are visible within a view.
- [SKReferenceNode](skreferencenode.md): A node that’s defined in an archived `.sks` file.

# SKNode (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The base class of all SpriteKit nodes.

## Declaration

```objectivec
@interface SKNode : UIResponder
```

```objectivec
@interface SKNode : NSResponder
```

```objectivec
@interface SKNode : NSObject
```

## Mentioned In

- [Customizing the Behavior of a Node](customizing-the-behavior-of-a-node.md)
- [Accessing and Modifying the Node Tree](accessing-and-modifying-the-node-tree.md)
- [Animate the Warping of a Sprite](animate-the-warping-of-a-sprite.md)
- [Connecting Bodies with Joints](connecting-bodies-with-joints.md)
- [Controlling User Interaction on Nodes](controlling-user-interaction-on-nodes.md)
- [Detecting Changes at Each Step of an Animation](detecting-changes-at-each-step-of-an-animation.md)
- [Resizing a Sprite in Nine Parts](resizing-a-sprite-in-nine-parts.md)
- [Searching the Node Tree](searching-the-node-tree.md)
- [Using Base Nodes to Lay Out SpriteKit Content](using-base-nodes-to-lay-out-spritekit-content.md)

<a id="overview"></a>

## Overview

`SKNode` provides base properties for its subclasses and it can be used as a container or layout tool for other nodes. For example, you might add a collection of nodes as children to an `SKNode` that all move together within the scene; because nodes inherit the properties of their parent, changing the parent node’s [position](sknode/position.md) propagates the change to its children as well.

`SKNode` does not draw any content itself. Its visual counterparts are listed in Nodes that Draw in [Nodes for Scene Building](nodes-for-scene-building.md).

## Topics

### First Steps

- [Getting Started with Nodes](getting-started-with-nodes.md): Learn about the fundamental properties that provide a foundation for all other nodes.
- [init](sknode/init%28%29.md): Initializes a blank node.
- [node](sknode/node.md): Creates a new node.
- [nodeWithFileNamed:](sknode/init%28filenamed_%29.md): Creates a new node by loading an archive file from the game’s main bundle.
- [initWithCoder:](sknode/init%28coder_%29.md): Called when a node is initialized from an .sks file.
- [nodeWithFileNamed:securelyWithClasses:andError:](sknode/init%28filenamed_securelywithclasses_%29.md)

### Positioning Content in a Scene

Lay out content in a scene by positioning it within its parent’s coordinate system.

- [position](sknode/position.md): The position of the node in its parent’s coordinate system.

### Querying the Content Size

Read the location and size of a node or its children in the parent’s coordinate space.

- [frame](sknode/frame.md): A rectangle in the parent’s coordinate system that contains the node’s content, ignoring the node’s children.
- [calculateAccumulatedFrame](sknode/calculateaccumulatedframe%28%29.md): Returns a rectangle in the parent’s coordinate system that contains the position and size of itself and all child nodes.

### Configuring Draw Order

- [About Node Drawing Order](about-node-drawing-order.md): Understand how SpriteKit layers your scene’s nodes from top to bottom.
- [zPosition](sknode/zposition.md): The height of the node relative to its parent.

### Scaling and Rotating

- [zRotation](sknode/zrotation.md): The Euler rotation about the z axis (in radians).
- [setScale:](sknode/setscale%28__%29.md): Sets the [xScale](sknode/xscale.md) and [yScale](sknode/yscale.md) properties of the node.
- [xScale](sknode/xscale.md): A scaling factor that multiplies the width of a node and its children.
- [yScale](sknode/yscale.md): A scaling factor that multiplies the height of a node and its children.

### Accessing Related Nodes

- [About SpriteKit Coordinate Systems](about-spritekit-coordinate-systems.md): Learn how a node conforms to its coordinate systems.
- [scene](sknode/scene.md): The scene node that contains this node.
- [parent](sknode/parent.md): The node’s parent node.
- [children](sknode/children.md): The node’s children.

### Modifying the Node Tree

- [Accessing and Modifying the Node Tree](accessing-and-modifying-the-node-tree.md): See the objects and functions you use to control the node tree’s composition.
- [addChild:](sknode/addchild%28__%29.md): Adds a node to the end of the receiver’s list of child nodes.
- [insertChild:atIndex:](sknode/insertchild%28__at_%29.md): Inserts a node into a specific position in the receiver’s list of child nodes.
- [isEqualToNode:](sknode/isequal%28to_%29.md): Compares the parameter node to the receiving node.
- [moveToParent:](sknode/move%28toparent_%29.md): Moves the node to a new parent node in the scene.
- [removeFromParent](sknode/removefromparent%28%29.md): Removes the receiving node from its parent.
- [removeAllChildren](sknode/removeallchildren%28%29.md): Removes all of the node’s children.
- [removeChildrenInArray:](sknode/removechildren%28in_%29.md): Removes a list of children from the receiving node.
- [inParentHierarchy:](sknode/inparenthierarchy%28__%29.md): Returns a Boolean value that indicates whether the node is a descendant of the target node.

### Customizing Nodes

- [Customizing the Behavior of a Node](customizing-the-behavior-of-a-node.md): Organize your app’s logic and display code with nodes.

### Propagating Properties to Children

- [About Node Property Propagation](about-node-property-propagation.md): Learn which properties of a node affect its child nodes.

### Accessing Nodes by Name

Access nodes by name instead of instance properties.

- [Searching the Node Tree](searching-the-node-tree.md): Access nodes by name to avoid needing an instance variable.
- [name](sknode/name.md): The node’s assignable name.
- [childNodeWithName:](sknode/childnode%28withname_%29.md): Searches the children of the receiving node for a node with a specific name.
- [enumerateChildNodesWithName:usingBlock:](sknode/enumeratechildnodes%28withname_using_%29.md): Searches the children of the receiving node to perform processing for nodes that share a name.
- [objectForKeyedSubscript:](sknode/subscript%28__%29.md): Returns an array of nodes that match the name parameter.

### Altering Node Visibility

Control whether a node is visible or semitransparent.

- [alpha](sknode/alpha.md): The transparency value applied to the node’s contents.
- [hidden](sknode/ishidden.md): A Boolean value that determines whether a node and its descendants are rendered.

### Running Actions

Run actions on a node and control their timing.

- [Getting Started with Actions](getting-started-with-actions.md): Create, configure, and run actions in SpriteKit.
- [runAction:](sknode/run%28__%29.md): Adds an action to the list of actions executed by the node.
- [runAction:completion:](sknode/run%28__completion_%29.md): Adds an action to the list of actions executed by the node and schedules the argument block to be run upon completion of the action.
- [runAction:withKey:](sknode/run%28__withkey_%29.md): Adds an identifiable action to the list of actions executed by the node.
- [speed](sknode/speed.md): A speed modifier applied to all actions executed by a node and its descendants.
- [paused](sknode/ispaused.md): A Boolean value that determines whether actions on the node and its descendants are processed.
- [actionForKey:](sknode/action%28forkey_%29.md): Returns an action associated with a specific key.
- [hasActions](sknode/hasactions%28%29.md): Returns a Boolean value that indicates whether the node is executing actions.
- [removeAllActions](sknode/removeallactions%28%29.md): Ends and removes all actions from the node.
- [removeActionForKey:](sknode/removeaction%28forkey_%29.md): Removes an action associated with a specific key.

### Adding Physics Behaviors

Enable physics behaviors by adding a body.

- [Getting Started with Physics Bodies](getting-started-with-physics-bodies.md): Create and assign a physics body to enable physics.
- [physicsBody](sknode/physicsbody.md): The physics body associated with the node.

### Constraining Node Position or Rotation

Define positional contraints relating to other nodes in the scene.

- [constraints](sknode/constraints.md): A list of constraints to apply to the node.
- [reachConstraints](sknode/reachconstraints.md): The reach constraints to apply to the node when executing a reach action.

### Detecting Collisions Manually

As an alternative to [SKPhysicsContactDelegate](skphysicscontactdelegate.md), manually check if two nodes overlap.

- [intersectsNode:](sknode/intersects%28__%29.md): Returns a Boolean value that indicates whether this node intersects the specified node.

### Adding GameplayKit Behaviors

Enable GameplayKit behaviors by defining an entity and its obstacles in a scene.

- [entity](sknode/entity.md): The GameplayKit entity this node represents.
- [obstaclesFromNodeBounds:](sknode/obstacles%28fromnodebounds_%29.md): Converts each node into an obstacle by transforming its bounds into the scene’s coordinate system.
- [obstaclesFromNodePhysicsBodies:](sknode/obstacles%28fromnodephysicsbodies_%29.md): Converts each node into an obstacle by transforming the node’s physics body shape into the scene’s coordinate system.
- [obstaclesFromSpriteTextures:accuracy:](sknode/obstacles%28fromspritetextures_accuracy_%29.md): Turns each node into an obstacle by changing the node’s texture into a physics shape and converting it into the scene’s coordinate system.

### Handling User Input

Enable user interaction to allow a node to respond to user input.

- [Controlling User Interaction on Nodes](controlling-user-interaction-on-nodes.md): Enable your node to respond to user input, like touches or mouse clicks.
- [userInteractionEnabled](sknode/isuserinteractionenabled.md): A Boolean value that indicates whether the node receives touch events.
- [focusBehavior](sknode/focusbehavior.md): The focus behavior for a node.

### Hit Testing

- [Understanding Hit-Testing](understanding-hit-testing.md): Learn how find child nodes at a given point by using hit-testing.
- [containsPoint:](sknode/contains%28__%29.md): Returns a Boolean value that indicates whether a point lies inside the parent’s coordinate system.
- [nodeAtPoint:](sknode/atpoint%28__%29.md): Returns the deepest visible descendant that intersects a point.
- [nodesAtPoint:](sknode/nodes%28at_%29.md): Returns an array of all visible descendants that intersect a point.

### Converting Between Coordinate Systems of Different Nodes

- [Converting Coordinate Spaces](converting-coordinate-spaces.md): Convert positions across the various coordinate spaces in a scene.
- [convertPoint:fromNode:](sknode/convert%28__from_%29.md): Converts a point from the coordinate system of another node in the node tree to the coordinate system of this node.
- [convertPoint:toNode:](sknode/convert%28__to_%29.md): Converts a point in this node’s coordinate system to the coordinate system of another node in the node tree.

### Adding Custom Data Without Subclassing

Quickly add data to a node without having to subclass it.

- [userData](sknode/userdata.md): A dictionary containing arbitrary data.

### Providing Accessibility

Extend your app’s usability by exposing certain nodes in your scene as Accessibility user interface elements.

- [accessibilityChildren](sknode/accessibilitychildren.md): An array of user interface elements that represent children of this element.
- [accessibilityFrame](sknode/accessibilityframe.md): The size of this user interface element, in screen points.
- [accessibilityHelp](sknode/accessibilityhelp.md): The help description of this user interface element; for example, the text shown in a tooltip.
- [accessibilityLabel](sknode/accessibilitylabel.md): A short description of this user interface element.
- [accessibilityParent](sknode/accessibilityparent.md): The user interface element that contains this element.
- [accessibilityRole](sknode/accessibilityrole.md): A string value describing the user interface element type; for example, a button.
- [accessibilityRoleDescription](sknode/accessibilityroledescription.md): A string value describing the user interface element name and type; for example, the Buy button.
- [accessibilitySubrole](sknode/accessibilitysubrole.md): A string that defines this user interface element’s subrole; for example, a full-screen button.
- [accessibilityElement](sknode/isaccessibilityelement.md): A toggle you implement to indicate to the system whether this user interface element should be exposed to the user.
- [accessibilityEnabled](sknode/isaccessibilityenabled.md): A toggle you implement to indicate to the system whether this user interface element should respond to user input.
- [accessibilityHitTest:](sknode/accessibilityhittest%28__%29.md): Returns the frontmost user interface element in the element hierarchy.

### Setting a Node’s Unique Attributes for a Shader

Set the values that make a node unique to a shader.

- [attributeValues](sknode/attributevalues.md): Deprecated. The values of each attribute associated with the node’s attached shader.
- [setValue:forAttributeNamed:](sknode/setvalue%28__forattribute_%29.md): Deprecated. Sets an attribute value for an attached shader
- [valueForAttributeNamed:](sknode/value%28forattributenamed_%29.md): Deprecated. The value of a shader attribute.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
- [NSResponder](https://developer.apple.com/documentation/appkit/nsresponder)
- [UIResponder](../uikit/uiresponder.md)

### Inherited By

- [SK3DNode](sk3dnode.md)
- [SKAudioNode](skaudionode.md)
- [SKCameraNode](skcameranode.md)
- [SKCropNode](skcropnode.md)
- [SKEffectNode](skeffectnode.md)
- [SKEmitterNode](skemitternode.md)
- [SKFieldNode](skfieldnode.md)
- [SKLabelNode](sklabelnode.md)
- [SKLightNode](sklightnode.md)
- [SKReferenceNode](skreferencenode.md)
- [SKShapeNode](skshapenode.md)
- [SKSpriteNode](skspritenode.md)
- [SKTileMapNode](sktilemapnode.md)
- [SKTransformNode](sktransformnode.md)
- [SKVideoNode](skvideonode.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [UICoordinateSpace](../uikit/uicoordinatespace.md)
- [UIFocusItem](../uikit/uifocusitem.md)
- [UIFocusItemContainer](../uikit/uifocusitemcontainer.md)

## See Also

### Base Nodes

- [Using Base Nodes to Lay Out SpriteKit Content](using-base-nodes-to-lay-out-spritekit-content.md): Use nonvisual nodes to define the layout of a scene.
- [SKCameraNode](skcameranode.md): A node that determines which parts of the scene are visible within a view.
- [SKReferenceNode](skreferencenode.md): A node that’s defined in an archived `.sks` file.
