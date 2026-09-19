> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sharedwithyou/swcollaborationhighlight/title

# title (Swift)

**Framework:** Shared with You  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The title of the collaboration highlight.

## Declaration

```swift
var title: String? { get }
```

<a id="Discussion"></a>

## Discussion

The app that hosts the collaboration provides this title.

## See Also

### Accessing collaboration attributes

- [collaborationIdentifier](collaborationidentifier.md): A unique identifier that the app hosting the collaboration provides.
- [contentType](contenttype.md): The UTI type for this collaboration highlight.
- [creationDate](creationdate.md): The date the system creates this file.

# title (Objective-C)

**Framework:** Shared with You  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The title of the collaboration highlight.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * title;
```

<a id="Discussion"></a>

## Discussion

The app that hosts the collaboration provides this title.

## See Also

### Accessing collaboration attributes

- [collaborationIdentifier](collaborationidentifier.md): A unique identifier that the app hosting the collaboration provides.
- [contentType](contenttype.md): The UTI type for this collaboration highlight.
- [creationDate](creationdate.md): The date the system creates this file.
