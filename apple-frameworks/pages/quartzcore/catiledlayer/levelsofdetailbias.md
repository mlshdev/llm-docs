> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catiledlayer/levelsofdetailbias](https://developer.apple.com/documentation/quartzcore/catiledlayer/levelsofdetailbias)

# levelsOfDetailBias (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The number of magnified levels of detail for this layer.

## Declaration

```swift
var levelsOfDetailBias: Int { get set }
```

<a id="Discussion"></a>

## Discussion

Defaults to 0. Each previous level of detail is twice the resolution of the later. For example, specifying a value of 2 means that the layer has two extra levels of detail: 2x and 4x.

## See Also

### Levels of detail

- [levelsOfDetail](levelsofdetail.md): The number of levels of detail maintained by this layer.

# levelsOfDetailBias (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The number of magnified levels of detail for this layer.

## Declaration

```objectivec
@property size_t levelsOfDetailBias;
```

<a id="Discussion"></a>

## Discussion

Defaults to 0. Each previous level of detail is twice the resolution of the later. For example, specifying a value of 2 means that the layer has two extra levels of detail: 2x and 4x.

## See Also

### Levels of detail

- [levelsOfDetail](levelsofdetail.md): The number of levels of detail maintained by this layer.
