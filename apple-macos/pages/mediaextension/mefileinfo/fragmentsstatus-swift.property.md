> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mefileinfo/fragmentsstatus-swift.property](https://developer.apple.com/documentation/mediaextension/mefileinfo/fragmentsstatus-swift.property)

# fragmentsStatus (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

Indicates if the media asset contains fragments or is extendable by fragments.

## Declaration

```swift
var fragmentsStatus: MEFileInfo.FragmentsStatus { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [MEFileInfo.FragmentsStatus.couldNotContainFragments](fragmentsstatus-swift.enum/couldnotcontainfragments.md).

## See Also

### Inspecting file properties

- [duration](duration.md): The duration of the media asset, if available.
- [MEFileInfo.FragmentsStatus](fragmentsstatus-swift.enum.md): An enumeration that describes if a media asset contains or supports fragments.

# fragmentsStatus (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

Indicates if the media asset contains fragments or is extendable by fragments.

## Declaration

```objectivec
@property (nonatomic) MEFileInfoFragmentsStatus fragmentsStatus;
```

<a id="Discussion"></a>

## Discussion

The default value is [MEFileInfoCouldNotContainFragments](fragmentsstatus-swift.enum/couldnotcontainfragments.md).

## See Also

### Inspecting file properties

- [duration](duration.md): The duration of the media asset, if available.
- [MEFileInfoFragmentsStatus](fragmentsstatus-swift.enum.md): An enumeration that describes if a media asset contains or supports fragments.
