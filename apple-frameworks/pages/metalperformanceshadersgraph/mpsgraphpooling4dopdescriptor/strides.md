> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphpooling4dopdescriptor/strides

# strides (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Defines strides for spatial dimensions. Must be four numbers, one for each spatial dimension, fastest running index last.

## Declaration

```swift
var strides: [NSNumber] { get set }
```

<a id="discussion"></a>

## Discussion

Default value: `@[ @1, @1, @1, @1 ]`

# strides (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Defines strides for spatial dimensions. Must be four numbers, one for each spatial dimension, fastest running index last.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSArray<NSNumber *> * strides;
```

<a id="discussion"></a>

## Discussion

Default value: `@[ @1, @1, @1, @1 ]`
