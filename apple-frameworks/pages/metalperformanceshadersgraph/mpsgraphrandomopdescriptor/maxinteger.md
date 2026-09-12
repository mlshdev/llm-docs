> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphrandomopdescriptor/maxinteger](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphrandomopdescriptor/maxinteger)

# maxInteger (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The upper range of the distribution.

## Declaration

```swift
var maxInteger: Int { get set }
```

<a id="discussion"></a>

## Discussion

This value is used for Uniform with integer data types Defaults to INT32_MAX for uniform distributions and 0 for normal distributions.

# maxInteger (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The upper range of the distribution.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSInteger maxInteger;
```

<a id="discussion"></a>

## Discussion

This value is used for Uniform with integer data types Defaults to INT32_MAX for uniform distributions and 0 for normal distributions.
