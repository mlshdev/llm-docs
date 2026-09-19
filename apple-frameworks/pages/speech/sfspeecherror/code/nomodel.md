> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/speech/sfspeecherror/code/nomodel

# noModel

**Framework:** Speech  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The selected locale/options does not have an appropriate model available or downloadable.

## Declaration

```swift
static var noModel: SFSpeechError.Code { get }
```

## See Also

### Asset errors

- [assetLocaleNotAllocated](assetlocalenotallocated.md): The asset locale has not been allocated, but module requires it.
- [cannotAllocateUnsupportedLocale](cannotallocateunsupportedlocale.md): The asset locale being requested is not supported by SpeechFramework.
- [SFSpeechError.Code.timeout](timeout.md): The operation timed out.
- [tooManyAssetLocalesAllocated](toomanyassetlocalesallocated.md): The application has allocated too many locales.
