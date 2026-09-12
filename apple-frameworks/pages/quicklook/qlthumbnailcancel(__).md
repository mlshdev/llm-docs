> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlthumbnailcancel(_:)](https://developer.apple.com/documentation/quicklook/qlthumbnailcancel(_:))

# QLThumbnailCancel(\_:) (Swift)

**Framework:** Quick Look  
**Kind:** Function  
**Availability:** macOS 10.6+ (deprecated in 15.0)

Cancels the computation of the thumbnail.

> Use \[QLThumbnailGenerator cancelRequest:\] in QuickLookThumbnailing.

## Declaration

```swift
func QLThumbnailCancel(_ thumbnail: QLThumbnail!)
```

## Parameters

- `thumbnail`: The thumbnail to cancel.

<a id="Discussion"></a>

## Discussion

If you use [QLThumbnailDispatchAsync(\_:\_:\_:)](qlthumbnaildispatchasync%28______%29.md) to request the thumbnail, calling this function invokes the completion callback of [QLThumbnailDispatchAsync(\_:\_:\_:)](qlthumbnaildispatchasync%28______%29.md). If you use synchronous mode, [QLThumbnailCopyImage(\_:)](qlthumbnailcopyimage%28__%29.md) returns `NULL` immediately.

## See Also

### Creating thumbnails

- [QLThumbnailImageCreate(\_:\_:\_:\_:)](qlthumbnailimagecreate%28________%29.md): Deprecated. Creates a thumbnail image for the specified file.
- [QLThumbnailCreate(\_:\_:\_:\_:)](qlthumbnailcreate%28________%29.md): Deprecated. Returns a thumbnail that’s generated in the background.
- [QLThumbnailDispatchAsync(\_:\_:\_:)](qlthumbnaildispatchasync%28______%29.md): Deprecated. Creates a thumbnail in the background on the provided background queue.
- [QLThumbnailCopyDocumentURL(\_:)](qlthumbnailcopydocumenturl%28__%29.md): Deprecated. Returns the URL of the document that you’re requesting a thumbnail for.
- [QLThumbnailCopyImage(\_:)](qlthumbnailcopyimage%28__%29.md): Deprecated. Returns a thumbnail image.
- [QLThumbnailCopyOptions(\_:)](qlthumbnailcopyoptions%28__%29.md): Deprecated. Returns the options for the requested thumbnail.
- [QLThumbnailGetContentRect(\_:)](qlthumbnailgetcontentrect%28__%29.md): Deprecated. Returns the rectangle of the provided thumbnail image that represents the content of the document.
- [QLThumbnailGetMaximumSize(\_:)](qlthumbnailgetmaximumsize%28__%29.md): Deprecated. Returns the maximum allowed size for the provided thumbnail image.
- [QLThumbnailGetTypeID()](qlthumbnailgettypeid%28%29.md): Deprecated. Returns the type identifier for the thumbnail’s opaque type.
- [QLThumbnailIsCancelled(\_:)](qlthumbnailiscancelled%28__%29.md): Deprecated. Returns whether the creation of the thumbnail was canceled.

# QLThumbnailCancel (Objective-C)

**Framework:** Quick Look  
**Kind:** Function  
**Availability:** macOS 10.6+ (deprecated in 15.0)

Cancels the computation of the thumbnail.

> Use \[QLThumbnailGenerator cancelRequest:\] in QuickLookThumbnailing.

## Declaration

```objectivec
extern void QLThumbnailCancel(QLThumbnailRef thumbnail);
```

## Parameters

- `thumbnail`: The thumbnail to cancel.

<a id="Discussion"></a>

## Discussion

If you use [QLThumbnailDispatchAsync](qlthumbnaildispatchasync%28______%29.md) to request the thumbnail, calling this function invokes the completion callback of [QLThumbnailDispatchAsync](qlthumbnaildispatchasync%28______%29.md). If you use synchronous mode, [QLThumbnailCopyImage](qlthumbnailcopyimage%28__%29.md) returns `NULL` immediately.

## See Also

### Creating thumbnails

- [QLThumbnailImageCreate](qlthumbnailimagecreate%28________%29.md): Deprecated. Creates a thumbnail image for the specified file.
- [QLThumbnailCreate](qlthumbnailcreate%28________%29.md): Deprecated. Returns a thumbnail that’s generated in the background.
- [QLThumbnailDispatchAsync](qlthumbnaildispatchasync%28______%29.md): Deprecated. Creates a thumbnail in the background on the provided background queue.
- [QLThumbnailCopyDocumentURL](qlthumbnailcopydocumenturl%28__%29.md): Deprecated. Returns the URL of the document that you’re requesting a thumbnail for.
- [QLThumbnailCopyImage](qlthumbnailcopyimage%28__%29.md): Deprecated. Returns a thumbnail image.
- [QLThumbnailCopyOptions](qlthumbnailcopyoptions%28__%29.md): Deprecated. Returns the options for the requested thumbnail.
- [QLThumbnailGetContentRect](qlthumbnailgetcontentrect%28__%29.md): Deprecated. Returns the rectangle of the provided thumbnail image that represents the content of the document.
- [QLThumbnailGetMaximumSize](qlthumbnailgetmaximumsize%28__%29.md): Deprecated. Returns the maximum allowed size for the provided thumbnail image.
- [QLThumbnailGetTypeID](qlthumbnailgettypeid%28%29.md): Deprecated. Returns the type identifier for the thumbnail’s opaque type.
- [QLThumbnailIsCancelled](qlthumbnailiscancelled%28__%29.md): Deprecated. Returns whether the creation of the thumbnail was canceled.
