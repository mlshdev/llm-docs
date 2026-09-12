> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimageeditpaneldatasource/image](https://developer.apple.com/documentation/quartz/ikimageeditpaneldatasource/image)

# image (Swift)

**Framework:** Quartz  
**Kind:** Instance Property  
**Availability:** macOS 10.4+

Returns an image.

## Declaration

```swift
var image: CGImage! { get }
```

<a id="return-value"></a>

## Return Value

An image.

<a id="Discussion"></a>

## Discussion

Your data source must implement this method.

## See Also

### Getting Images From the Data Source

- [thumbnail(withMaximumSize:)](thumbnail%28withmaximumsize_%29.md): Returns a thumbnail image whose size is no larger than the specified size.

# image (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Property  
**Availability:** macOS 10.4+

Returns an image.

## Declaration

```objectivec
@property (atomic, readonly) CGImageRef image;
```

<a id="return-value"></a>

## Return Value

An image.

<a id="Discussion"></a>

## Discussion

Your data source must implement this method.

## See Also

### Getting Images From the Data Source

- [thumbnailWithMaximumSize:](thumbnail%28withmaximumsize_%29.md): Returns a thumbnail image whose size is no larger than the specified size.
