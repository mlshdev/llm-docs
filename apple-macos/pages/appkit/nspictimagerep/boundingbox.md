> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nspictimagerep/boundingbox

# boundingBox (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The rectangle that bounds the image representation.

## Declaration

```swift
var boundingBox: NSRect { get }
```

<a id="Discussion"></a>

## Discussion

The rectangle bounding the receiver. This rectangle is obtained from the the `picFrame` field in the picture header. See the Carbon QuickDraw Manager documentation for information on the picture header

## See Also

### Getting Data

- [pictRepresentation](pictrepresentation.md): The image representation’s PICT data.

# boundingBox (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The rectangle that bounds the image representation.

## Declaration

```objectivec
@property (readonly) NSRect boundingBox;
```

<a id="Discussion"></a>

## Discussion

The rectangle bounding the receiver. This rectangle is obtained from the the `picFrame` field in the picture header. See the Carbon QuickDraw Manager documentation for information on the picture header

## See Also

### Getting Data

- [PICTRepresentation](pictrepresentation.md): The image representation’s PICT data.
