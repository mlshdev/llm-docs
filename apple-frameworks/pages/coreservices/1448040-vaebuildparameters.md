> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1448040-vaebuildparameters](https://developer.apple.com/documentation/coreservices/1448040-vaebuildparameters)

# vAEBuildParameters(\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Allows you to encapsulate calls to `AEBuildParameters` in your own `stdarg`-style wrapper routines, using techniques similar to those allowed by vsprintf.

## Declaration

```swift
func vAEBuildParameters(_ event: UnsafeMutablePointer<AppleEvent>!, _ error: UnsafeMutablePointer<AEBuildError>!, _ format: UnsafePointer<CChar>!, _ args: CVaListPointer) -> OSStatus
```

## Parameters

- `event`: The Apple event to which you are adding parameters. See [AppleEvent](appleevent.md).
- `error`: A pointer to an `AEBuildError` structure where additional information about any errors that occur will be saved. This is an optional parameter and you can pass `NULL` if this information is not required. See [AEBuildError](aebuilderror.md).
- `format`: An `AEBuild` format string describing the `AEDesc` parameters to be created.
- `args`: A reference to a previously defined, variable argument parameter list to use with the descriptor-string. The file `<stdarg.h>` defines macros for declaring and using the `va_list` data type.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

Passing an argument list to `vAEBuildParameters` corresponds to passing a series of individual parameters to the [AEBuildParameters](1573755-aebuildparameters.md) function.

This function and related “AEBuild” routines provide a very simple translation service for converting specially formatted strings into complex Apple event descriptors. Normally, creating complex Apple event descriptors requires a large number of calls to Apple event Manager routines to build up the descriptor piece by piece. The `vAEBuildParameters` function and related routines allow you to consolidate all of the calls required to construct a complex Apple event descriptor into a single system call that creates the desired structure as directed by a format string that you provide.

## See Also

### Creating Apple Event Structures in Memory

- [AEPrintDescToHandle(\_:\_:)](1445158-aeprintdesctohandle.md): Provides a pretty printer facility for displaying the contents of Apple event descriptors.
- [vAEBuildAppleEvent(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](1441729-vaebuildappleevent.md): Allows you to encapsulate calls to `AEBuildAppleEvent` in a wrapper routine.
- [vAEBuildDesc(\_:\_:\_:\_:)](1446775-vaebuilddesc.md): Allows you to encapsulate calls to `AEBuildDesc` in your own wrapper routines.

# vAEBuildParameters (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Allows you to encapsulate calls to `AEBuildParameters` in your own `stdarg`-style wrapper routines, using techniques similar to those allowed by vsprintf.

## Declaration

```objectivec
OSStatus vAEBuildParameters(AppleEvent *event, AEBuildError *error, const char *format, va_list args);
```

## Parameters

- `event`: The Apple event to which you are adding parameters. See [AppleEvent](appleevent.md).
- `error`: A pointer to an `AEBuildError` structure where additional information about any errors that occur will be saved. This is an optional parameter and you can pass `NULL` if this information is not required. See [AEBuildError](aebuilderror.md).
- `format`: An `AEBuild` format string describing the `AEDesc` parameters to be created.
- `args`: A reference to a previously defined, variable argument parameter list to use with the descriptor-string. The file `<stdarg.h>` defines macros for declaring and using the `va_list` data type.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

Passing an argument list to `vAEBuildParameters` corresponds to passing a series of individual parameters to the [AEBuildParameters](1573755-aebuildparameters.md) function.

This function and related “AEBuild” routines provide a very simple translation service for converting specially formatted strings into complex Apple event descriptors. Normally, creating complex Apple event descriptors requires a large number of calls to Apple event Manager routines to build up the descriptor piece by piece. The `vAEBuildParameters` function and related routines allow you to consolidate all of the calls required to construct a complex Apple event descriptor into a single system call that creates the desired structure as directed by a format string that you provide.

## See Also

### Creating Apple Event Structures in Memory

- [AEBuildAppleEvent](1573757-aebuildappleevent.md): Constructs an entire Apple event in a single call.
- [AEBuildDesc](1573758-aebuilddesc.md): Provides a facility for compiling AEBuild descriptor strings into Apple event descriptors (`AEDesc`).
- [AEBuildParameters](1573755-aebuildparameters.md): Adds additional parameters or attributes to an existing Apple event.
- [AEPrintDescToHandle](1445158-aeprintdesctohandle.md): Provides a pretty printer facility for displaying the contents of Apple event descriptors.
- [vAEBuildAppleEvent](1441729-vaebuildappleevent.md): Allows you to encapsulate calls to `AEBuildAppleEvent` in a wrapper routine.
- [vAEBuildDesc](1446775-vaebuilddesc.md): Allows you to encapsulate calls to `AEBuildDesc` in your own wrapper routines.
