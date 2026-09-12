> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4renderpassdescriptor/rendertargetwidth](https://developer.apple.com/documentation/metal/mtl4renderpassdescriptor/rendertargetwidth)

# renderTargetWidth (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the width, in pixels, to which Metal constrains the render target.

## Declaration

```swift
var renderTargetWidth: Int { get set }
```

<a id="discussion"></a>

## Discussion

When this value is non-zero, you need to assign it to be smaller than or equal to the minimum width of all attachments.

The default value of this property is `0`.

# renderTargetWidth (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the width, in pixels, to which Metal constrains the render target.

## Declaration

```objectivec
@property (nonatomic) NSUInteger renderTargetWidth;
```

<a id="discussion"></a>

## Discussion

When this value is non-zero, you need to assign it to be smaller than or equal to the minimum width of all attachments.

The default value of this property is `0`.
