> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nsphotolibraryusagedescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsphotolibraryusagedescription)

# NSPhotoLibraryUsageDescription

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · macOS 10.14+ · visionOS 1.0+

A message that tells people why the app is requesting access to their photo library.

## Details

`NSPhotoLibraryUsageDescription`

## Mentioned In

- [Requesting Authorization for Media Capture on macOS](../requesting-authorization-for-media-capture-on-macos.md)

<a id="Discussion"></a>

## Discussion

If your app only adds assets to the photo library and does not read assets, use the  [NSPhotoLibraryAddUsageDescription](nsphotolibraryaddusagedescription.md) key instead.

> **Important**

>  This key is required if your app uses APIs that have read or write access to the user’s photo library.

## See Also

### Photos

- [Delivering an Enhanced Privacy Experience in Your Photos App](../../photokit/delivering-an-enhanced-privacy-experience-in-your-photos-app.md): Adopt the latest privacy enhancements to deliver advanced user-privacy controls.
- [NSPhotoLibraryAddUsageDescription](nsphotolibraryaddusagedescription.md): A message that tells people why the app is requesting add-only access to their photo library.
