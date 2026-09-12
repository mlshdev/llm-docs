> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlurltexture/init(url:name:)-1y03u](https://developer.apple.com/documentation/modelio/mdlurltexture/init(url:name:)-1y03u)

# init(url:name:) (Swift)

**Framework:** Model I/O  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a texture that loads its texel data from a file at the specified URL.

## Declaration

```swift
init(url URL: URL, name: String?)
```

## Parameters

- `URL`: The URL from which to load texture data.
- `name`: The [name](../mdlnamed/name.md) property for the new texture object.

<a id="return-value"></a>

## Return Value

A new URL-backed texture.

<a id="Discussion"></a>

## Discussion

This initializer does not load texel data from the URL; the [MDLURLTexture](../mdlurltexture.md) class automatically loads data and caches it for reuse when you use one of the [MDLTexture](../mdltexture.md) methods listed in Accessing Texture Data.

# initWithURL:name: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a texture that loads its texel data from a file at the specified URL.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) URL name:(NSString *) name;
```

## Parameters

- `URL`: The URL from which to load texture data.
- `name`: The [name](../mdlnamed/name.md) property for the new texture object.

<a id="return-value"></a>

## Return Value

A new URL-backed texture.

<a id="Discussion"></a>

## Discussion

This initializer does not load texel data from the URL; the [MDLURLTexture](../mdlurltexture.md) class automatically loads data and caches it for reuse when you use one of the [MDLTexture](../mdltexture.md) methods listed in Accessing Texture Data.
