> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitemattributeset/contentsources](https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/contentsources)

# contentSources (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

An array of sources from which the media was obtained.

## Declaration

```swift
var contentSources: [String]? { get set }
```

<a id="Discussion"></a>

## Discussion

The string values in this property might include the URL of the website from which the file was downloaded or information that describes the email to which the file was attached.

## See Also

### Describing media

- [comment](comment.md): A comment related to the media file.
- [contentCreationDate](contentcreationdate.md): The creation date of an edited or optimized version of the song or composition.
- [contentModificationDate](contentmodificationdate.md): The date on which the contents of the file was last modified.
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
- [mediaTypes](mediatypes.md): The media types present in the content.

# contentSources (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

An array of sources from which the media was obtained.

## Declaration

```objectivec
@property (copy, nullable) NSArray<NSString *> * contentSources;
```

<a id="Discussion"></a>

## Discussion

The string values in this property might include the URL of the website from which the file was downloaded or information that describes the email to which the file was attached.

## See Also

### Describing media

- [comment](comment.md): A comment related to the media file.
- [contentCreationDate](contentcreationdate.md): The creation date of an edited or optimized version of the song or composition.
- [contentModificationDate](contentmodificationdate.md): The date on which the contents of the file was last modified.
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
- [mediaTypes](mediatypes.md): The media types present in the content.
