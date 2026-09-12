> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1461402-pmrelease](https://developer.apple.com/documentation/applicationservices/1461402-pmrelease)

# PMRelease(\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Releases a printing object by decrementing its reference count.

## Declaration

```swift
func PMRelease(_ object: PMObject?) -> OSStatus
```

## Parameters

- `object`: The printing object you want to release.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

Your application should use the `PMRelease` function to release any printing objects it creates or retains. When an object’s reference count reaches 0, the object is deallocated.

For example, to terminate a printing session created with the function [PMCreateSession(\_:)](1463247-pmcreatesession.md), pass the associated [PMPrintSession](pmprintsession.md) object to `PMRelease`. To release printing objects created with the functions [PMCreatePageFormat(\_:)](1459485-pmcreatepageformat.md) and [PMCreatePrintSettings(\_:)](1463239-pmcreateprintsettings.md), pass the associated `PMPageFormat` and `PMPrintSettings` objects to `PMRelease`.

## See Also

### Releasing and Retaining Printing Objects

- [PMRetain(\_:)](1460190-pmretain.md): Retains a printing object by incrementing its reference count.

# PMRelease (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Releases a printing object by decrementing its reference count.

## Declaration

```objectivec
OSStatus PMRelease(PMObject object);
```

## Parameters

- `object`: The printing object you want to release.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

Your application should use the `PMRelease` function to release any printing objects it creates or retains. When an object’s reference count reaches 0, the object is deallocated.

For example, to terminate a printing session created with the function [PMCreateSession](1463247-pmcreatesession.md), pass the associated [PMPrintSession](pmprintsession.md) object to `PMRelease`. To release printing objects created with the functions [PMCreatePageFormat](1459485-pmcreatepageformat.md) and [PMCreatePrintSettings](1463239-pmcreateprintsettings.md), pass the associated `PMPageFormat` and `PMPrintSettings` objects to `PMRelease`.

## See Also

### Releasing and Retaining Printing Objects

- [PMRetain](1460190-pmretain.md): Retains a printing object by incrementing its reference count.
