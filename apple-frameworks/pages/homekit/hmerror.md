> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmerror](https://developer.apple.com/documentation/homekit/hmerror)

# HMError

**Framework:** HomeKit  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An error HomeKit returns.

## Declaration

```swift
struct HMError
```

## Topics

### Obtaining error information

- [HMErrorDomain](hmerrordomain.md): A string that identifies the HomeKit error domain.

### Detecting accessory errors

- [accessoryIsBlocked](hmerror/accessoryisblocked.md): An error indicating a blocked accessory.
- [accessoryIsBusy](hmerror/accessoryisbusy.md): An error indicating the accessory is busy.
- [accessoryIsSuspended](hmerror/accessoryissuspended.md): The accessory is suspended.
- [accessoryNotReachable](hmerror/accessorynotreachable.md): An error indicating the accessory is not reachable over the network.
- [accessoryOutOfCompliance](hmerror/accessoryoutofcompliance.md): An error indicating the accessory is out of compliance.
- [accessoryOutOfResources](hmerror/accessoryoutofresources.md): An error indicating the accessory is out of resources.
- [accessoryPoweredOff](hmerror/accessorypoweredoff.md): An error indicating the accessory is off.
- [accessoryResponseError](hmerror/accessoryresponseerror.md): An error with the accessory’s response.
- [addAccessoryFailed](hmerror/addaccessoryfailed.md): A failed attempt to add an accessory.
- [incompatibleAccessory](hmerror/incompatibleaccessory.md): The accessory is incompatible.

### Detecting action set errors

- [actionInAnotherActionSet](hmerror/actioninanotheractionset.md): An attempt to add an action that exists in one action set to another action set.
- [actionSetExecutionFailed](hmerror/actionsetexecutionfailed.md): An attempt to execute the action set failed.
- [actionSetExecutionInProgress](hmerror/actionsetexecutioninprogress.md): An error indicating the execution of the action set is in progress.
- [actionSetExecutionPartialSuccess](hmerror/actionsetexecutionpartialsuccess.md): An attempt to execute the action set was only partially successful.
- [cannotRemoveBuiltinActionSet](hmerror/cannotremovebuiltinactionset.md): An error indicating the built-in action set cannot be removed.
- [noActionsInActionSet](hmerror/noactionsinactionset.md): An attempt to execute an action set with no actions.
- [noRegisteredActionSets](hmerror/noregisteredactionsets.md): An attempt to activate a trigger with no action sets.

### Detecting association errors

- [invalidAssociatedServiceType](hmerror/invalidassociatedservicetype.md): An error indicating an invalid service type.
- [objectAlreadyAssociatedToHome](hmerror/objectalreadyassociatedtohome.md): An attempt to associate an object with a home when it’s already associated with that home.
- [objectAssociatedToAnotherHome](hmerror/objectassociatedtoanotherhome.md): An attempt to associate an object with a home when it’s already associated with another home.
- [objectNotAssociatedToAnyHome](hmerror/objectnotassociatedtoanyhome.md): An attempt to perform an operation on an object that is not associated to any home.

### Detecting authorization errors

- [invalidOrMissingAuthorizationData](hmerror/invalidormissingauthorizationdata.md): An error indicating the authorization data is invalid or missing.
- [locationForHomeDisabled](hmerror/locationforhomedisabled.md): An error indicating the home’s location is disabled.
- [homeAccessNotAuthorized](hmerror/homeaccessnotauthorized.md): An error indicating access to the home is not authorized.
- [insufficientPrivileges](hmerror/insufficientprivileges.md): An error indicating insufficient privileges for the operation.
- [messageAuthenticationFailed](hmerror/messageauthenticationfailed.md): A message authentication failure.
- [notAuthorizedForLocationServices](hmerror/notauthorizedforlocationservices.md): An error indicating location services are not authorized.
- [notAuthorizedForMicrophoneAccess](hmerror/notauthorizedformicrophoneaccess.md): An error indicating microphone access is not authorized.
- [notSignedIntoiCloud](hmerror/notsignedintoicloud.md): An error indicating the user is not signed into iCloud.
- [ownershipFailure](hmerror/ownershipfailure.md): The ownership code did not match.
- [securityFailure](hmerror/securityfailure.md): A security failure.

### Detecting bridge errors

- [bridgedAccessoryNotReachable](hmerror/bridgedaccessorynotreachable.md): An error indicating the bridged accessory cannot be reached.
- [cannotRemoveNonBridgeAccessory](hmerror/cannotremovenonbridgeaccessory.md): An attempt to remove a bridged accessory.
- [cannotUnblockNonBridgeAccessory](hmerror/cannotunblocknonbridgeaccessory.md): An error indicating a non-bridge accessory cannot be unblocked.

### Detecting characteristic errors

- [readOnlyCharacteristic](hmerror/readonlycharacteristic.md): An attempt to modify a read-only value.
- [writeOnlyCharacteristic](hmerror/writeonlycharacteristic.md): An attempt to read from a write-only characteristic.

### Detecting collision errors

- [homeWithSimilarNameExists](hmerror/homewithsimilarnameexists.md): An attempt to assign a home the same name as an existing home.
- [objectWithSimilarNameExists](hmerror/objectwithsimilarnameexists.md): An object with a similar name already exists.
- [objectWithSimilarNameExistsInHome](hmerror/objectwithsimilarnameexistsinhome.md): An attempt to give the name of one object to another object in the home.
- [renameWithSimilarName](hmerror/renamewithsimilarname.md): An attempt to rename an object with its current name.

### Detecting communication errors

- [accessDenied](hmerror/accessdenied.md): An error indicating the current user doesn’t have privileges to perform the operation.
- [accessoryCommunicationFailure](hmerror/accessorycommunicationfailure.md): The accessory failed to communicate.
- [accessoryPairingFailed](hmerror/accessorypairingfailed.md): An attempt to pair with the accessory has failed.
- [accessorySentInvalidResponse](hmerror/accessorysentinvalidresponse.md): An error indicating the accessory sent an invalid response.
- [clientRequestError](hmerror/clientrequesterror.md): An error with the client request.
- [communicationFailure](hmerror/communicationfailure.md): A communication failure.
- [dataResetFailure](hmerror/dataresetfailure.md): An attempt to reset the data failed.
- [timedOutWaitingForAccessory](hmerror/timedoutwaitingforaccessory.md): An accessory did not respond timely.
- [partialCommunicationFailure](hmerror/partialcommunicationfailure.md)

### Detecting device and discovery errors

- [deviceLocked](hmerror/devicelocked.md): An error indicating the device is locked.
- [accessoryDiscoveryFailed](hmerror/accessorydiscoveryfailed.md): An error indicating that accessory discovery failed.

### Detecting general errors

- [alreadyExists](hmerror/alreadyexists.md): An error indicating the container already contains the object you are trying to add.
- [genericError](hmerror/genericerror.md): An error that does not have a more specific error code.
- [incompatibleHomeHub](hmerror/incompatiblehomehub.md): Deprecated. No compatible home hub found.
- [invalidClass](hmerror/invalidclass.md): An attempt to use an abstract base class in an operation instead of a concrete subclass.
- [notFound](hmerror/notfound.md): An error indicating the object was not found in the container.
- [notificationAlreadyEnabled](hmerror/notificationalreadyenabled.md): An error indicating the notification is already enabled.
- [notificationNotSupported](hmerror/notificationnotsupported.md): An attempt to register for notifications from an accessory that does not support notifications.
- [operationNotSupported](hmerror/operationnotsupported.md): An attempt to use an unsupported operation.
- [unexpectedError](hmerror/unexpectederror.md): An unexpected error.
- [missingEntitlement](hmerror/missingentitlement.md): An error indicating a required entitlement is not available.
- [referToUserManual](hmerror/refertousermanual.md): An error described in the device’s user manual.

### Detecting home and room errors

- [maximumAccessoriesOfTypeInHome](hmerror/maximumaccessoriesoftypeinhome.md): The home already has the maximum number of accessories of the given type.
- [roomForHomeCannotBeInZone](hmerror/roomforhomecannotbeinzone.md): An attempt to add the room that represents the entire home to a zone.
- [roomForHomeCannotBeUpdated](hmerror/roomforhomecannotbeupdated.md): An attempt to change the room that represents the entire home.

### Detecting hub errors

- [noHomeHub](hmerror/nohomehub.md): An error indicating no home hub found.
- [noCompatibleHomeHub](hmerror/nocompatiblehomehub.md): An error indicating no compatible home hub found.
- [incompatibleHomeHub](hmerror/code/incompatiblehomehub.md): Deprecated. An error indicating an incompatible home hub.

### Detecting limit errors

- [cannotActivateTriggerTooFarInFuture](hmerror/cannotactivatetriggertoofarinfuture.md): An error indicating the trigger cannot be activated because it is set too far in the future.
- [dateMustBeOnSpecifiedBoundaries](hmerror/datemustbeonspecifiedboundaries.md): An error indicating the date is not on the specified boundaries.
- [fireDateInPast](hmerror/firedateinpast.md): An attempt to activate a timer trigger with a date in the past.
- [invalidMessageSize](hmerror/invalidmessagesize.md): An error indicating an invalid message size.
- [maximumObjectLimitReached](hmerror/maximumobjectlimitreached.md): An error indicating the maximum object count has been reached.
- [recurrenceTooLarge](hmerror/recurrencetoolarge.md): An attempt to use a recurrence period that is too large.
- [recurrenceTooSmall](hmerror/recurrencetoosmall.md): An error indicating the recurrence interval is too short.
- [recurrenceMustBeOnSpecifiedBoundaries](hmerror/recurrencemustbeonspecifiedboundaries.md): An error indicating the recurrence rule is not on the specified boundaries.

### Detecting network errors

- [enterpriseNetworkNotSupported](hmerror/enterprisenetworknotsupported.md): An enterprise network doesn’t support this accessory.
- [failedToJoinNetwork](hmerror/failedtojoinnetwork.md): The accessory failed to join the network.
- [incompatibleNetwork](hmerror/incompatiblenetwork.md): An error indicating an incompatible network.
- [networkUnavailable](hmerror/networkunavailable.md): An error indicating the network is unavailable.
- [wiFiCredentialGenerationFailed](hmerror/wificredentialgenerationfailed.md): WiFi credential generation failed.

### Detecting operation errors

- [operationCancelled](hmerror/operationcancelled.md): An error indicating the user canceled the operation.
- [operationInProgress](hmerror/operationinprogress.md): An error indicating the operation is already in progress.
- [operationTimedOut](hmerror/operationtimedout.md): An error indicating the operation timed out.

### Detecting parameter errors

- [invalidParameter](hmerror/invalidparameter.md): An error indicating the object is invalid for the given operation.
- [missingParameter](hmerror/missingparameter.md): An error indicating a missing parameter.
- [nilParameter](hmerror/nilparameter.md): An error indicating that nil was passed for an operation that does not accept nil.
- [unconfiguredParameter](hmerror/unconfiguredparameter.md): An error indicating an unconfigured parameter.

### Detecting read and write errors

- [readWriteFailure](hmerror/readwritefailure.md): An error indicating a failed read/write operation.
- [readWritePartialSuccess](hmerror/readwritepartialsuccess.md): An error indicating a partially successful read/write operation.

### Detecting synchronization errors

- [cloudDataSyncInProgress](hmerror/clouddatasyncinprogress.md): An error indicating a data synchronization operation is in progress.
- [keychainSyncNotEnabled](hmerror/keychainsyncnotenabled.md): An error indicating Keychain syncing is not enabled for the user.

### Detecting user errors

- [userDeclinedAddingUser](hmerror/userdeclinedaddinguser.md): An error indicating the user canceled the add user operation.
- [userDeclinedRemovingUser](hmerror/userdeclinedremovinguser.md): An error indicating the user canceled the remove user operation.
- [userDeclinedInvite](hmerror/userdeclinedinvite.md): An error indicating the user declined the invitation.
- [userIDNotEmailAddress](hmerror/useridnotemailaddress.md): An error indicating the user’s ID is not a valid email address.
- [userManagementFailed](hmerror/usermanagementfailed.md): A user management error not covered by the other errors.

### Detecting value errors

- [invalidDataFormatSpecified](hmerror/invaliddataformatspecified.md): An error indicating an invalid data format was specified.
- [invalidValueType](hmerror/invalidvaluetype.md): An attempt to use an invalid value type.
- [nameContainsProhibitedCharacters](hmerror/namecontainsprohibitedcharacters.md): An attempt to name an object with prohibited characters.
- [nameDoesNotEndWithValidCharacters](hmerror/namedoesnotendwithvalidcharacters.md): An error indicating the provided name has invalid characters at the end.
- [nameDoesNotStartWithValidCharacters](hmerror/namedoesnotstartwithvalidcharacters.md): An attempt to start the name of an object with invalid characters.
- [stringLongerThanMaximum](hmerror/stringlongerthanmaximum.md): An attempt to use a string longer than the maximum allowed.
- [stringShorterThanMinimum](hmerror/stringshorterthanminimum.md): An attempt to use a string shorter than the required minimum.
- [valueHigherThanMaximum](hmerror/valuehigherthanmaximum.md): An attempt to use a numeric value higher than the specified maximum value.
- [valueLowerThanMinimum](hmerror/valuelowerthanminimum.md): An attempt to use a numeric value lower than the specified minimum value.

### Enumerating errors

- [HMError.Code](hmerror/code.md): Possible error values that can be returned from HomeKit APIs.

### Type Properties

- [errorDomain](hmerror/errordomain.md)
- [homeUpgradeRequired](hmerror/homeupgraderequired.md)

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [HMErrorDomain](hmerrordomain.md): A string that identifies the HomeKit error domain.
- [HMError.Code](hmerror/code.md): Possible error values that can be returned from HomeKit APIs.
- [HMErrorBlock](hmerrorblock.md): A completion block that provides an error.
