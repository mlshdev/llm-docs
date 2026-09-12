> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkplayer/loadphoto(for:withcompletionhandler:)](https://developer.apple.com/documentation/gamekit/gkplayer/loadphoto(for:withcompletionhandler:))

# loadPhoto(for:withCompletionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Loads a photo of the player from Game Center.

## Declaration

```swift
func loadPhoto(for size: GKPlayer.PhotoSize, withCompletionHandler completionHandler: (@Sendable (UIImage?, (any Error)?) -> Void)? = nil)
```

```swift
func loadPhoto(for size: GKPlayer.PhotoSize) async throws -> UIImage
```

```swift
func loadPhoto(for size: GKPlayer.PhotoSize, withCompletionHandler completionHandler: (@Sendable (NSImage?, (any Error)?) -> Void)? = nil)
```

```swift
func loadPhoto(for size: GKPlayer.PhotoSize) async throws -> NSImage
```

## Parameters

- `size`: A constant that determines the size of the photo to load.
- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameters:

  - ***photo***: An image of the player. If an error occurs, this may be a cached image already on the device; otherwise, it is `nil`.
  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

The size of the image that returns to your game is dependent on both the size parameter and the user interface idiom of the device your game is running on.

## See Also

### Loading player photos

- [GKPlayer.PhotoSize](photosize.md): The size of a photo that Game Center loads.

# loadPhotoForSize:withCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Loads a photo of the player from Game Center.

## Declaration

```objectivec
- (void) loadPhotoForSize:(GKPhotoSize) size withCompletionHandler:(void (^)(UIImage *photo, NSError *error)) completionHandler;
```

```objectivec
- (void) loadPhotoForSize:(GKPhotoSize) size withCompletionHandler:(void (^)(NSImage *photo, NSError *error)) completionHandler;
```

## Parameters

- `size`: A constant that determines the size of the photo to load.
- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameters:

  - ***photo***: An image of the player. If an error occurs, this may be a cached image already on the device; otherwise, it is `nil`.
  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

The size of the image that returns to your game is dependent on both the size parameter and the user interface idiom of the device your game is running on.

## See Also

### Loading player photos

- [GKPhotoSize](photosize.md): The size of a photo that Game Center loads.
