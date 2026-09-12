> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkaudiofileasset/init(url:)-8ndda](https://developer.apple.com/documentation/watchkit/wkaudiofileasset/init(url:)-8ndda)

# init(url:) (Swift)

**Framework:** WatchKit  
**Kind:** Initializer  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

Returns an asset for the audio file at the specified URL.

## Declaration

```swift
convenience init(url URL: URL)
```

## Parameters

- `URL`: A file-based URL that identifies the audio file. This URL must refer to a shared location that can be accessed by both the Watch app interface and the WatchKit extension. For more information, see [Sharing Data](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/SharingData.html#//apple_ref/doc/uid/TP40014969-CH29) in [App Programming Guide for watchOS](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/index.html#//apple_ref/doc/uid/TP40014969).

  This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

An initialized asset object.

<a id="Discussion"></a>

## Discussion

This method creates an asset for the specified media file. The audio file’s title, album title, and artist information are derived from the metadata in the audio file itself.

## See Also

### Creating an Asset

- [init(url:title:albumTitle:artist:)](init%28url_title_albumtitle_artist_%29-447fg.md): Deprecated. Returns an audio file asset and sets the metadata for that item.

# assetWithURL: (Objective-C)

**Framework:** WatchKit  
**Kind:** Type Method  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

Returns an asset for the audio file at the specified URL.

## Declaration

```objectivec
+ (instancetype) assetWithURL:(NSURL *) URL;
```

## Parameters

- `URL`: A file-based URL that identifies the audio file. This URL must refer to a shared location that can be accessed by both the Watch app interface and the WatchKit extension. For more information, see [Sharing Data](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/SharingData.html#//apple_ref/doc/uid/TP40014969-CH29) in [App Programming Guide for watchOS](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/index.html#//apple_ref/doc/uid/TP40014969).

  This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

An initialized asset object.

<a id="Discussion"></a>

## Discussion

This method creates an asset for the specified media file. The audio file’s title, album title, and artist information are derived from the metadata in the audio file itself.

## See Also

### Creating an Asset

- [assetWithURL:title:albumTitle:artist:](init%28url_title_albumtitle_artist_%29-447fg.md): Deprecated. Returns an audio file asset and sets the metadata for that item.
