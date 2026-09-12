> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skuniform/name](https://developer.apple.com/documentation/spritekit/skuniform/name)

# name (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The uniform’s name.

## Declaration

```swift
var name: String { get }
```

<a id="Discussion"></a>

## Discussion

Your custom fragment shader uses this name to identify the variable. SpriteKit automatically declares the uniform variable for your shader.

## See Also

### Reading Information About a Uniform

- [uniformType](uniformtype.md): The uniform object’s data type.

# name (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The uniform’s name.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * name;
```

<a id="Discussion"></a>

## Discussion

Your custom fragment shader uses this name to identify the variable. SpriteKit automatically declares the uniform variable for your shader.

## See Also

### Reading Information About a Uniform

- [uniformType](uniformtype.md): The uniform object’s data type.
