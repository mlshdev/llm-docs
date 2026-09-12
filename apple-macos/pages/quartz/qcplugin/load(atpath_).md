> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugin/load(atpath:)](https://developer.apple.com/documentation/quartz/qcplugin/load(atpath:))

# load(atPath:) (Swift)

**Framework:** Quartz  
**Kind:** Type Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Loads a Quartz Composer plug-in bundle from the specified path.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
class func load(atPath path: String!) -> Bool
```

## Parameters

- `path`: The location of the bundle.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful.

<a id="Discussion"></a>

## Discussion

Call this method only if you need to load a plug-in bundle from a nonstandard location. Typically you don’t need to call this method because Quartz Composer automatically loads bundles that you install  in one of the following locations:

- `/Library/Graphics/Quartz Composer Plug-Ins`
- `~/Library/Graphics/Quartz Composer Plug-Ins`

This method does nothing if the bundle is already loaded. (This method does not load in all environments. Web Kit, for example, cannot load custom patches.)

The bundle can contain more than one `QCPlugIn` subclass. After the bundle is loaded, each `QCPlugIn` subclass appears as a patch in the Quartz Composer patch library.

## See Also

### Loading Bundle and Custom Patches Manually

- [registerClass(\_:)](registerclass%28__%29.md): Deprecated. Registers a `QCPlugIn` subclass.

# loadPlugInAtPath: (Objective-C)

**Framework:** Quartz  
**Kind:** Type Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Loads a Quartz Composer plug-in bundle from the specified path.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
+ (BOOL) loadPlugInAtPath:(NSString *) path;
```

## Parameters

- `path`: The location of the bundle.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful.

<a id="Discussion"></a>

## Discussion

Call this method only if you need to load a plug-in bundle from a nonstandard location. Typically you don’t need to call this method because Quartz Composer automatically loads bundles that you install  in one of the following locations:

- `/Library/Graphics/Quartz Composer Plug-Ins`
- `~/Library/Graphics/Quartz Composer Plug-Ins`

This method does nothing if the bundle is already loaded. (This method does not load in all environments. Web Kit, for example, cannot load custom patches.)

The bundle can contain more than one `QCPlugIn` subclass. After the bundle is loaded, each `QCPlugIn` subclass appears as a patch in the Quartz Composer patch library.

## See Also

### Loading Bundle and Custom Patches Manually

- [registerPlugInClass:](registerclass%28__%29.md): Deprecated. Registers a `QCPlugIn` subclass.
