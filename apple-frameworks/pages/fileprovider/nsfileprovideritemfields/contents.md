> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fileprovider/nsfileprovideritemfields/contents

# contents (Swift)

**Framework:** File Provider  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

The item’s content.

## Declaration

```swift
static var contents: NSFileProviderItemFields { get }
```

<a id="Discussion"></a>

## Discussion

If the item is a directory, the content are the item’s children. If the item is a file, the content is the data saved on disk.

## See Also

### Specifying the Required Fields

- [filename](filename.md): The item’s filename.

# NSFileProviderItemContents (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

The item’s content.

## Declaration

```objectivec
NSFileProviderItemContents
```

<a id="Discussion"></a>

## Discussion

If the item is a directory, the content are the item’s children. If the item is a file, the content is the data saved on disk.

## See Also

### Specifying the Required Fields

- [NSFileProviderItemFilename](filename.md): The item’s filename.
