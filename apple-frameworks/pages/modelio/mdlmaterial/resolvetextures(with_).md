> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmaterial/resolvetextures(with:)](https://developer.apple.com/documentation/modelio/mdlmaterial/resolvetextures(with:))

# resolveTextures(with:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Resolves all texture string paths as NSURLs with resolver.

## Declaration

```swift
func resolveTextures(with resolver: any MDLAssetResolver)
```

## Parameters

- `resolver`: If non-nil, the resolver converts stringValues or NSURLs to MDLTextureSampler values.

<a id="Discussion"></a>

## Discussion

Iterates all material properties. If there are string values, they’re resolved into valid paths as NSURL values by the resolver.

## See Also

### Working with textures using resolvers

- [loadTextures(using:)](loadtextures%28using_%29.md): Loads textures using resolver for string paths and NSURLs.

# resolveTexturesWithResolver: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Resolves all texture string paths as NSURLs with resolver.

## Declaration

```objectivec
- (void) resolveTexturesWithResolver:(id<MDLAssetResolver>) resolver;
```

## Parameters

- `resolver`: If non-nil, the resolver converts stringValues or NSURLs to MDLTextureSampler values.

<a id="Discussion"></a>

## Discussion

Iterates all material properties. If there are string values, they’re resolved into valid paths as NSURL values by the resolver.

## See Also

### Working with textures using resolvers

- [loadTexturesUsingResolver:](loadtextures%28using_%29.md): Loads textures using resolver for string paths and NSURLs.
