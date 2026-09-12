> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/kcvreturnretry](https://developer.apple.com/documentation/corevideo/kcvreturnretry)

# kCVReturnRetry (Swift)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A scan hasn’t completely traversed the `CVBufferPool` due to a concurrent operation.

## Declaration

```swift
var kCVReturnRetry: CVReturn { get }
```

<a id="Discussion"></a>

## Discussion

A result of `kCVReturnRetry` indicates that a client can retry the scan.

## See Also

### Buffer Pool

- [kCVReturnInvalidPoolAttributes](kcvreturninvalidpoolattributes.md): A buffer pool cannot be created with the specified attributes.
- [kCVReturnPoolAllocationFailed](kcvreturnpoolallocationfailed.md): Allocation for a buffer pool failed, most likely due to a lack of resources. Check to make sure your parameters are in range.
- [kCVReturnWouldExceedAllocationThreshold](kcvreturnwouldexceedallocationthreshold.md): Allocation for a pixel buffer failed because the threshold value set for the [kCVPixelBufferPoolAllocationThresholdKey](kcvpixelbufferpoolallocationthresholdkey.md) key in the [CVPixelBufferPoolCreatePixelBufferWithAuxAttributes(\_:\_:\_:\_:)](cvpixelbufferpoolcreatepixelbufferwithauxattributes%28________%29.md) function would be surpassed.

# kCVReturnRetry (Objective-C)

**Framework:** Core Video  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A scan hasn’t completely traversed the `CVBufferPool` due to a concurrent operation.

## Declaration

```objectivec
kCVReturnRetry
```

<a id="Discussion"></a>

## Discussion

A result of `kCVReturnRetry` indicates that a client can retry the scan.

## See Also

### Buffer Pool

- [kCVReturnInvalidPoolAttributes](kcvreturninvalidpoolattributes.md): A buffer pool cannot be created with the specified attributes.
- [kCVReturnPoolAllocationFailed](kcvreturnpoolallocationfailed.md): Allocation for a buffer pool failed, most likely due to a lack of resources. Check to make sure your parameters are in range.
- [kCVReturnWouldExceedAllocationThreshold](kcvreturnwouldexceedallocationthreshold.md): Allocation for a pixel buffer failed because the threshold value set for the [kCVPixelBufferPoolAllocationThresholdKey](kcvpixelbufferpoolallocationthresholdkey.md) key in the [CVPixelBufferPoolCreatePixelBufferWithAuxAttributes](cvpixelbufferpoolcreatepixelbufferwithauxattributes%28________%29.md) function would be surpassed.
