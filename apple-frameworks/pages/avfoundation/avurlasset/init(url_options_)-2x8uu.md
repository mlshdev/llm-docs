> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avurlasset/init(url:options:)-2x8uu](https://developer.apple.com/documentation/avfoundation/avurlasset/init(url:options:)-2x8uu)

# init(url:options:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates an asset that models the media resource at the specified URL.

## Declaration

```swift
init(url URL: URL, options: [String : Any]? = nil)
```

## Parameters

- `URL`: A URL that references the media for the asset to model.
- `options`: A dictionary that contains options used to customize the initialization of the asset.

  For supported keys and values, see [Initialization options](../initialization-options.md).

<a id="return-value"></a>

## Return Value

An asset that models the media resource found at `URL`.

## See Also

### Creating an asset

- [init(url:)](init%28url_%29.md): Creates an asset that models the media at the specified URL.
- [Initialization options](../avurlasset-initialization-options.md): Specify options to configure the initialization of a media asset.

# initWithURL:options: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates an asset that models the media resource at the specified URL.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) URL options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `URL`: A URL that references the media for the asset to model.
- `options`: A dictionary that contains options used to customize the initialization of the asset.

  For supported keys and values, see [Initialization options](../initialization-options.md).

<a id="return-value"></a>

## Return Value

An asset that models the media resource found at `URL`.

## See Also

### Creating an asset

- [URLAssetWithURL:options:](urlassetwithurl_options_.md): Returns an asset that models the media resource found at the specified URL.
- [Initialization options](../avurlasset-initialization-options.md): Specify options to configure the initialization of a media asset.
