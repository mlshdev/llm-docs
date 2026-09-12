> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1463247-pmcreatesession](https://developer.apple.com/documentation/applicationservices/1463247-pmcreatesession)

# PMCreateSession(\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Creates and initializes a printing session object and creates a context for printing operations.

## Declaration

```swift
func PMCreateSession(_ printSession: UnsafeMutablePointer<PMPrintSession?>) -> OSStatus
```

## Parameters

- `printSession`: A pointer to your [PMPrintSession](pmprintsession.md) variable. On return, the variable refers to a new printing session object. You are responsible for releasing the printing session object with the function [PMRelease(\_:)](1461402-pmrelease.md).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

This function allocates memory for a new printing session object in your application’s memory space and sets its reference count to 1. The new printing session object is initialized with information that the printing system uses for a print job.

# PMCreateSession (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Creates and initializes a printing session object and creates a context for printing operations.

## Declaration

```objectivec
OSStatus PMCreateSession(PMPrintSession  _Nullable *printSession);
```

## Parameters

- `printSession`: A pointer to your [PMPrintSession](pmprintsession.md) variable. On return, the variable refers to a new printing session object. You are responsible for releasing the printing session object with the function [PMRelease](1461402-pmrelease.md).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

This function allocates memory for a new printing session object in your application’s memory space and sets its reference count to 1. The new printing session object is initialized with information that the printing system uses for a print job.
