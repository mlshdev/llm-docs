> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimageeditpaneldatasource/thumbnail(withmaximumsize:)](https://developer.apple.com/documentation/quartz/ikimageeditpaneldatasource/thumbnail(withmaximumsize:))

# thumbnail(withMaximumSize:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns a thumbnail image whose size is no larger than the specified size.

## Declaration

```swift
optional func thumbnail(withMaximumSize size: NSSize) -> Unmanaged<CGImage>!
```

<a id="return-value"></a>

## Return Value

An image.

## See Also

### Getting Images From the Data Source

- [image](image.md): Returns an image.

# thumbnailWithMaximumSize: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns a thumbnail image whose size is no larger than the specified size.

## Declaration

```objectivec
- (CGImageRef) thumbnailWithMaximumSize:(NSSize) size;
```

<a id="return-value"></a>

## Return Value

An image.

## See Also

### Getting Images From the Data Source

- [image](image.md): Returns an image.
