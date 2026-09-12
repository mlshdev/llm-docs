> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklookthumbnailing/qlthumbnailgenerator/request/representationtypes-swift.struct/icon](https://developer.apple.com/documentation/quicklookthumbnailing/qlthumbnailgenerator/request/representationtypes-swift.struct/icon)

# icon (Swift)

**Framework:** Quick Look Thumbnailing  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A file icon representation of a file.

## Declaration

```swift
static var icon: QLThumbnailGenerator.Request.RepresentationTypes { get }
```

<a id="Discussion"></a>

## Discussion

Files of the same type share the same file icon.

## See Also

### Creating a Thumbnail Type

- [init(rawValue:)](init%28rawvalue_%29.md): Creates a new thumbnail type object for a given value.
- [all](all.md): The thumbnail type to generate all possible thumbnail representations.
- [lowQualityThumbnail](lowqualitythumbnail.md): A faster to generate version of the thumbnail that may sacrifice quality for speed.
- [thumbnail](thumbnail.md): A thumbnail representation of a file.

# QLThumbnailGenerationRequestRepresentationTypeIcon (Objective-C)

**Framework:** Quick Look Thumbnailing  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A file icon representation of a file.

## Declaration

```objectivec
QLThumbnailGenerationRequestRepresentationTypeIcon
```

<a id="Discussion"></a>

## Discussion

Files of the same type share the same file icon.

## See Also

### Creating a Thumbnail Type

- [QLThumbnailGenerationRequestRepresentationTypeAll](all.md): The thumbnail type to generate all possible thumbnail representations.
- [QLThumbnailGenerationRequestRepresentationTypeLowQualityThumbnail](lowqualitythumbnail.md): A faster to generate version of the thumbnail that may sacrifice quality for speed.
- [QLThumbnailGenerationRequestRepresentationTypeThumbnail](thumbnail.md): A thumbnail representation of a file.
