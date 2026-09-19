> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcapturedevice/inputsource/inputsourceid

# inputSourceID (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

An identifier for an input source.

## Declaration

```swift
var inputSourceID: String { get }
```

<a id="Discussion"></a>

## Discussion

The identifier is unique among the input sources exposed by particular capture device instance.

## See Also

### Accessing properties

- [localizedName](localizedname.md): A localized, human-readable name for the input source.

# inputSourceID (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

An identifier for an input source.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * inputSourceID;
```

<a id="Discussion"></a>

## Discussion

The identifier is unique among the input sources exposed by particular capture device instance.

## See Also

### Accessing properties

- [localizedName](localizedname.md): A localized, human-readable name for the input source.
