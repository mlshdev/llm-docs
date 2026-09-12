> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/meestimatedsamplelocation/refinementdatalocation](https://developer.apple.com/documentation/mediaextension/meestimatedsamplelocation/refinementdatalocation)

# refinementDataLocation (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The starting file offset and size in bytes of the data necessary to provide an accurate sample location.

## Declaration

```swift
var refinementDataLocation: AVSampleCursorStorageRange { get }
```

<a id="Discussion"></a>

## Discussion

Pass this refinement data to the [refineSampleLocation(\_:refinementData:refinementDataLength:refinedLocation:)](../mesamplecursor/refinesamplelocation%28__refinementdata_refinementdatalength_refinedlocation_%29.md) to determine the exact sample location.

## See Also

### Inspecting an estimated sample location

- [byteSource](bytesource.md): The byte source to use to read the data for the sample.
- [estimatedSampleLocation](estimatedsamplelocation.md): The estimated starting file offset and size in bytes of the sample.

# refinementDataLocation (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The starting file offset and size in bytes of the data necessary to provide an accurate sample location.

## Declaration

```objectivec
@property (nonatomic, readonly) AVSampleCursorStorageRange refinementDataLocation;
```

<a id="Discussion"></a>

## Discussion

Pass this refinement data to the [refineSampleLocation:refinementData:refinementDataLength:refinedLocation:error:](../mesamplecursor/refinesamplelocation%28__refinementdata_refinementdatalength_refinedlocation_%29.md) to determine the exact sample location.

## See Also

### Inspecting an estimated sample location

- [byteSource](bytesource.md): The byte source to use to read the data for the sample.
- [estimatedSampleLocation](estimatedsamplelocation.md): The estimated starting file offset and size in bytes of the sample.
