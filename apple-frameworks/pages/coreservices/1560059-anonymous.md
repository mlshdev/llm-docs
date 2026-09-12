> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1560059-anonymous](https://developer.apple.com/documentation/coreservices/1560059-anonymous)

# Anonymous

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
enum : int {
    ...
};
```

## Topics

### Constants

- [errAEAccessorNotFound](1560059-anonymous/erraeaccessornotfound.md): There is no object accessor function forthe specified object class and container type
- [errAEBadListItem](1560059-anonymous/erraebadlistitem.md): Operation involving a list item failed
- [errAEBadTestKey](1560059-anonymous/erraebadtestkey.md): The descriptor in a test key is neithera comparison descriptor nor a logical descriptor
- [errAEBufferTooSmall](1560059-anonymous/erraebuffertoosmall.md): Buffer for `AEFlattenDesc` toosmall
- [errAEBuildSyntaxError](1560059-anonymous/erraebuildsyntaxerror.md): `AEBuildDesc` andrelated functions detected a syntax error
- [errAECoercionFail](1560059-anonymous/erraecoercionfail.md): Data could not be coerced to the requesteddescriptor type
- [errAECorruptData](1560059-anonymous/erraecorruptdata.md): Data in an Apple event could not be read
- [errAEDescIsNull](1560059-anonymous/erraedescisnull.md): Attempt to perform an invalid operationon a null descriptor
- [errAEDescNotFound](1560059-anonymous/erraedescnotfound.md): Descriptor was not found
- [errAEDuplicateHandler](1560059-anonymous/erraeduplicatehandler.md): Attempt to install handler in table foridentical class and ID (1.1 or greater)
- [errAEEmptyListContainer](1560059-anonymous/erraeemptylistcontainer.md): The container for an Apple event objectis specified by an empty list
- [errAEEventFiltered](1560059-anonymous/erraeeventfiltered.md): Event has been filtered and should not bepropagated (1.1 or greater)
- [errAEEventNotHandled](1560059-anonymous/erraeeventnothandled.md): Event wasn’t handled by an Apple eventhandler
- [errAEHandlerNotFound](1560059-anonymous/erraehandlernotfound.md): No handler found for an Apple event
- [errAEIllegalIndex](1560059-anonymous/erraeillegalindex.md): Not a valid list index
- [errAEImpossibleRange](1560059-anonymous/erraeimpossiblerange.md): The range is not valid because it is impossiblefor a range to include the first and last objects that were specified;an example is a range in which the offset of the first object is greaterthan the offset of the last object
- [errAENegativeCount](1560059-anonymous/erraenegativecount.md): An object-counting function returned a negativeresult
- [errAENewerVersion](1560059-anonymous/erraenewerversion.md): Need a newer version of the Apple EventManager
- [errAENoSuchLogical](1560059-anonymous/erraenosuchlogical.md): The logical operator in a logical descriptoris not `kAEAND`, `kAEOR`,or `kAENOT`
- [errAENoSuchObject](1560059-anonymous/erraenosuchobject.md): Runtime resolution of an object failed.
- [errAENoUserInteraction](1560059-anonymous/erraenouserinteraction.md): No user interaction allowed
- [errAENotAEDesc](1560059-anonymous/erraenotaedesc.md): Not a valid descriptor
- [errAENotASpecialFunction](1560059-anonymous/erraenotaspecialfunction.md): Wrong keyword for a special function
- [errAENotAnObjSpec](1560059-anonymous/erraenotanobjspec.md)
- [errAENotAppleEvent](1560059-anonymous/erraenotappleevent.md): The event is not in AppleEvent format.
- [errAEParamMissed](1560059-anonymous/erraeparammissed.md): A required parameter was not accessed.
- [errAEReceiveEscapeCurrent](1560059-anonymous/erraereceiveescapecurrent.md): Break out of lowest level only of `AEReceive` (1.1or greater)
- [errAEReceiveTerminate](1560059-anonymous/erraereceiveterminate.md): Break out of all levels of `AEReceive` tothe topmost (1.1 or greater)
- [errAERecordingIsAlreadyOn](1560059-anonymous/erraerecordingisalreadyon.md): Recording is already on
- [errAEReplyNotArrived](1560059-anonymous/erraereplynotarrived.md): Reply has not yet arrived
- [errAEReplyNotValid](1560059-anonymous/erraereplynotvalid.md): `AEResetTimer` was passed an invalid reply
- [errAEStreamAlreadyConverted](1560059-anonymous/erraestreamalreadyconverted.md): Attempt to convert a stream that has alreadybeen converted
- [errAEStreamBadNesting](1560059-anonymous/erraestreambadnesting.md): Nesting violation while streaming
- [errAETimeout](1560059-anonymous/erraetimeout.md): Apple event timed out
- [errAEUnknownAddressType](1560059-anonymous/erraeunknownaddresstype.md): Unknown Apple event address type
- [errAEUnknownObjectType](1560059-anonymous/erraeunknownobjecttype.md): The object type isn’t recognized
- [errAEUnknownSendMode](1560059-anonymous/erraeunknownsendmode.md): Invalid sending mode was passed
- [errAEWaitCanceled](1560059-anonymous/erraewaitcanceled.md): User canceled out of wait loop for replyor receipt
- [errAEWrongDataType](1560059-anonymous/erraewrongdatatype.md): Wrong descriptor type
- [errAEWrongNumberArgs](1560059-anonymous/erraewrongnumberargs.md): The number of operands provided for the `kAENOT` logicaloperator is not 1
