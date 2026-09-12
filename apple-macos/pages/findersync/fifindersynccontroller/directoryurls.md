> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/findersync/fifindersynccontroller/directoryurls](https://developer.apple.com/documentation/findersync/fifindersynccontroller/directoryurls)

# directoryURLs (Swift)

**Framework:** Finder Sync  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The directories managed by this extension.

## Declaration

```swift
var directoryURLs: Set<URL>! { get set }
```

<a id="discussion"></a>

## Discussion

The extension receives [beginObservingDirectory(at:)](../fifindersyncprotocol/beginobservingdirectory%28at_%29.md) and [endObservingDirectory(at:)](../fifindersyncprotocol/endobservingdirectory%28at_%29.md) messages for every directory in this set and for all of their subdirectories.

Always set `directoryURLs` when the extension starts. If there are no directories to watch, set `directoryURLs` to an empty set.

## See Also

### Managing the Finder Sync Controller

- [default()](default%28%29.md): Returns the shared Finder Sync controller object.
- [selectedItemURLs()](selecteditemurls%28%29.md): Returns an array of selected items.
- [setBadgeIdentifier(\_:for:)](setbadgeidentifier%28__for_%29.md): Sets the badge for a file or directory.
- [setBadgeImage(\_:label:forBadgeIdentifier:)](setbadgeimage%28__label_forbadgeidentifier_%29.md): Sets the badge image and label for the given ID.
- [targetedURL()](targetedurl%28%29.md): Returns the URL of the Finder’s current target.

# directoryURLs (Objective-C)

**Framework:** Finder Sync  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The directories managed by this extension.

## Declaration

```objectivec
@property (copy, null_resettable) NSSet<NSURL *> * directoryURLs;
```

<a id="discussion"></a>

## Discussion

The extension receives [beginObservingDirectoryAtURL:](../fifindersyncprotocol/beginobservingdirectory%28at_%29.md) and [endObservingDirectoryAtURL:](../fifindersyncprotocol/endobservingdirectory%28at_%29.md) messages for every directory in this set and for all of their subdirectories.

Always set `directoryURLs` when the extension starts. If there are no directories to watch, set `directoryURLs` to an empty set.

## See Also

### Managing the Finder Sync Controller

- [defaultController](default%28%29.md): Returns the shared Finder Sync controller object.
- [selectedItemURLs](selecteditemurls%28%29.md): Returns an array of selected items.
- [setBadgeIdentifier:forURL:](setbadgeidentifier%28__for_%29.md): Sets the badge for a file or directory.
- [setBadgeImage:label:forBadgeIdentifier:](setbadgeimage%28__label_forbadgeidentifier_%29.md): Sets the badge image and label for the given ID.
- [targetedURL](targetedurl%28%29.md): Returns the URL of the Finder’s current target.
