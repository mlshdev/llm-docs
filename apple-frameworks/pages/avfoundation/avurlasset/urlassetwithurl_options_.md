> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avurlasset/urlassetwithurl:options:](https://developer.apple.com/documentation/avfoundation/avurlasset/urlassetwithurl:options:)

# URLAssetWithURL:options:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns an asset that models the media resource found at the specified URL.

## Declaration

```objectivec
+ (instancetype) URLAssetWithURL:(NSURL *) URL options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `URL`: A URL that references the media for the asset to model.
- `options`: A dictionary that contains options used to customize the initialization of the asset.

  For possible keys and values, see [Initialization options](../initialization-options.md).

<a id="return-value"></a>

## Return Value

An asset that models the media resource found at `URL`.

## See Also

### Creating an asset

- [initWithURL:options:](init%28url_options_%29-2x8uu.md): Creates an asset that models the media resource at the specified URL.
- [Initialization options](../avurlasset-initialization-options.md): Specify options to configure the initialization of a media asset.
