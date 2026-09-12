> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmaterial/loadtextures(using:)](https://developer.apple.com/documentation/modelio/mdlmaterial/loadtextures(using:))

# loadTextures(using:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Loads textures using resolver for string paths and NSURLs.

## Declaration

```swift
func loadTextures(using resolver: any MDLAssetResolver)
```

## Parameters

- `resolver`: If non-nil, the resolver converts stringValues or NSURLs to MDLTextureSampler values.

<a id="Discussion"></a>

## Discussion

Iterates all material properties. If there are string values or NSURL values, and you can resolve the values as textures, then [MDLTextureSampler](../mdltexturesampler.md) values replaces the string and NSURL values.

## See Also

### Working with textures using resolvers

- [resolveTextures(with:)](resolvetextures%28with_%29.md): Resolves all texture string paths as NSURLs with resolver.

# loadTexturesUsingResolver: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Loads textures using resolver for string paths and NSURLs.

## Declaration

```objectivec
- (void) loadTexturesUsingResolver:(id<MDLAssetResolver>) resolver;
```

## Parameters

- `resolver`: If non-nil, the resolver converts stringValues or NSURLs to MDLTextureSampler values.

<a id="Discussion"></a>

## Discussion

Iterates all material properties. If there are string values or NSURL values, and you can resolve the values as textures, then [MDLTextureSampler](../mdltexturesampler.md) values replaces the string and NSURL values.

## See Also

### Working with textures using resolvers

- [resolveTexturesWithResolver:](resolvetextures%28with_%29.md): Resolves all texture string paths as NSURLs with resolver.
