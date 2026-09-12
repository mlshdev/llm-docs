> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphconvolution3dopdescriptor/paddingstyle](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphconvolution3dopdescriptor/paddingstyle)

# paddingStyle (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 16.3+ · iPadOS 16.3+ · Mac Catalyst 16.3+ · macOS 13.2+ · tvOS 16.3+ · visionOS 1.0+

The type of padding that is applied to the source tensor.

## Declaration

```swift
var paddingStyle: MPSGraphPaddingStyle { get set }
```

<a id="discussion"></a>

## Discussion

If paddingStyle is `MPSGraphPaddingStyleExplicit`, `paddingLeft`, `laddingRight`, `paddingTop`, `paddingBottom`,   `paddingFront` and `paddingBack` must to be specified. For all other padding styles, framework compute these values so you dont need to provide these values.

# paddingStyle (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 16.3+ · iPadOS 16.3+ · Mac Catalyst 16.3+ · macOS 13.2+ · tvOS 16.3+ · visionOS 1.0+

The type of padding that is applied to the source tensor.

## Declaration

```objectivec
@property (nonatomic, readwrite) MPSGraphPaddingStyle paddingStyle;
```

<a id="discussion"></a>

## Discussion

If paddingStyle is `MPSGraphPaddingStyleExplicit`, `paddingLeft`, `laddingRight`, `paddingTop`, `paddingBottom`,   `paddingFront` and `paddingBack` must to be specified. For all other padding styles, framework compute these values so you dont need to provide these values.
