> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbundlepreflightexecutable(_:_:)](https://developer.apple.com/documentation/corefoundation/cfbundlepreflightexecutable(_:_:))

# CFBundlePreflightExecutable(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether a given bundle is loaded or appears to be loadable.

## Declaration

```swift
func CFBundlePreflightExecutable(_ bundle: CFBundle!, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>!) -> Bool
```

## Parameters

- `bundle`: The bundle to examine.
- `error`: Upon return, if an error occurs contains a CFError that describes the problem. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="return-value"></a>

## Return Value

`true` if `bundle` is loaded or upon inspection appears to be loadable, otherwise `false`.

<a id="Discussion"></a>

## Discussion

If this function returns true, this does not mean that the bundle is definitively loadable, since it may fail to load due to link errors or other problems not readily detectable.

## See Also

### Loading and Unloading a Bundle

- [CFBundleIsExecutableLoaded(\_:)](cfbundleisexecutableloaded%28__%29.md): Obtains information about the load status for a bundle’s main executable.
- [CFBundleLoadExecutable(\_:)](cfbundleloadexecutable%28__%29.md): Loads a bundle’s main executable code into memory and dynamically links it into the running application.
- [CFBundleLoadExecutableAndReturnError(\_:\_:)](cfbundleloadexecutableandreturnerror%28____%29.md): Returns a Boolean value that indicates whether a given bundle is loaded, attempting to load it if necessary.
- [CFBundleUnloadExecutable(\_:)](cfbundleunloadexecutable%28__%29.md): Unloads the main executable for the specified bundle.

# CFBundlePreflightExecutable (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether a given bundle is loaded or appears to be loadable.

## Declaration

```objectivec
extern Boolean CFBundlePreflightExecutable(CFBundleRef bundle, CFErrorRef*error);
```

## Parameters

- `bundle`: The bundle to examine.
- `error`: Upon return, if an error occurs contains a CFError that describes the problem. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="return-value"></a>

## Return Value

`true` if `bundle` is loaded or upon inspection appears to be loadable, otherwise `false`.

<a id="Discussion"></a>

## Discussion

If this function returns true, this does not mean that the bundle is definitively loadable, since it may fail to load due to link errors or other problems not readily detectable.

## See Also

### Loading and Unloading a Bundle

- [CFBundleIsExecutableLoaded](cfbundleisexecutableloaded%28__%29.md): Obtains information about the load status for a bundle’s main executable.
- [CFBundleLoadExecutable](cfbundleloadexecutable%28__%29.md): Loads a bundle’s main executable code into memory and dynamically links it into the running application.
- [CFBundleLoadExecutableAndReturnError](cfbundleloadexecutableandreturnerror%28____%29.md): Returns a Boolean value that indicates whether a given bundle is loaded, attempting to load it if necessary.
- [CFBundleUnloadExecutable](cfbundleunloadexecutable%28__%29.md): Unloads the main executable for the specified bundle.
