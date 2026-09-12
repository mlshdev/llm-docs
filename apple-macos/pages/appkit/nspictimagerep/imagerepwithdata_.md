> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspictimagerep/imagerepwithdata:](https://developer.apple.com/documentation/appkit/nspictimagerep/imagerepwithdata:)

# imageRepWithData:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates and returns a representation of an image from the specified data in the PICT file format.

## Declaration

```objectivec
+ (instancetype) imageRepWithData:(NSData *) pictData;
```

## Parameters

- `pictData`: A data object containing the PICT data.

<a id="return-value"></a>

## Return Value

An initialized [NSPICTImageRep](../nspictimagerep.md), or `nil` if the object could not be initialized. Initialization may fail if the data does not conform to the PICT file format.

## See Also

### Related Documentation

- [PICTRepresentation](pictrepresentation.md): The image representation’s PICT data.

### Creating Representations of Images from PICT Data

- [initWithData:](init%28data_%29.md): Returns a representation of an image from the specified data in the PICT file format.
