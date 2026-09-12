> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1442670-disposeosldisposetokenupp](https://developer.apple.com/documentation/coreservices/1442670-disposeosldisposetokenupp)

# DisposeOSLDisposeTokenUPP(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Disposes of a universal procedure pointer to an object callback dispose token function.

## Declaration

```swift
func DisposeOSLDisposeTokenUPP(_ userUPP: OSLDisposeTokenUPP!)
```

<a id="discussion"></a>

## Discussion

See the [OSLDisposeTokenProcPtr](osldisposetokenprocptr.md) callback function.

## See Also

### Creating, Calling, and Deleting Universal Procedure Pointers

- [DisposeAECoerceDescUPP(\_:)](1448721-disposeaecoercedescupp.md): Disposes of a universal procedure pointer to a function that coerces data stored in a descriptor.
- [DisposeAECoercePtrUPP(\_:)](1450664-disposeaecoerceptrupp.md): Disposes of a universal procedure pointer to a function that coerces data stored in a buffer.
- [DisposeAEDisposeExternalUPP(\_:)](1447284-disposeaedisposeexternalupp.md): Disposes of a universal procedure pointer to a function that disposes of data supplied to the `AECreateDescFromExternalPtr` function.
- [DisposeAEEventHandlerUPP(\_:)](1442066-disposeaeeventhandlerupp.md): Disposes of a universal procedure pointer to an event handler function.
- [DisposeOSLAccessorUPP(\_:)](1444684-disposeoslaccessorupp.md): Disposes of a universal procedure pointer to an object accessor function.
- [DisposeOSLAdjustMarksUPP(\_:)](1443940-disposeosladjustmarksupp.md): Disposes of a universal procedure pointer to an object callback adjust marks function.
- [DisposeOSLCompareUPP(\_:)](1448398-disposeoslcompareupp.md): Disposes of a universal procedure pointer to an object callback comparison function.
- [DisposeOSLCountUPP(\_:)](1443984-disposeoslcountupp.md): Disposes of a universal procedure pointer to an object callback count function.
- [DisposeOSLGetErrDescUPP(\_:)](1446061-disposeoslgeterrdescupp.md): Disposes of a universal procedure pointer to an object callback get error descriptor function.
- [DisposeOSLGetMarkTokenUPP(\_:)](1442377-disposeoslgetmarktokenupp.md): Disposes of a universal procedure pointer to an object callback get mark function.
- [DisposeOSLMarkUPP(\_:)](1449253-disposeoslmarkupp.md): Disposes of a universal procedure pointer to an object callback mark function.
- [InvokeAECoerceDescUPP(\_:\_:\_:\_:\_:)](1445450-invokeaecoercedescupp.md): Calls a universal procedure pointer to a function that coerces data stored in a descriptor.
- [InvokeAECoercePtrUPP(\_:\_:\_:\_:\_:\_:\_:)](1447079-invokeaecoerceptrupp.md): Calls a universal procedure pointer to a function that coerces data stored in a buffer.
- [InvokeAEDisposeExternalUPP(\_:\_:\_:\_:)](1441717-invokeaedisposeexternalupp.md): Calls a dispose external universal procedure pointer.
- [InvokeAEEventHandlerUPP(\_:\_:\_:\_:)](1446585-invokeaeeventhandlerupp.md): Calls an event handler universal procedure pointer.
- [InvokeOSLAccessorUPP(\_:\_:\_:\_:\_:\_:\_:\_:)](1448978-invokeoslaccessorupp.md): Calls an object accessor universal procedure pointer.
- [InvokeOSLAdjustMarksUPP(\_:\_:\_:\_:)](1448506-invokeosladjustmarksupp.md): Calls an object callback adjust marks universal procedure pointer.
- [InvokeOSLCompareUPP(\_:\_:\_:\_:\_:)](1443110-invokeoslcompareupp.md): Calls an object callback comparison universal procedure pointer.
- [InvokeOSLCountUPP(\_:\_:\_:\_:\_:)](1448030-invokeoslcountupp.md): Calls an object callback count universal procedure pointer.
- [InvokeOSLDisposeTokenUPP(\_:\_:)](1443963-invokeosldisposetokenupp.md): Calls an object callback dispose token universal procedure pointer.
- [InvokeOSLGetErrDescUPP(\_:\_:)](1448420-invokeoslgeterrdescupp.md): Calls an object callback get error descriptor universal procedure pointer.
- [InvokeOSLGetMarkTokenUPP(\_:\_:\_:\_:)](1441894-invokeoslgetmarktokenupp.md): Calls an object callback get mark universal procedure pointer.
- [InvokeOSLMarkUPP(\_:\_:\_:\_:)](1447444-invokeoslmarkupp.md): Calls an object callback mark universal procedure pointer.
- [NewAECoerceDescUPP(\_:)](1445885-newaecoercedescupp.md): Creates a new universal procedure pointer to a function that coerces data stored in a descriptor.
- [NewAECoercePtrUPP(\_:)](1449962-newaecoerceptrupp.md): Creates a new universal procedure pointer to a function that coerces data stored in a buffer.
- [NewAEDisposeExternalUPP(\_:)](1447774-newaedisposeexternalupp.md): Creates a new universal procedure pointer to a function that disposes of data stored in a buffer.
- [NewAEEventHandlerUPP(\_:)](1446862-newaeeventhandlerupp.md): Creates a new universal procedure pointer to an event handler function.
- [NewOSLAccessorUPP(\_:)](1449584-newoslaccessorupp.md): Creates a new universal procedure pointer to an object accessor function.
- [NewOSLAdjustMarksUPP(\_:)](1443347-newosladjustmarksupp.md): Creates a new universal procedure pointer to an object callback adjust marks function.
- [NewOSLCompareUPP(\_:)](1444603-newoslcompareupp.md): Creates a new universal procedure pointer to an object callback comparison function.
- [NewOSLCountUPP(\_:)](1448156-newoslcountupp.md): Creates a new universal procedure pointer to an object callback count function.
- [NewOSLDisposeTokenUPP(\_:)](1450027-newosldisposetokenupp.md): Creates a new universal procedure pointer to an object callback dispose token function.
- [NewOSLGetErrDescUPP(\_:)](1447934-newoslgeterrdescupp.md): Creates a new universal procedure pointer to an object callback get error descriptor function.
- [NewOSLGetMarkTokenUPP(\_:)](1445166-newoslgetmarktokenupp.md): Creates a new universal procedure pointer to an object callback get mark function.
- [NewOSLMarkUPP(\_:)](1446942-newoslmarkupp.md): Creates a new universal procedure pointer to an object callback mark function.

# DisposeOSLDisposeTokenUPP (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Disposes of a universal procedure pointer to an object callback dispose token function.

## Declaration

```objectivec
void DisposeOSLDisposeTokenUPP(OSLDisposeTokenUPP userUPP);
```

<a id="discussion"></a>

## Discussion

See the [OSLDisposeTokenProcPtr](osldisposetokenprocptr.md) callback function.

## See Also

### Creating, Calling, and Deleting Universal Procedure Pointers

- [DisposeAECoerceDescUPP](1448721-disposeaecoercedescupp.md): Disposes of a universal procedure pointer to a function that coerces data stored in a descriptor.
- [DisposeAECoercePtrUPP](1450664-disposeaecoerceptrupp.md): Disposes of a universal procedure pointer to a function that coerces data stored in a buffer.
- [DisposeAEDisposeExternalUPP](1447284-disposeaedisposeexternalupp.md): Disposes of a universal procedure pointer to a function that disposes of data supplied to the `AECreateDescFromExternalPtr` function.
- [DisposeAEEventHandlerUPP](1442066-disposeaeeventhandlerupp.md): Disposes of a universal procedure pointer to an event handler function.
- [DisposeOSLAccessorUPP](1444684-disposeoslaccessorupp.md): Disposes of a universal procedure pointer to an object accessor function.
- [DisposeOSLAdjustMarksUPP](1443940-disposeosladjustmarksupp.md): Disposes of a universal procedure pointer to an object callback adjust marks function.
- [DisposeOSLCompareUPP](1448398-disposeoslcompareupp.md): Disposes of a universal procedure pointer to an object callback comparison function.
- [DisposeOSLCountUPP](1443984-disposeoslcountupp.md): Disposes of a universal procedure pointer to an object callback count function.
- [DisposeOSLGetErrDescUPP](1446061-disposeoslgeterrdescupp.md): Disposes of a universal procedure pointer to an object callback get error descriptor function.
- [DisposeOSLGetMarkTokenUPP](1442377-disposeoslgetmarktokenupp.md): Disposes of a universal procedure pointer to an object callback get mark function.
- [DisposeOSLMarkUPP](1449253-disposeoslmarkupp.md): Disposes of a universal procedure pointer to an object callback mark function.
- [InvokeAECoerceDescUPP](1445450-invokeaecoercedescupp.md): Calls a universal procedure pointer to a function that coerces data stored in a descriptor.
- [InvokeAECoercePtrUPP](1447079-invokeaecoerceptrupp.md): Calls a universal procedure pointer to a function that coerces data stored in a buffer.
- [InvokeAEDisposeExternalUPP](1441717-invokeaedisposeexternalupp.md): Calls a dispose external universal procedure pointer.
- [InvokeAEEventHandlerUPP](1446585-invokeaeeventhandlerupp.md): Calls an event handler universal procedure pointer.
- [InvokeOSLAccessorUPP](1448978-invokeoslaccessorupp.md): Calls an object accessor universal procedure pointer.
- [InvokeOSLAdjustMarksUPP](1448506-invokeosladjustmarksupp.md): Calls an object callback adjust marks universal procedure pointer.
- [InvokeOSLCompareUPP](1443110-invokeoslcompareupp.md): Calls an object callback comparison universal procedure pointer.
- [InvokeOSLCountUPP](1448030-invokeoslcountupp.md): Calls an object callback count universal procedure pointer.
- [InvokeOSLDisposeTokenUPP](1443963-invokeosldisposetokenupp.md): Calls an object callback dispose token universal procedure pointer.
- [InvokeOSLGetErrDescUPP](1448420-invokeoslgeterrdescupp.md): Calls an object callback get error descriptor universal procedure pointer.
- [InvokeOSLGetMarkTokenUPP](1441894-invokeoslgetmarktokenupp.md): Calls an object callback get mark universal procedure pointer.
- [InvokeOSLMarkUPP](1447444-invokeoslmarkupp.md): Calls an object callback mark universal procedure pointer.
- [NewAECoerceDescUPP](1445885-newaecoercedescupp.md): Creates a new universal procedure pointer to a function that coerces data stored in a descriptor.
- [NewAECoercePtrUPP](1449962-newaecoerceptrupp.md): Creates a new universal procedure pointer to a function that coerces data stored in a buffer.
- [NewAEDisposeExternalUPP](1447774-newaedisposeexternalupp.md): Creates a new universal procedure pointer to a function that disposes of data stored in a buffer.
- [NewAEEventHandlerUPP](1446862-newaeeventhandlerupp.md): Creates a new universal procedure pointer to an event handler function.
- [NewOSLAccessorUPP](1449584-newoslaccessorupp.md): Creates a new universal procedure pointer to an object accessor function.
- [NewOSLAdjustMarksUPP](1443347-newosladjustmarksupp.md): Creates a new universal procedure pointer to an object callback adjust marks function.
- [NewOSLCompareUPP](1444603-newoslcompareupp.md): Creates a new universal procedure pointer to an object callback comparison function.
- [NewOSLCountUPP](1448156-newoslcountupp.md): Creates a new universal procedure pointer to an object callback count function.
- [NewOSLDisposeTokenUPP](1450027-newosldisposetokenupp.md): Creates a new universal procedure pointer to an object callback dispose token function.
- [NewOSLGetErrDescUPP](1447934-newoslgeterrdescupp.md): Creates a new universal procedure pointer to an object callback get error descriptor function.
- [NewOSLGetMarkTokenUPP](1445166-newoslgetmarktokenupp.md): Creates a new universal procedure pointer to an object callback get mark function.
- [NewOSLMarkUPP](1446942-newoslmarkupp.md): Creates a new universal procedure pointer to an object callback mark function.
