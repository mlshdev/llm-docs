> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintents/audiosearch](https://developer.apple.com/documentation/mediaintents/audiosearch)

# AudioSearch

**Framework:** Media Intents  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Results and metadata for a person’s audio search and playback request with Siri.

## Declaration

```swift
struct AudioSearch
```

## Mentioned In

- [Responding to audio search and playback requests](responding-to-audio-search-and-playback-requests.md)

<a id="overview"></a>

## Overview

People use Apple Intelligence and Siri to find and play audio. By integrating your app’s audio catalog with Apple Intelligence and Siri using the [App Intents](../appintents.md) framework, the system forwards search and playback requests to your app, and your app returns audio search results and allows the system to play your app’s songs, podcasts, audiobooks, and so on.

The `AudioSearch` structure captures a person’s audio search and playback request — music, podcasts, audiobooks, or other audio content.

Use `AudioSearch` in your [IntentValueQuery](../appintents/intentvaluequery.md) implementation to find matching audio content in your app’s media catalog.

For more information about allowing people to find audio content in your app with Apple Intelligence and Siri, see [Responding to audio search and playback requests](responding-to-audio-search-and-playback-requests.md).

## Topics

### Describing result criteria

- [criteria](audiosearch/criteria-swift.property.md): The search criteria for the audio request.
- [AudioSearch.Criteria](audiosearch/criteria-swift.enum.md): The metadata and classification of a person’s audio search that the system provides.

### Providing default implementations

- [init(criteria:spotlightSearchResults:)](audiosearch/init%28criteria_spotlightsearchresults_%29.md): Deprecated.
- [defaultResolverSpecification](audiosearch/defaultresolverspecification.md)

### Initializers

- [init(criteria:)](audiosearch/init%28criteria_%29.md): Creates an audio search with a person’s search criteria.

### Type Aliases

- [AudioSearch.Specification](audiosearch/specification.md)
- [AudioSearch.UnwrappedType](audiosearch/unwrappedtype.md)
- [AudioSearch.ValueType](audiosearch/valuetype.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomLocalizedStringResourceConvertible](../foundation/customlocalizedstringresourceconvertible.md)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [DisplayRepresentable](../appintents/displayrepresentable.md)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [InstanceDisplayRepresentable](../appintents/instancedisplayrepresentable.md)
- [IntentValueConvertible](../appintents/intentvalueconvertible.md)
- [IntentValueExpressing](../appintents/intentvalueexpressing.md)
- [PersistentlyIdentifiable](../appintents/persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TypeDisplayRepresentable](../appintents/typedisplayrepresentable.md)

## See Also

### Essentials

- [Responding to audio search and playback requests](responding-to-audio-search-and-playback-requests.md): Provide results for audio playback requests that people make by using Siri.
