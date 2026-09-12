> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4indirectinstanceaccelerationstructuredescriptor/maxinstancecount](https://developer.apple.com/documentation/metal/mtl4indirectinstanceaccelerationstructuredescriptor/maxinstancecount)

# maxInstanceCount (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Controls the maximum number of instance descriptors the instance descriptor buffer can reference.

## Declaration

```swift
var maxInstanceCount: Int { get set }
```

<a id="discussion"></a>

## Discussion

You are responsible for ensuring that the final number of instances at build time, which you provide indirectly via a buffer reference in [instanceCountBuffer](instancecountbuffer.md), is less than or equal to this number.

# maxInstanceCount (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Controls the maximum number of instance descriptors the instance descriptor buffer can reference.

## Declaration

```objectivec
@property (nonatomic) NSUInteger maxInstanceCount;
```

<a id="discussion"></a>

## Discussion

You are responsible for ensuring that the final number of instances at build time, which you provide indirectly via a buffer reference in [instanceCountBuffer](instancecountbuffer.md), is less than or equal to this number.
