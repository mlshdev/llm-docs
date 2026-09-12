> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1560036-anonymous/erraenotanenummember](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraenotanenummember)

# errAENotAnEnumMember

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Enumerated value in `SetData` is notallowed for this property

## Declaration

```objectivec
errAENotAnEnumMember = -10023
```

## See Also

### Result Codes

- [noPortErr](../1560074-anonymous/noporterr.md): Client hasn’t set `'SIZE'` resource toindicate awareness of high-level events
- [destPortErr](../1560074-anonymous/destporterr.md): Server hasn’t set `'SIZE'` resource toindicate awareness of high-level events, or else is not present
- [sessClosedErr](../1560074-anonymous/sessclosederr.md): The `kAEDontReconnect` flagin the `sendMode` parameterwas set and the server quit, then restarted
- [errAECoercionFail](../1560059-anonymous/erraecoercionfail.md): Data could not be coerced to the requesteddescriptor type
- [errAEDescNotFound](../1560059-anonymous/erraedescnotfound.md): Descriptor was not found
- [errAECorruptData](../1560059-anonymous/erraecorruptdata.md): Data in an Apple event could not be read
- [errAEWrongDataType](../1560059-anonymous/erraewrongdatatype.md): Wrong descriptor type
- [errAENotAEDesc](../1560059-anonymous/erraenotaedesc.md): Not a valid descriptor
- [errAEBadListItem](../1560059-anonymous/erraebadlistitem.md): Operation involving a list item failed
- [errAENewerVersion](../1560059-anonymous/erraenewerversion.md): Need a newer version of the Apple EventManager
- [errAENotAppleEvent](../1560059-anonymous/erraenotappleevent.md): The event is not in AppleEvent format.
- [errAEEventNotHandled](../1560059-anonymous/erraeeventnothandled.md): Event wasn’t handled by an Apple eventhandler
- [errAEReplyNotValid](../1560059-anonymous/erraereplynotvalid.md): `AEResetTimer` was passed an invalid reply
- [errAEUnknownSendMode](../1560059-anonymous/erraeunknownsendmode.md): Invalid sending mode was passed
- [errAEWaitCanceled](../1560059-anonymous/erraewaitcanceled.md): User canceled out of wait loop for replyor receipt
- [errAETimeout](../1560059-anonymous/erraetimeout.md): Apple event timed out
- [errAENoUserInteraction](../1560059-anonymous/erraenouserinteraction.md): No user interaction allowed
- [errAENotASpecialFunction](../1560059-anonymous/erraenotaspecialfunction.md): Wrong keyword for a special function
- [errAEParamMissed](../1560059-anonymous/erraeparammissed.md): A required parameter was not accessed.
- [errAEUnknownAddressType](../1560059-anonymous/erraeunknownaddresstype.md): Unknown Apple event address type
- [errAEHandlerNotFound](../1560059-anonymous/erraehandlernotfound.md): No handler found for an Apple event
- [errAEReplyNotArrived](../1560059-anonymous/erraereplynotarrived.md): Reply has not yet arrived
- [errAEIllegalIndex](../1560059-anonymous/erraeillegalindex.md): Not a valid list index
- [errAEImpossibleRange](../1560059-anonymous/erraeimpossiblerange.md): The range is not valid because it is impossiblefor a range to include the first and last objects that were specified;an example is a range in which the offset of the first object is greaterthan the offset of the last object
- [errAEWrongNumberArgs](../1560059-anonymous/erraewrongnumberargs.md): The number of operands provided for the `kAENOT` logicaloperator is not 1
- [errAEAccessorNotFound](../1560059-anonymous/erraeaccessornotfound.md): There is no object accessor function forthe specified object class and container type
- [errAENoSuchLogical](../1560059-anonymous/erraenosuchlogical.md): The logical operator in a logical descriptoris not `kAEAND`, `kAEOR`,or `kAENOT`
- [errAEBadTestKey](../1560059-anonymous/erraebadtestkey.md): The descriptor in a test key is neithera comparison descriptor nor a logical descriptor
- [errAENotAnObjectSpec](https://developer.apple.com/documentation/applicationservices/apple_event_manager/erraenotanobjectspec): The `objSpecifier` parameterof `AEResolve` is not anobject specifier
- [errAENoSuchObject](../1560059-anonymous/erraenosuchobject.md): Runtime resolution of an object failed.
- [errAENegativeCount](../1560059-anonymous/erraenegativecount.md): An object-counting function returned a negativeresult
- [errAEEmptyListContainer](../1560059-anonymous/erraeemptylistcontainer.md): The container for an Apple event objectis specified by an empty list
- [errAEUnknownObjectType](../1560059-anonymous/erraeunknownobjecttype.md): The object type isn’t recognized
- [errAERecordingIsAlreadyOn](../1560059-anonymous/erraerecordingisalreadyon.md): Recording is already on
- [errAEReceiveTerminate](../1560059-anonymous/erraereceiveterminate.md): Break out of all levels of `AEReceive` tothe topmost (1.1 or greater)
- [errAEReceiveEscapeCurrent](../1560059-anonymous/erraereceiveescapecurrent.md): Break out of lowest level only of `AEReceive` (1.1or greater)
- [errAEEventFiltered](../1560059-anonymous/erraeeventfiltered.md): Event has been filtered and should not bepropagated (1.1 or greater)
- [errAEDuplicateHandler](../1560059-anonymous/erraeduplicatehandler.md): Attempt to install handler in table foridentical class and ID (1.1 or greater)
- [errAEStreamBadNesting](../1560059-anonymous/erraestreambadnesting.md): Nesting violation while streaming
- [errAEStreamAlreadyConverted](../1560059-anonymous/erraestreamalreadyconverted.md): Attempt to convert a stream that has alreadybeen converted
- [errAEDescIsNull](../1560059-anonymous/erraedescisnull.md): Attempt to perform an invalid operationon a null descriptor
- [errAEBuildSyntaxError](../1560059-anonymous/erraebuildsyntaxerror.md): `AEBuildDesc` andrelated functions detected a syntax error
- [errAEBufferTooSmall](../1560059-anonymous/erraebuffertoosmall.md): Buffer for `AEFlattenDesc` toosmall
- [errASCantConsiderAndIgnore](../1559945-anonymous/errascantconsiderandignore.md): Can’t both consider and ignore \<attribute\>.
- [errASCantCompareMoreThan32k](../1559945-anonymous/errascantcomparemorethan32k.md): Can’t perform operation on text longerthan 32K bytes.
- [errASTerminologyNestingTooDeep](../1559945-anonymous/errasterminologynestingtoodeep.md): Tell statements are nested too deeply.
- [errASIllegalFormalParameter](../1559945-anonymous/errasillegalformalparameter.md): \<name\> is illegal as a formal parameter.
- [errASParameterNotForEvent](../1559945-anonymous/errasparameternotforevent.md): \<name\> is not a parameter name for the event \<event\>.
- [errASNoResultReturned](../1559945-anonymous/errasnoresultreturned.md): No result was returned for some argumentof this expression.
- [errAEEventFailed](erraeeventfailed.md): Apple event handler failed.
- [errAETypeError](erraetypeerror.md): A descriptor type mismatch occurred.
- [errAEBadKeyForm](erraebadkeyform.md): Invalid key form.
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
- [errAECantPutThatThere](erraecantputthatthere.md): In make new, duplicate, etc. class can'tbe an element of container
- [errAEPropertiesClash](erraepropertiesclash.md): Illegal combination of properties settingsfor SetData, make new, or duplicate
