> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shmediaitemproperty](https://developer.apple.com/documentation/shazamkit/shmediaitemproperty)

# SHMediaItemProperty (Swift)

**Framework:** ShazamKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Constants for the media item property names.

## Declaration

```swift
struct SHMediaItemProperty
```

## Topics

### Creating a property key

- [init(\_:)](shmediaitemproperty/init%28__%29.md): Creates a property key for the specified property.
- [init(rawValue:)](shmediaitemproperty/init%28rawvalue_%29.md): Creates a property key for the specified property.

### General media item property keys

- [title](shmediaitemproperty/title.md): The key to access the title property of a media item.
- [subtitle](shmediaitemproperty/subtitle.md): The key to access the subtitle property of a media item.
- [artist](shmediaitemproperty/artist.md): The key to access the artist property of a media item.
- [artworkURL](shmediaitemproperty/artworkurl.md): The key to access the artwork URL property of a media item.
- [videoURL](shmediaitemproperty/videourl.md): The key to access the video URL property of a media item.
- [genres](shmediaitemproperty/genres.md): The key to access the genres property of a media item.
- [explicitContent](shmediaitemproperty/explicitcontent.md): The key to access the explicit content property of a media item.
- [ISRC](shmediaitemproperty/isrc.md): The key to access the International Standard Recording Code (ISRC) property of a media item.
- [frequencySkewRanges](shmediaitemproperty/frequencyskewranges.md): The key to access the frequency skew ranges property of a media item.
- [creationDate](shmediaitemproperty/creationdate.md): The date the media item was created.
- [timeRanges](shmediaitemproperty/timeranges.md): The key to access the time ranges property of a media item.

### Apple Music property keys

- [appleMusicURL](shmediaitemproperty/applemusicurl.md): The key to access the Apple Music URL property of a media item.
- [appleMusicID](shmediaitemproperty/applemusicid.md): The key to access the Apple Music ID of a media item.

### Shazam music catalog property keys

- [webURL](shmediaitemproperty/weburl.md): The key to access the web URL property of a media item.
- [shazamID](shmediaitemproperty/shazamid.md): The key to access the Shazam ID property of a media item.

### Matched media item property keys

- [matchOffset](shmediaitemproperty/matchoffset.md): The key to access the match offset property of a matched media item.
- [frequencySkew](shmediaitemproperty/frequencyskew.md): The key to access the frequency skew property of a matched media item.

### Type Properties

- [confidence](shmediaitemproperty/confidence.md): The value ranges from 0.0 to 1.0, where 1.0 indicates the highest level of confidence.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with media item properties

- [subscript(\_:)](shmediaitem/subscript%28__%29.md): Accesses the property for the specified key for reading.
- [timeRanges](shmediaitem/timeranges-8msna.md): An array of ranges that indicate the offsets within the reference signature that this media item describes.
- [frequencySkewRanges](shmediaitem/frequencyskewranges-1j7d3.md): An array of ranges that indicate the frequency skews in the reference signature that this media item describes.

# SHMediaItemProperty (Objective-C)

**Framework:** ShazamKit  
**Kind:** Type Alias  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Constants for the media item property names.

## Declaration

```objectivec
typedef NSString * SHMediaItemProperty;
```

## Topics

### General media item property keys

- [SHMediaItemTitle](shmediaitemproperty/title.md): The key to access the title property of a media item.
- [SHMediaItemSubtitle](shmediaitemproperty/subtitle.md): The key to access the subtitle property of a media item.
- [SHMediaItemArtist](shmediaitemproperty/artist.md): The key to access the artist property of a media item.
- [SHMediaItemArtworkURL](shmediaitemproperty/artworkurl.md): The key to access the artwork URL property of a media item.
- [SHMediaItemVideoURL](shmediaitemproperty/videourl.md): The key to access the video URL property of a media item.
- [SHMediaItemGenres](shmediaitemproperty/genres.md): The key to access the genres property of a media item.
- [SHMediaItemExplicitContent](shmediaitemproperty/explicitcontent.md): The key to access the explicit content property of a media item.
- [SHMediaItemISRC](shmediaitemproperty/isrc.md): The key to access the International Standard Recording Code (ISRC) property of a media item.
- [SHMediaItemFrequencySkewRanges](shmediaitemfrequencyskewranges.md): The key to access the frequency skew ranges property of a media item.
- [SHMediaItemCreationDate](shmediaitemproperty/creationdate.md): The date the media item was created.
- [SHMediaItemTimeRanges](shmediaitemtimeranges.md): The key to access the time ranges property of a media item.

### Apple Music property keys

- [SHMediaItemAppleMusicURL](shmediaitemproperty/applemusicurl.md): The key to access the Apple Music URL property of a media item.
- [SHMediaItemAppleMusicID](shmediaitemproperty/applemusicid.md): The key to access the Apple Music ID of a media item.

### Shazam music catalog property keys

- [SHMediaItemWebURL](shmediaitemproperty/weburl.md): The key to access the web URL property of a media item.
- [SHMediaItemShazamID](shmediaitemproperty/shazamid.md): The key to access the Shazam ID property of a media item.

### Matched media item property keys

- [SHMediaItemMatchOffset](shmediaitemproperty/matchoffset.md): The key to access the match offset property of a matched media item.
- [SHMediaItemFrequencySkew](shmediaitemproperty/frequencyskew.md): The key to access the frequency skew property of a matched media item.

## See Also

### Working with media item properties

- [objectForKeyedSubscript:](shmediaitem/subscript%28__%29.md): Accesses the property for the specified key for reading.
- [valueForProperty:](shmediaitem/valueforproperty_.md): Accesses the property for the specified key for reading.
- [timeRanges](shmediaitem/timeranges-43654.md): An array of ranges that indicate the offsets within the reference signature that this media item describes.
- [frequencySkewRanges](shmediaitem/frequencyskewranges-4yqx.md): An array of ranges that indicate the frequency skews in the reference signature that this media item describes.
- [SHRange](shrange.md): A half-open interval from a lower bound up to, but not including, an upper bound.
