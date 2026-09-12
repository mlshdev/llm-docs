> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1573755-aebuildparameters](https://developer.apple.com/documentation/coreservices/1573755-aebuildparameters)

# AEBuildParameters

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Adds additional parameters or attributes to an existing Apple event.

## Declaration

```objectivec
OSStatus AEBuildParameters(AppleEvent *event, AEBuildError *error, const char *format, ...);
```

## Parameters

- `event`: The Apple event to which you are adding parameters. See [AppleEvent](appleevent.md).
- `error`: A pointer to an `AEBuildError` structure where additional information about any errors that occur will be saved. This is an optional parameter and you can pass `NULL` if this information is not required. See [AEBuildError](aebuilderror.md).
- `format`: An `AEBuild` format string describing the parameters to be created.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

This function can be called more than once to add any desired number of parameters or attributes to an existing Apple event. The Apple event should already have been created through either a call to [AECreateAppleEvent](1448525-aecreateappleevent.md) or [AEBuildAppleEvent](1573757-aebuildappleevent.md).

This function and related “AEBuild” routines provide a very simple translation service for converting specially formatted strings into complex Apple event descriptors. Normally, creating complex Apple event descriptors requires a large number of calls to Apple event Manager routines to build up the descriptor piece by piece. The `AEBuildDesc` function and related routines allow you to consolidate all of the calls required to construct a complex Apple event descriptor into a single system call that creates the desired structure as directed by a format string that you provide.

For additional information on using the AEBuild routines, see the descriptions for [AEBuildAppleEvent](1573757-aebuildappleevent.md) and [AEBuildDesc](1573758-aebuilddesc.md).

## See Also

### Creating Apple Event Structures in Memory

- [AEBuildAppleEvent](1573757-aebuildappleevent.md): Constructs an entire Apple event in a single call.
- [AEBuildDesc](1573758-aebuilddesc.md): Provides a facility for compiling AEBuild descriptor strings into Apple event descriptors (`AEDesc`).
- [AEPrintDescToHandle](1445158-aeprintdesctohandle.md): Provides a pretty printer facility for displaying the contents of Apple event descriptors.
- [vAEBuildAppleEvent](1441729-vaebuildappleevent.md): Allows you to encapsulate calls to `AEBuildAppleEvent` in a wrapper routine.
- [vAEBuildDesc](1446775-vaebuilddesc.md): Allows you to encapsulate calls to `AEBuildDesc` in your own wrapper routines.
- [vAEBuildParameters](1448040-vaebuildparameters.md): Allows you to encapsulate calls to `AEBuildParameters` in your own `stdarg`-style wrapper routines, using techniques similar to those allowed by vsprintf.
