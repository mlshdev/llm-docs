> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qccompositionrenderer/userinfo()](https://developer.apple.com/documentation/quartz/qccompositionrenderer/userinfo())

# userInfo() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns a mutable dictionary for storing arbitrary information.

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

The `userInfo` dictionary is shared—there is one per Quartz Composer context. In fact, it is the same dictionary as the one available for the plug-in execution context for instances of the [QCPlugIn](../qcplugin.md) class.

When you add information to the dictionary, make sure that you use unique keys, such as `“com.myCompany.foo”`.

# userInfo (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns a mutable dictionary for storing arbitrary information.

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

The `userInfo` dictionary is shared—there is one per Quartz Composer context. In fact, it is the same dictionary as the one available for the plug-in execution context for instances of the [QCPlugIn](../qcplugin.md) class.

When you add information to the dictionary, make sure that you use unique keys, such as `“com.myCompany.foo”`.
