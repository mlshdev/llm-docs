> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1573758-aebuilddesc](https://developer.apple.com/documentation/coreservices/1573758-aebuilddesc)

# AEBuildDesc

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Provides a facility for compiling AEBuild descriptor strings into Apple event descriptors (`AEDesc`).

## Declaration

```objectivec
OSStatus AEBuildDesc(AEDesc *dst, AEBuildError *error, const char *src, ...);
```

## Parameters

- `dst`: A pointer to a descriptor where the resulting descriptor should be stored. See [AEDesc](aedesc.md).
- `error`: A pointer to an `AEBuildError` structure where additional information about any errors that occur will be saved. This is an optional parameter and you can pass `NULL` if this information is not required. See [AEBuildError](aebuilderror.md).
- `src`: An `AEBuild` format string describing the descriptor to be created.

<a id="return_value"></a>

## Return Value

A numeric result code indicating the success of the call. A value of `AEBuildSyntaxNoErr` (zero) means the call succeeded. You can use the `error` parameter to discover information about other errors. See also [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

This function and related “AEBuild” routines provide a very simple translation service for converting specially formatted strings into complex Apple event descriptors. Normally, creating complex Apple event descriptors requires a large number of calls to Apple event Manager routines to build up the descriptor piece by piece. The `AEBuildDesc` function and related routines allow you to consolidate all of the calls required to construct a complex Apple event descriptor into a single system call that creates the desired structure as directed by a format string that you provide.

For additional information on using the AEBuild routines, see the descriptions for [AEBuildAppleEvent](1573757-aebuildappleevent.md) and [AEBuildParameters](1573755-aebuildparameters.md).

<a id="1770217"></a>

### Version-Notes

Prior to OS X version 10.3, `AEBuildDesc` would fail if you supplied a data parameter with size greater than 32767 bytes.

## See Also

### Creating Apple Event Structures in Memory

- [AEBuildAppleEvent](1573757-aebuildappleevent.md): Constructs an entire Apple event in a single call.
- [AEBuildParameters](1573755-aebuildparameters.md): Adds additional parameters or attributes to an existing Apple event.
- [AEPrintDescToHandle](1445158-aeprintdesctohandle.md): Provides a pretty printer facility for displaying the contents of Apple event descriptors.
- [vAEBuildAppleEvent](1441729-vaebuildappleevent.md): Allows you to encapsulate calls to `AEBuildAppleEvent` in a wrapper routine.
- [vAEBuildDesc](1446775-vaebuilddesc.md): Allows you to encapsulate calls to `AEBuildDesc` in your own wrapper routines.
- [vAEBuildParameters](1448040-vaebuildparameters.md): Allows you to encapsulate calls to `AEBuildParameters` in your own `stdarg`-style wrapper routines, using techniques similar to those allowed by vsprintf.
