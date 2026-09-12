> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skshader/source](https://developer.apple.com/documentation/spritekit/skshader/source)

# source (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The source code for the shader.

## Declaration

```swift
var source: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The source code for a shader object can be updated at runtime. However, recompiling the fragment shader can be an expensive operation.

# source (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The source code for the shader.

## Declaration

```objectivec
@property (copy, nullable) NSString * source;
```

<a id="Discussion"></a>

## Discussion

The source code for a shader object can be updated at runtime. However, recompiling the fragment shader can be an expensive operation.
