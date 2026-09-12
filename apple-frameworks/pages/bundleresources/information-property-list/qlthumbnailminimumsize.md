> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/qlthumbnailminimumsize](https://developer.apple.com/documentation/bundleresources/information-property-list/qlthumbnailminimumsize)

# QLThumbnailMinimumSize

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · macOS 10.0+ · visionOS 1.0+

The minimum size, in points, along one dimension of thumbnails for a Quick Look app’s generator.

## Details

`QLThumbnailMinimumSize`

<a id="Discussion"></a>

## Discussion

If you set this key, Quick Look uses the [GenerateThumbnailForURL](../../quicklook/qlgeneratorinterfacestruct/generatethumbnailforurl.md) property for thumbnail sizes greater than this value. If your app’s generator is fast, you can omit this key so that the thumbnail appears in standard lists.

## See Also

### QuickLook

- [QLNeedsToBeRunInMainThread](qlneedstoberuninmainthread.md): A Boolean value indicating whether a Quick Look app’s generator can be run in threads other than the main thread.
- [QLPreviewHeight](qlpreviewheight.md): A hint at the height, in points, of a Quick Look app’s previews.
- [QLPreviewWidth](qlpreviewwidth.md): A hint at the width, in points, of a Quick Look app’s previews.
- [QLSupportsConcurrentRequests](qlsupportsconcurrentrequests.md): A Boolean value indicating whether a Quick Look app’s generator can handle concurrent thumbnail and preview requests.
