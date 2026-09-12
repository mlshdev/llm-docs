> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugin/pluginkeys()](https://developer.apple.com/documentation/quartz/qcplugin/pluginkeys())

# plugInKeys() (Swift)

**Framework:** Quartz  
**Kind:** Type Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the keys for the internal settings of a custom patch.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
class func plugInKeys() -> [Any]!
```

<a id="return-value"></a>

## Return Value

An array of keys used for key-value coding (KVC) of the internal settings.

<a id="Discussion"></a>

## Discussion

You must override this method if your patch provides a Settings pane.  This keys are used for automatic serialization of the internal settings and are also used by the [QCPlugInViewController](../qcpluginviewcontroller.md) instance for the Settings pane. The implementation is straightforward; the keys are strings that represent the instance variables used for the Settings pane. For example, the `plugInKeys` method for these instance variables:

```objc
@property(ivar, byref) NSColor * systemColor;
@property(ivar, byref) NSConfiguration * systemConfiguration;
```

are:

```objc
+ (NSArray*) plugInKeys
{
    return [NSArray arrayWithObjects: @"systemColor",
                                      @"systemConfiguration",
                                      nil];
}
```

## See Also

### Defining Internal Settings

- [createViewController()](createviewcontroller%28%29.md): Deprecated. Creates and returns a view controller for the Settings pane of a custom patch.

# plugInKeys (Objective-C)

**Framework:** Quartz  
**Kind:** Type Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the keys for the internal settings of a custom patch.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
+ (NSArray *) plugInKeys;
```

<a id="return-value"></a>

## Return Value

An array of keys used for key-value coding (KVC) of the internal settings.

<a id="Discussion"></a>

## Discussion

You must override this method if your patch provides a Settings pane.  This keys are used for automatic serialization of the internal settings and are also used by the [QCPlugInViewController](../qcpluginviewcontroller.md) instance for the Settings pane. The implementation is straightforward; the keys are strings that represent the instance variables used for the Settings pane. For example, the `plugInKeys` method for these instance variables:

```objc
@property(ivar, byref) NSColor * systemColor;
@property(ivar, byref) NSConfiguration * systemConfiguration;
```

are:

```objc
+ (NSArray*) plugInKeys
{
    return [NSArray arrayWithObjects: @"systemColor",
                                      @"systemConfiguration",
                                      nil];
}
```

## See Also

### Defining Internal Settings

- [createViewController](createviewcontroller%28%29.md): Deprecated. Creates and returns a view controller for the Settings pane of a custom patch.
