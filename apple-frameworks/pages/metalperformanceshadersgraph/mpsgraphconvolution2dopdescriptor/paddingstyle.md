> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphconvolution2dopdescriptor/paddingstyle](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphconvolution2dopdescriptor/paddingstyle)

# paddingStyle (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The type of padding applied to the source tensor.

## Declaration

```swift
var paddingStyle: MPSGraphPaddingStyle { get set }
```

<a id="discussion"></a>

## Discussion

If paddingStyle is `MPSGraphPaddingStyleExplicit`, `paddingLeft`, `laddingRight`, `paddingTop`, and `paddingBottom` must to be specified. For all other padding styles, framework compute these values so you dont need to provide these values.

# paddingStyle (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The type of padding applied to the source tensor.

## Declaration

```objectivec
@property (nonatomic, readwrite) MPSGraphPaddingStyle paddingStyle;
```

<a id="discussion"></a>

## Discussion

If paddingStyle is `MPSGraphPaddingStyleExplicit`, `paddingLeft`, `laddingRight`, `paddingTop`, and `paddingBottom` must to be specified. For all other padding styles, framework compute these values so you dont need to provide these values.
