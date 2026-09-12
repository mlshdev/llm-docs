> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlvertexbufferlayout/stride](https://developer.apple.com/documentation/modelio/mdlvertexbufferlayout/stride)

# stride (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The stride, in bytes, between data for separate vertices in a vertex buffer.

## Declaration

```swift
var stride: Int { get set }
```

<a id="Discussion"></a>

## Discussion

For example, if a vertex buffer contains interleaved data for two attributes, the stride is typically the sum of data sizes for those two attributes.

# stride (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The stride, in bytes, between data for separate vertices in a vertex buffer.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger stride;
```

<a id="Discussion"></a>

## Discussion

For example, if a vertex buffer contains interleaved data for two attributes, the stride is typically the sum of data sizes for those two attributes.
