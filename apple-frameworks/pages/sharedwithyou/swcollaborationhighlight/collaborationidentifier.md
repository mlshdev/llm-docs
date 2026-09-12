> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swcollaborationhighlight/collaborationidentifier](https://developer.apple.com/documentation/sharedwithyou/swcollaborationhighlight/collaborationidentifier)

# collaborationIdentifier (Swift)

**Framework:** Shared with You  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A unique identifier that the app hosting the collaboration provides.

## Declaration

```swift
var collaborationIdentifier: String { get }
```

<a id="Discussion"></a>

## Discussion

This identifier is unique across platforms and sharing sessions.

## See Also

### Accessing collaboration attributes

- [contentType](contenttype.md): The UTI type for this collaboration highlight.
- [creationDate](creationdate.md): The date the system creates this file.
- [title](title.md): The title of the collaboration highlight.

# collaborationIdentifier (Objective-C)

**Framework:** Shared with You  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A unique identifier that the app hosting the collaboration provides.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * collaborationIdentifier;
```

<a id="Discussion"></a>

## Discussion

This identifier is unique across platforms and sharing sessions.

## See Also

### Accessing collaboration attributes

- [contentType](contenttype.md): The UTI type for this collaboration highlight.
- [creationDate](creationdate.md): The date the system creates this file.
- [title](title.md): The title of the collaboration highlight.
