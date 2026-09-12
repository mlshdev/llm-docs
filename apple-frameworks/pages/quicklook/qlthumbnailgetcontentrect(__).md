> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlthumbnailgetcontentrect(_:)](https://developer.apple.com/documentation/quicklook/qlthumbnailgetcontentrect(_:))

# QLThumbnailGetContentRect(\_:) (Swift)

**Framework:** Quick Look  
**Kind:** Function  
**Availability:** macOS 10.6+ (deprecated in 15.0)

Returns the rectangle of the provided thumbnail image that represents the content of the document.

> Use QuickLookThumbnailing for thumbnails.

## Declaration

```swift
func QLThumbnailGetContentRect(_ thumbnail: QLThumbnail!) -> CGRect
```

## Parameters

- `thumbnail`: A thumbnail image.

<a id="return-value"></a>

## Return Value

The effective rectangle of the thumbnail image that represents the content of the document. In icon mode, this is the part of the image without all the image decorations.

## See Also

### Creating thumbnails

- [QLThumbnailImageCreate(\_:\_:\_:\_:)](qlthumbnailimagecreate%28________%29.md): Deprecated. Creates a thumbnail image for the specified file.
- [QLThumbnailCreate(\_:\_:\_:\_:)](qlthumbnailcreate%28________%29.md): Deprecated. Returns a thumbnail that’s generated in the background.
- [QLThumbnailDispatchAsync(\_:\_:\_:)](qlthumbnaildispatchasync%28______%29.md): Deprecated. Creates a thumbnail in the background on the provided background queue.
- [QLThumbnailCancel(\_:)](qlthumbnailcancel%28__%29.md): Deprecated. Cancels the computation of the thumbnail.
- [QLThumbnailCopyDocumentURL(\_:)](qlthumbnailcopydocumenturl%28__%29.md): Deprecated. Returns the URL of the document that you’re requesting a thumbnail for.
- [QLThumbnailCopyImage(\_:)](qlthumbnailcopyimage%28__%29.md): Deprecated. Returns a thumbnail image.
- [QLThumbnailCopyOptions(\_:)](qlthumbnailcopyoptions%28__%29.md): Deprecated. Returns the options for the requested thumbnail.
- [QLThumbnailGetMaximumSize(\_:)](qlthumbnailgetmaximumsize%28__%29.md): Deprecated. Returns the maximum allowed size for the provided thumbnail image.
- [QLThumbnailGetTypeID()](qlthumbnailgettypeid%28%29.md): Deprecated. Returns the type identifier for the thumbnail’s opaque type.
- [QLThumbnailIsCancelled(\_:)](qlthumbnailiscancelled%28__%29.md): Deprecated. Returns whether the creation of the thumbnail was canceled.

# QLThumbnailGetContentRect (Objective-C)

**Framework:** Quick Look  
**Kind:** Function  
**Availability:** macOS 10.6+ (deprecated in 15.0)

Returns the rectangle of the provided thumbnail image that represents the content of the document.

> Use QuickLookThumbnailing for thumbnails.

## Declaration

```objectivec
extern CGRect QLThumbnailGetContentRect(QLThumbnailRef thumbnail);
```

## Parameters

- `thumbnail`: A thumbnail image.

<a id="return-value"></a>

## Return Value

The effective rectangle of the thumbnail image that represents the content of the document. In icon mode, this is the part of the image without all the image decorations.

## See Also

### Creating thumbnails

- [QLThumbnailImageCreate](qlthumbnailimagecreate%28________%29.md): Deprecated. Creates a thumbnail image for the specified file.
- [QLThumbnailCreate](qlthumbnailcreate%28________%29.md): Deprecated. Returns a thumbnail that’s generated in the background.
- [QLThumbnailDispatchAsync](qlthumbnaildispatchasync%28______%29.md): Deprecated. Creates a thumbnail in the background on the provided background queue.
- [QLThumbnailCancel](qlthumbnailcancel%28__%29.md): Deprecated. Cancels the computation of the thumbnail.
- [QLThumbnailCopyDocumentURL](qlthumbnailcopydocumenturl%28__%29.md): Deprecated. Returns the URL of the document that you’re requesting a thumbnail for.
- [QLThumbnailCopyImage](qlthumbnailcopyimage%28__%29.md): Deprecated. Returns a thumbnail image.
- [QLThumbnailCopyOptions](qlthumbnailcopyoptions%28__%29.md): Deprecated. Returns the options for the requested thumbnail.
- [QLThumbnailGetMaximumSize](qlthumbnailgetmaximumsize%28__%29.md): Deprecated. Returns the maximum allowed size for the provided thumbnail image.
- [QLThumbnailGetTypeID](qlthumbnailgettypeid%28%29.md): Deprecated. Returns the type identifier for the thumbnail’s opaque type.
- [QLThumbnailIsCancelled](qlthumbnailiscancelled%28__%29.md): Deprecated. Returns whether the creation of the thumbnail was canceled.
