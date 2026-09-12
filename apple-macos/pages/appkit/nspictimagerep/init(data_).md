> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspictimagerep/init(data:)](https://developer.apple.com/documentation/appkit/nspictimagerep/init(data:))

# init(data:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Returns a representation of an image from the specified data in the PICT file format.

## Declaration

```swift
init?(data pictData: Data)
```

## Parameters

- `pictData`: A data object containing the PICT data.

<a id="return-value"></a>

## Return Value

An initialized [NSPICTImageRep](../nspictimagerep.md), or `nil` if the object could not be initialized. Initialization may fail if the data does not conform to the PICT file format.

<a id="Discussion"></a>

## Discussion

If the PICT data is obtained directly from a PICT file or document, this method ignores most of the 512-byte header that occurs before the start of the actual picture data. It may retrieve some relevant meta information from the header.

## See Also

### Related Documentation

- [pictRepresentation](pictrepresentation.md): The image representation’s PICT data.

# initWithData: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a representation of an image from the specified data in the PICT file format.

## Declaration

```objectivec
- (instancetype) initWithData:(NSData *) pictData;
```

## Parameters

- `pictData`: A data object containing the PICT data.

<a id="return-value"></a>

## Return Value

An initialized [NSPICTImageRep](../nspictimagerep.md), or `nil` if the object could not be initialized. Initialization may fail if the data does not conform to the PICT file format.

<a id="Discussion"></a>

## Discussion

If the PICT data is obtained directly from a PICT file or document, this method ignores most of the 512-byte header that occurs before the start of the actual picture data. It may retrieve some relevant meta information from the header.

## See Also

### Related Documentation

- [imageRepWithData:](imagerepwithdata_.md): Creates and returns a representation of an image from the specified data in the PICT file format.
- [PICTRepresentation](pictrepresentation.md): The image representation’s PICT data.

### Creating Representations of Images from PICT Data

- [imageRepWithData:](imagerepwithdata_.md): Creates and returns a representation of an image from the specified data in the PICT file format.
