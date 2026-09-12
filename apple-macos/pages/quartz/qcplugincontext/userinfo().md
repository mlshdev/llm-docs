> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugincontext/userinfo()](https://developer.apple.com/documentation/quartz/qcplugincontext/userinfo())

# userInfo() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns a mutable dictionary that contains information that can be shared between all instances of the `QCPlugIn` subclass, running in the same Quartz Composer context.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func userInfo() -> NSMutableDictionary!
```

<a id="return-value"></a>

## Return Value

A mutable dictionary.

<a id="Discussion"></a>

## Discussion

When you add information to the dictionary, make sure that you use unique keys, such as `com.myCompany.foo`. You can use this dictionary to cache data that you want to share.

## See Also

### Getting Execution Context Information

- [bounds()](bounds%28%29.md): Deprecated. Returns the bounds of the rendering context.
- [colorSpace()](colorspace%28%29.md): Deprecated. Returns the color space used by the rendering context.

# userInfo (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns a mutable dictionary that contains information that can be shared between all instances of the `QCPlugIn` subclass, running in the same Quartz Composer context.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (NSMutableDictionary *) userInfo;
```

<a id="return-value"></a>

## Return Value

A mutable dictionary.

<a id="Discussion"></a>

## Discussion

When you add information to the dictionary, make sure that you use unique keys, such as `com.myCompany.foo`. You can use this dictionary to cache data that you want to share.

## See Also

### Getting Execution Context Information

- [bounds](bounds%28%29.md): Deprecated. Returns the bounds of the rendering context.
- [colorSpace](colorspace%28%29.md): Deprecated. Returns the color space used by the rendering context.
