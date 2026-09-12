> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cisampler/samplerwithimage:](https://developer.apple.com/documentation/coreimage/cisampler/samplerwithimage:)

# samplerWithImage:

**Interface language:** Objective-C

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns a sampler that references an image.

## Declaration

```objectivec
+ (instancetype) samplerWithImage:(CIImage *) im;
```

## Parameters

- `im`: The image that you want the sampler to reference.

<a id="return-value"></a>

## Return Value

A sampler object that references the image specified by the `im` argument.

## See Also

### Related Documentation

- [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185)

### Creating a Sampler

- [samplerWithImage:keysAndValues:](samplerwithimage_keysandvalues_.md): Creates and returns a sampler that references an image using options specified as key-value pairs.
- [samplerWithImage:options:](samplerwithimage_options_.md): Creates and returns a sampler that references an image using options specified in a dictionary.
