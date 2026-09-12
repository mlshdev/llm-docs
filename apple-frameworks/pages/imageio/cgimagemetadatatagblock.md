> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagemetadatatagblock](https://developer.apple.com/documentation/imageio/cgimagemetadatatagblock)

# CGImageMetadataTagBlock (Swift)

**Framework:** Image I/O  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The block to execute when enumerating the tags of a metadata object.

## Declaration

```swift
typealias CGImageMetadataTagBlock = (CFString, CGImageMetadataTag) -> Bool
```

## Parameters

- `path`: The full path to the tag in the metadata container.
- `tag`: The [CGImageMetadataTag](cgimagemetadatatag.md) object that contains the tag information. Never modify this object from your block. If you want to change the tag, save a reference to it and make your changes later.

<a id="return-value"></a>

## Return Value

`true` to continue enumerating the tags, or `false` to stop.

## See Also

### Enumerating the Metadata Tags

- [CGImageMetadataEnumerateTagsUsingBlock(\_:\_:\_:\_:)](cgimagemetadataenumeratetagsusingblock%28________%29.md): Enumerates the tags of a metadata object and executes the specified block on each tag.
- [kCGImageMetadataEnumerateRecursively](kcgimagemetadataenumeraterecursively.md): An option to enumerate recursively through a set of metadata tags.

# CGImageMetadataTagBlock (Objective-C)

**Framework:** Image I/O  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The block to execute when enumerating the tags of a metadata object.

## Declaration

```objectivec
typedef _Bool (^)(const struct __CFString *, struct CGImageMetadataTag *) CGImageMetadataTagBlock;
```

## Parameters

- `path`: The full path to the tag in the metadata container.
- `tag`: The [CGImageMetadataTagRef](cgimagemetadatatag.md) object that contains the tag information. Never modify this object from your block. If you want to change the tag, save a reference to it and make your changes later.

<a id="return-value"></a>

## Return Value

`true` to continue enumerating the tags, or `false` to stop.

## See Also

### Enumerating the Metadata Tags

- [CGImageMetadataEnumerateTagsUsingBlock](cgimagemetadataenumeratetagsusingblock%28________%29.md): Enumerates the tags of a metadata object and executes the specified block on each tag.
- [kCGImageMetadataEnumerateRecursively](kcgimagemetadataenumeraterecursively.md): An option to enumerate recursively through a set of metadata tags.
