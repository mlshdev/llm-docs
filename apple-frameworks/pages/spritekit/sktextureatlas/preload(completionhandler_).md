> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktextureatlas/preload(completionhandler:)](https://developer.apple.com/documentation/spritekit/sktextureatlas/preload(completionhandler:))

# preload(completionHandler:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Loads an atlas object’s textures into memory, calling a completion handler after the task completes.

## Declaration

```swift
func preload(completionHandler: @escaping @Sendable () -> Void)
```

```swift
func preload() async
```

## Parameters

- `completionHandler`: A block called after the texture atlas is loaded.

## Mentioned In

- [Maximizing Texture Performance](../maximizing-texture-performance.md)

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

SpriteKit creates a background task that loads the texture data from the atlas object. Then, SpriteKit returns control to your game. After the texture atlas is loaded, your completion handler is called.

If you need to preload multiple texture atlas objects immediately, use the [preloadTextureAtlases(\_:withCompletionHandler:)](preloadtextureatlases%28__withcompletionhandler_%29.md) method instead.

## See Also

### Preloading Textures

- [preloadTextureAtlases(\_:withCompletionHandler:)](preloadtextureatlases%28__withcompletionhandler_%29.md): Loads the textures of multiple atlas objects into memory, calling a completion handler after the task completes.
- [preloadTextureAtlasesNamed(\_:withCompletionHandler:)](preloadtextureatlasesnamed%28__withcompletionhandler_%29.md): Loads the textures of multiple atlases into memory, calling a completion handler after the task completes.

# preloadWithCompletionHandler: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Loads an atlas object’s textures into memory, calling a completion handler after the task completes.

## Declaration

```objectivec
- (void) preloadWithCompletionHandler:(void (^)()) completionHandler;
```

## Parameters

- `completionHandler`: A block called after the texture atlas is loaded.

## Mentioned In

- [Maximizing Texture Performance](../maximizing-texture-performance.md)

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

SpriteKit creates a background task that loads the texture data from the atlas object. Then, SpriteKit returns control to your game. After the texture atlas is loaded, your completion handler is called.

If you need to preload multiple texture atlas objects immediately, use the [preloadTextureAtlases:withCompletionHandler:](preloadtextureatlases%28__withcompletionhandler_%29.md) method instead.

## See Also

### Preloading Textures

- [preloadTextureAtlases:withCompletionHandler:](preloadtextureatlases%28__withcompletionhandler_%29.md): Loads the textures of multiple atlas objects into memory, calling a completion handler after the task completes.
- [preloadTextureAtlasesNamed:withCompletionHandler:](preloadtextureatlasesnamed%28__withcompletionhandler_%29.md): Loads the textures of multiple atlases into memory, calling a completion handler after the task completes.
