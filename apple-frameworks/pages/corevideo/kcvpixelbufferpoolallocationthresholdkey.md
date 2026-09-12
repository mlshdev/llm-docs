> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/kcvpixelbufferpoolallocationthresholdkey](https://developer.apple.com/documentation/corevideo/kcvpixelbufferpoolallocationthresholdkey)

# kCVPixelBufferPoolAllocationThresholdKey (Swift)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The key that limits the number of pixel buffers the pool allocates.

## Declaration

```swift
let kCVPixelBufferPoolAllocationThresholdKey: CFString
```

<a id="Discussion"></a>

## Discussion

Include this key in the auxiliary attributes dictionary you pass to [CVPixelBufferPoolCreatePixelBufferWithAuxAttributes(\_:\_:\_:\_:)](cvpixelbufferpoolcreatepixelbufferwithauxattributes%28________%29.md).

The value for this key specifies that the system shouldn’t allocate a new pixel buffer if the pool already holds at least the specified number of allocated pixel buffers. This key doesn’t prevent the system from recycling allocated buffers. If this key causes [CVPixelBufferPoolCreatePixelBufferWithAuxAttributes(\_:\_:\_:\_:)](cvpixelbufferpoolcreatepixelbufferwithauxattributes%28________%29.md) to fail, it returns the [kCVReturnWouldExceedAllocationThreshold](kcvreturnwouldexceedallocationthreshold.md) result code.

## See Also

### Constants

- [kCVPixelBufferPoolMinimumBufferCountKey](kcvpixelbufferpoolminimumbuffercountkey.md): The key that sets the minimum number of pixel buffers in the pool.
- [kCVPixelBufferPoolMaximumBufferAgeKey](kcvpixelbufferpoolmaximumbufferagekey.md): The key that sets how long the pool keeps an unused buffer before it ages out.

# kCVPixelBufferPoolAllocationThresholdKey (Objective-C)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The key that limits the number of pixel buffers the pool allocates.

## Declaration

```objectivec
extern CFStringRef const kCVPixelBufferPoolAllocationThresholdKey;
```

<a id="Discussion"></a>

## Discussion

Include this key in the auxiliary attributes dictionary you pass to [CVPixelBufferPoolCreatePixelBufferWithAuxAttributes](cvpixelbufferpoolcreatepixelbufferwithauxattributes%28________%29.md).

The value for this key specifies that the system shouldn’t allocate a new pixel buffer if the pool already holds at least the specified number of allocated pixel buffers. This key doesn’t prevent the system from recycling allocated buffers. If this key causes [CVPixelBufferPoolCreatePixelBufferWithAuxAttributes](cvpixelbufferpoolcreatepixelbufferwithauxattributes%28________%29.md) to fail, it returns the [kCVReturnWouldExceedAllocationThreshold](kcvreturnwouldexceedallocationthreshold.md) result code.

## See Also

### Constants

- [kCVPixelBufferPoolMinimumBufferCountKey](kcvpixelbufferpoolminimumbuffercountkey.md): The key that sets the minimum number of pixel buffers in the pool.
- [kCVPixelBufferPoolMaximumBufferAgeKey](kcvpixelbufferpoolmaximumbufferagekey.md): The key that sets how long the pool keeps an unused buffer before it ages out.
