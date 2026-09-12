> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/formatdescriptions](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/formatdescriptions)

# formatDescriptions

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The format descriptions of the media samples that a track references.

## Declaration

```swift
static var formatDescriptions: AVAsyncProperty<Root, [CMFormatDescription]> { get }
```

<a id="Discussion"></a>

## Discussion

Use the [load(\_:isolation:)](../avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the property value.

The array contains [CMFormatDescription](../../coremedia/cmformatdescription.md) objects that indicate the format of media samples the track references.

Asset tracks typically present uniform media (for example, media that uses the same encoding settings) and contain a single format description. However, in some cases, an asset track may contain multiple format descriptions. For example, an H.264-encoded video track may have some segments that use the Main profile and others that use the High profile. Also, an individual [AVCompositionTrack](../avcompositiontrack.md), which subclasses [AVAssetTrack](../avassettrack.md), may contain audio or video segments using different codecs.

You can use [CMFormatDescription](../../coremedia/cmformatdescription.md) to access low-level details about the media the track references. For example, you can retrieve the details of track’s media type and subtype as the code below shows:

```swift
extension AVAssetTrack {
    var mediaFormat: String {
        get async throws {
            var format = ""
            let descriptions = try await load(.formatDescriptions)
            for (index, formatDesc) in descriptions.enumerated() {
                // Get a string representation of the media type.
                let type = CMFormatDescriptionGetMediaType(formatDesc).toString()
                // Get a string representation of the media subtype.
                let subType = CMFormatDescriptionGetMediaSubType(formatDesc).toString()
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

### Loading track information

- [isPlayable](isplayable-6txa5.md): Conforms when `Root` inherits `AVAssetTrack`. A Boolean value that indicates whether the track is playable in the current environment.
- [isDecodable](isdecodable.md): Conforms when `Root` inherits `AVAssetTrack`. A Boolean value that indicates whether the track is decodable in the current environment.
- [isEnabled](isenabled.md): Conforms when `Root` inherits `AVAssetTrack`. A Boolean value that indicates whether the track is in an enabled state.
- [isSelfContained](isselfcontained.md): Conforms when `Root` inherits `AVAssetTrack`. A Boolean value that indicates whether the track references sample data only within its container file.
- [totalSampleDataLength](totalsampledatalength.md): Conforms when `Root` inherits `AVAssetTrack`. The total number of bytes of sample data the track requires.
- [mediaCharacteristics](mediacharacteristics.md): Conforms when `Root` inherits `AVAssetTrack`. The media characteristics for the track.
