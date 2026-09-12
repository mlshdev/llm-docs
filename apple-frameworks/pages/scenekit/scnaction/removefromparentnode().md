> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaction/removefromparentnode()](https://developer.apple.com/documentation/scenekit/scnaction/removefromparentnode())

# removeFromParentNode() (Swift)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates an action that removes the node from its parent.

## Declaration

```swift
class func removeFromParentNode() -> SCNAction
```

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node is immediately removed from its parent.

This action is not reversible; the reverse of this action is the same action.

# removeFromParentNode (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates an action that removes the node from its parent.

## Declaration

```objectivec
+ (SCNAction *) removeFromParentNode;
```

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node is immediately removed from its parent.

This action is not reversible; the reverse of this action is the same action.
