> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspictimagerep/pictrepresentation](https://developer.apple.com/documentation/appkit/nspictimagerep/pictrepresentation)

# pictRepresentation (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The image representation’s PICT data.

## Declaration

```swift
var pictRepresentation: Data { get }
```

<a id="Discussion"></a>

## Discussion

The data does not include the 512-byte header, if it was present in the original data. If you want to write the data to a file, you must precede it with a 512-byte header (containing all zeros) if you want to conform to the PICT document format.

## See Also

### Getting Data

- [boundingBox](boundingbox.md): The rectangle that bounds the image representation.

# PICTRepresentation (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The image representation’s PICT data.

## Declaration

```objectivec
@property (copy, readonly) NSData * PICTRepresentation;
```

<a id="Discussion"></a>

## Discussion

The data does not include the 512-byte header, if it was present in the original data. If you want to write the data to a file, you must precede it with a 512-byte header (containing all zeros) if you want to conform to the PICT document format.

## See Also

### Getting Data

- [boundingBox](boundingbox.md): The rectangle that bounds the image representation.
