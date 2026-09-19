> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/bundleresources/information-property-list/musichapticssupported

# MusicHapticsSupported

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 18.0+ · iPadOS 18.0+

A Boolean value that indicates to the system that your app supports the Music Haptics feature.

## Details

`MusicHapticsSupported`

<a id="Discussion"></a>

## Discussion

To notify the system that your app supports the Music Haptics feature, add [MusicHapticsSupported](musichapticssupported.md) with a value of `YES` to your app’s `Info.plist`. When you add this key to your `Info.plist`, your app appears in the list of apps that support Music Haptics in Settings. For more information, read [Music Haptics](../../mediaaccessibility/music-haptics.md).

## See Also

### Related Documentation

- [Music Haptics](../../mediaaccessibility/music-haptics.md): Play haptic tracks along with known music tracks.
