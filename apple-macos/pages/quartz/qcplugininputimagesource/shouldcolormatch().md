> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugininputimagesource/shouldcolormatch()](https://developer.apple.com/documentation/quartz/qcplugininputimagesource/shouldcolormatch())

# shouldColorMatch() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns whether or not the image source should be color matched.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func shouldColorMatch() -> Bool
```

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) if the source is a mask or gradient; [true](https://developer.apple.com/documentation/swift/true) otherwise.

## See Also

### Getting Color Space Information

- [imageColorSpace()](imagecolorspace%28%29.md): Deprecated. Returns the color space of the image source.

# shouldColorMatch (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns whether or not the image source should be color matched.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (BOOL) shouldColorMatch;
```

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) if the source is a mask or gradient; [true](https://developer.apple.com/documentation/swift/true) otherwise.

## See Also

### Getting Color Space Information

- [imageColorSpace](imagecolorspace%28%29.md): Deprecated. Returns the color space of the image source.
