> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugincontext/colorspace()](https://developer.apple.com/documentation/quartz/qcplugincontext/colorspace())

# colorSpace() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the color space used by the rendering context.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func colorSpace() -> Unmanaged<CGColorSpace>!
```

<a id="return-value"></a>

## Return Value

An RGB color space; `NULL` if the custom patch execution mode is not consumer.

<a id="Discussion"></a>

## Discussion

If the method returns a color space, it must be an RGB color space.

## See Also

### Getting Execution Context Information

- [userInfo()](userinfo%28%29.md): Deprecated. Returns a mutable dictionary that contains information that can be shared between all instances of the `QCPlugIn` subclass, running in the same Quartz Composer context.
- [bounds()](bounds%28%29.md): Deprecated. Returns the bounds of the rendering context.

# colorSpace (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the color space used by the rendering context.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (CGColorSpaceRef) colorSpace;
```

<a id="return-value"></a>

## Return Value

An RGB color space; `NULL` if the custom patch execution mode is not consumer.

<a id="Discussion"></a>

## Discussion

If the method returns a color space, it must be an RGB color space.

## See Also

### Getting Execution Context Information

- [userInfo](userinfo%28%29.md): Deprecated. Returns a mutable dictionary that contains information that can be shared between all instances of the `QCPlugIn` subclass, running in the same Quartz Composer context.
- [bounds](bounds%28%29.md): Deprecated. Returns the bounds of the rendering context.
