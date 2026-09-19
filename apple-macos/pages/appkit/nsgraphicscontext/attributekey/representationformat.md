> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsgraphicscontext/attributekey/representationformat

# representationFormat (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Specifies the destination file format.

## Declaration

```swift
static let representationFormat: NSGraphicsContext.AttributeKey
```

<a id="Discussion"></a>

## Discussion

This value should be retrieved only and not used to create a graphics context. For a list of possible values, see [NSGraphicsContext.RepresentationFormatName](../representationformatname.md).

## See Also

### Attribute Keys

- [destination](destination.md): Specifies the destination.

# NSGraphicsContextRepresentationFormatAttributeName (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Specifies the destination file format.

## Declaration

```objectivec
extern NSGraphicsContextAttributeKey NSGraphicsContextRepresentationFormatAttributeName;
```

<a id="Discussion"></a>

## Discussion

This value should be retrieved only and not used to create a graphics context. For a list of possible values, see [NSGraphicsContextRepresentationFormatName](../representationformatname.md).

## See Also

### Attribute Keys

- [NSGraphicsContextDestinationAttributeName](destination.md): Specifies the destination.
