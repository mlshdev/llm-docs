> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkaudiofileasset/init(url:title:albumtitle:artist:)-447fg](https://developer.apple.com/documentation/watchkit/wkaudiofileasset/init(url:title:albumtitle:artist:)-447fg)

# init(url:title:albumTitle:artist:) (Swift)

**Framework:** WatchKit  
**Kind:** Initializer  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

Returns an audio file asset and sets the metadata for that item.

## Declaration

```swift
convenience init(url URL: URL, title: String?, albumTitle: String?, artist: String?)
```

## Parameters

- `URL`: A file-based URL that identifies the audio file. This URL must refer to a shared location that can be accessed by both the Watch app interface and the WatchKit extension. For more information, see [Sharing Data](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/SharingData.html#//apple_ref/doc/uid/TP40014969-CH29) in [App Programming Guide for watchOS](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/index.html#//apple_ref/doc/uid/TP40014969).

  This parameter must not be `nil`.
- `title`: The title to use for the audio file asset. Specify `nil` to use the title information from the file’s metadata. If you specify `nil` and no title is found in the metadata, the title is set to the file’s name.
- `albumTitle`: The album title to use for the audio file asset. Specify `nil` to use the album title information from the file’s metadata.
- `artist`: The artist to use for the audio file asset. Specify `nil` to use the artist information from the file’s metadata.

<a id="return-value"></a>

## Return Value

An initialized asset object.

## See Also

### Creating an Asset

- [init(url:)](init%28url_%29-8ndda.md): Deprecated. Returns an asset for the audio file at the specified URL.

# assetWithURL:title:albumTitle:artist: (Objective-C)

**Framework:** WatchKit  
**Kind:** Type Method  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

Returns an audio file asset and sets the metadata for that item.

## Declaration

```objectivec
+ (instancetype) assetWithURL:(NSURL *) URL title:(NSString *) title albumTitle:(NSString *) albumTitle artist:(NSString *) artist;
```

## Parameters

- `URL`: A file-based URL that identifies the audio file. This URL must refer to a shared location that can be accessed by both the Watch app interface and the WatchKit extension. For more information, see [Sharing Data](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/SharingData.html#//apple_ref/doc/uid/TP40014969-CH29) in [App Programming Guide for watchOS](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/index.html#//apple_ref/doc/uid/TP40014969).

  This parameter must not be `nil`.
- `title`: The title to use for the audio file asset. Specify `nil` to use the title information from the file’s metadata. If you specify `nil` and no title is found in the metadata, the title is set to the file’s name.
- `albumTitle`: The album title to use for the audio file asset. Specify `nil` to use the album title information from the file’s metadata.
- `artist`: The artist to use for the audio file asset. Specify `nil` to use the artist information from the file’s metadata.

<a id="return-value"></a>

## Return Value

An initialized asset object.

## See Also

### Creating an Asset

- [assetWithURL:](init%28url_%29-8ndda.md): Deprecated. Returns an asset for the audio file at the specified URL.
