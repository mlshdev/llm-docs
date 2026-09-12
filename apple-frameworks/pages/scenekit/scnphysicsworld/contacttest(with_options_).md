> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsworld/contacttest(with:options:)](https://developer.apple.com/documentation/scenekit/scnphysicsworld/contacttest(with:options:))

# contactTest(with:options:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Checks for contacts between one physics body and any other bodies in the physics world.

## Declaration

```swift
func contactTest(with body: SCNPhysicsBody, options: [SCNPhysicsWorld.TestOption : Any]? = nil) -> [SCNPhysicsContact]
```

## Parameters

- `body`: The body to test for contact.
- `options`: A dictionary of options affecting the test, or `nil` to use default options. For applicable keys and the possible values, see `Physics Test Options Keys`.

<a id="return-value"></a>

## Return Value

An array of [SCNPhysicsContact](../scnphysicscontact.md) objects describing contacts between the specified body and any others, or `nil` if the body is not in contact with any other bodies.

<a id="Discussion"></a>

## Discussion

SceneKit sends messages to the physics world’s contactdelegate object only when collisions occur between bodies whose [collisionBitMask](../scnphysicsbody/collisionbitmask.md) and [categoryBitMask](../scnphysicsbody/categorybitmask.md) properties overlap, and only for collisions between certain types of bodies. (For details, see [SCNPhysicsBodyType](../scnphysicsbodytype.md).) Use this method to directly test for all contacts between one body and any other bodies at a time of your choosing. For example, to implement a game with a “wall jump” effect, you could call this method when the player presses the jump button to see if the player character is in contact with any walls.

## See Also

### Detecting Contacts Between Physics Bodies

- [contactDelegate](contactdelegate.md): A delegate that is called when two physics bodies come in contact with each other.
- [contactTestBetween(\_:\_:options:)](contacttestbetween%28____options_%29.md): Checks for contacts between two physics bodies.

# contactTestWithBody:options: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Checks for contacts between one physics body and any other bodies in the physics world.

## Declaration

```objectivec
- (NSArray<SCNPhysicsContact *> *) contactTestWithBody:(SCNPhysicsBody *) body options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `body`: The body to test for contact.
- `options`: A dictionary of options affecting the test, or `nil` to use default options. For applicable keys and the possible values, see `Physics Test Options Keys`.

<a id="return-value"></a>

## Return Value

An array of [SCNPhysicsContact](../scnphysicscontact.md) objects describing contacts between the specified body and any others, or `nil` if the body is not in contact with any other bodies.

<a id="Discussion"></a>

## Discussion

SceneKit sends messages to the physics world’s contactdelegate object only when collisions occur between bodies whose [collisionBitMask](../scnphysicsbody/collisionbitmask.md) and [categoryBitMask](../scnphysicsbody/categorybitmask.md) properties overlap, and only for collisions between certain types of bodies. (For details, see [SCNPhysicsBodyType](../scnphysicsbodytype.md).) Use this method to directly test for all contacts between one body and any other bodies at a time of your choosing. For example, to implement a game with a “wall jump” effect, you could call this method when the player presses the jump button to see if the player character is in contact with any walls.

## See Also

### Detecting Contacts Between Physics Bodies

- [contactDelegate](contactdelegate.md): A delegate that is called when two physics bodies come in contact with each other.
- [contactTestBetweenBody:andBody:options:](contacttestbetween%28____options_%29.md): Checks for contacts between two physics bodies.
