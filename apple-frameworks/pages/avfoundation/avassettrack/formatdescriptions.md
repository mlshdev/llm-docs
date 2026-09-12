> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack/formatdescriptions](https://developer.apple.com/documentation/avfoundation/avassettrack/formatdescriptions)

# formatDescriptions (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 9.0)

The format descriptions of the media samples that a track references.

> Load the value of [formatDescriptions](../avpartialasyncproperty/formatdescriptions.md) asynchronously instead.

## Declaration

```swift
var formatDescriptions: [Any] { get }
```

## Mentioned In

- [Tagging media with video color information](../tagging-media-with-video-color-information.md)

<a id="Discussion"></a>

## Discussion

The array contains [CMFormatDescription](../../coremedia/cmformatdescription.md) objects that indicate the format of media samples the track references.

Asset tracks typically present uniform media (for example, media that uses the same encoding settings) and contain a single format description. However, in some cases, an asset track may contain multiple format descriptions. For example, an H.264-encoded video track may have some segments that use the Main profile and others that use the High profile. Also, an individual [AVCompositionTrack](../avcompositiontrack.md), which subclasses [AVAssetTrack](../avassettrack.md), may contain audio or video segments using different codecs.

You can use [CMFormatDescription](../../coremedia/cmformatdescription.md) to access low-level details about the media the track references. For example, you can retrieve the details of track’s media type and subtype as the code below shows:

```swift
extension AVAssetTrack {
    var mediaFormat: String {
        var format = ""
        let descriptions = self.formatDescriptions as! [CMFormatDescription]
        for (index, formatDesc) in descriptions.enumerated() {
            // Get a string representation of the media type.
            let type =
                CMFormatDescriptionGetMediaType(formatDesc).toString()
            // Get a string representation of the media subtype.
            let subType =
                CMFormatDescriptionGetMediaSubType(formatDesc).toString()
            // Format the string as type/subType, such as vide/avc1 or soun/aac.
            format += "\(type)/\(subType)"
            // Comma-separate if there's more than one format description.
            if index < descriptions.count - 1 {
                format += ","
            }
        }
        return format
    }
}
 
extension FourCharCode {
    // Create a string representation of a FourCC.
    func toString() -> String {
        let bytes: [CChar] = [
            CChar((self >> 24) & 0xff),
            CChar((self >> 16) & 0xff),
            CChar((self >> 8) & 0xff),
            CChar(self & 0xff),
            0
        ]
        let result = String(cString: bytes)
        let characterSet = CharacterSet.whitespaces
        return result.trimmingCharacters(in: characterSet)
    }
}
```

# formatDescriptions (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The format descriptions of the media samples that a track references.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray * formatDescriptions;
```

## Mentioned In

- [Tagging media with video color information](../tagging-media-with-video-color-information.md)

<a id="Discussion"></a>

## Discussion

The array contains [CMFormatDescriptionRef](../../coremedia/cmformatdescription.md) objects that indicate the format of media samples the track references.

Asset tracks typically present uniform media (for example, media that uses the same encoding settings) and contain a single format description. However, in some cases, an asset track may contain multiple format descriptions. For example, an H.264-encoded video track may have some segments that use the Main profile and others that use the High profile. Also, an individual [AVCompositionTrack](../avcompositiontrack.md), which subclasses [AVAssetTrack](../avassettrack.md), may contain audio or video segments using different codecs.

You can use [CMFormatDescriptionRef](../../coremedia/cmformatdescription.md) to access low-level details about the media the track references. For example, you can retrieve the details of track’s media type and subtype as the code below shows:

```swift
extension AVAssetTrack {
    var mediaFormat: String {
        var format = ""
        let descriptions = self.formatDescriptions as! [CMFormatDescription]
        for (index, formatDesc) in descriptions.enumerated() {
            // Get a string representation of the media type.
            let type =
                CMFormatDescriptionGetMediaType(formatDesc).toString()
            // Get a string representation of the media subtype.
            let subType =
                CMFormatDescriptionGetMediaSubType(formatDesc).toString()
            // Format the string as type/subType, such as vide/avc1 or soun/aac.
            format += "\(type)/\(subType)"
            // Comma-separate if there's more than one format description.
            if index < descriptions.count - 1 {
                format += ","
            }
        }
        return format
    }
}
 
extension FourCharCode {
    // Create a string representation of a FourCC.
    func toString() -> String {
        let bytes: [CChar] = [
            CChar((self >> 24) & 0xff),
            CChar((self >> 16) & 0xff),
            CChar((self >> 8) & 0xff),
            CChar(self & 0xff),
            0
        ]
        let result = String(cString: bytes)
        let characterSet = CharacterSet.whitespaces
        return result.trimmingCharacters(in: characterSet)
    }
}
```

## See Also

### Accessing track information

- [playable](isplayable.md): Deprecated. A Boolean value that indicates whether the track is playable in the current environment.
- [decodable](isdecodable.md): Deprecated. A Boolean value that indicates whether the track is decodable in the current environment.
- [enabled](isenabled.md): Deprecated. A Boolean value that indicates whether the track’s container enables it.
- [selfContained](isselfcontained.md): Deprecated. A Boolean value that indicates whether this track references sample data only within its container file.
- [totalSampleDataLength](totalsampledatalength.md): Deprecated. The total number of bytes of sample data the track requires.
- [hasMediaCharacteristic:](hasmediacharacteristic%28__%29.md): Deprecated. Returns a Boolean value that indicates whether the track references media with the specified media characteristic.
