> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsfcolorconversion/outputcolorchannels](https://developer.apple.com/documentation/metalperformanceshaders/mpsfcolorconversion/outputcolorchannels)

# outputColorChannels (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
var outputColorChannels: Int { get }
```

<a id="discussion"></a>

## Discussion

The number of color channels produced by the conversion in the float4 texel

When the conversion is initialized with a NULL CGColorConversionInfoRef this value will be 0

# outputColorChannels (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger outputColorChannels;
```

<a id="discussion"></a>

## Discussion

The number of color channels produced by the conversion in the float4 texel

When the conversion is initialized with a NULL CGColorConversionInfoRef this value will be 0
