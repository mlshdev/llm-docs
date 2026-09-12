> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbundleisexecutableloaded(_:)](https://developer.apple.com/documentation/corefoundation/cfbundleisexecutableloaded(_:))

# CFBundleIsExecutableLoaded(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Obtains information about the load status for a bundle’s main executable.

## Declaration

```swift
func CFBundleIsExecutableLoaded(_ bundle: CFBundle!) -> Bool
```

## Parameters

- `bundle`: The bundle to examine.

<a id="return-value"></a>

## Return Value

`true` if `bundle`’s main executable has been loaded, otherwise `false`.

## See Also

### Loading and Unloading a Bundle

- [CFBundlePreflightExecutable(\_:\_:)](cfbundlepreflightexecutable%28____%29.md): Returns a Boolean value that indicates whether a given bundle is loaded or appears to be loadable.
- [CFBundleLoadExecutable(\_:)](cfbundleloadexecutable%28__%29.md): Loads a bundle’s main executable code into memory and dynamically links it into the running application.
- [CFBundleLoadExecutableAndReturnError(\_:\_:)](cfbundleloadexecutableandreturnerror%28____%29.md): Returns a Boolean value that indicates whether a given bundle is loaded, attempting to load it if necessary.
- [CFBundleUnloadExecutable(\_:)](cfbundleunloadexecutable%28__%29.md): Unloads the main executable for the specified bundle.

# CFBundleIsExecutableLoaded (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Obtains information about the load status for a bundle’s main executable.

## Declaration

```objectivec
extern Boolean CFBundleIsExecutableLoaded(CFBundleRef bundle);
```

## Parameters

- `bundle`: The bundle to examine.

<a id="return-value"></a>

## Return Value

`true` if `bundle`’s main executable has been loaded, otherwise `false`.

## See Also

### Loading and Unloading a Bundle

- [CFBundlePreflightExecutable](cfbundlepreflightexecutable%28____%29.md): Returns a Boolean value that indicates whether a given bundle is loaded or appears to be loadable.
- [CFBundleLoadExecutable](cfbundleloadexecutable%28__%29.md): Loads a bundle’s main executable code into memory and dynamically links it into the running application.
- [CFBundleLoadExecutableAndReturnError](cfbundleloadexecutableandreturnerror%28____%29.md): Returns a Boolean value that indicates whether a given bundle is loaded, attempting to load it if necessary.
- [CFBundleUnloadExecutable](cfbundleunloadexecutable%28__%29.md): Unloads the main executable for the specified bundle.
