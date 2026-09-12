> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlthumbnaildictionaryitem](https://developer.apple.com/documentation/foundation/urlthumbnaildictionaryitem)

# URLThumbnailDictionaryItem (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Possible keys for the [thumbnailDictionaryKey](urlresourcekey/thumbnaildictionarykey.md) dictionary.

## Declaration

```swift
struct URLThumbnailDictionaryItem
```

## Topics

### Creating a Thumbnail Dictionary Key

- [init(\_:)](urlthumbnaildictionaryitem/init%28__%29.md): Creates a thumbnail dictionary item key from the provided constant string.
- [init(rawValue:)](urlthumbnaildictionaryitem/init%28rawvalue_%29.md): Creates a thumbnail dictionary item key from the provided raw value string.

### Constants

- [NSThumbnail1024x1024SizeKey](urlthumbnaildictionaryitem/nsthumbnail1024x1024sizekey.md): Deprecated. A 1024 x 1024 pixel thumbnail as a `UIImage` on iOS or an `NSImage` in macOS.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Thumbnail keys

- [thumbnailKey](urlresourcekey/thumbnailkey.md): Deprecated. All thumbnails as a single NSImage (read-write).
- [thumbnailDictionaryKey](urlresourcekey/thumbnaildictionarykey.md): Deprecated. A dictionary of NSImage/UIImage objects keyed by size (read-write). See [URLThumbnailDictionaryItem](urlthumbnaildictionaryitem.md) for a list of possible keys.

# NSURLThumbnailDictionaryItem (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Possible keys for the [NSURLThumbnailDictionaryKey](urlresourcekey/thumbnaildictionarykey.md) dictionary.

## Declaration

```objectivec
typedef NSString * NSURLThumbnailDictionaryItem;
```

## Topics

### Constants

- [NSThumbnail1024x1024SizeKey](urlthumbnaildictionaryitem/nsthumbnail1024x1024sizekey.md): Deprecated. A 1024 x 1024 pixel thumbnail as a `UIImage` on iOS or an `NSImage` in macOS.

## See Also

### Thumbnail keys

- [NSURLThumbnailKey](urlresourcekey/thumbnailkey.md): Deprecated. All thumbnails as a single NSImage (read-write).
- [NSURLThumbnailDictionaryKey](urlresourcekey/thumbnaildictionarykey.md): Deprecated. A dictionary of NSImage/UIImage objects keyed by size (read-write). See [NSURLThumbnailDictionaryItem](urlthumbnaildictionaryitem.md) for a list of possible keys.
