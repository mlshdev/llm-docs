> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbundleloadexecutable(_:)](https://developer.apple.com/documentation/corefoundation/cfbundleloadexecutable(_:))

# CFBundleLoadExecutable(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Loads a bundle’s main executable code into memory and dynamically links it into the running application.

## Declaration

```swift
func CFBundleLoadExecutable(_ bundle: CFBundle!) -> Bool
```

## Parameters

- `bundle`: The bundle whose main executable you want to load.

<a id="return-value"></a>

## Return Value

`true` if the executable was successfully loaded, otherwise `false`.

<a id="Discussion"></a>

## Discussion

You should typically try to avoid using this function, but instead use [CFBundleGetFunctionPointerForName(\_:\_:)](cfbundlegetfunctionpointerforname%28____%29.md) and related functions since these make memory management of the bundle easier.

## See Also

### Loading and Unloading a Bundle

- [CFBundleIsExecutableLoaded(\_:)](cfbundleisexecutableloaded%28__%29.md): Obtains information about the load status for a bundle’s main executable.
- [CFBundlePreflightExecutable(\_:\_:)](cfbundlepreflightexecutable%28____%29.md): Returns a Boolean value that indicates whether a given bundle is loaded or appears to be loadable.
- [CFBundleLoadExecutableAndReturnError(\_:\_:)](cfbundleloadexecutableandreturnerror%28____%29.md): Returns a Boolean value that indicates whether a given bundle is loaded, attempting to load it if necessary.
- [CFBundleUnloadExecutable(\_:)](cfbundleunloadexecutable%28__%29.md): Unloads the main executable for the specified bundle.

# CFBundleLoadExecutable (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Loads a bundle’s main executable code into memory and dynamically links it into the running application.

## Declaration

```objectivec
extern Boolean CFBundleLoadExecutable(CFBundleRef bundle);
```

## Parameters

- `bundle`: The bundle whose main executable you want to load.

<a id="return-value"></a>

## Return Value

`true` if the executable was successfully loaded, otherwise `false`.

<a id="Discussion"></a>

## Discussion

You should typically try to avoid using this function, but instead use [CFBundleGetFunctionPointerForName](cfbundlegetfunctionpointerforname%28____%29.md) and related functions since these make memory management of the bundle easier.

## See Also

### Loading and Unloading a Bundle

- [CFBundleIsExecutableLoaded](cfbundleisexecutableloaded%28__%29.md): Obtains information about the load status for a bundle’s main executable.
- [CFBundlePreflightExecutable](cfbundlepreflightexecutable%28____%29.md): Returns a Boolean value that indicates whether a given bundle is loaded or appears to be loadable.
- [CFBundleLoadExecutableAndReturnError](cfbundleloadexecutableandreturnerror%28____%29.md): Returns a Boolean value that indicates whether a given bundle is loaded, attempting to load it if necessary.
- [CFBundleUnloadExecutable](cfbundleunloadexecutable%28__%29.md): Unloads the main executable for the specified bundle.
