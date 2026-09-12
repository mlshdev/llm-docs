> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstreamproperties/activeformatindex-8czm7](https://developer.apple.com/documentation/coremediaio/cmioextensionstreamproperties/activeformatindex-8czm7)

# activeFormatIndex

**Interface language:** Objective-C

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

The index of the active format.

## Declaration

```objectivec
@property (atomic, strong, nullable) NSNumber * activeFormatIndex;
```

<a id="Discussion"></a>

## Discussion

This value represents the index of the active format in the source’s [formats](../cmioextensionstreamsource/formats.md) array.

The key for this property is [CMIOExtensionPropertyStreamActiveFormatIndex](../cmioextensionproperty/streamactiveformatindex.md).

## See Also

### Configuring Source Properties

- [frameDuration](frameduration-lrfi.md): A dictionary representation of a frame duration.
- [maxFrameDuration](maxframeduration-8fo5t.md): The maximum duration of a frame.
