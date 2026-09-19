> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spritekit/skaction/removefromparent()

# removeFromParent() (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that removes the node from its parent.

## Declaration

```swift
class func removeFromParent() -> SKAction
```

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node is immediately removed from its parent.

This action is not reversible; the reverse of this action is the same action.

# removeFromParent (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that removes the node from its parent.

## Declaration

```objectivec
+ (SKAction *) removeFromParent;
```

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node is immediately removed from its parent.

This action is not reversible; the reverse of this action is the same action.
