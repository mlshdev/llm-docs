> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctionhandle/gpuresourceid](https://developer.apple.com/documentation/metal/mtlfunctionhandle/gpuresourceid)

# gpuResourceID (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
var gpuResourceID: MTLResourceID { get }
```

<a id="discussion"></a>

## Discussion

Handle of the GPU resource suitable for storing in an Intersection Function Buffer.

The handle must have been created from an intersection function annotated with the `intersection_function_buffer` tag.

# gpuResourceID (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
@property (readonly) MTLResourceID gpuResourceID;
```

<a id="discussion"></a>

## Discussion

Handle of the GPU resource suitable for storing in an Intersection Function Buffer.

The handle must have been created from an intersection function annotated with the `intersection_function_buffer` tag.
