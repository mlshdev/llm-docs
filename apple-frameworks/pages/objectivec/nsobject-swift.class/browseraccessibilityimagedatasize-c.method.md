> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/browseraccessibilityimagedatasize-c.method](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/browseraccessibilityimagedatasize-c.method)

# browserAccessibilityImageDataSize

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```objectivec
- (NSValue *) browserAccessibilityImageDataSize;
```

<a id="return-value"></a>

## Return Value

An NSValue wrapping a CGSize, or nil if this element does not represent an image.

<a id="discussion"></a>

## Discussion

Returns the native pixel dimensions of the image represented by this element.
