> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/languagecode](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/languagecode)

# languageCode

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The language code of the track.

## Declaration

```swift
static var languageCode: AVAsyncProperty<Root, String?> { get }
```

<a id="Discussion"></a>

## Discussion

Use the [load(\_:isolation:)](../avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the property value.

The value is an ISO 639-2/T language code, or `nil` if the track doesn’t specify a language code.

## See Also

### Loading language support

- [extendedLanguageTag](extendedlanguagetag.md): Conforms when `Root` inherits `AVAssetTrack`. The language tag of the track.
