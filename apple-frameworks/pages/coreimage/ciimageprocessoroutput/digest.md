> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageprocessoroutput/digest](https://developer.apple.com/documentation/coreimage/ciimageprocessoroutput/digest)

# digest (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A 64-bit digest that uniquely describes the contents of the output of a processor.

## Declaration

```swift
var digest: UInt64 { get }
```

<a id="discussion"></a>

## Discussion

This digest will change if the graph up to and including the output of the processor changes in any way.

# digest (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A 64-bit digest that uniquely describes the contents of the output of a processor.

## Declaration

```objectivec
@property (nonatomic, readonly) uint64_t digest;
```

<a id="discussion"></a>

## Discussion

This digest will change if the graph up to and including the output of the processor changes in any way.
