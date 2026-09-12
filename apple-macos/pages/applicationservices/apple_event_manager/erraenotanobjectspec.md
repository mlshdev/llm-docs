> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/apple_event_manager/erraenotanobjectspec](https://developer.apple.com/documentation/applicationservices/apple_event_manager/erraenotanobjectspec)

# errAENotAnObjectSpec

**Interface language:** Objective-C

**Framework:** Core Services

The `objSpecifier` parameterof `AEResolve` is not anobject specifier

## See Also

### Result Codes

- [noPortErr](https://developer.apple.com/documentation/coreservices/1560074-anonymous/noporterr): Client hasn’t set `'SIZE'` resource toindicate awareness of high-level events
- [destPortErr](https://developer.apple.com/documentation/coreservices/1560074-anonymous/destporterr): Server hasn’t set `'SIZE'` resource toindicate awareness of high-level events, or else is not present
- [sessClosedErr](https://developer.apple.com/documentation/coreservices/1560074-anonymous/sessclosederr): The `kAEDontReconnect` flagin the `sendMode` parameterwas set and the server quit, then restarted
- [errAECoercionFail](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraecoercionfail): Data could not be coerced to the requesteddescriptor type
- [errAEDescNotFound](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraedescnotfound): Descriptor was not found
- [errAECorruptData](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraecorruptdata): Data in an Apple event could not be read
- [errAEWrongDataType](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraewrongdatatype): Wrong descriptor type
- [errAENotAEDesc](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraenotaedesc): Not a valid descriptor
- [errAEBadListItem](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraebadlistitem): Operation involving a list item failed
- [errAENewerVersion](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraenewerversion): Need a newer version of the Apple EventManager
- [errAENotAppleEvent](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraenotappleevent): The event is not in AppleEvent format.
- [errAEEventNotHandled](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraeeventnothandled): Event wasn’t handled by an Apple eventhandler
- [errAEReplyNotValid](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraereplynotvalid): `AEResetTimer` was passed an invalid reply
- [errAEUnknownSendMode](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraeunknownsendmode): Invalid sending mode was passed
- [errAEWaitCanceled](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraewaitcanceled): User canceled out of wait loop for replyor receipt
- [errAETimeout](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraetimeout): Apple event timed out
- [errAENoUserInteraction](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraenouserinteraction): No user interaction allowed
- [errAENotASpecialFunction](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraenotaspecialfunction): Wrong keyword for a special function
- [errAEParamMissed](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraeparammissed): A required parameter was not accessed.
- [errAEUnknownAddressType](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraeunknownaddresstype): Unknown Apple event address type
- [errAEHandlerNotFound](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraehandlernotfound): No handler found for an Apple event
- [errAEReplyNotArrived](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraereplynotarrived): Reply has not yet arrived
- [errAEIllegalIndex](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraeillegalindex): Not a valid list index
- [errAEImpossibleRange](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraeimpossiblerange): The range is not valid because it is impossiblefor a range to include the first and last objects that were specified;an example is a range in which the offset of the first object is greaterthan the offset of the last object
- [errAEWrongNumberArgs](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraewrongnumberargs): The number of operands provided for the `kAENOT` logicaloperator is not 1
- [errAEAccessorNotFound](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraeaccessornotfound): There is no object accessor function forthe specified object class and container type
- [errAENoSuchLogical](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraenosuchlogical): The logical operator in a logical descriptoris not `kAEAND`, `kAEOR`,or `kAENOT`
- [errAEBadTestKey](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraebadtestkey): The descriptor in a test key is neithera comparison descriptor nor a logical descriptor
- [errAENoSuchObject](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraenosuchobject): Runtime resolution of an object failed.
- [errAENegativeCount](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraenegativecount): An object-counting function returned a negativeresult
- [errAEEmptyListContainer](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraeemptylistcontainer): The container for an Apple event objectis specified by an empty list
- [errAEUnknownObjectType](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraeunknownobjecttype): The object type isn’t recognized
- [errAERecordingIsAlreadyOn](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraerecordingisalreadyon): Recording is already on
- [errAEReceiveTerminate](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraereceiveterminate): Break out of all levels of `AEReceive` tothe topmost (1.1 or greater)
- [errAEReceiveEscapeCurrent](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraereceiveescapecurrent): Break out of lowest level only of `AEReceive` (1.1or greater)
- [errAEEventFiltered](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraeeventfiltered): Event has been filtered and should not bepropagated (1.1 or greater)
- [errAEDuplicateHandler](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraeduplicatehandler): Attempt to install handler in table foridentical class and ID (1.1 or greater)
- [errAEStreamBadNesting](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraestreambadnesting): Nesting violation while streaming
- [errAEStreamAlreadyConverted](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraestreamalreadyconverted): Attempt to convert a stream that has alreadybeen converted
- [errAEDescIsNull](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraedescisnull): Attempt to perform an invalid operationon a null descriptor
- [errAEBuildSyntaxError](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraebuildsyntaxerror): `AEBuildDesc` andrelated functions detected a syntax error
- [errAEBufferTooSmall](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraebuffertoosmall): Buffer for `AEFlattenDesc` toosmall
- [errASCantConsiderAndIgnore](https://developer.apple.com/documentation/coreservices/1559945-anonymous/errascantconsiderandignore): Can’t both consider and ignore \<attribute\>.
- [errASCantCompareMoreThan32k](https://developer.apple.com/documentation/coreservices/1559945-anonymous/errascantcomparemorethan32k): Can’t perform operation on text longerthan 32K bytes.
- [errASTerminologyNestingTooDeep](https://developer.apple.com/documentation/coreservices/1559945-anonymous/errasterminologynestingtoodeep): Tell statements are nested too deeply.
- [errASIllegalFormalParameter](https://developer.apple.com/documentation/coreservices/1559945-anonymous/errasillegalformalparameter): \<name\> is illegal as a formal parameter.
- [errASParameterNotForEvent](https://developer.apple.com/documentation/coreservices/1559945-anonymous/errasparameternotforevent): \<name\> is not a parameter name for the event \<event\>.
- [errASNoResultReturned](https://developer.apple.com/documentation/coreservices/1559945-anonymous/errasnoresultreturned): No result was returned for some argumentof this expression.
- [errAEEventFailed](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraeeventfailed): Apple event handler failed.
- [errAETypeError](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraetypeerror): A descriptor type mismatch occurred.
- [errAEBadKeyForm](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraebadkeyform): Invalid key form.
- [errAENotModifiable](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraenotmodifiable): Can't set \<object or data\> to \<object or data\>. Access not allowed.
- [errAEPrivilegeError](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraeprivilegeerror): A privilege violation occurred.
- [errAEReadDenied](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraereaddenied): The read operation was not allowed.
- [errAEWriteDenied](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraewritedenied): Can't set \<object or data\> to \<object or data\>.
- [errAEIndexTooLarge](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraeindextoolarge): The index of the event is too large to bevalid.
- [errAENotAnElement](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraenotanelement): The specified object is a property, notan element.
- [errAECantSupplyType](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraecantsupplytype): Can’t supply the requested descriptortype for the data.
- [errAECantHandleClass](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraecanthandleclass): The Apple event handler can’t handle objectsof this class.
- [errAEInTransaction](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraeintransaction): Couldn’t handle this command because itwasn’t part of the current transaction.
- [errAENoSuchTransaction](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraenosuchtransaction): The transaction to which this command belongedisn’t a valid transaction.
- [errAENoUserSelection](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraenouserselection): There is no user selection.
- [errAENotASingleObject](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraenotasingleobject): Handler only handles single objects.
- [errAECantUndo](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraecantundo): Can’t undo the previous Apple event oruser action.
- [errAENotAnEnumMember](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraenotanenummember): Enumerated value in `SetData` is notallowed for this property
- [errAECantPutThatThere](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraecantputthatthere): In make new, duplicate, etc. class can'tbe an element of container
- [errAEPropertiesClash](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraepropertiesclash): Illegal combination of properties settingsfor SetData, make new, or duplicate
