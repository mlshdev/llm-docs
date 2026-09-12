> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/erraebadkeyform](https://developer.apple.com/documentation/coreservices/erraebadkeyform)

# errAEBadKeyForm

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Invalid key form.

## Declaration

```swift
var errAEBadKeyForm: Int { get }
```

## See Also

### Result Codes

- [noPortErr](noporterr.md): Client hasn’t set `'SIZE'` resource toindicate awareness of high-level events
- [destPortErr](destporterr.md): Server hasn’t set `'SIZE'` resource toindicate awareness of high-level events, or else is not present
- [sessClosedErr](sessclosederr.md): The `kAEDontReconnect` flagin the `sendMode` parameterwas set and the server quit, then restarted
- [errAECoercionFail](erraecoercionfail.md): Data could not be coerced to the requesteddescriptor type
- [errAEDescNotFound](erraedescnotfound.md): Descriptor was not found
- [errAECorruptData](erraecorruptdata.md): Data in an Apple event could not be read
- [errAEWrongDataType](erraewrongdatatype.md): Wrong descriptor type
- [errAENotAEDesc](erraenotaedesc.md): Not a valid descriptor
- [errAEBadListItem](erraebadlistitem.md): Operation involving a list item failed
- [errAENewerVersion](erraenewerversion.md): Need a newer version of the Apple EventManager
- [errAENotAppleEvent](erraenotappleevent.md): The event is not in AppleEvent format.
- [errAEEventNotHandled](erraeeventnothandled.md): Event wasn’t handled by an Apple eventhandler
- [errAEReplyNotValid](erraereplynotvalid.md): `AEResetTimer` was passed an invalid reply
- [errAEUnknownSendMode](erraeunknownsendmode.md): Invalid sending mode was passed
- [errAEWaitCanceled](erraewaitcanceled.md): User canceled out of wait loop for replyor receipt
- [errAETimeout](erraetimeout.md): Apple event timed out
- [errAENoUserInteraction](erraenouserinteraction.md): No user interaction allowed
- [errAENotASpecialFunction](erraenotaspecialfunction.md): Wrong keyword for a special function
- [errAEParamMissed](erraeparammissed.md): A required parameter was not accessed.
- [errAEUnknownAddressType](erraeunknownaddresstype.md): Unknown Apple event address type
- [errAEHandlerNotFound](erraehandlernotfound.md): No handler found for an Apple event
- [errAEReplyNotArrived](erraereplynotarrived.md): Reply has not yet arrived
- [errAEIllegalIndex](erraeillegalindex.md): Not a valid list index
- [errAEImpossibleRange](erraeimpossiblerange.md): The range is not valid because it is impossiblefor a range to include the first and last objects that were specified;an example is a range in which the offset of the first object is greaterthan the offset of the last object
- [errAEWrongNumberArgs](erraewrongnumberargs.md): The number of operands provided for the `kAENOT` logicaloperator is not 1
- [errAEAccessorNotFound](erraeaccessornotfound.md): There is no object accessor function forthe specified object class and container type
- [errAENoSuchLogical](erraenosuchlogical.md): The logical operator in a logical descriptoris not `kAEAND`, `kAEOR`,or `kAENOT`
- [errAEBadTestKey](erraebadtestkey.md): The descriptor in a test key is neithera comparison descriptor nor a logical descriptor
- [errAENoSuchObject](erraenosuchobject.md): Runtime resolution of an object failed.
- [errAENegativeCount](erraenegativecount.md): An object-counting function returned a negativeresult
- [errAEEmptyListContainer](erraeemptylistcontainer.md): The container for an Apple event objectis specified by an empty list
- [errAEUnknownObjectType](erraeunknownobjecttype.md): The object type isn’t recognized
- [errAERecordingIsAlreadyOn](erraerecordingisalreadyon.md): Recording is already on
- [errAEReceiveTerminate](erraereceiveterminate.md): Break out of all levels of `AEReceive` tothe topmost (1.1 or greater)
- [errAEReceiveEscapeCurrent](erraereceiveescapecurrent.md): Break out of lowest level only of `AEReceive` (1.1or greater)
- [errAEEventFiltered](erraeeventfiltered.md): Event has been filtered and should not bepropagated (1.1 or greater)
- [errAEDuplicateHandler](erraeduplicatehandler.md): Attempt to install handler in table foridentical class and ID (1.1 or greater)
- [errAEStreamBadNesting](erraestreambadnesting.md): Nesting violation while streaming
- [errAEStreamAlreadyConverted](erraestreamalreadyconverted.md): Attempt to convert a stream that has alreadybeen converted
- [errAEDescIsNull](erraedescisnull.md): Attempt to perform an invalid operationon a null descriptor
- [errAEBuildSyntaxError](erraebuildsyntaxerror.md): `AEBuildDesc` andrelated functions detected a syntax error
- [errAEBufferTooSmall](erraebuffertoosmall.md): Buffer for `AEFlattenDesc` toosmall
- [errASCantConsiderAndIgnore](errascantconsiderandignore.md): Can’t both consider and ignore \<attribute\>.
- [errASCantCompareMoreThan32k](errascantcomparemorethan32k.md): Can’t perform operation on text longerthan 32K bytes.
- [errASTerminologyNestingTooDeep](errasterminologynestingtoodeep.md): Tell statements are nested too deeply.
- [errASIllegalFormalParameter](errasillegalformalparameter.md): \<name\> is illegal as a formal parameter.
- [errASParameterNotForEvent](errasparameternotforevent.md): \<name\> is not a parameter name for the event \<event\>.
- [errASNoResultReturned](errasnoresultreturned.md): No result was returned for some argumentof this expression.
- [errAEEventFailed](erraeeventfailed.md): Apple event handler failed.
- [errAETypeError](erraetypeerror.md): A descriptor type mismatch occurred.
- [errAENotModifiable](erraenotmodifiable.md): Can't set \<object or data\> to \<object or data\>. Access not allowed.
- [errAEPrivilegeError](erraeprivilegeerror.md): A privilege violation occurred.
- [errAEReadDenied](erraereaddenied.md): The read operation was not allowed.
- [errAEWriteDenied](erraewritedenied.md): Can't set \<object or data\> to \<object or data\>.
- [errAEIndexTooLarge](erraeindextoolarge.md): The index of the event is too large to bevalid.
- [errAENotAnElement](erraenotanelement.md): The specified object is a property, notan element.
- [errAECantSupplyType](erraecantsupplytype.md): Can’t supply the requested descriptortype for the data.
- [errAECantHandleClass](erraecanthandleclass.md): The Apple event handler can’t handle objectsof this class.
- [errAEInTransaction](erraeintransaction.md): Couldn’t handle this command because itwasn’t part of the current transaction.
- [errAENoSuchTransaction](erraenosuchtransaction.md): The transaction to which this command belongedisn’t a valid transaction.
- [errAENoUserSelection](erraenouserselection.md): There is no user selection.
- [errAENotASingleObject](erraenotasingleobject.md): Handler only handles single objects.
- [errAECantUndo](erraecantundo.md): Can’t undo the previous Apple event oruser action.
- [errAENotAnEnumMember](erraenotanenummember.md): Enumerated value in `SetData` is notallowed for this property
- [errAECantPutThatThere](erraecantputthatthere.md): In make new, duplicate, etc. class can'tbe an element of container
- [errAEPropertiesClash](erraepropertiesclash.md): Illegal combination of properties settingsfor SetData, make new, or duplicate
