> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlthumbnailcopyimage(_:)](https://developer.apple.com/documentation/quicklook/qlthumbnailcopyimage(_:))

# QLThumbnailCopyImage(\_:) (Swift)

**Framework:** Quick Look  
**Kind:** Function  
**Availability:** macOS 10.6+ (deprecated in 15.0)

Returns a thumbnail image.

> Use QuickLookThumbnailing for thumbnails.

## Declaration

```swift
func QLThumbnailCopyImage(_ thumbnail: QLThumbnail!) -> Unmanaged<CGImage>!
```

## Parameters

- `thumbnail`: The thumbnail to compute.

<a id="return-value"></a>

## Return Value

A thumbnail image, or `NULL` if the Quick Look framework can’t create a thumbnail.

<a id="Discussion"></a>

## Discussion

If you call this function directly without using [QLThumbnailDispatchAsync(\_:\_:\_:)](qlthumbnaildispatchasync%28______%29.md), this function blocks the calling thread until it finishes computing the thumbnail.

## See Also

### Creating thumbnails

- [QLThumbnailImageCreate(\_:\_:\_:\_:)](qlthumbnailimagecreate%28________%29.md): Deprecated. Creates a thumbnail image for the specified file.
- [QLThumbnailCreate(\_:\_:\_:\_:)](qlthumbnailcreate%28________%29.md): Deprecated. Returns a thumbnail that’s generated in the background.
- [QLThumbnailDispatchAsync(\_:\_:\_:)](qlthumbnaildispatchasync%28______%29.md): Deprecated. Creates a thumbnail in the background on the provided background queue.
- [QLThumbnailCancel(\_:)](qlthumbnailcancel%28__%29.md): Deprecated. Cancels the computation of the thumbnail.
- [QLThumbnailCopyDocumentURL(\_:)](qlthumbnailcopydocumenturl%28__%29.md): Deprecated. Returns the URL of the document that you’re requesting a thumbnail for.
- [QLThumbnailCopyOptions(\_:)](qlthumbnailcopyoptions%28__%29.md): Deprecated. Returns the options for the requested thumbnail.
- [QLThumbnailGetContentRect(\_:)](qlthumbnailgetcontentrect%28__%29.md): Deprecated. Returns the rectangle of the provided thumbnail image that represents the content of the document.
- [QLThumbnailGetMaximumSize(\_:)](qlthumbnailgetmaximumsize%28__%29.md): Deprecated. Returns the maximum allowed size for the provided thumbnail image.
- [QLThumbnailGetTypeID()](qlthumbnailgettypeid%28%29.md): Deprecated. Returns the type identifier for the thumbnail’s opaque type.
- [QLThumbnailIsCancelled(\_:)](qlthumbnailiscancelled%28__%29.md): Deprecated. Returns whether the creation of the thumbnail was canceled.

# QLThumbnailCopyImage (Objective-C)

**Framework:** Quick Look  
**Kind:** Function  
**Availability:** macOS 10.6+ (deprecated in 15.0)

Returns a thumbnail image.

> Use QuickLookThumbnailing for thumbnails.

## Declaration

```objectivec
extern CGImageRefQLThumbnailCopyImage(QLThumbnailRef thumbnail);
```

## Parameters

- `thumbnail`: The thumbnail to compute.

<a id="return-value"></a>

## Return Value

A thumbnail image, or `NULL` if the Quick Look framework can’t create a thumbnail.

<a id="Discussion"></a>

## Discussion

If you call this function directly without using [QLThumbnailDispatchAsync](qlthumbnaildispatchasync%28______%29.md), this function blocks the calling thread until it finishes computing the thumbnail.

## See Also

### Creating thumbnails

- [QLThumbnailImageCreate](qlthumbnailimagecreate%28________%29.md): Deprecated. Creates a thumbnail image for the specified file.
- [QLThumbnailCreate](qlthumbnailcreate%28________%29.md): Deprecated. Returns a thumbnail that’s generated in the background.
- [QLThumbnailDispatchAsync](qlthumbnaildispatchasync%28______%29.md): Deprecated. Creates a thumbnail in the background on the provided background queue.
- [QLThumbnailCancel](qlthumbnailcancel%28__%29.md): Deprecated. Cancels the computation of the thumbnail.
- [QLThumbnailCopyDocumentURL](qlthumbnailcopydocumenturl%28__%29.md): Deprecated. Returns the URL of the document that you’re requesting a thumbnail for.
- [QLThumbnailCopyOptions](qlthumbnailcopyoptions%28__%29.md): Deprecated. Returns the options for the requested thumbnail.
- [QLThumbnailGetContentRect](qlthumbnailgetcontentrect%28__%29.md): Deprecated. Returns the rectangle of the provided thumbnail image that represents the content of the document.
- [QLThumbnailGetMaximumSize](qlthumbnailgetmaximumsize%28__%29.md): Deprecated. Returns the maximum allowed size for the provided thumbnail image.
- [QLThumbnailGetTypeID](qlthumbnailgettypeid%28%29.md): Deprecated. Returns the type identifier for the thumbnail’s opaque type.
- [QLThumbnailIsCancelled](qlthumbnailiscancelled%28__%29.md): Deprecated. Returns whether the creation of the thumbnail was canceled.
