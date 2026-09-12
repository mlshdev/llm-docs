> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeecherror/code/cannotallocateunsupportedlocale](https://developer.apple.com/documentation/speech/sfspeecherror/code/cannotallocateunsupportedlocale)

# cannotAllocateUnsupportedLocale

**Framework:** Speech  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The asset locale being requested is not supported by SpeechFramework.

## Declaration

```swift
static var cannotAllocateUnsupportedLocale: SFSpeechError.Code { get }
```

## See Also

### Asset errors

- [assetLocaleNotAllocated](assetlocalenotallocated.md): The asset locale has not been allocated, but module requires it.
- [noModel](nomodel.md): The selected locale/options does not have an appropriate model available or downloadable.
- [SFSpeechError.Code.timeout](timeout.md): The operation timed out.
- [tooManyAssetLocalesAllocated](toomanyassetlocalesallocated.md): The application has allocated too many locales.
