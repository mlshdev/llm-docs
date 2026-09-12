> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsworld/contacttestbetween(_:_:options:)](https://developer.apple.com/documentation/scenekit/scnphysicsworld/contacttestbetween(_:_:options:))

# contactTestBetween(\_:\_:options:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Checks for contacts between two physics bodies.

## Declaration

```swift
func contactTestBetween(_ bodyA: SCNPhysicsBody, _ bodyB: SCNPhysicsBody, options: [SCNPhysicsWorld.TestOption : Any]? = nil) -> [SCNPhysicsContact]
```

## Parameters

- `bodyA`: The first body (to test for contact with the second).
- `bodyB`: The second body (to test for contact with the first).
- `options`: A dictionary of options affecting the test, or `nil` to use default options. For applicable keys and the possible values, see `Physics Test Options Keys`.

<a id="return-value"></a>

## Return Value

An array of [SCNPhysicsContact](../scnphysicscontact.md) objects describing contacts between the two bodies, or `nil` if the bodies are not in contact.

<a id="Discussion"></a>

## Discussion

SceneKit sends messages to the physics world’s [contactDelegate](contactdelegate.md) object only when collisions occur between bodies whose [collisionBitMask](../scnphysicsbody/collisionbitmask.md) and [categoryBitMask](../scnphysicsbody/categorybitmask.md) properties overlap, and only for collisions between certain types of bodies. (For details, see [SCNPhysicsBodyType](../scnphysicsbodytype.md).) Use this method to directly test for contacts between any two bodies at a time of your choosing. For example, to implement a game where the player character can pick up an item, you might call this method when the player presses the “pick up” button to see if the player character is in contact with the item to be picked up.

## See Also

### Detecting Contacts Between Physics Bodies

- [contactDelegate](contactdelegate.md): A delegate that is called when two physics bodies come in contact with each other.
- [contactTest(with:options:)](contacttest%28with_options_%29.md): Checks for contacts between one physics body and any other bodies in the physics world.

# contactTestBetweenBody:andBody:options: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Checks for contacts between two physics bodies.

## Declaration

```objectivec
- (NSArray<SCNPhysicsContact *> *) contactTestBetweenBody:(SCNPhysicsBody *) bodyA andBody:(SCNPhysicsBody *) bodyB options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `bodyA`: The first body (to test for contact with the second).
- `bodyB`: The second body (to test for contact with the first).
- `options`: A dictionary of options affecting the test, or `nil` to use default options. For applicable keys and the possible values, see `Physics Test Options Keys`.

<a id="return-value"></a>

## Return Value

An array of [SCNPhysicsContact](../scnphysicscontact.md) objects describing contacts between the two bodies, or `nil` if the bodies are not in contact.

<a id="Discussion"></a>

## Discussion

SceneKit sends messages to the physics world’s [contactDelegate](contactdelegate.md) object only when collisions occur between bodies whose [collisionBitMask](../scnphysicsbody/collisionbitmask.md) and [categoryBitMask](../scnphysicsbody/categorybitmask.md) properties overlap, and only for collisions between certain types of bodies. (For details, see [SCNPhysicsBodyType](../scnphysicsbodytype.md).) Use this method to directly test for contacts between any two bodies at a time of your choosing. For example, to implement a game where the player character can pick up an item, you might call this method when the player presses the “pick up” button to see if the player character is in contact with the item to be picked up.

## See Also

### Detecting Contacts Between Physics Bodies

- [contactDelegate](contactdelegate.md): A delegate that is called when two physics bodies come in contact with each other.
- [contactTestWithBody:options:](contacttest%28with_options_%29.md): Checks for contacts between one physics body and any other bodies in the physics world.
