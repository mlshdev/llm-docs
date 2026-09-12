> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstreamproperties/maxframeduration-8fo5t](https://developer.apple.com/documentation/coremediaio/cmioextensionstreamproperties/maxframeduration-8fo5t)

# maxFrameDuration

**Interface language:** Objective-C

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

The maximum duration of a frame.

## Declaration

```objectivec
@property (atomic, strong, nullable) NSDictionary * maxFrameDuration;
```

<a id="Discussion"></a>

## Discussion

The dictionary needs to represent a [CMTime](https://developer.apple.com/documentation/coremedia/cmtime) value that aligns with the frame duration of the current active format.

The key for this property is [CMIOExtensionPropertyStreamMaxFrameDuration](../cmioextensionproperty/streammaxframeduration.md).

## See Also

### Configuring Source Properties

- [activeFormatIndex](activeformatindex-8czm7.md): The index of the active format.
- [frameDuration](frameduration-lrfi.md): A dictionary representation of a frame duration.
