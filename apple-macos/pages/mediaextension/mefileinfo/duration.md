> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mefileinfo/duration](https://developer.apple.com/documentation/mediaextension/mefileinfo/duration)

# duration (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The duration of the media asset, if available.

## Declaration

```swift
var duration: CMTime { get set }
```

<a id="Discussion"></a>

## Discussion

This value is [invalid](https://developer.apple.com/documentation/coremedia/cmtime/invalid) if the duration isn’t available.

## See Also

### Inspecting file properties

- [fragmentsStatus](fragmentsstatus-swift.property.md): Indicates if the media asset contains fragments or is extendable by fragments.
- [MEFileInfo.FragmentsStatus](fragmentsstatus-swift.enum.md): An enumeration that describes if a media asset contains or supports fragments.

# duration (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The duration of the media asset, if available.

## Declaration

```objectivec
@property (nonatomic) CMTime duration;
```

<a id="Discussion"></a>

## Discussion

This value is [kCMTimeInvalid](https://developer.apple.com/documentation/coremedia/cmtime/invalid) if the duration isn’t available.

## See Also

### Inspecting file properties

- [fragmentsStatus](fragmentsstatus-swift.property.md): Indicates if the media asset contains fragments or is extendable by fragments.
- [MEFileInfoFragmentsStatus](fragmentsstatus-swift.enum.md): An enumeration that describes if a media asset contains or supports fragments.
