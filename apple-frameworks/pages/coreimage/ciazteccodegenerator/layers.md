> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreimage/ciazteccodegenerator/layers

# layers (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The number of Aztec layers, a value from 1 to 32.

## Declaration

```swift
var layers: Float { get set }
```

<a id="Discussion"></a>

## Discussion

Set to `nil` for automatic.

## See Also

### Instance Properties

- [compactStyle](compactstyle.md): A Boolean that specifies whether to force a compact style Aztec code.
- [correctionLevel](correctionlevel.md): The Aztec error correction, a value from 5 to 95.
- [message](message.md): The message to encode in the Aztec barcode.

# layers (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The number of Aztec layers, a value from 1 to 32.

## Declaration

```objectivec
@property (nonatomic) float layers;
```

<a id="Discussion"></a>

## Discussion

Set to `nil` for automatic.

## See Also

### Instance Properties

- [compactStyle](compactstyle.md): A Boolean that specifies whether to force a compact style Aztec code.
- [correctionLevel](correctionlevel.md): The Aztec error correction, a value from 5 to 95.
- [message](message.md): The message to encode in the Aztec barcode.
