> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimagemetadataenumeraterecursively](https://developer.apple.com/documentation/imageio/kcgimagemetadataenumeraterecursively)

# kCGImageMetadataEnumerateRecursively (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An option to enumerate recursively through a set of metadata tags.

## Declaration

```swift
let kCGImageMetadataEnumerateRecursively: CFString
```

<a id="Discussion"></a>

## Discussion

The value of this key is a [CFBoolean](../corefoundation/cfboolean.md). Set the value to [kOSBooleanTrue](../driverkit/kosbooleantrue.md) to enumerate all tags recursively. Set the value to [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) to enumerate only the direct children of the root path you specify.

When you call [CGImageMetadataEnumerateTagsUsingBlock(\_:\_:\_:\_:)](cgimagemetadataenumeratetagsusingblock%28________%29.md), include this option if you want the enumeration behavior to search recursively through the available tags. If you don’t specify this key, the function behaves as if the value is false.

## See Also

### Enumerating the Metadata Tags

- [CGImageMetadataEnumerateTagsUsingBlock(\_:\_:\_:\_:)](cgimagemetadataenumeratetagsusingblock%28________%29.md): Enumerates the tags of a metadata object and executes the specified block on each tag.
- [CGImageMetadataTagBlock](cgimagemetadatatagblock.md): The block to execute when enumerating the tags of a metadata object.

# kCGImageMetadataEnumerateRecursively (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An option to enumerate recursively through a set of metadata tags.

## Declaration

```objectivec
extern CFStringRef const kCGImageMetadataEnumerateRecursively;
```

<a id="Discussion"></a>

## Discussion

The value of this key is a [CFBooleanRef](../corefoundation/cfboolean.md). Set the value to [kOSBooleanTrue](../driverkit/kosbooleantrue.md) to enumerate all tags recursively. Set the value to [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) to enumerate only the direct children of the root path you specify.

When you call [CGImageMetadataEnumerateTagsUsingBlock](cgimagemetadataenumeratetagsusingblock%28________%29.md), include this option if you want the enumeration behavior to search recursively through the available tags. If you don’t specify this key, the function behaves as if the value is false.

## See Also

### Enumerating the Metadata Tags

- [CGImageMetadataEnumerateTagsUsingBlock](cgimagemetadataenumeratetagsusingblock%28________%29.md): Enumerates the tags of a metadata object and executes the specified block on each tag.
- [CGImageMetadataTagBlock](cgimagemetadatatagblock.md): The block to execute when enumerating the tags of a metadata object.
