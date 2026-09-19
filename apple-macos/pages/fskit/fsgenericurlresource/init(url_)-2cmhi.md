> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fsgenericurlresource/init(url:)-2cmhi

# init(url:) (Swift)

**Framework:** FSKit  
**Kind:** Initializer  
**Availability:** macOS 26.0+

Creates a generic URL resource with the given URL.

## Declaration

```swift
init(url: URL)
```

## Parameters

- `url`: A URL that provides the content of the file system. The format of this URL is completely arbitrary. It’s up to your extension to access the contents represented by the URL and make them available as an [FSVolume](../fsvolume.md) that FSKit can load.

# initWithURL: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Creates a generic URL resource with the given URL.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) url;
```

## Parameters

- `url`: A URL that provides the content of the file system. The format of this URL is completely arbitrary. It’s up to your extension to access the contents represented by the URL and make them available as an [FSVolume](../fsvolume.md) that FSKit can load.
