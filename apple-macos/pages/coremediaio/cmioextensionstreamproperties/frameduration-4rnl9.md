> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremediaio/cmioextensionstreamproperties/frameduration-4rnl9

# frameDuration

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+ · Xcode 13.0+

The duration of the frame.

## Declaration

```swift
@nonobjc var frameDuration: CMTime? { get set }
```

<a id="Discussion"></a>

## Discussion

The key for this property is [streamFrameDuration](../cmioextensionproperty/streamframeduration.md).

## See Also

### Configuring Source Properties

- [activeFormatIndex](activeformatindex-83u7z.md): The index of the active format.
- [maxFrameDuration](maxframeduration-5qqg.md): The maximum duration of a frame.
