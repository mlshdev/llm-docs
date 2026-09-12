> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriter/canadd(_:)-6al7j](https://developer.apple.com/documentation/avfoundation/avassetwriter/canadd(_:)-6al7j)

# canAdd(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Determines whether the asset writer supports adding the input.

## Declaration

```swift
func canAdd(_ input: AVAssetWriterInput) -> Bool
```

## Parameters

- `input`: The asset writer input to add.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you can add the input to the asset writer; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring inputs

- [inputs](inputs.md): The inputs an asset writer contains.
- [availableMediaTypes](availablemediatypes.md): The media types the asset writer supports adding as inputs.
- [canApply(outputSettings:forMediaType:)](canapply%28outputsettings_formediatype_%29.md): Determines whether the output file format supports the output settings for a specific media type.
- [add(\_:)](add%28__%29-4c4d0.md): Deprecated. Adds an input to an asset writer.

# canAddInput: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Determines whether the asset writer supports adding the input.

## Declaration

```objectivec
- (BOOL) canAddInput:(AVAssetWriterInput *) input;
```

## Parameters

- `input`: The asset writer input to add.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you can add the input to the asset writer; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring inputs

- [inputs](inputs.md): The inputs an asset writer contains.
- [availableMediaTypes](availablemediatypes.md): The media types the asset writer supports adding as inputs.
- [canApplyOutputSettings:forMediaType:](canapply%28outputsettings_formediatype_%29.md): Determines whether the output file format supports the output settings for a specific media type.
- [addInput:](add%28__%29-4c4d0.md): Deprecated. Adds an input to an asset writer.
