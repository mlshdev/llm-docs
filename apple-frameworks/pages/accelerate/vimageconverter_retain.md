> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconverter_retain](https://developer.apple.com/documentation/accelerate/vimageconverter_retain)

# vImageConverter_Retain

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Retains a vImage converter.

## Declaration

```objectivec
void vImageConverter_Retain(vImageConverterRef converter);
```

<a id="Discussion"></a>

## Discussion

Retain a [vImageConverterRef](vimageconverter.md) instance when you receive it from elsewhere (that is, you didn’t create or copy it) and you want it to persist. If you retain a [vImageConverterRef](vimageconverter.md) instance you’re responsible for releasing it (see [Memory Management Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/CFMemoryMgmt.html#//apple_ref/doc/uid/10000127i)).

## See Also

### Memory management

- [vImageConverter_Release](vimageconverter_release.md): Releases a vImage converter.
