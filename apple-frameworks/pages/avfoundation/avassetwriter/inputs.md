> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriter/inputs](https://developer.apple.com/documentation/avfoundation/avassetwriter/inputs)

# inputs (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The inputs an asset writer contains.

## Declaration

```swift
var inputs: [AVAssetWriterInput] { get }
```

## See Also

### Configuring inputs

- [availableMediaTypes](availablemediatypes.md): The media types the asset writer supports adding as inputs.
- [canApply(outputSettings:forMediaType:)](canapply%28outputsettings_formediatype_%29.md): Determines whether the output file format supports the output settings for a specific media type.
- [canAdd(\_:)](canadd%28__%29-6al7j.md): Determines whether the asset writer supports adding the input.
- [add(\_:)](add%28__%29-4c4d0.md): Deprecated. Adds an input to an asset writer.

# inputs (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The inputs an asset writer contains.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVAssetWriterInput *> * inputs;
```

## See Also

### Configuring inputs

- [availableMediaTypes](availablemediatypes.md): The media types the asset writer supports adding as inputs.
- [canApplyOutputSettings:forMediaType:](canapply%28outputsettings_formediatype_%29.md): Determines whether the output file format supports the output settings for a specific media type.
- [canAddInput:](canadd%28__%29-6al7j.md): Determines whether the asset writer supports adding the input.
- [addInput:](add%28__%29-4c4d0.md): Deprecated. Adds an input to an asset writer.
