> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktexture/preload(_:withcompletionhandler:)](https://developer.apple.com/documentation/spritekit/sktexture/preload(_:withcompletionhandler:))

# preload(\_:withCompletionHandler:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Load the data of multiple textures into memory.

## Declaration

```swift
class func preload(_ textures: [SKTexture], withCompletionHandler completionHandler: @escaping @Sendable () -> Void)
```

```swift
class func preload(_ textures: [SKTexture]) async
```

## Parameters

- `textures`: An array of [SKTexture](../sktexture.md) objects.
- `completionHandler`: A block called after all of the textures are loaded.

## Mentioned In

- [Maximizing Texture Performance](../maximizing-texture-performance.md)
- [Preloading Textures into Memory](../preloading-textures-into-memory.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> class func preload(_ textures: [SKTexture]) async
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

SpriteKit creates a background task that loads the texture data for all of the textures in the array, then returns control to your game. Your completion handler is called after all of the textures are loaded.

## See Also

### Preloading a Texture for Performance

- [Preloading Textures into Memory](../preloading-textures-into-memory.md): Decompress images ahead of time to avoid performance issues during gameplay.
- [preload(completionHandler:)](preload%28completionhandler_%29.md): Load texture data into memory, calling a completion handler after the task completes.

# preloadTextures:withCompletionHandler: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Load the data of multiple textures into memory.

## Declaration

```objectivec
+ (void) preloadTextures:(NSArray<SKTexture *> *) textures withCompletionHandler:(void (^)()) completionHandler;
```

## Parameters

- `textures`: An array of [SKTexture](../sktexture.md) objects.
- `completionHandler`: A block called after all of the textures are loaded.

## Mentioned In

- [Maximizing Texture Performance](../maximizing-texture-performance.md)
- [Preloading Textures into Memory](../preloading-textures-into-memory.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> class func preload(_ textures: [SKTexture]) async
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

SpriteKit creates a background task that loads the texture data for all of the textures in the array, then returns control to your game. Your completion handler is called after all of the textures are loaded.

## See Also

### Preloading a Texture for Performance

- [Preloading Textures into Memory](../preloading-textures-into-memory.md): Decompress images ahead of time to avoid performance issues during gameplay.
- [preloadWithCompletionHandler:](preload%28completionhandler_%29.md): Load texture data into memory, calling a completion handler after the task completes.
