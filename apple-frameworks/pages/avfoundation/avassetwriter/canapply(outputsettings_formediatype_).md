> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriter/canapply(outputsettings:formediatype:)](https://developer.apple.com/documentation/avfoundation/avassetwriter/canapply(outputsettings:formediatype:))

# canApply(outputSettings:forMediaType:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Determines whether the output file format supports the output settings for a specific media type.

## Declaration

```swift
func canApply(outputSettings: [String : Any]?, forMediaType mediaType: AVMediaType) -> Bool
```

## Parameters

- `outputSettings`: The output settings to validate.
- `mediaType`: The media type to validate the output settings for.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the format supports the output settings; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Use this method to determine the compatibility of output settings for a particular media type. For example, video compression settings that specify H.264 compression aren’t compatible with file formats that don’t contain H.264-compressed video.

## See Also

### Configuring inputs

- [inputs](inputs.md): The inputs an asset writer contains.
- [availableMediaTypes](availablemediatypes.md): The media types the asset writer supports adding as inputs.
- [canAdd(\_:)](canadd%28__%29-6al7j.md): Determines whether the asset writer supports adding the input.
- [add(\_:)](add%28__%29-4c4d0.md): Deprecated. Adds an input to an asset writer.

# canApplyOutputSettings:forMediaType: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Determines whether the output file format supports the output settings for a specific media type.

## Declaration

```objectivec
- (BOOL) canApplyOutputSettings:(NSDictionary<NSString *,id> *) outputSettings forMediaType:(AVMediaType) mediaType;
```

## Parameters

- `outputSettings`: The output settings to validate.
- `mediaType`: The media type to validate the output settings for.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the format supports the output settings; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Use this method to determine the compatibility of output settings for a particular media type. For example, video compression settings that specify H.264 compression aren’t compatible with file formats that don’t contain H.264-compressed video.

## See Also

### Configuring inputs

- [inputs](inputs.md): The inputs an asset writer contains.
- [availableMediaTypes](availablemediatypes.md): The media types the asset writer supports adding as inputs.
- [canAddInput:](canadd%28__%29-6al7j.md): Determines whether the asset writer supports adding the input.
- [addInput:](add%28__%29-4c4d0.md): Deprecated. Adds an input to an asset writer.
