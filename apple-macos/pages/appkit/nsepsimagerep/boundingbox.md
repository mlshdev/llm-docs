> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsepsimagerep/boundingbox

# boundingBox (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 14.0)

The rectangle that bounds the image representation.

> \`NSEPSImageRep\` instances cannot be created on macOS 14.0 and later

## Declaration

```swift
var boundingBox: NSRect { get }
```

## See Also

### Related Documentation

- [init(data:)](init%28data_%29.md): Deprecated. Returns a representation of an image initialized with the specified EPS data.

### Getting Data

- [epsRepresentation](epsrepresentation.md): Deprecated. The EPS representation of the image representation.

# boundingBox (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 14.0)

The rectangle that bounds the image representation.

> \`NSEPSImageRep\` instances cannot be created on macOS 14.0 and later

## Declaration

```objectivec
@property (readonly) NSRect boundingBox;
```

## See Also

### Related Documentation

- [imageRepWithData:](imagerepwithdata_.md): Deprecated. Creates and returns a representation of an image initialized with the specified EPS data.
- [initWithData:](init%28data_%29.md): Deprecated. Returns a representation of an image initialized with the specified EPS data.

### Getting Data

- [EPSRepresentation](epsrepresentation.md): Deprecated. The EPS representation of the image representation.
