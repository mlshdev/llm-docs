> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catiledlayer/levelsofdetail](https://developer.apple.com/documentation/quartzcore/catiledlayer/levelsofdetail)

# levelsOfDetail (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The number of levels of detail maintained by this layer.

## Declaration

```swift
var levelsOfDetail: Int { get set }
```

<a id="Discussion"></a>

## Discussion

Defaults to 1. Each level of detail is half the resolution of the previous level. If too many levels are specified for the current size of the layer, then the number of levels is clamped to the maximum value (the bottom most level of detail must contain at least a single pixel in each dimension.)

## See Also

### Levels of detail

- [levelsOfDetailBias](levelsofdetailbias.md): The number of magnified levels of detail for this layer.

# levelsOfDetail (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The number of levels of detail maintained by this layer.

## Declaration

```objectivec
@property size_t levelsOfDetail;
```

<a id="Discussion"></a>

## Discussion

Defaults to 1. Each level of detail is half the resolution of the previous level. If too many levels are specified for the current size of the layer, then the number of levels is clamped to the maximum value (the bottom most level of detail must contain at least a single pixel in each dimension.)

## See Also

### Levels of detail

- [levelsOfDetailBias](levelsofdetailbias.md): The number of magnified levels of detail for this layer.
