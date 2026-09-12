> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/oslcompareprocptr](https://developer.apple.com/documentation/coreservices/oslcompareprocptr)

# OSLCompareProcPtr (Swift)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Defines a pointer to an object comparison callback function. Your object comparison function compares one Apple event object to another or to the data for a descriptor.

## Declaration

```swift
typealias OSLCompareProcPtr = (DescType, UnsafePointer<AEDesc>?, UnsafePointer<AEDesc>?, UnsafeMutablePointer<DarwinBoolean>?) -> OSErr
```

## Parameters

- `oper`: A comparison operator that specifies the type of comparison to perform. The available comparison operators are described in [Comparison Operator Constants](https://developer.apple.com/documentation/applicationservices/apple_event_manager/comparison_operator_constants). For related information, see the function [CreateCompDescriptor(\_:\_:\_:\_:\_:)](1449155-createcompdescriptor.md). See [DescType](desctype.md).
- `obj1`: A pointer to a token describing the first Apple event object to compare. (Token is defined in [AEDisposeToken(\_:)](1446783-aedisposetoken.md). See [AEDesc](aedesc.md).
- `obj2`: A pointer to a token or some other descriptor that specifies either an Apple event object or a value to compare to the Apple event object specified by the `obj1` parameter. See [AEDesc](aedesc.md).
- `result`: A pointer to a Boolean value where your object comparison function stores a value indicating the result of the comparison operation. You store `TRUE` if the values of the `obj1` and `obj2` parameters have the relationship specified by the `comparisonOperator` parameter; otherwise, you store `FALSE`.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145). Your object comparison function should return `noErr` if it successfully compared the objects and `errAEEventNotHandled` if it can’t compare the objects. When the Apple Event Manager gets an error result of `errAEEventNotHandled`, it attempts to use other methods of comparing the specified objects, such as calling an equivalent system object comparison function.

<a id="discussion"></a>

## Discussion

The Apple Event Manager calls your object comparison function when, in the course of resolving an object specifier, the manager needs to compare an Apple event object with another object or with a value in a descriptor.

If you want the Apple Event Manager to help your application resolve object specifiers of key form `formTest` (and if your application doesn’t specify `kAEIDoWhose` as described in [Callback Constants for the AEResolve Function](apple_events/1572741-callback_constants_for_the_aeres.md)), you should provide an object-counting function, as described in [OSLCountProcPtr](oslcountprocptr.md), and an object comparison function.

It is up to your application to interpret the comparison operators it receives. The meaning of comparison operators differs according to the Apple event objects being compared, and not all comparison operators apply to all object classes. The available comparison operators are described in [Comparison Operator Constants](https://developer.apple.com/documentation/applicationservices/apple_event_manager/comparison_operator_constants).

To provide a pointer to your object comparison callback function, you create a universal procedure pointer (UPP) of type [OSLCompareUPP](oslcompareupp.md), using the function [NewOSLCompareUPP(\_:)](1444603-newoslcompareupp.md). You can do so with code like the following:

<a id="1820184"></a>

**Listing 1**

```occ
OSLCompareObjectsUPP MyCompareObjectsUPP;
MyCompareObjectsUPP = NewOSLCompareObjectsUPP(&MyCompareObjectsCallback)
```

You can then pass the UPP `MyCompareObjectsUPP` as a parameter to the [AESetObjectCallbacks(\_:\_:\_:\_:\_:\_:\_:)](1447756-aesetobjectcallbacks.md) function or the [AEInstallSpecialHandler(\_:\_:\_:)](1445532-aeinstallspecialhandler.md) function.

If you wish to call your object comparison callback function directly, you can use the [InvokeOSLCompareUPP(\_:\_:\_:\_:\_:)](1443110-invokeoslcompareupp.md) function.

After you are finished with your object comparison callback function, you can dispose of the UPP with the [DisposeOSLCompareUPP(\_:)](1448398-disposeoslcompareupp.md) function. However, if you will use the same object comparison function in subsequent calls to the function `AESetObjectCallbacks` or the function `AEInstallSpecialHandler`, you can reuse the same UPP, rather than dispose of it and later create a new UPP.

## See Also

### Callbacks

- [AERemoteProcessResolverCallback](aeremoteprocessresolvercallback.md): Defines a pointer to a function the Apple Event Manager calls when the asynchronous execution of a remote process resolver completes, either due to success or failure, after a call to the `AERemoteProcessResolverScheduleWithRunLoop` function. Your callback function can use the reference passed to it to get the remote process information.
- [AEDisposeExternalProcPtr](aedisposeexternalprocptr.md): Defines a pointer to a function the Apple Event Manager calls to dispose of a descriptor created by the `AECreateDescFromExternalPtr` function. Your callback function disposes of the buffer you originally passed to that function.
- [AECoerceDescProcPtr](aecoercedescprocptr.md): Defines a pointer to a function that coerces data stored in a descriptor. Your descriptor coercion callback function coerces the data from the passed descriptor to the specified type, returning the coerced data in a second descriptor.
- [AECoercePtrProcPtr](aecoerceptrprocptr.md): Defines a pointer to a function that coerces data stored in a buffer. Your pointer coercion callback routine coerces the data from the passed buffer to the specified type, returning the coerced data in a descriptor.
- [AEEventHandlerProcPtr](aeeventhandlerprocptr.md): Defines a pointer to a function that handles one or more Apple events. Your Apple event handler function performs any action requested by the Apple event, adds parameters to the reply Apple event if appropriate (possibly including error information), and returns a result code.
- [OSLAccessorProcPtr](oslaccessorprocptr.md): Your object accessor function either finds elements or properties of an Apple event object.
- [OSLAdjustMarksProcPtr](osladjustmarksprocptr.md): Defines a pointer to an adjust marks callback function. Your adjust marks function unmarks objects previously marked by a call to your marking function.
- [OSLCountProcPtr](oslcountprocptr.md): Defines a pointer to an object counting callback function. Your object counting function counts the number of Apple event objects of a specified class in a specified container object.
- [OSLDisposeTokenProcPtr](osldisposetokenprocptr.md): Defines a pointer to a dispose token callback function. Your dispose token function, required only if you use a complex token format, disposes of the specified token.
- [OSLGetErrDescProcPtr](oslgeterrdescprocptr.md): Defines a pointer to an error descriptor callback function. Your error descriptor callback function supplies a pointer to an address where the Apple Event Manager can store the current descriptor if an error occurs during a call to the `AEResolve` function.
- [OSLGetMarkTokenProcPtr](oslgetmarktokenprocptr.md): Defines a pointer to a mark token callback function. Your mark token function returns a mark token.
- [OSLMarkProcPtr](oslmarkprocptr.md): Defines a pointer to an object marking callback function. Your object-marking function marks a specific Apple event object.

# OSLCompareProcPtr (Objective-C)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Defines a pointer to an object comparison callback function. Your object comparison function compares one Apple event object to another or to the data for a descriptor.

## Declaration

```objectivec
typedef OSErr (*OSLCompareProcPtr)(DescType oper, const AEDesc *obj1, const AEDesc *obj2, Boolean *result);
```

## Parameters

- `oper`: A comparison operator that specifies the type of comparison to perform. The available comparison operators are described in [Comparison Operator Constants](https://developer.apple.com/documentation/applicationservices/apple_event_manager/comparison_operator_constants). For related information, see the function [CreateCompDescriptor](1449155-createcompdescriptor.md). See [DescType](desctype.md).
- `obj1`: A pointer to a token describing the first Apple event object to compare. (Token is defined in [AEDisposeToken](1446783-aedisposetoken.md). See [AEDesc](aedesc.md).
- `obj2`: A pointer to a token or some other descriptor that specifies either an Apple event object or a value to compare to the Apple event object specified by the `obj1` parameter. See [AEDesc](aedesc.md).
- `result`: A pointer to a Boolean value where your object comparison function stores a value indicating the result of the comparison operation. You store `TRUE` if the values of the `obj1` and `obj2` parameters have the relationship specified by the `comparisonOperator` parameter; otherwise, you store `FALSE`.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145). Your object comparison function should return `noErr` if it successfully compared the objects and `errAEEventNotHandled` if it can’t compare the objects. When the Apple Event Manager gets an error result of `errAEEventNotHandled`, it attempts to use other methods of comparing the specified objects, such as calling an equivalent system object comparison function.

<a id="discussion"></a>

## Discussion

The Apple Event Manager calls your object comparison function when, in the course of resolving an object specifier, the manager needs to compare an Apple event object with another object or with a value in a descriptor.

If you want the Apple Event Manager to help your application resolve object specifiers of key form `formTest` (and if your application doesn’t specify `kAEIDoWhose` as described in [Callback Constants for the AEResolve Function](1572741-callback_constants_for_the_aeres.md)), you should provide an object-counting function, as described in [OSLCountProcPtr](oslcountprocptr.md), and an object comparison function.

It is up to your application to interpret the comparison operators it receives. The meaning of comparison operators differs according to the Apple event objects being compared, and not all comparison operators apply to all object classes. The available comparison operators are described in [Comparison Operator Constants](https://developer.apple.com/documentation/applicationservices/apple_event_manager/comparison_operator_constants).

To provide a pointer to your object comparison callback function, you create a universal procedure pointer (UPP) of type [OSLCompareUPP](oslcompareupp.md), using the function [NewOSLCompareUPP](1444603-newoslcompareupp.md). You can do so with code like the following:

<a id="1820184"></a>

**Listing 1**

```occ
OSLCompareObjectsUPP MyCompareObjectsUPP;
MyCompareObjectsUPP = NewOSLCompareObjectsUPP(&MyCompareObjectsCallback)
```

You can then pass the UPP `MyCompareObjectsUPP` as a parameter to the [AESetObjectCallbacks](1447756-aesetobjectcallbacks.md) function or the [AEInstallSpecialHandler](1445532-aeinstallspecialhandler.md) function.

If you wish to call your object comparison callback function directly, you can use the [InvokeOSLCompareUPP](1443110-invokeoslcompareupp.md) function.

After you are finished with your object comparison callback function, you can dispose of the UPP with the [DisposeOSLCompareUPP](1448398-disposeoslcompareupp.md) function. However, if you will use the same object comparison function in subsequent calls to the function `AESetObjectCallbacks` or the function `AEInstallSpecialHandler`, you can reuse the same UPP, rather than dispose of it and later create a new UPP.

## See Also

### Callbacks

- [AERemoteProcessResolverCallback](aeremoteprocessresolvercallback.md): Defines a pointer to a function the Apple Event Manager calls when the asynchronous execution of a remote process resolver completes, either due to success or failure, after a call to the `AERemoteProcessResolverScheduleWithRunLoop` function. Your callback function can use the reference passed to it to get the remote process information.
- [AEDisposeExternalProcPtr](aedisposeexternalprocptr.md): Defines a pointer to a function the Apple Event Manager calls to dispose of a descriptor created by the `AECreateDescFromExternalPtr` function. Your callback function disposes of the buffer you originally passed to that function.
- [AECoerceDescProcPtr](aecoercedescprocptr.md): Defines a pointer to a function that coerces data stored in a descriptor. Your descriptor coercion callback function coerces the data from the passed descriptor to the specified type, returning the coerced data in a second descriptor.
- [AECoercePtrProcPtr](aecoerceptrprocptr.md): Defines a pointer to a function that coerces data stored in a buffer. Your pointer coercion callback routine coerces the data from the passed buffer to the specified type, returning the coerced data in a descriptor.
- [AEEventHandlerProcPtr](aeeventhandlerprocptr.md): Defines a pointer to a function that handles one or more Apple events. Your Apple event handler function performs any action requested by the Apple event, adds parameters to the reply Apple event if appropriate (possibly including error information), and returns a result code.
- [OSLAccessorProcPtr](oslaccessorprocptr.md): Your object accessor function either finds elements or properties of an Apple event object.
- [OSLAdjustMarksProcPtr](osladjustmarksprocptr.md): Defines a pointer to an adjust marks callback function. Your adjust marks function unmarks objects previously marked by a call to your marking function.
- [OSLCountProcPtr](oslcountprocptr.md): Defines a pointer to an object counting callback function. Your object counting function counts the number of Apple event objects of a specified class in a specified container object.
- [OSLDisposeTokenProcPtr](osldisposetokenprocptr.md): Defines a pointer to a dispose token callback function. Your dispose token function, required only if you use a complex token format, disposes of the specified token.
- [OSLGetErrDescProcPtr](oslgeterrdescprocptr.md): Defines a pointer to an error descriptor callback function. Your error descriptor callback function supplies a pointer to an address where the Apple Event Manager can store the current descriptor if an error occurs during a call to the `AEResolve` function.
- [OSLGetMarkTokenProcPtr](oslgetmarktokenprocptr.md): Defines a pointer to a mark token callback function. Your mark token function returns a mark token.
- [OSLMarkProcPtr](oslmarkprocptr.md): Defines a pointer to an object marking callback function. Your object-marking function marks a specific Apple event object.
