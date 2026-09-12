> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphpooling4dopdescriptor/dilationrates](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphpooling4dopdescriptor/dilationrates)

# dilationRates (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Defines dilation rates for spatial dimensions. Must be four numbers, one for each spatial dimension, fastest running index last.

## Declaration

```swift
var dilationRates: [NSNumber] { get set }
```

<a id="discussion"></a>

## Discussion

Default value: `@[ @1, @1, @1, @1 ]`

# dilationRates (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Defines dilation rates for spatial dimensions. Must be four numbers, one for each spatial dimension, fastest running index last.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSArray<NSNumber *> * dilationRates;
```

<a id="discussion"></a>

## Discussion

Default value: `@[ @1, @1, @1, @1 ]`
