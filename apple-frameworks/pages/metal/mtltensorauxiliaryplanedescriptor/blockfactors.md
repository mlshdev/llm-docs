> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltensorauxiliaryplanedescriptor/blockfactors](https://developer.apple.com/documentation/metal/mtltensorauxiliaryplanedescriptor/blockfactors)

# blockFactors (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An extents instance that represents the number of data plane elements which correspond to one element in a plane you create with this descriptor.

## Declaration

```swift
@NSCopying var blockFactors: MTLTensorExtents { get set }
```

<a id="discussion"></a>

## Discussion

The number of dimensions in the extents needs to match the number of the tensor’s dimensions.

The first element of the block factors needs to be `32`. All remaining elements need to be `1`.

The default value is a 1D block size of width `32`.

# blockFactors (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An extents instance that represents the number of data plane elements which correspond to one element in a plane you create with this descriptor.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) MTLTensorExtents * blockFactors;
```

<a id="discussion"></a>

## Discussion

The number of dimensions in the extents needs to match the number of the tensor’s dimensions.

The first element of the block factors needs to be `32`. All remaining elements need to be `1`.

The default value is a 1D block size of width `32`.
