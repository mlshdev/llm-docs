> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktextureatlas/preloadtextureatlases(_:withcompletionhandler:)](https://developer.apple.com/documentation/spritekit/sktextureatlas/preloadtextureatlases(_:withcompletionhandler:))

# preloadTextureAtlases(\_:withCompletionHandler:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Loads the textures of multiple atlas objects into memory, calling a completion handler after the task completes.

## Declaration

```swift
class func preloadTextureAtlases(_ textureAtlases: [SKTextureAtlas], withCompletionHandler completionHandler: @escaping @Sendable () -> Void)
```

```swift
class func preloadTextureAtlases(_ textureAtlases: [SKTextureAtlas]) async
```

## Parameters

- `textureAtlases`: An array of [SKTextureAtlas](../sktextureatlas.md) objects.
- `completionHandler`: A block called after all of the texture atlases are loaded.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> class func preloadTextureAtlases(_ textureAtlases: [SKTextureAtlas]) async
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

SpriteKit creates a background task that loads the texture data from all of the specified atlas objects. Then, SpriteKit returns control to your game. After the atlas objects are loaded, your completion handler is called.

## See Also

### Preloading Textures

- [preload(completionHandler:)](preload%28completionhandler_%29.md): Loads an atlas object’s textures into memory, calling a completion handler after the task completes.
- [preloadTextureAtlasesNamed(\_:withCompletionHandler:)](preloadtextureatlasesnamed%28__withcompletionhandler_%29.md): Loads the textures of multiple atlases into memory, calling a completion handler after the task completes.

# preloadTextureAtlases:withCompletionHandler: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Loads the textures of multiple atlas objects into memory, calling a completion handler after the task completes.

## Declaration

```objectivec
+ (void) preloadTextureAtlases:(NSArray<SKTextureAtlas *> *) textureAtlases withCompletionHandler:(void (^)()) completionHandler;
```

## Parameters

- `textureAtlases`: An array of [SKTextureAtlas](../sktextureatlas.md) objects.
- `completionHandler`: A block called after all of the texture atlases are loaded.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> class func preloadTextureAtlases(_ textureAtlases: [SKTextureAtlas]) async
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

SpriteKit creates a background task that loads the texture data from all of the specified atlas objects. Then, SpriteKit returns control to your game. After the atlas objects are loaded, your completion handler is called.

## See Also

### Preloading Textures

- [preloadWithCompletionHandler:](preload%28completionhandler_%29.md): Loads an atlas object’s textures into memory, calling a completion handler after the task completes.
- [preloadTextureAtlasesNamed:withCompletionHandler:](preloadtextureatlasesnamed%28__withcompletionhandler_%29.md): Loads the textures of multiple atlases into memory, calling a completion handler after the task completes.
