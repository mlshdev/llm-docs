> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/kcvpixelbufferpoolmaximumbufferagekey](https://developer.apple.com/documentation/corevideo/kcvpixelbufferpoolmaximumbufferagekey)

# kCVPixelBufferPoolMaximumBufferAgeKey (Swift)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The key that sets how long the pool keeps an unused buffer before it ages out.

## Declaration

```swift
let kCVPixelBufferPoolMaximumBufferAgeKey: CFString
```

<a id="Discussion"></a>

## Discussion

Include this key in the pool attributes dictionary you pass to [CVPixelBufferPoolCreate(\_:\_:\_:\_:)](cvpixelbufferpoolcreate%28________%29.md).

By default, buffers age out after one second. Set an age of zero to turn off the age-out mechanism.

## See Also

### Constants

- [kCVPixelBufferPoolMinimumBufferCountKey](kcvpixelbufferpoolminimumbuffercountkey.md): The key that sets the minimum number of pixel buffers in the pool.
- [kCVPixelBufferPoolAllocationThresholdKey](kcvpixelbufferpoolallocationthresholdkey.md): The key that limits the number of pixel buffers the pool allocates.

# kCVPixelBufferPoolMaximumBufferAgeKey (Objective-C)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The key that sets how long the pool keeps an unused buffer before it ages out.

## Declaration

```objectivec
extern CFStringRef const kCVPixelBufferPoolMaximumBufferAgeKey;
```

<a id="Discussion"></a>

## Discussion

Include this key in the pool attributes dictionary you pass to [CVPixelBufferPoolCreate](cvpixelbufferpoolcreate%28________%29.md).

By default, buffers age out after one second. Set an age of zero to turn off the age-out mechanism.

## See Also

### Constants

- [kCVPixelBufferPoolMinimumBufferCountKey](kcvpixelbufferpoolminimumbuffercountkey.md): The key that sets the minimum number of pixel buffers in the pool.
- [kCVPixelBufferPoolAllocationThresholdKey](kcvpixelbufferpoolallocationthresholdkey.md): The key that limits the number of pixel buffers the pool allocates.
