> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugincontext/bounds()](https://developer.apple.com/documentation/quartz/qcplugincontext/bounds())

# bounds() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the bounds of the rendering context.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func bounds() -> NSRect
```

<a id="return-value"></a>

## Return Value

The bounds of the rendering context expressed in Quartz Composer units.

## See Also

### Getting Execution Context Information

- [userInfo()](userinfo%28%29.md): Deprecated. Returns a mutable dictionary that contains information that can be shared between all instances of the `QCPlugIn` subclass, running in the same Quartz Composer context.
- [colorSpace()](colorspace%28%29.md): Deprecated. Returns the color space used by the rendering context.

# bounds (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the bounds of the rendering context.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (NSRect) bounds;
```

<a id="return-value"></a>

## Return Value

The bounds of the rendering context expressed in Quartz Composer units.

## See Also

### Getting Execution Context Information

- [userInfo](userinfo%28%29.md): Deprecated. Returns a mutable dictionary that contains information that can be shared between all instances of the `QCPlugIn` subclass, running in the same Quartz Composer context.
- [colorSpace](colorspace%28%29.md): Deprecated. Returns the color space used by the rendering context.
