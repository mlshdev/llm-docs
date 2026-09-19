> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/ituneslibrary/itlibartwork/imagedata

# imageData (Swift)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

The raw image data of the artwork in the format that [imageDataFormat](imagedataformat.md) specifies.

## Declaration

```swift
var imageData: Data? { get }
```

## See Also

### Getting Artwork Info

- [image](image.md): The artwork image.
- [imageDataFormat](imagedataformat.md): The format of the artwork image data that [imageData](imagedata.md) returns.

# imageData (Objective-C)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

The raw image data of the artwork in the format that [imageDataFormat](imagedataformat.md) specifies.

## Declaration

```objectivec
@property (nonatomic, retain, readonly, nullable) NSData * imageData;
```

## See Also

### Getting Artwork Info

- [image](image.md): The artwork image.
- [imageDataFormat](imagedataformat.md): The format of the artwork image data that [imageData](imagedata.md) returns.
