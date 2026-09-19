> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamekit/gkgameactivitydefinition/defaultproperties

# defaultProperties (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Default properties defined by the developer for this type of game activity.

## Declaration

```swift
var defaultProperties: [String : String] { get }
```

## See Also

### Getting the display properties and image

- [title](title.md): A short title for the game activity.
- [details](details.md): A more detailed description of the game activity.
- [loadImage(completionHandler:)](loadimage%28completionhandler_%29.md): Asynchronously load the image. Error will be nil on success.

# defaultProperties (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Default properties defined by the developer for this type of game activity.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSDictionary<NSString *,NSString *> * defaultProperties;
```

## See Also

### Getting the display properties and image

- [title](title.md): A short title for the game activity.
- [details](details.md): A more detailed description of the game activity.
- [loadImageWithCompletionHandler:](loadimage%28completionhandler_%29.md): Asynchronously load the image. Error will be nil on success.
