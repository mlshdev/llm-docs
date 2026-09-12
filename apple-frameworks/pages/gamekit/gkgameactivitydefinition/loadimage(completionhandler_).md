> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgameactivitydefinition/loadimage(completionhandler:)](https://developer.apple.com/documentation/gamekit/gkgameactivitydefinition/loadimage(completionhandler:))

# loadImage(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Asynchronously load the image. Error will be nil on success.

## Declaration

```swift
func loadImage(completionHandler: @escaping @Sendable (UIImage?, (any Error)?) -> Void)
```

```swift
var image: UIImage? { get async throws }
```

```swift
func loadImage(completionHandler: @escaping @Sendable (NSImage?, (any Error)?) -> Void)
```

```swift
var image: NSImage? { get async throws }
```

## See Also

### Getting the display properties and image

- [title](title.md): A short title for the game activity.
- [details](details.md): A more detailed description of the game activity.
- [defaultProperties](defaultproperties.md): Default properties defined by the developer for this type of game activity.

# loadImageWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Asynchronously load the image. Error will be nil on success.

## Declaration

```objectivec
- (void) loadImageWithCompletionHandler:(void (^)(UIImage *image, NSError *error)) completionHandler;
```

```objectivec
- (void) loadImageWithCompletionHandler:(void (^)(NSImage *image, NSError *error)) completionHandler;
```

## See Also

### Getting the display properties and image

- [title](title.md): A short title for the game activity.
- [details](details.md): A more detailed description of the game activity.
- [defaultProperties](defaultproperties.md): Default properties defined by the developer for this type of game activity.
