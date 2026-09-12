> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/findersync/fifindersynccontroller/default()](https://developer.apple.com/documentation/findersync/fifindersynccontroller/default())

# default() (Swift)

**Framework:** Finder Sync  
**Kind:** Type Method  
**Availability:** macOS 10.10+

Returns the shared Finder Sync controller object.

## Declaration

```swift
class func `default`() -> Self
```

<a id="return-value"></a>

## Return Value

The default Finder Sync controller object for this extension.

## See Also

### Managing the Finder Sync Controller

- [directoryURLs](directoryurls.md): The directories managed by this extension.
- [selectedItemURLs()](selecteditemurls%28%29.md): Returns an array of selected items.
- [setBadgeIdentifier(\_:for:)](setbadgeidentifier%28__for_%29.md): Sets the badge for a file or directory.
- [setBadgeImage(\_:label:forBadgeIdentifier:)](setbadgeimage%28__label_forbadgeidentifier_%29.md): Sets the badge image and label for the given ID.
- [targetedURL()](targetedurl%28%29.md): Returns the URL of the Finder’s current target.

# defaultController (Objective-C)

**Framework:** Finder Sync  
**Kind:** Type Method  
**Availability:** macOS 10.10+

Returns the shared Finder Sync controller object.

## Declaration

```objectivec
+ (instancetype) defaultController;
```

<a id="return-value"></a>

## Return Value

The default Finder Sync controller object for this extension.

## See Also

### Managing the Finder Sync Controller

- [directoryURLs](directoryurls.md): The directories managed by this extension.
- [selectedItemURLs](selecteditemurls%28%29.md): Returns an array of selected items.
- [setBadgeIdentifier:forURL:](setbadgeidentifier%28__for_%29.md): Sets the badge for a file or directory.
- [setBadgeImage:label:forBadgeIdentifier:](setbadgeimage%28__label_forbadgeidentifier_%29.md): Sets the badge image and label for the given ID.
- [targetedURL](targetedurl%28%29.md): Returns the URL of the Finder’s current target.
