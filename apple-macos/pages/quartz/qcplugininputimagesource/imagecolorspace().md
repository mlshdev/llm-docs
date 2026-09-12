> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugininputimagesource/imagecolorspace()](https://developer.apple.com/documentation/quartz/qcplugininputimagesource/imagecolorspace())

# imageColorSpace() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the color space of the image source.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func imageColorSpace() -> Unmanaged<CGColorSpace>!
```

<a id="return-value"></a>

## Return Value

The color space of the image source, typically RGB or Gray type.

## See Also

### Getting Color Space Information

- [shouldColorMatch()](shouldcolormatch%28%29.md): Deprecated. Returns whether or not the image source should be color matched.

# imageColorSpace (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the color space of the image source.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (CGColorSpaceRef) imageColorSpace;
```

<a id="return-value"></a>

## Return Value

The color space of the image source, typically RGB or Gray type.

## See Also

### Getting Color Space Information

- [shouldColorMatch](shouldcolormatch%28%29.md): Deprecated. Returns whether or not the image source should be color matched.
