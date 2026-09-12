> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/findersync/fifindersynccontroller/setbadgeidentifier(_:for:)](https://developer.apple.com/documentation/findersync/fifindersynccontroller/setbadgeidentifier(_:for:))

# setBadgeIdentifier(\_:for:) (Swift)

**Framework:** Finder Sync  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Sets the badge for a file or directory.

## Declaration

```swift
func setBadgeIdentifier(_ badgeID: String, for url: URL)
```

## Parameters

- `badgeID`: A unique ID, identifying the badge.
- `url`: The URL of the file or directory.

<a id="discussion"></a>

## Discussion

Adds the specified badge to the given file or directory. Setting the identifier to an empty string (`@""`) removes the badge.

Avoid adding badges to items that the Finder hasn’t displayed yet. When setting the initial badge, call this method from your Finder Sync extension’s [requestBadgeIdentifier(for:)](../fifindersyncprotocol/requestbadgeidentifier%28for_%29.md) method. When updating badges, call this method only for items that have already received a badge.

## See Also

### Related Documentation

- [requestBadgeIdentifier(for:)](../fifindersyncprotocol/requestbadgeidentifier%28for_%29.md): Requests a badge for the given file or directory.

### Managing the Finder Sync Controller

- [default()](default%28%29.md): Returns the shared Finder Sync controller object.
- [directoryURLs](directoryurls.md): The directories managed by this extension.
- [selectedItemURLs()](selecteditemurls%28%29.md): Returns an array of selected items.
- [setBadgeImage(\_:label:forBadgeIdentifier:)](setbadgeimage%28__label_forbadgeidentifier_%29.md): Sets the badge image and label for the given ID.
- [targetedURL()](targetedurl%28%29.md): Returns the URL of the Finder’s current target.

# setBadgeIdentifier:forURL: (Objective-C)

**Framework:** Finder Sync  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Sets the badge for a file or directory.

## Declaration

```objectivec
- (void) setBadgeIdentifier:(NSString *) badgeID forURL:(NSURL *) url;
```

## Parameters

- `badgeID`: A unique ID, identifying the badge.
- `url`: The URL of the file or directory.

<a id="discussion"></a>

## Discussion

Adds the specified badge to the given file or directory. Setting the identifier to an empty string (`@""`) removes the badge.

Avoid adding badges to items that the Finder hasn’t displayed yet. When setting the initial badge, call this method from your Finder Sync extension’s [requestBadgeIdentifierForURL:](../fifindersyncprotocol/requestbadgeidentifier%28for_%29.md) method. When updating badges, call this method only for items that have already received a badge.

## See Also

### Related Documentation

- [requestBadgeIdentifierForURL:](../fifindersyncprotocol/requestbadgeidentifier%28for_%29.md): Requests a badge for the given file or directory.

### Managing the Finder Sync Controller

- [defaultController](default%28%29.md): Returns the shared Finder Sync controller object.
- [directoryURLs](directoryurls.md): The directories managed by this extension.
- [selectedItemURLs](selecteditemurls%28%29.md): Returns an array of selected items.
- [setBadgeImage:label:forBadgeIdentifier:](setbadgeimage%28__label_forbadgeidentifier_%29.md): Sets the badge image and label for the given ID.
- [targetedURL](targetedurl%28%29.md): Returns the URL of the Finder’s current target.
