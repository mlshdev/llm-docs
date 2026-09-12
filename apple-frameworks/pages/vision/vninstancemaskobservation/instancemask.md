> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vninstancemaskobservation/instancemask](https://developer.apple.com/documentation/vision/vninstancemaskobservation/instancemask)

# instanceMask (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The resulting mask that represents all instances.

## Declaration

```swift
var instanceMask: CVPixelBuffer { get }
```

<a id="Discussion"></a>

## Discussion

A pixel can only correspond to one instance. A `0` represents the background, and all other values represent the indices of the instances.

## See Also

### Accessing Instances

- [allInstances](allinstances.md): The collection that contains all instances, excluding the background.

# instanceMask (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The resulting mask that represents all instances.

## Declaration

```objectivec
@property (nonatomic, readonly) CVPixelBufferRef instanceMask;
```

<a id="Discussion"></a>

## Discussion

A pixel can only correspond to one instance. A `0` represents the background, and all other values represent the indices of the instances.

## See Also

### Accessing Instances

- [allInstances](allinstances.md): The collection that contains all instances, excluding the background.
