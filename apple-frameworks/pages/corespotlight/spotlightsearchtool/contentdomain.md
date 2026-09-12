> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/contentdomain](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/contentdomain)

# SpotlightSearchTool.ContentDomain

**Framework:** CoreSpotlight  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A content domain that defines which fields and attribute mappings are presented to the model during a focused search session.

## Declaration

```swift
struct ContentDomain
```

<a id="overview"></a>

## Overview

Each domain exposes a small set of fields tuned for a specific category of user content. Developers can override the default attribute mappings.

Usage:

```swift
// Default communications schema
let guide = SpotlightSearchTool.Guide(level: .focused(.communications))

// Custom document field mapping
let domain = SpotlightSearchTool.ContentDomain.Documents(
    authors: [.authorNames, SearchableItemAttribute(rawValue: "com.myapp.chef")]
)
let guide = SpotlightSearchTool.Guide(level: .focused(.documents(domain)))
```

## Topics

### Getting the audio domain

- [audio](contentdomain/audio-swift.type.property.md): Music, podcasts, voice memos, and other audio content.
- [audio(\_:)](contentdomain/audio%28__%29.md): Music, podcasts, voice memos, and other audio content with custom attribute mapping.
- [SpotlightSearchTool.ContentDomain.Audio](contentdomain/audio-swift.struct.md): Attribute mapping for the audio domain.

### Getting the calendar domain

- [calendar](contentdomain/calendar-swift.type.property.md): Calendar events, meetings, and scheduled items.
- [calendar(\_:)](contentdomain/calendar%28__%29.md): Calendar events, meetings, and scheduled items with custom attribute mapping.
- [SpotlightSearchTool.ContentDomain.Calendar](contentdomain/calendar-swift.struct.md): Attribute mapping for the calendar domain.

### Getting the communications domain

- [communications](contentdomain/communications-swift.type.property.md): Email, messaging, and other person-to-person communication.
- [communications(\_:)](contentdomain/communications%28__%29.md): Email, messaging, and other person-to-person communication with custom attribute mapping.
- [SpotlightSearchTool.ContentDomain.Communications](contentdomain/communications-swift.struct.md): Attribute mapping for the communications domain.

### Getting the documents domain

- [documents](contentdomain/documents-swift.type.property.md): Documents, notes, and text-heavy content.
- [documents(\_:)](contentdomain/documents%28__%29.md): Documents, notes, and text-heavy content with custom attribute mapping.
- [SpotlightSearchTool.ContentDomain.Documents](contentdomain/documents-swift.struct.md): Attribute mapping for the documents domain.

### Getting the items domain

- [items](contentdomain/items-swift.type.property.md): Any items with title, text, and dates.
- [items(\_:)](contentdomain/items%28__%29.md): Any items with title, text, and dates with custom attribute mapping.
- [SpotlightSearchTool.ContentDomain.Items](contentdomain/items-swift.struct.md): Attribute mapping for the items domain.

### Getting the visual media domain

- [visualMedia](contentdomain/visualmedia-swift.type.property.md): Photos, videos, and other visual content.
- [visualMedia(\_:)](contentdomain/visualmedia%28__%29.md): Photos, videos, and other visual content with custom attribute mapping.
- [SpotlightSearchTool.ContentDomain.VisualMedia](contentdomain/visualmedia-swift.struct.md): Attribute mapping for the visual media domain.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the tool behavior

- [configuration](configuration-swift.property.md): The configuration details for the search tool.
- [SpotlightSearchTool.Configuration](configuration-swift.struct.md): The configuration data to use when creating a Spotlight search tool.
- [SpotlightSearchTool.Guide](guide.md): A type you use to offer guidance about what search capabillities to employ during a session.
- [SpotlightSearchTool.GuidanceProfile](guidanceprofile.md): Options for which techniques to use to determine a match.
- [SpotlightSearchTool.GuidanceLevel](guidancelevel.md): Options for how to search your app’s content.
- [SpotlightSearchTool.FormatLevel](formatlevel.md): Controls how tool responses are serialized for the model’s context window.
