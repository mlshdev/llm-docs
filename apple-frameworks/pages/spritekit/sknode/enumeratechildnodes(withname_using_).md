> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/enumeratechildnodes(withname:using:)](https://developer.apple.com/documentation/spritekit/sknode/enumeratechildnodes(withname:using:))

# enumerateChildNodes(withName:using:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Searches the children of the receiving node to perform processing for nodes that share a name.

## Declaration

```swift
func enumerateChildNodes(withName name: String, using block: @escaping (SKNode, UnsafeMutablePointer<ObjCBool>) -> Void)
```

## Parameters

- `name`: The name to search for. This may be either the literal name of the node or a customized search string. See `Searching the Node Tree`.
- `block`: A block to execute on nodes that match the `name` parameter. The block has the signature `(node:` [SKNode](../sknode.md) `, stop:` [UnsafeMutablePointer](https://developer.apple.com/documentation/swift/unsafemutablepointer) `<` [ObjCBool](../../objectivec/objcbool.md) `>)`.

## Mentioned In

- [Searching the Node Tree](../searching-the-node-tree.md)

<a id="Discussion"></a>

## Discussion

This method enumerates the child array in order, searching for nodes whose names match the search parameter. The block is called once for each node that matches the name parameter.

The following Swift code shows how you could enumerate through the child nodes of a scene with a name containing the string `yellow`. Each matching node is hidden until the enumeration finds a node that also contains the string `triangle`. When this node is reached, `stop` is set to [true](https://developer.apple.com/documentation/swift/true) and the processing stops.

Listing 1. Enumerating child nodes

```swift
scene.enumerateChildNodes(withName: "*yellow*") {
    (node, stop) in
    
    node.run(SKAction.hide())
    
    if let name = node.name, name.contains("triangle") {
        stop.initialize(to: true)
    }
}
```

You can also search by class name using [enumerateChildNodes(withName:using:)](enumeratechildnodes%28withname_using_%29.md). However, for custom classes, you need to specify the fully annotated class name (i.e. the project name followed by the class name). The following Swift code shows a custom class, `SpaceshipNode`, based on [SKSpriteNode](../skspritenode.md), and created in a project named `SpaceGame`. The first search fails to return an instance of  `SpaceshipNode` added as a child of `parentNode`:

Listing 2. Enumerating child nodes

```swift
class SpaceshipNode: SKSpriteNode {
}
     
let parentNode = SKNode()
let childNode = SpaceshipNode()
parentNode.addChild(childNode)
     
parentNode.enumerateChildNodes(withName: "SpaceshipNode") {
    node, _ in
    // Unannotated name, returns no results 
}
     
parentNode.enumerateChildNodes(withName: "SpaceGame.SpaceshipNode") {
    node, _ in
    // Annotated name, successfully returns `childNode` 
}
     
parentNode.enumerateChildNodes(withName: "SKSpriteNode") {
    node, _ in
    // Superclass name, successfully returns `childNode` 
}
```

## See Also

### Accessing Nodes by Name

- [Searching the Node Tree](../searching-the-node-tree.md): Access nodes by name to avoid needing an instance variable.
- [name](name.md): The node’s assignable name.
- [childNode(withName:)](childnode%28withname_%29.md): Searches the children of the receiving node for a node with a specific name.
- [subscript(\_:)](subscript%28__%29.md): Returns an array of nodes that match the name parameter.

# enumerateChildNodesWithName:usingBlock: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Searches the children of the receiving node to perform processing for nodes that share a name.

## Declaration

```objectivec
- (void) enumerateChildNodesWithName:(NSString *) name usingBlock:(void (^)(SKNode *node, BOOL *stop)) block;
```

## Parameters

- `name`: The name to search for. This may be either the literal name of the node or a customized search string. See `Searching the Node Tree`.
- `block`: A block to execute on nodes that match the `name` parameter. The block has the signature `(node:` [SKNode](../sknode.md) `, stop:` [UnsafeMutablePointer](https://developer.apple.com/documentation/swift/unsafemutablepointer) `<` [ObjCBool](../../objectivec/objcbool.md) `>)`.

## Mentioned In

- [Searching the Node Tree](../searching-the-node-tree.md)

<a id="Discussion"></a>

## Discussion

This method enumerates the child array in order, searching for nodes whose names match the search parameter. The block is called once for each node that matches the name parameter.

The following Swift code shows how you could enumerate through the child nodes of a scene with a name containing the string `yellow`. Each matching node is hidden until the enumeration finds a node that also contains the string `triangle`. When this node is reached, `stop` is set to [true](https://developer.apple.com/documentation/swift/true) and the processing stops.

Listing 1. Enumerating child nodes

```swift
scene.enumerateChildNodes(withName: "*yellow*") {
    (node, stop) in
    
    node.run(SKAction.hide())
    
    if let name = node.name, name.contains("triangle") {
        stop.initialize(to: true)
    }
}
```

You can also search by class name using [enumerateChildNodesWithName:usingBlock:](enumeratechildnodes%28withname_using_%29.md). However, for custom classes, you need to specify the fully annotated class name (i.e. the project name followed by the class name). The following Swift code shows a custom class, `SpaceshipNode`, based on [SKSpriteNode](../skspritenode.md), and created in a project named `SpaceGame`. The first search fails to return an instance of  `SpaceshipNode` added as a child of `parentNode`:

Listing 2. Enumerating child nodes

```swift
class SpaceshipNode: SKSpriteNode {
}
     
let parentNode = SKNode()
let childNode = SpaceshipNode()
parentNode.addChild(childNode)
     
parentNode.enumerateChildNodes(withName: "SpaceshipNode") {
    node, _ in
    // Unannotated name, returns no results 
}
     
parentNode.enumerateChildNodes(withName: "SpaceGame.SpaceshipNode") {
    node, _ in
    // Annotated name, successfully returns `childNode` 
}
     
parentNode.enumerateChildNodes(withName: "SKSpriteNode") {
    node, _ in
    // Superclass name, successfully returns `childNode` 
}
```

## See Also

### Accessing Nodes by Name

- [Searching the Node Tree](../searching-the-node-tree.md): Access nodes by name to avoid needing an instance variable.
- [name](name.md): The node’s assignable name.
- [childNodeWithName:](childnode%28withname_%29.md): Searches the children of the receiving node for a node with a specific name.
- [objectForKeyedSubscript:](subscript%28__%29.md): Returns an array of nodes that match the name parameter.
