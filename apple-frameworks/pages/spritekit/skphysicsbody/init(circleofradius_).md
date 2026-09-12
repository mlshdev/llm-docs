> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsbody/init(circleofradius:)](https://developer.apple.com/documentation/spritekit/skphysicsbody/init(circleofradius:))

# init(circleOfRadius:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a circular physics body centered on the owning node’s origin.

## Declaration

```swift
init(circleOfRadius r: CGFloat)
```

## Parameters

- `r`: The radius of the circle.

<a id="return-value"></a>

## Return Value

A new volume-based physics body.

## Mentioned In

- [Shaping a Physics Body to Match a Node’s Graphics](../shaping-a-physics-body-to-match-a-node-s-graphics.md)

<a id="Discussion"></a>

## Discussion

The following code shows the code that creates the physics body for a spherical or circular object. Because the physics body is attached to a sprite object, it usually needs volume. In this case, the sprite image is assumed to closely approximate a circle centered on the anchor point, so the radius of the circle is calculated and used to create the physics body.

Listing 1. A physics body for a circular sprite

**Swift**

```swift
let sprite = SKSpriteNode(imageNamed: "sphere.png")
sprite.physicsBody = SKPhysicsBody(circleOfRadius: sprite.size.width / 2)
sprite.physicsBody?.isDynamic = true
```

**Obj-C**

```objc
SKSpriteNode *sprite = [SKSpriteNode spriteNodeWithImageNamed:@"sphere.png"];
sprite.physicsBody = [SKPhysicsBody bodyWithCircleOfRadius:sprite.size.width/2];
sprite.physicsBody.dynamic = YES;
```

If the physics body were significantly smaller than the sprite’s image, the data used to create the physics body might need to be provided by some other source, such as a property list.

## See Also

### Creating a Body from a Shape

- [init(circleOfRadius:center:)](init%28circleofradius_center_%29.md): Creates a circular physics body centered on an arbitrary point.
- [init(rectangleOf:)](init%28rectangleof_%29.md): Creates a rectangular physics body centered on the owning node’s origin.
- [init(rectangleOf:center:)](init%28rectangleof_center_%29.md): Creates a rectangular physics body centered on an arbitrary point.
- [init(polygonFrom:)](init%28polygonfrom_%29.md): Creates a polygonal physics body.

# bodyWithCircleOfRadius: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a circular physics body centered on the owning node’s origin.

## Declaration

```objectivec
+ (SKPhysicsBody *) bodyWithCircleOfRadius:(CGFloat) r;
```

## Parameters

- `r`: The radius of the circle.

<a id="return-value"></a>

## Return Value

A new volume-based physics body.

## Mentioned In

- [Shaping a Physics Body to Match a Node’s Graphics](../shaping-a-physics-body-to-match-a-node-s-graphics.md)

<a id="Discussion"></a>

## Discussion

The following code shows the code that creates the physics body for a spherical or circular object. Because the physics body is attached to a sprite object, it usually needs volume. In this case, the sprite image is assumed to closely approximate a circle centered on the anchor point, so the radius of the circle is calculated and used to create the physics body.

Listing 1. A physics body for a circular sprite

**Swift**

```swift
let sprite = SKSpriteNode(imageNamed: "sphere.png")
sprite.physicsBody = SKPhysicsBody(circleOfRadius: sprite.size.width / 2)
sprite.physicsBody?.isDynamic = true
```

**Obj-C**

```objc
SKSpriteNode *sprite = [SKSpriteNode spriteNodeWithImageNamed:@"sphere.png"];
sprite.physicsBody = [SKPhysicsBody bodyWithCircleOfRadius:sprite.size.width/2];
sprite.physicsBody.dynamic = YES;
```

If the physics body were significantly smaller than the sprite’s image, the data used to create the physics body might need to be provided by some other source, such as a property list.

## See Also

### Creating a Body from a Shape

- [bodyWithCircleOfRadius:center:](init%28circleofradius_center_%29.md): Creates a circular physics body centered on an arbitrary point.
- [bodyWithRectangleOfSize:](init%28rectangleof_%29.md): Creates a rectangular physics body centered on the owning node’s origin.
- [bodyWithRectangleOfSize:center:](init%28rectangleof_center_%29.md): Creates a rectangular physics body centered on an arbitrary point.
- [bodyWithPolygonFromPath:](init%28polygonfrom_%29.md): Creates a polygonal physics body.
