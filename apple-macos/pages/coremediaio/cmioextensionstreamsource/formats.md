> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstreamsource/formats](https://developer.apple.com/documentation/coremediaio/cmioextensionstreamsource/formats)

# formats (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

An array of formats that a stream supports.

## Declaration

```swift
var formats: [CMIOExtensionStreamFormat] { get }
```

<a id="Discussion"></a>

## Discussion

Don’t change stream formats during the life cycle of the associated stream.

## See Also

### Accessing the Source Format

- [CMIOExtensionStreamFormat](../cmioextensionstreamformat.md): An object that describes the format of a media stream.

# formats (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

An array of formats that a stream supports.

## Declaration

```objectivec
@property (atomic, readonly) NSArray<CMIOExtensionStreamFormat *> * formats;
```

<a id="Discussion"></a>

## Discussion

Don’t change stream formats during the life cycle of the associated stream.

## See Also

### Accessing the Source Format

- [CMIOExtensionStreamFormat](../cmioextensionstreamformat.md): An object that describes the format of a media stream.
