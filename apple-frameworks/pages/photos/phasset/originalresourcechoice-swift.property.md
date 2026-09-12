> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phasset/originalresourcechoice-swift.property](https://developer.apple.com/documentation/photos/phasset/originalresourcechoice-swift.property)

# originalResourceChoice (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The original resource used as the basis for rendering this asset’s derivatives.

## Declaration

```swift
var originalResourceChoice: PHAsset.OriginalResourceChoice { get }
```

<a id="discussion"></a>

## Discussion

This value is only meaningful for assets that have a RAW alternate, such as RAW+JPEG assets, where it indicates whether the RAW or the compressed resource serves as the unadjusted base. For all other assets the value is [PHAsset.OriginalResourceChoice.compressed](originalresourcechoice-swift.enum/compressed.md).

# originalResourceChoice (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The original resource used as the basis for rendering this asset’s derivatives.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) PHOriginalResourceChoice originalResourceChoice;
```

<a id="discussion"></a>

## Discussion

This value is only meaningful for assets that have a RAW alternate, such as RAW+JPEG assets, where it indicates whether the RAW or the compressed resource serves as the unadjusted base. For all other assets the value is [PHOriginalResourceChoiceCompressed](originalresourcechoice-swift.enum/compressed.md).
