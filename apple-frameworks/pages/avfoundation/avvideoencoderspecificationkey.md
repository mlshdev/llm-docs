> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideoencoderspecificationkey](https://developer.apple.com/documentation/avfoundation/avvideoencoderspecificationkey)

# AVVideoEncoderSpecificationKey (Swift)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** macOS 10.10+

The video encoder specification includes options for choosing a specific video encoder.

## Declaration

```swift
let AVVideoEncoderSpecificationKey: String
```

<a id="Discussion"></a>

## Discussion

The value for this key is a dictionary containing `kVTVideoEncoderSpecification_*` keys specified in the VideoToolbox framework. This key should be specified at the top level of an `AVVideoSettings` dictionary.

# AVVideoEncoderSpecificationKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** macOS 10.10+

The video encoder specification includes options for choosing a specific video encoder.

## Declaration

```objectivec
extern NSString * const AVVideoEncoderSpecificationKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is a dictionary containing `kVTVideoEncoderSpecification_*` keys specified in the VideoToolbox framework. This key should be specified at the top level of an `AVVideoSettings` dictionary.
