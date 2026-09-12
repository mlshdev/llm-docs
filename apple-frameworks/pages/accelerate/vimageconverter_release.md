> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconverter_release](https://developer.apple.com/documentation/accelerate/vimageconverter_release)

# vImageConverter_Release

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Releases a vImage converter.

## Declaration

```objectivec
void vImageConverter_Release(vImageConverterRef converter);
```

<a id="Discussion"></a>

## Discussion

If you create or explicitly retain (see [vImageConverter_Retain](vimageconverter_retain.md)) a [vImageConverterRef](vimageconverter.md) instance, you’re responsible for releasing it when you no longer need it (see [Memory Management Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/CFMemoryMgmt.html#//apple_ref/doc/uid/10000127i)).

## See Also

### Memory management

- [vImageConverter_Retain](vimageconverter_retain.md): Retains a vImage converter.
