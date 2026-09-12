> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlthumbnailimagecreate(_:_:_:_:)](https://developer.apple.com/documentation/quicklook/qlthumbnailimagecreate(_:_:_:_:))

# QLThumbnailImageCreate(\_:\_:\_:\_:) (Swift)

**Framework:** Quick Look  
**Kind:** Function  
**Availability:** macOS 10.6+ (deprecated in 15.0)

Creates a thumbnail image for the specified file.

> Use QuickLookThumbnailing to generate thumbnails for files.

## Declaration

```swift
func QLThumbnailImageCreate(_ allocator: CFAllocator!, _ url: CFURL!, _ maxThumbnailSize: CGSize, _ options: CFDictionary!) -> Unmanaged<CGImage>!
```

## Parameters

- `allocator`: The allocator to use to create the thumbnail image.
- `url`: The URL of the file to create a thumbnail image for.
- `maxThumbnailSize`: The maximum desired size of the thumbnail image.
- `options`: A dictionary of options that affect the creation of the thumbnail image. You can use [kQLThumbnailOptionIconModeKey](kqlthumbnailoptioniconmodekey.md) and [kQLThumbnailOptionScaleFactorKey](kqlthumbnailoptionscalefactorkey.md) as options.

<a id="return-value"></a>

## Return Value

The thumbnail image, or `NULL` if Quick Look doesn’t support this file type.

<a id="Discussion"></a>

## Discussion

This function doesn’t supplant the use of Icon Services by apps to get generic file icons and custom icons stored in the metadata fork of files.

<a id="Special-Considerations"></a>

### Special Considerations

This function is thread-safe, so you can call it from any thread. However, because it’s synchronous, you should generally call it in a background thread.

## See Also

### Creating thumbnails

- [QLThumbnailCreate(\_:\_:\_:\_:)](qlthumbnailcreate%28________%29.md): Deprecated. Returns a thumbnail that’s generated in the background.
- [QLThumbnailDispatchAsync(\_:\_:\_:)](qlthumbnaildispatchasync%28______%29.md): Deprecated. Creates a thumbnail in the background on the provided background queue.
- [QLThumbnailCancel(\_:)](qlthumbnailcancel%28__%29.md): Deprecated. Cancels the computation of the thumbnail.
- [QLThumbnailCopyDocumentURL(\_:)](qlthumbnailcopydocumenturl%28__%29.md): Deprecated. Returns the URL of the document that you’re requesting a thumbnail for.
- [QLThumbnailCopyImage(\_:)](qlthumbnailcopyimage%28__%29.md): Deprecated. Returns a thumbnail image.
- [QLThumbnailCopyOptions(\_:)](qlthumbnailcopyoptions%28__%29.md): Deprecated. Returns the options for the requested thumbnail.
- [QLThumbnailGetContentRect(\_:)](qlthumbnailgetcontentrect%28__%29.md): Deprecated. Returns the rectangle of the provided thumbnail image that represents the content of the document.
- [QLThumbnailGetMaximumSize(\_:)](qlthumbnailgetmaximumsize%28__%29.md): Deprecated. Returns the maximum allowed size for the provided thumbnail image.
- [QLThumbnailGetTypeID()](qlthumbnailgettypeid%28%29.md): Deprecated. Returns the type identifier for the thumbnail’s opaque type.
- [QLThumbnailIsCancelled(\_:)](qlthumbnailiscancelled%28__%29.md): Deprecated. Returns whether the creation of the thumbnail was canceled.

# QLThumbnailImageCreate (Objective-C)

**Framework:** Quick Look  
**Kind:** Function  
**Availability:** macOS 10.6+ (deprecated in 15.0)

Creates a thumbnail image for the specified file.

> Use QuickLookThumbnailing to generate thumbnails for files.

## Declaration

```objectivec
extern CGImageRefQLThumbnailImageCreate(CFAllocatorRef allocator, CFURLRef url, CGSize maxThumbnailSize, CFDictionaryRef options);
```

## Parameters

- `allocator`: The allocator to use to create the thumbnail image.
- `url`: The URL of the file to create a thumbnail image for.
- `maxThumbnailSize`: The maximum desired size of the thumbnail image.
- `options`: A dictionary of options that affect the creation of the thumbnail image. You can use [kQLThumbnailOptionIconModeKey](kqlthumbnailoptioniconmodekey.md) and [kQLThumbnailOptionScaleFactorKey](kqlthumbnailoptionscalefactorkey.md) as options.

<a id="return-value"></a>

## Return Value

The thumbnail image, or `NULL` if Quick Look doesn’t support this file type.

<a id="Discussion"></a>

## Discussion

This function doesn’t supplant the use of Icon Services by apps to get generic file icons and custom icons stored in the metadata fork of files.

<a id="Special-Considerations"></a>

### Special Considerations

This function is thread-safe, so you can call it from any thread. However, because it’s synchronous, you should generally call it in a background thread.

## See Also

### Creating thumbnails

- [QLThumbnailCreate](qlthumbnailcreate%28________%29.md): Deprecated. Returns a thumbnail that’s generated in the background.
- [QLThumbnailDispatchAsync](qlthumbnaildispatchasync%28______%29.md): Deprecated. Creates a thumbnail in the background on the provided background queue.
- [QLThumbnailCancel](qlthumbnailcancel%28__%29.md): Deprecated. Cancels the computation of the thumbnail.
- [QLThumbnailCopyDocumentURL](qlthumbnailcopydocumenturl%28__%29.md): Deprecated. Returns the URL of the document that you’re requesting a thumbnail for.
- [QLThumbnailCopyImage](qlthumbnailcopyimage%28__%29.md): Deprecated. Returns a thumbnail image.
- [QLThumbnailCopyOptions](qlthumbnailcopyoptions%28__%29.md): Deprecated. Returns the options for the requested thumbnail.
- [QLThumbnailGetContentRect](qlthumbnailgetcontentrect%28__%29.md): Deprecated. Returns the rectangle of the provided thumbnail image that represents the content of the document.
- [QLThumbnailGetMaximumSize](qlthumbnailgetmaximumsize%28__%29.md): Deprecated. Returns the maximum allowed size for the provided thumbnail image.
- [QLThumbnailGetTypeID](qlthumbnailgettypeid%28%29.md): Deprecated. Returns the type identifier for the thumbnail’s opaque type.
- [QLThumbnailIsCancelled](qlthumbnailiscancelled%28__%29.md): Deprecated. Returns whether the creation of the thumbnail was canceled.
