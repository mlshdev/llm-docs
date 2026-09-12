> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioworkloop/action](https://developer.apple.com/documentation/kernel/ioworkloop/action)

# Action

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
typedef IOReturn ( *Action)(
   OSObject *target,
   void *arg0,
   void *arg1,
   void *arg2,
   void *arg3);
```

## Parameters

- `target`: Target of the function, can be used as a refcon. Note if a C++ function was specified, this parameter is implicitly the first parameter in the target member function's parameter list.
- `arg0`: Argument to action from run operation.
- `arg1`: Argument to action from run operation.
- `arg2`: Argument to action from run operation.
- `arg3`: Argument to action from run operation.

<a id="overview"></a>

## Overview

Type and arguments of callout C function that is used when a runCommand is executed by a client. Cast to this type when you want a C++ member function to be used. Note the arg1 - arg3 parameters are passed straight pass through to the action callout.
