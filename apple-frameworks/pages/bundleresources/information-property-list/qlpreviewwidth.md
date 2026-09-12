> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/qlpreviewwidth](https://developer.apple.com/documentation/bundleresources/information-property-list/qlpreviewwidth)

# QLPreviewWidth

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · macOS 10.0+ · visionOS 1.0+

A hint at the width, in points, of a Quick Look app’s previews.

## Details

`QLPreviewWidth`

<a id="Discussion"></a>

## Discussion

If the app’s generator takes too long to produce the preview, Quick Look uses this key.

## See Also

### QuickLook

- [QLNeedsToBeRunInMainThread](qlneedstoberuninmainthread.md): A Boolean value indicating whether a Quick Look app’s generator can be run in threads other than the main thread.
- [QLPreviewHeight](qlpreviewheight.md): A hint at the height, in points, of a Quick Look app’s previews.
- [QLSupportsConcurrentRequests](qlsupportsconcurrentrequests.md): A Boolean value indicating whether a Quick Look app’s generator can handle concurrent thumbnail and preview requests.
- [QLThumbnailMinimumSize](qlthumbnailminimumsize.md): The minimum size, in points, along one dimension of thumbnails for a Quick Look app’s generator.
