> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skuniform/uniformtype](https://developer.apple.com/documentation/spritekit/skuniform/uniformtype)

# uniformType (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The uniform object’s data type.

## Declaration

```swift
var uniformType: SKUniformType { get }
```

<a id="Discussion"></a>

## Discussion

A uniform object’s type is set to [SKUniformType.none](../skuniformtype/none.md) until the first time that the uniform variable’s value is set; this happens automatically if you use an initialization method that provides an initial type and value. Once the uniform object is given an initial value, its type changes to that value’s type and thereafter cannot be changed.

## See Also

### Reading Information About a Uniform

- [name](name.md): The uniform’s name.

# uniformType (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The uniform object’s data type.

## Declaration

```objectivec
@property (nonatomic, readonly) SKUniformType uniformType;
```

<a id="Discussion"></a>

## Discussion

A uniform object’s type is set to [SKUniformTypeNone](../skuniformtype/none.md) until the first time that the uniform variable’s value is set; this happens automatically if you use an initialization method that provides an initial type and value. Once the uniform object is given an initial value, its type changes to that value’s type and thereafter cannot be changed.

## See Also

### Reading Information About a Uniform

- [name](name.md): The uniform’s name.
