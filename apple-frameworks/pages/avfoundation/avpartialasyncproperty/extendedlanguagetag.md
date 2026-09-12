> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/extendedlanguagetag](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/extendedlanguagetag)

# extendedLanguageTag

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The language tag of the track.

## Declaration

```swift
static var extendedLanguageTag: AVAsyncProperty<Root, String?> { get }
```

<a id="Discussion"></a>

## Discussion

Use the [load(\_:isolation:)](../avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the property value.

The value is a [BCP-47](https://tools.ietf.org/html/bcp47) language tag, or `nil` if the track doesn’t specify a language tag.

## See Also

### Loading language support

- [languageCode](languagecode.md): Conforms when `Root` inherits `AVAssetTrack`. The language code of the track.
