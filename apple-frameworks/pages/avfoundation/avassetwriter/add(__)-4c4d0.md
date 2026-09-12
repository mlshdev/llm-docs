> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriter/add(_:)-4c4d0](https://developer.apple.com/documentation/avfoundation/avassetwriter/add(_:)-4c4d0)

# add(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ (deprecated in 27.0) · iPadOS 4.1+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Adds an input to an asset writer.

> Use the appropriate AVAssetWriter.inputReceiver(for:...) overload for your input and optional adaptor instead

## Declaration

```swift
func add(_ input: AVAssetWriterInput)
```

## Parameters

- `input`: A compatible asset writer input to add.

<a id="Discussion"></a>

## Discussion

You can’t add inputs after asset writing begins.

## See Also

### Configuring inputs

- [inputs](inputs.md): The inputs an asset writer contains.
- [availableMediaTypes](availablemediatypes.md): The media types the asset writer supports adding as inputs.
- [canApply(outputSettings:forMediaType:)](canapply%28outputsettings_formediatype_%29.md): Determines whether the output file format supports the output settings for a specific media type.
- [canAdd(\_:)](canadd%28__%29-6al7j.md): Determines whether the asset writer supports adding the input.

# addInput: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Adds an input to an asset writer.

## Declaration

```objectivec
- (void) addInput:(AVAssetWriterInput *) input;
```

## Parameters

- `input`: A compatible asset writer input to add.

<a id="Discussion"></a>

## Discussion

You can’t add inputs after asset writing begins.

## See Also

### Configuring inputs

- [inputs](inputs.md): The inputs an asset writer contains.
- [availableMediaTypes](availablemediatypes.md): The media types the asset writer supports adding as inputs.
- [canApplyOutputSettings:forMediaType:](canapply%28outputsettings_formediatype_%29.md): Determines whether the output file format supports the output settings for a specific media type.
- [canAddInput:](canadd%28__%29-6al7j.md): Determines whether the asset writer supports adding the input.
