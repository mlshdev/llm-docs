> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1447756-aesetobjectcallbacks](https://developer.apple.com/documentation/coreservices/1447756-aesetobjectcallbacks)

# AESetObjectCallbacks(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Specifies the object callback functions for your application.

## Declaration

```swift
func AESetObjectCallbacks(_ myCompareProc: OSLCompareUPP!, _ myCountProc: OSLCountUPP!, _ myDisposeTokenProc: OSLDisposeTokenUPP!, _ myGetMarkTokenProc: OSLGetMarkTokenUPP!, _ myMarkProc: OSLMarkUPP!, _ myAdjustMarksProc: OSLAdjustMarksUPP!, _ myGetErrDescProcPtr: OSLGetErrDescUPP!) -> OSErr
```

## Parameters

- `myCompareProc`: Either a universal procedure pointer to the object comparison function provided by your application or `NULL` if no function is provided. See [OSLCompareUPP](oslcompareupp.md).
- `myCountProc`: Either a universal procedure pointer to the object-counting function provided by your application or `NULL` if no function is provided. See [OSLCountUPP](oslcountupp.md).
- `myDisposeTokenProc`: Either a universal procedure pointer to the token disposal function provided by your application or `NULL` if no function is provided. (Token is defined in [AEDisposeToken(\_:)](1446783-aedisposetoken.md). See [OSLDisposeTokenUPP](osldisposetokenupp.md).
- `myGetMarkTokenProc`: Either a universal procedure pointer to the function for returning a mark token provided by your application or `NULL` if no function is provided. See [OSLGetMarkTokenUPP](oslgetmarktokenupp.md).
- `myMarkProc`: Either a universal procedure pointer to the object-marking function provided by your application or `NULL` if no function is provided. See [OSLMarkUPP](oslmarkupp.md).
- `myAdjustMarksProc`: Either a universal procedure pointer to the mark-adjusting function provided by your application or `NULL` if no function is provided. See [OSLAdjustMarksUPP](osladjustmarksupp.md).
- `myGetErrDescProcPtr`: Either a universal procedure pointer to the error callback function provided by your application or `NULL` if no function is provided. See [OSLGetErrDescUPP](oslgeterrdescupp.md).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

This function is just a convenient wrapper for [AEInstallSpecialHandler(\_:\_:\_:)](1445532-aeinstallspecialhandler.md). You can manipulate the special handler table with more control using the routines described in [Managing Special Handler Dispatch Tables](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1652333).

Your application can provide only one each of the object callback functions specified by `AESetObjectCallbacks`—one object comparison function, one object-counting function, and so on. As a result, each of these callback functions must perform the requested task (comparing, counting, and so on) for all the object classes that your application supports. In contrast, your application may provide many different object accessor functions if necessary, depending on the object classes and token types your application supports. You install object accessor functions with [AEInstallObjectAccessor(\_:\_:\_:\_:\_:)](1447905-aeinstallobjectaccessor.md).

To replace object callback functions that have been previously installed, you can call `AESetObjectCallbacks` again. Each additional call to `AESetObjectCallbacks` replaces any object callback functions installed by previous calls. Only those functions you specify are replaced; to avoid replacing existing callback functions, specify a value of `NULL` for the functions you don’t want to replace.

You cannot use `AESetObjectCallbacks` to replace system object callback functions or object accessor functions. To install system object callback functions, use the function [AEInstallSpecialHandler(\_:\_:\_:)](1445532-aeinstallspecialhandler.md). 

<a id="1770198"></a>

### Version-Notes

In macOS, your application can not make an object callback function available to other applications by installing it in a system object accessor dispatch table.

## See Also

### Initializing the Object Support Library

- [AEObjectInit()](1447372-aeobjectinit.md): Initializes the Object Support Library.

# AESetObjectCallbacks (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Specifies the object callback functions for your application.

## Declaration

```objectivec
OSErr AESetObjectCallbacks(OSLCompareUPP myCompareProc, OSLCountUPP myCountProc, OSLDisposeTokenUPP myDisposeTokenProc, OSLGetMarkTokenUPP myGetMarkTokenProc, OSLMarkUPP myMarkProc, OSLAdjustMarksUPP myAdjustMarksProc, OSLGetErrDescUPP myGetErrDescProcPtr);
```

## Parameters

- `myCompareProc`: Either a universal procedure pointer to the object comparison function provided by your application or `NULL` if no function is provided. See [OSLCompareUPP](oslcompareupp.md).
- `myCountProc`: Either a universal procedure pointer to the object-counting function provided by your application or `NULL` if no function is provided. See [OSLCountUPP](oslcountupp.md).
- `myDisposeTokenProc`: Either a universal procedure pointer to the token disposal function provided by your application or `NULL` if no function is provided. (Token is defined in [AEDisposeToken](1446783-aedisposetoken.md). See [OSLDisposeTokenUPP](osldisposetokenupp.md).
- `myGetMarkTokenProc`: Either a universal procedure pointer to the function for returning a mark token provided by your application or `NULL` if no function is provided. See [OSLGetMarkTokenUPP](oslgetmarktokenupp.md).
- `myMarkProc`: Either a universal procedure pointer to the object-marking function provided by your application or `NULL` if no function is provided. See [OSLMarkUPP](oslmarkupp.md).
- `myAdjustMarksProc`: Either a universal procedure pointer to the mark-adjusting function provided by your application or `NULL` if no function is provided. See [OSLAdjustMarksUPP](osladjustmarksupp.md).
- `myGetErrDescProcPtr`: Either a universal procedure pointer to the error callback function provided by your application or `NULL` if no function is provided. See [OSLGetErrDescUPP](oslgeterrdescupp.md).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

This function is just a convenient wrapper for [AEInstallSpecialHandler](1445532-aeinstallspecialhandler.md). You can manipulate the special handler table with more control using the routines described in [Managing Special Handler Dispatch Tables](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1652333).

Your application can provide only one each of the object callback functions specified by `AESetObjectCallbacks`—one object comparison function, one object-counting function, and so on. As a result, each of these callback functions must perform the requested task (comparing, counting, and so on) for all the object classes that your application supports. In contrast, your application may provide many different object accessor functions if necessary, depending on the object classes and token types your application supports. You install object accessor functions with [AEInstallObjectAccessor](1447905-aeinstallobjectaccessor.md).

To replace object callback functions that have been previously installed, you can call `AESetObjectCallbacks` again. Each additional call to `AESetObjectCallbacks` replaces any object callback functions installed by previous calls. Only those functions you specify are replaced; to avoid replacing existing callback functions, specify a value of `NULL` for the functions you don’t want to replace.

You cannot use `AESetObjectCallbacks` to replace system object callback functions or object accessor functions. To install system object callback functions, use the function [AEInstallSpecialHandler](1445532-aeinstallspecialhandler.md). 

<a id="1770198"></a>

### Version-Notes

In macOS, your application can not make an object callback function available to other applications by installing it in a system object accessor dispatch table.

## See Also

### Initializing the Object Support Library

- [AEObjectInit](1447372-aeobjectinit.md): Initializes the Object Support Library.
