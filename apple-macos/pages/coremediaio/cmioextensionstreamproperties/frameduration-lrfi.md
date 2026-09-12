> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstreamproperties/frameduration-lrfi](https://developer.apple.com/documentation/coremediaio/cmioextensionstreamproperties/frameduration-lrfi)

# frameDuration

**Interface language:** Objective-C

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A dictionary representation of a frame duration.

## Declaration

```objectivec
@property (atomic, strong, nullable) NSDictionary * frameDuration;
```

<a id="Discussion"></a>

## Discussion

The dictionary represents a [CMTime](https://developer.apple.com/documentation/coremedia/cmtime) value that’s consistent with the frame duration that the current active format specifies.

The key for this property is [CMIOExtensionPropertyStreamFrameDuration](../cmioextensionproperty/streamframeduration.md).

## See Also

### Configuring Source Properties

- [activeFormatIndex](activeformatindex-8czm7.md): The index of the active format.
- [maxFrameDuration](maxframeduration-8fo5t.md): The maximum duration of a frame.
