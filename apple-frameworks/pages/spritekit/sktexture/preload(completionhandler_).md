> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktexture/preload(completionhandler:)](https://developer.apple.com/documentation/spritekit/sktexture/preload(completionhandler:))

# preload(completionHandler:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Load texture data into memory, calling a completion handler after the task completes.

## Declaration

```swift
func preload(completionHandler: @escaping @Sendable () -> Void)
```

```swift
func preload() async
```

## Parameters

- `completionHandler`: A block called after the texture data is loaded.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func preload() async
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

SpriteKit creates a background task to load the texture data from the associated file, then returns control to your game. After the texture data is loaded, your completion handler is called. Typically, you use this method when you want to guarantee that a particular texture is in memory before accessing it.

If you need to preload multiple textures at once, use the [preload(\_:withCompletionHandler:)](preload%28__withcompletionhandler_%29.md) method instead.

## See Also

### Preloading a Texture for Performance

- [Preloading Textures into Memory](../preloading-textures-into-memory.md): Decompress images ahead of time to avoid performance issues during gameplay.
- [preload(\_:withCompletionHandler:)](preload%28__withcompletionhandler_%29.md): Load the data of multiple textures into memory.

# preloadWithCompletionHandler: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Load texture data into memory, calling a completion handler after the task completes.

## Declaration

```objectivec
- (void) preloadWithCompletionHandler:(void (^)()) completionHandler;
```

## Parameters

- `completionHandler`: A block called after the texture data is loaded.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func preload() async
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

SpriteKit creates a background task to load the texture data from the associated file, then returns control to your game. After the texture data is loaded, your completion handler is called. Typically, you use this method when you want to guarantee that a particular texture is in memory before accessing it.

If you need to preload multiple textures at once, use the [preloadTextures:withCompletionHandler:](preload%28__withcompletionhandler_%29.md) method instead.

## See Also

### Preloading a Texture for Performance

- [Preloading Textures into Memory](../preloading-textures-into-memory.md): Decompress images ahead of time to avoid performance issues during gameplay.
- [preloadTextures:withCompletionHandler:](preload%28__withcompletionhandler_%29.md): Load the data of multiple textures into memory.
