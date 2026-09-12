> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitemattributeset/coverage](https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/coverage)

# coverage (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A list of descriptors that specify the extent or scope of the media.

## Declaration

```swift
var coverage: [String]? { get set }
```

<a id="Discussion"></a>

## Discussion

The string values in this property typically include a location (such as a place name or geographic coordinates), a temporal period (such as a period label, date, or date range), or a jurisdiction (such as a named administrative entity).

It’s recommended that you select a value from a controlled vocabulary, and that when you need to specify a place or time period, you use a name instead of a numeric identifier, such as a set of coordinates or a date range.

## See Also

### Describing media

- [comment](comment.md): A comment related to the media file.
- [contentCreationDate](contentcreationdate.md): The creation date of an edited or optimized version of the song or composition.
- [contentModificationDate](contentmodificationdate.md): The date on which the contents of the file was last modified.
- [contentSources](contentsources.md): An array of sources from which the media was obtained.
- [copyright](copyright.md): The copyright date of the content.
- [downloadedDate](downloadeddate.md): The most recent date on which the file was downloaded or received.
- [editors](editors.md): A list of editors who have worked on the file.
- [lastUsedDate](lastuseddate.md): The date on which the file was last used.
- [participants](participants.md): A list of people who are visible in an image or movie or written about in a document.
- [projects](projects.md): A list of projects of which this file is a part.
- [addedDate](addeddate.md): The date on which the item was moved into its current location.
- [codecs](codecs.md): The codecs used to encode/decode the media.
- [contactKeywords](contactkeywords.md): A list of contacts who are associated with the content in some way, not including the author.
- [deliveryType](deliverytype.md): The delivery type of the file.
- [duration](duration.md): The duration (if appropriate) of the content of the file, in seconds.

# coverage (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A list of descriptors that specify the extent or scope of the media.

## Declaration

```objectivec
@property (copy, nullable) NSArray<NSString *> * coverage;
```

<a id="Discussion"></a>

## Discussion

The string values in this property typically include a location (such as a place name or geographic coordinates), a temporal period (such as a period label, date, or date range), or a jurisdiction (such as a named administrative entity).

It’s recommended that you select a value from a controlled vocabulary, and that when you need to specify a place or time period, you use a name instead of a numeric identifier, such as a set of coordinates or a date range.

## See Also

### Describing media

- [comment](comment.md): A comment related to the media file.
- [contentCreationDate](contentcreationdate.md): The creation date of an edited or optimized version of the song or composition.
- [contentModificationDate](contentmodificationdate.md): The date on which the contents of the file was last modified.
- [contentSources](contentsources.md): An array of sources from which the media was obtained.
- [copyright](copyright.md): The copyright date of the content.
- [downloadedDate](downloadeddate.md): The most recent date on which the file was downloaded or received.
- [editors](editors.md): A list of editors who have worked on the file.
- [lastUsedDate](lastuseddate.md): The date on which the file was last used.
- [participants](participants.md): A list of people who are visible in an image or movie or written about in a document.
- [projects](projects.md): A list of projects of which this file is a part.
- [addedDate](addeddate.md): The date on which the item was moved into its current location.
- [codecs](codecs.md): The codecs used to encode/decode the media.
- [contactKeywords](contactkeywords.md): A list of contacts who are associated with the content in some way, not including the author.
- [deliveryType](deliverytype.md): The delivery type of the file.
- [duration](duration.md): The duration (if appropriate) of the content of the file, in seconds.
