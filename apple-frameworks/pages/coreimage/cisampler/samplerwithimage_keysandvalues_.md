> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cisampler/samplerwithimage:keysandvalues:](https://developer.apple.com/documentation/coreimage/cisampler/samplerwithimage:keysandvalues:)

# samplerWithImage:keysAndValues:

**Interface language:** Objective-C

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns a sampler that references an image using options specified as key-value pairs.

## Declaration

```objectivec
+ (instancetype) samplerWithImage:(CIImage *) im keysAndValues:(id) key0;
```

## Parameters

- `im`: The image that you want the sampler to reference.
- `key0`: A list of key-value pairs that represent options.  Each key needs to be followed by that appropriate value. You can supply one or more key-value pairs. Use `nil` to specify the end of the key-value options. See [Sampler Option Keys](../sampler-option-keys.md).

<a id="return-value"></a>

## Return Value

A sampler that references the image specified by the `im` argument and uses the specified options.

## See Also

### Creating a Sampler

- [samplerWithImage:](samplerwithimage_.md): Creates and returns a sampler that references an image.
- [samplerWithImage:options:](samplerwithimage_options_.md): Creates and returns a sampler that references an image using options specified in a dictionary.
