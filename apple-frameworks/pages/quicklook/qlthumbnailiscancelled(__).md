> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlthumbnailiscancelled(_:)](https://developer.apple.com/documentation/quicklook/qlthumbnailiscancelled(_:))

# QLThumbnailIsCancelled(\_:) (Swift)

**Framework:** Quick Look  
**Kind:** Function  
**Availability:** macOS 10.6+ (deprecated in 15.0)

Returns whether the creation of the thumbnail was canceled.

> Use QuickLookThumbnailing for thumbnails.

## Declaration

```swift
func QLThumbnailIsCancelled(_ thumbnail: QLThumbnail!) -> Bool
```

## Parameters

- `thumbnail`: The thumbnail to create.

<a id="return-value"></a>

## Return Value

A `Boolean` value that indicates whether the creation of the thumbnail was canceled.

## See Also

### Creating thumbnails

- [QLThumbnailImageCreate(\_:\_:\_:\_:)](qlthumbnailimagecreate%28________%29.md): Deprecated. Creates a thumbnail image for the specified file.
- [QLThumbnailCreate(\_:\_:\_:\_:)](qlthumbnailcreate%28________%29.md): Deprecated. Returns a thumbnail that’s generated in the background.
- [QLThumbnailDispatchAsync(\_:\_:\_:)](qlthumbnaildispatchasync%28______%29.md): Deprecated. Creates a thumbnail in the background on the provided background queue.
- [QLThumbnailCancel(\_:)](qlthumbnailcancel%28__%29.md): Deprecated. Cancels the computation of the thumbnail.
- [QLThumbnailCopyDocumentURL(\_:)](qlthumbnailcopydocumenturl%28__%29.md): Deprecated. Returns the URL of the document that you’re requesting a thumbnail for.
- [QLThumbnailCopyImage(\_:)](qlthumbnailcopyimage%28__%29.md): Deprecated. Returns a thumbnail image.
- [QLThumbnailCopyOptions(\_:)](qlthumbnailcopyoptions%28__%29.md): Deprecated. Returns the options for the requested thumbnail.
- [QLThumbnailGetContentRect(\_:)](qlthumbnailgetcontentrect%28__%29.md): Deprecated. Returns the rectangle of the provided thumbnail image that represents the content of the document.
- [QLThumbnailGetMaximumSize(\_:)](qlthumbnailgetmaximumsize%28__%29.md): Deprecated. Returns the maximum allowed size for the provided thumbnail image.
- [QLThumbnailGetTypeID()](qlthumbnailgettypeid%28%29.md): Deprecated. Returns the type identifier for the thumbnail’s opaque type.

# QLThumbnailIsCancelled (Objective-C)

**Framework:** Quick Look  
**Kind:** Function  
**Availability:** macOS 10.6+ (deprecated in 15.0)

Returns whether the creation of the thumbnail was canceled.

> Use QuickLookThumbnailing for thumbnails.

## Declaration

```objectivec
extern Boolean QLThumbnailIsCancelled(QLThumbnailRef thumbnail);
```

## Parameters

- `thumbnail`: The thumbnail to create.

<a id="return-value"></a>

## Return Value

A `Boolean` value that indicates whether the creation of the thumbnail was canceled.

## See Also

### Creating thumbnails

- [QLThumbnailImageCreate](qlthumbnailimagecreate%28________%29.md): Deprecated. Creates a thumbnail image for the specified file.
- [QLThumbnailCreate](qlthumbnailcreate%28________%29.md): Deprecated. Returns a thumbnail that’s generated in the background.
- [QLThumbnailDispatchAsync](qlthumbnaildispatchasync%28______%29.md): Deprecated. Creates a thumbnail in the background on the provided background queue.
- [QLThumbnailCancel](qlthumbnailcancel%28__%29.md): Deprecated. Cancels the computation of the thumbnail.
- [QLThumbnailCopyDocumentURL](qlthumbnailcopydocumenturl%28__%29.md): Deprecated. Returns the URL of the document that you’re requesting a thumbnail for.
- [QLThumbnailCopyImage](qlthumbnailcopyimage%28__%29.md): Deprecated. Returns a thumbnail image.
- [QLThumbnailCopyOptions](qlthumbnailcopyoptions%28__%29.md): Deprecated. Returns the options for the requested thumbnail.
- [QLThumbnailGetContentRect](qlthumbnailgetcontentrect%28__%29.md): Deprecated. Returns the rectangle of the provided thumbnail image that represents the content of the document.
- [QLThumbnailGetMaximumSize](qlthumbnailgetmaximumsize%28__%29.md): Deprecated. Returns the maximum allowed size for the provided thumbnail image.
- [QLThumbnailGetTypeID](qlthumbnailgettypeid%28%29.md): Deprecated. Returns the type identifier for the thumbnail’s opaque type.
