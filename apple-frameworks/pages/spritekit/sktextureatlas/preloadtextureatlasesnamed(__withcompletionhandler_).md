> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktextureatlas/preloadtextureatlasesnamed(_:withcompletionhandler:)](https://developer.apple.com/documentation/spritekit/sktextureatlas/preloadtextureatlasesnamed(_:withcompletionhandler:))

# preloadTextureAtlasesNamed(\_:withCompletionHandler:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Loads the textures of multiple atlases into memory, calling a completion handler after the task completes.

## Declaration

```swift
class func preloadTextureAtlasesNamed(_ atlasNames: [String], withCompletionHandler completionHandler: @escaping @Sendable ((any Error)?, [SKTextureAtlas]) -> Void)
```

```swift
class func preloadTextureAtlasesNamed(_ atlasNames: [String]) async throws -> [SKTextureAtlas]
```

## Parameters

- `atlasNames`: An array containing the atlas names to preload.
- `completionHandler`: A block called after all of the texture atlases are loaded.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> class func preloadTextureAtlasesNamed(_ atlasNames: [String]) async throws -> [SKTextureAtlas]
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

SpriteKit creates a background task that loads the texture data from all of the specified atlas objects. Then, SpriteKit returns control to your game. After the atlases are loaded, your completion handler is called.

## See Also

### Preloading Textures

- [preload(completionHandler:)](preload%28completionhandler_%29.md): Loads an atlas object’s textures into memory, calling a completion handler after the task completes.
- [preloadTextureAtlases(\_:withCompletionHandler:)](preloadtextureatlases%28__withcompletionhandler_%29.md): Loads the textures of multiple atlas objects into memory, calling a completion handler after the task completes.

# preloadTextureAtlasesNamed:withCompletionHandler: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Loads the textures of multiple atlases into memory, calling a completion handler after the task completes.

## Declaration

```objectivec
+ (void) preloadTextureAtlasesNamed:(NSArray<NSString *> *) atlasNames withCompletionHandler:(void (^)(NSError *error, NSArray<SKTextureAtlas *> *foundAtlases)) completionHandler;
```

## Parameters

- `atlasNames`: An array containing the atlas names to preload.
- `completionHandler`: A block called after all of the texture atlases are loaded.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> class func preloadTextureAtlasesNamed(_ atlasNames: [String]) async throws -> [SKTextureAtlas]
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

SpriteKit creates a background task that loads the texture data from all of the specified atlas objects. Then, SpriteKit returns control to your game. After the atlases are loaded, your completion handler is called.

## See Also

### Preloading Textures

- [preloadWithCompletionHandler:](preload%28completionhandler_%29.md): Loads an atlas object’s textures into memory, calling a completion handler after the task completes.
- [preloadTextureAtlases:withCompletionHandler:](preloadtextureatlases%28__withcompletionhandler_%29.md): Loads the textures of multiple atlas objects into memory, calling a completion handler after the task completes.
