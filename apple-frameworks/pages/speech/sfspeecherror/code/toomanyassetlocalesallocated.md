> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/speech/sfspeecherror/code/toomanyassetlocalesallocated

# tooManyAssetLocalesAllocated

**Framework:** Speech  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The application has allocated too many locales.

## Declaration

```swift
static var tooManyAssetLocalesAllocated: SFSpeechError.Code { get }
```

## See Also

### Asset errors

- [assetLocaleNotAllocated](assetlocalenotallocated.md): The asset locale has not been allocated, but module requires it.
- [cannotAllocateUnsupportedLocale](cannotallocateunsupportedlocale.md): The asset locale being requested is not supported by SpeechFramework.
- [noModel](nomodel.md): The selected locale/options does not have an appropriate model available or downloadable.
- [SFSpeechError.Code.timeout](timeout.md): The operation timed out.
