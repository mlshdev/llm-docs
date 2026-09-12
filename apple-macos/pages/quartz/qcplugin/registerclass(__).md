> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugin/registerclass(_:)](https://developer.apple.com/documentation/quartz/qcplugin/registerclass(_:))

# registerClass(\_:) (Swift)

**Framework:** Quartz  
**Kind:** Type Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Registers a `QCPlugIn` subclass.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
class func registerClass(_ aClass: AnyClass!)
```

## Parameters

- `aClass`: The `QCPlugIn` subclass.

<a id="Discussion"></a>

## Discussion

You call this method only if the code for your custom patch is mixed with your application code, and you plan only to use the custom patch from within  your application.

## See Also

### Loading Bundle and Custom Patches Manually

- [load(atPath:)](load%28atpath_%29.md): Deprecated. Loads a Quartz Composer plug-in bundle from the specified path.

# registerPlugInClass: (Objective-C)

**Framework:** Quartz  
**Kind:** Type Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Registers a `QCPlugIn` subclass.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
+ (void) registerPlugInClass:(Class) aClass;
```

## Parameters

- `aClass`: The `QCPlugIn` subclass.

<a id="Discussion"></a>

## Discussion

You call this method only if the code for your custom patch is mixed with your application code, and you plan only to use the custom patch from within  your application.

## See Also

### Loading Bundle and Custom Patches Manually

- [loadPlugInAtPath:](load%28atpath_%29.md): Deprecated. Loads a Quartz Composer plug-in bundle from the specified path.
