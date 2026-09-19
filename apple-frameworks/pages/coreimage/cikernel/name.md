> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreimage/cikernel/name

# name (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

The name of the kernel routine.

## Declaration

```swift
var name: String { get }
```

<a id="Discussion"></a>

## Discussion

The name of a kernel routine is the identifier used to declare it in the Core Image Kernel Language source code. For example, if you use the [init(source:)](init%28source_%29.md) method to create a kernel from the source code below, the name of the returned [CIKernel](../cikernel.md) object is “moveUpTwoPixels”.

```objc
kernel vec4 moveUpTwoPixels (sampler image) {
    vec2 dc = destCoord();
    vec2 offset = vec2(0.0, 2.0);
    return sample (image, samplerTransform (image, dc + offset));
}
```

# name (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

The name of the kernel routine.

## Declaration

```objectivec
@property (atomic, readonly) NSString * name;
```

<a id="Discussion"></a>

## Discussion

The name of a kernel routine is the identifier used to declare it in the Core Image Kernel Language source code. For example, if you use the [kernelWithString:](init%28source_%29.md) method to create a kernel from the source code below, the name of the returned [CIKernel](../cikernel.md) object is “moveUpTwoPixels”.

```objc
kernel vec4 moveUpTwoPixels (sampler image) {
    vec2 dc = destCoord();
    vec2 offset = vec2(0.0, 2.0);
    return sample (image, samplerTransform (image, dc + offset));
}
```
