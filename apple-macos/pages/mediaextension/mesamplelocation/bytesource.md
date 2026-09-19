> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediaextension/mesamplelocation/bytesource

# byteSource (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The byte source to use to read the data for the sample.

## Declaration

```swift
var byteSource: MEByteSource { get }
```

## See Also

### Inspecting a sample location

- [sampleLocation](samplelocation.md): The starting file offset and size in bytes of the sample.

# byteSource (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The byte source to use to read the data for the sample.

## Declaration

```objectivec
@property (nonatomic, retain, readonly) MEByteSource * byteSource;
```

## See Also

### Inspecting a sample location

- [sampleLocation](samplelocation.md): The starting file offset and size in bytes of the sample.
