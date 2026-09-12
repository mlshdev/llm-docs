> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inplaymediaintentresponse/nowplayinginfo](https://developer.apple.com/documentation/intents/inplaymediaintentresponse/nowplayinginfo)

# nowPlayingInfo (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

The now-playing information, such as title and artwork, for the media.

## Declaration

```swift
var nowPlayingInfo: [String : Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

In your [confirm(intent:completion:)](../inplaymediaintenthandling/confirm%28intent_completion_%29.md) response, provide now-playing information for the media so Siri can display it to the user at the appropriate time, such as after they connect headphones to their iPhone.

To create the now-playing information dictionary, use the media item property keys from the Media Player framework (see [General media item property keys](../../mediaplayer/general-media-item-property-keys.md) for the list of keys). To include artwork in the dictionary, use [INImage](../inimage.md) instead of [UIImage](../../uikit/uiimage.md) to create the image object. Media intent shortcuts don’t support [UIImage](../../uikit/uiimage.md) objects in this dictionary.

The listing below creates a now-playing information dictionary.

```swift
public static func nowPlayingInfo(for episode: PodcastEpisode, in container: LibraryItemContainer, forShortcut: Bool = false) -> [String: Any] {
    var nowPlayingInfo: [String: Any] = [MPMediaItemPropertyTitle: episode.title,
                                         MPMediaItemPropertyMediaType: MPMediaType.podcast.rawValue,
                                         MPMediaItemPropertyPodcastTitle: container.title,
                                         MPMediaItemPropertyPlaybackDuration: NSNumber(value: audioFileDuration)]

    if forShortcut {
        nowPlayingInfo[MPMediaItemPropertyArtwork] = INImage(named: container.artworkName)
    } else {
        if let image = UIImage(named: container.artworkName) {
            let artwork = MPMediaItemArtwork(boundsSize: CGSize(width: 60, height: 60)) { (_) -> UIImage in
                return image
            }
            
            nowPlayingInfo[MPMediaItemPropertyArtwork] = artwork
        }
    }
    
    return nowPlayingInfo
}
```

# nowPlayingInfo (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

The now-playing information, such as title and artwork, for the media.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSDictionary<NSString *,id> * nowPlayingInfo;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSDictionary<NSString *,id> * nowPlayingInfo;
```

<a id="Discussion"></a>

## Discussion

In your [confirmPlayMedia:completion:](../inplaymediaintenthandling/confirm%28intent_completion_%29.md) response, provide now-playing information for the media so Siri can display it to the user at the appropriate time, such as after they connect headphones to their iPhone.

To create the now-playing information dictionary, use the media item property keys from the Media Player framework (see [General media item property keys](../../mediaplayer/general-media-item-property-keys.md) for the list of keys). To include artwork in the dictionary, use [INImage](../inimage.md) instead of [UIImage](../../uikit/uiimage.md) to create the image object. Media intent shortcuts don’t support [UIImage](../../uikit/uiimage.md) objects in this dictionary.

The listing below creates a now-playing information dictionary.

```swift
public static func nowPlayingInfo(for episode: PodcastEpisode, in container: LibraryItemContainer, forShortcut: Bool = false) -> [String: Any] {
    var nowPlayingInfo: [String: Any] = [MPMediaItemPropertyTitle: episode.title,
                                         MPMediaItemPropertyMediaType: MPMediaType.podcast.rawValue,
                                         MPMediaItemPropertyPodcastTitle: container.title,
                                         MPMediaItemPropertyPlaybackDuration: NSNumber(value: audioFileDuration)]

    if forShortcut {
        nowPlayingInfo[MPMediaItemPropertyArtwork] = INImage(named: container.artworkName)
    } else {
        if let image = UIImage(named: container.artworkName) {
            let artwork = MPMediaItemArtwork(boundsSize: CGSize(width: 60, height: 60)) { (_) -> UIImage in
                return image
            }
            
            nowPlayingInfo[MPMediaItemPropertyArtwork] = artwork
        }
    }
    
    return nowPlayingInfo
}
```
