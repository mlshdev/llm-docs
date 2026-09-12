> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstreamproperties/activeformatindex-83u7z](https://developer.apple.com/documentation/coremediaio/cmioextensionstreamproperties/activeformatindex-83u7z)

# activeFormatIndex

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+ · Xcode 13.0+

The index of the active format.

## Declaration

```swift
@nonobjc var activeFormatIndex: Int? { get set }
```

<a id="Discussion"></a>

## Discussion

This value represents the index of the active format in the source’s [formats](../cmioextensionstreamsource/formats.md) array.

The key for this property is [streamActiveFormatIndex](../cmioextensionproperty/streamactiveformatindex.md).

## See Also

### Configuring Source Properties

- [frameDuration](frameduration-4rnl9.md): The duration of the frame.
- [maxFrameDuration](maxframeduration-5qqg.md): The maximum duration of a frame.
