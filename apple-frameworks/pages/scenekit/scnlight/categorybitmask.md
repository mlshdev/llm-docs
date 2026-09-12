> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnlight/categorybitmask](https://developer.apple.com/documentation/scenekit/scnlight/categorybitmask)

# categoryBitMask (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A mask that defines which categories this light belongs to.

## Declaration

```swift
var categoryBitMask: Int { get set }
```

<a id="Discussion"></a>

## Discussion

You can assign each light and each node in a scene to one or more categories, each corresponding to a bit in the bit mask. You define the mask values used in your app. When SceneKit renders a scene, it compares the [categoryBitMask](../scnnode/categorybitmask.md) property of each node with that of each light using a bitwise AND operation. If the result is a nonzero value, SceneKit uses that light when rendering that node.

Use this property to make some lights in your scene apply only to certain nodes. The rendering performance cost of dynamic lighting increases with the number of lights affecting a node—you can reduce this performance cost by using category bit masks to limit the number of lights illuminating each node.

The default mask has all bits set, meaning that nodes of all categories are lit by the light.

# categoryBitMask (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A mask that defines which categories this light belongs to.

## Declaration

```objectivec
@property (nonatomic) NSUInteger categoryBitMask;
```

<a id="Discussion"></a>

## Discussion

You can assign each light and each node in a scene to one or more categories, each corresponding to a bit in the bit mask. You define the mask values used in your app. When SceneKit renders a scene, it compares the [categoryBitMask](../scnnode/categorybitmask.md) property of each node with that of each light using a bitwise AND operation. If the result is a nonzero value, SceneKit uses that light when rendering that node.

Use this property to make some lights in your scene apply only to certain nodes. The rendering performance cost of dynamic lighting increases with the number of lights affecting a node—you can reduce this performance cost by using category bit masks to limit the number of lights illuminating each node.

The default mask has all bits set, meaning that nodes of all categories are lit by the light.
