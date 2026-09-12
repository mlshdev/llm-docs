> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/cocoaerror](https://developer.apple.com/documentation/foundation/cocoaerror)

# CocoaError

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Describes errors within the Cocoa error domain.

## Declaration

```swift
struct CocoaError
```

## Topics

### Structures

- [CocoaError.Code](cocoaerror/code.md): The error code itself.

### Instance Properties

- [affectedObjects](cocoaerror/affectedobjects.md)
- [affectedStores](cocoaerror/affectedstores.md)
- [filePath](cocoaerror/filepath.md): The file path associated with the error, if any.
- [isCoderError](cocoaerror/iscodererror.md)
- [isExecutableError](cocoaerror/isexecutableerror.md)
- [isFileError](cocoaerror/isfileerror.md)
- [isFontError](cocoaerror/isfonterror.md)
- [isFormattingError](cocoaerror/isformattingerror.md)
- [isPropertyListError](cocoaerror/ispropertylisterror.md)
- [isServiceError](cocoaerror/isserviceerror.md)
- [isSharingServiceError](cocoaerror/issharingserviceerror.md)
- [isTextReadWriteError](cocoaerror/istextreadwriteerror.md)
- [isUbiquitousFileError](cocoaerror/isubiquitousfileerror.md)
- [isUserActivityError](cocoaerror/isuseractivityerror.md)
- [isValidationError](cocoaerror/isvalidationerror.md)
- [isXPCConnectionError](cocoaerror/isxpcconnectionerror.md)
- [persistentStoreSaveConflicts](cocoaerror/persistentstoresaveconflicts-swift.property.md)
- [stringEncoding](cocoaerror/stringencoding.md): The string encoding associated with this error, if any.
- [underlying](cocoaerror/underlying.md): The underlying error behind this error, if any.
- [underlyingErrors](cocoaerror/underlyingerrors.md): A list of underlying errors, if any. It includes the values of both NSUnderlyingErrorKey and NSMultipleUnderlyingErrorsKey. If there are no underlying errors, returns an empty array.
- [url](cocoaerror/url.md): The URL associated with this error, if any.
- [validationKey](cocoaerror/validationkey.md)
- [validationObject](cocoaerror/validationobject.md)
- [validationPredicate](cocoaerror/validationpredicate.md)
- [validationValue](cocoaerror/validationvalue.md)

### Type Properties

- [ServiceApplicationLaunchFailedError](cocoaerror/serviceapplicationlaunchfailederror-4hf03.md): Deprecated.
- [ServiceApplicationNotFoundError](cocoaerror/serviceapplicationnotfounderror-9j679.md): Deprecated.
- [ServiceInvalidPasteboardDataError](cocoaerror/serviceinvalidpasteboarddataerror-4tjaw.md): Deprecated.
- [ServiceMalformedServiceDictionaryError](cocoaerror/servicemalformedservicedictionaryerror-5cpn1.md): Deprecated.
- [ServiceMiscellaneousError](cocoaerror/servicemiscellaneouserror-3ti3r.md): Deprecated.
- [ServiceRequestTimedOutError](cocoaerror/servicerequesttimedouterror-7kzoa.md): Deprecated.
- [SharingServiceNotConfiguredError](cocoaerror/sharingservicenotconfigurederror-5lamn.md): Deprecated.
- [TextReadInapplicableDocumentTypeError](cocoaerror/textreadinapplicabledocumenttypeerror-9o1dx.md): Deprecated.
- [TextWriteInapplicableDocumentTypeError](cocoaerror/textwriteinapplicabledocumenttypeerror-4aoa6.md): Deprecated.
- [coderInvalidValue](cocoaerror/coderinvalidvalue.md)
- [coderReadCorrupt](cocoaerror/coderreadcorrupt.md)
- [coderReadCorruptError](cocoaerror/coderreadcorrupterror.md): Deprecated.
- [coderValueNotFound](cocoaerror/codervaluenotfound.md)
- [coderValueNotFoundError](cocoaerror/codervaluenotfounderror.md): Deprecated.
- [coreData](cocoaerror/coredata.md)
- [coreDataError](cocoaerror/coredataerror.md): Deprecated.
- [entityMigrationPolicy](cocoaerror/entitymigrationpolicy.md)
- [entityMigrationPolicyError](cocoaerror/entitymigrationpolicyerror.md): Deprecated.
- [executableArchitectureMismatch](cocoaerror/executablearchitecturemismatch.md)
- [executableArchitectureMismatchError](cocoaerror/executablearchitecturemismatcherror.md): Deprecated.
- [executableLink](cocoaerror/executablelink.md)
- [executableLinkError](cocoaerror/executablelinkerror.md): Deprecated.
- [executableLoad](cocoaerror/executableload.md)
- [executableLoadError](cocoaerror/executableloaderror.md): Deprecated.
- [executableNotLoadable](cocoaerror/executablenotloadable.md)
- [executableNotLoadableError](cocoaerror/executablenotloadableerror.md): Deprecated.
- [executableRuntimeMismatch](cocoaerror/executableruntimemismatch.md)
- [executableRuntimeMismatchError](cocoaerror/executableruntimemismatcherror.md): Deprecated.
- [externalRecordImport](cocoaerror/externalrecordimport.md)
- [externalRecordImportError](cocoaerror/externalrecordimporterror.md): Deprecated.
- [featureUnsupported](cocoaerror/featureunsupported.md)
- [featureUnsupportedError](cocoaerror/featureunsupportederror.md): Deprecated.
- [fileLocking](cocoaerror/filelocking.md)
- [fileLockingError](cocoaerror/filelockingerror.md): Deprecated.
- [fileManagerUnmountBusy](cocoaerror/filemanagerunmountbusy.md)
- [fileManagerUnmountBusyError](cocoaerror/filemanagerunmountbusyerror.md): Deprecated.
- [fileManagerUnmountUnknown](cocoaerror/filemanagerunmountunknown.md)
- [fileManagerUnmountUnknownError](cocoaerror/filemanagerunmountunknownerror.md): Deprecated.
- [fileNoSuchFile](cocoaerror/filenosuchfile.md)
- [fileNoSuchFileError](cocoaerror/filenosuchfileerror.md): Deprecated.
- [fileReadCorruptFile](cocoaerror/filereadcorruptfile.md)
- [fileReadCorruptFileError](cocoaerror/filereadcorruptfileerror.md): Deprecated.
- [fileReadInapplicableStringEncoding](cocoaerror/filereadinapplicablestringencoding.md)
- [fileReadInapplicableStringEncodingError](cocoaerror/filereadinapplicablestringencodingerror.md): Deprecated.
- [fileReadInvalidFileName](cocoaerror/filereadinvalidfilename.md)
- [fileReadInvalidFileNameError](cocoaerror/filereadinvalidfilenameerror.md): Deprecated.
- [fileReadNoPermission](cocoaerror/filereadnopermission.md)
- [fileReadNoPermissionError](cocoaerror/filereadnopermissionerror.md): Deprecated.
- [fileReadNoSuchFile](cocoaerror/filereadnosuchfile.md)
- [fileReadNoSuchFileError](cocoaerror/filereadnosuchfileerror.md): Deprecated.
- [fileReadTooLarge](cocoaerror/filereadtoolarge.md)
- [fileReadTooLargeError](cocoaerror/filereadtoolargeerror.md): Deprecated.
- [fileReadUnknown](cocoaerror/filereadunknown.md)
- [fileReadUnknownError](cocoaerror/filereadunknownerror.md): Deprecated.
- [fileReadUnknownStringEncoding](cocoaerror/filereadunknownstringencoding.md)
- [fileReadUnknownStringEncodingError](cocoaerror/filereadunknownstringencodingerror.md): Deprecated.
- [fileReadUnsupportedScheme](cocoaerror/filereadunsupportedscheme.md)
- [fileReadUnsupportedSchemeError](cocoaerror/filereadunsupportedschemeerror.md): Deprecated.
- [fileWriteFileExists](cocoaerror/filewritefileexists.md)
- [fileWriteFileExistsError](cocoaerror/filewritefileexistserror.md): Deprecated.
- [fileWriteInapplicableStringEncoding](cocoaerror/filewriteinapplicablestringencoding.md)
- [fileWriteInapplicableStringEncodingError](cocoaerror/filewriteinapplicablestringencodingerror.md): Deprecated.
- [fileWriteInvalidFileName](cocoaerror/filewriteinvalidfilename.md)
- [fileWriteInvalidFileNameError](cocoaerror/filewriteinvalidfilenameerror.md): Deprecated.
- [fileWriteNoPermission](cocoaerror/filewritenopermission.md)
- [fileWriteNoPermissionError](cocoaerror/filewritenopermissionerror.md): Deprecated.
- [fileWriteOutOfSpace](cocoaerror/filewriteoutofspace.md)
- [fileWriteOutOfSpaceError](cocoaerror/filewriteoutofspaceerror.md): Deprecated.
- [fileWriteUnknown](cocoaerror/filewriteunknown.md)
- [fileWriteUnknownError](cocoaerror/filewriteunknownerror.md): Deprecated.
- [fileWriteUnsupportedScheme](cocoaerror/filewriteunsupportedscheme.md)
- [fileWriteUnsupportedSchemeError](cocoaerror/filewriteunsupportedschemeerror.md): Deprecated.
- [fileWriteVolumeReadOnly](cocoaerror/filewritevolumereadonly.md)
- [fileWriteVolumeReadOnlyError](cocoaerror/filewritevolumereadonlyerror.md): Deprecated.
- [fontAssetDownloadError](cocoaerror/fontassetdownloaderror.md)
- [formatting](cocoaerror/formatting.md)
- [formattingError](cocoaerror/formattingerror.md): Deprecated.
- [inferredMappingModel](cocoaerror/inferredmappingmodel.md)
- [inferredMappingModelError](cocoaerror/inferredmappingmodelerror.md): Deprecated.
- [keyValueValidation](cocoaerror/keyvaluevalidation.md)
- [keyValueValidationError](cocoaerror/keyvaluevalidationerror.md): Deprecated.
- [managedObjectConstraintMerge](cocoaerror/managedobjectconstraintmerge.md)
- [managedObjectConstraintMergeError](cocoaerror/managedobjectconstraintmergeerror.md): Deprecated.
- [managedObjectContextLocking](cocoaerror/managedobjectcontextlocking.md)
- [managedObjectContextLockingError](cocoaerror/managedobjectcontextlockingerror.md): Deprecated.
- [managedObjectExternalRelationship](cocoaerror/managedobjectexternalrelationship.md)
- [managedObjectExternalRelationshipError](cocoaerror/managedobjectexternalrelationshiperror.md): Deprecated.
- [managedObjectMerge](cocoaerror/managedobjectmerge.md)
- [managedObjectMergeError](cocoaerror/managedobjectmergeerror.md): Deprecated.
- [managedObjectReferentialIntegrity](cocoaerror/managedobjectreferentialintegrity.md)
- [managedObjectReferentialIntegrityError](cocoaerror/managedobjectreferentialintegrityerror.md): Deprecated.
- [managedObjectValidation](cocoaerror/managedobjectvalidation.md)
- [managedObjectValidationError](cocoaerror/managedobjectvalidationerror.md): Deprecated.
- [migration](cocoaerror/migration.md)
- [migrationCancelled](cocoaerror/migrationcancelled.md)
- [migrationCancelledError](cocoaerror/migrationcancellederror.md): Deprecated.
- [migrationError](cocoaerror/migrationerror.md): Deprecated.
- [migrationManagerDestinationStore](cocoaerror/migrationmanagerdestinationstore.md)
- [migrationManagerDestinationStoreError](cocoaerror/migrationmanagerdestinationstoreerror.md): Deprecated.
- [migrationManagerSourceStore](cocoaerror/migrationmanagersourcestore.md)
- [migrationManagerSourceStoreError](cocoaerror/migrationmanagersourcestoreerror.md): Deprecated.
- [migrationMissingMappingModel](cocoaerror/migrationmissingmappingmodel.md)
- [migrationMissingMappingModelError](cocoaerror/migrationmissingmappingmodelerror.md): Deprecated.
- [migrationMissingSourceModel](cocoaerror/migrationmissingsourcemodel.md)
- [migrationMissingSourceModelError](cocoaerror/migrationmissingsourcemodelerror.md): Deprecated.
- [persistentStoreCoordinatorLocking](cocoaerror/persistentstorecoordinatorlocking.md)
- [persistentStoreCoordinatorLockingError](cocoaerror/persistentstorecoordinatorlockingerror.md): Deprecated.
- [persistentStoreIncompatibleSchema](cocoaerror/persistentstoreincompatibleschema.md)
- [persistentStoreIncompatibleSchemaError](cocoaerror/persistentstoreincompatibleschemaerror.md): Deprecated.
- [persistentStoreIncompatibleVersionHash](cocoaerror/persistentstoreincompatibleversionhash.md)
- [persistentStoreIncompatibleVersionHashError](cocoaerror/persistentstoreincompatibleversionhasherror.md): Deprecated.
- [persistentStoreIncompleteSave](cocoaerror/persistentstoreincompletesave.md)
- [persistentStoreIncompleteSaveError](cocoaerror/persistentstoreincompletesaveerror.md): Deprecated.
- [persistentStoreInvalidType](cocoaerror/persistentstoreinvalidtype.md)
- [persistentStoreInvalidTypeError](cocoaerror/persistentstoreinvalidtypeerror.md): Deprecated.
- [persistentStoreOpen](cocoaerror/persistentstoreopen.md)
- [persistentStoreOpenError](cocoaerror/persistentstoreopenerror.md): Deprecated.
- [persistentStoreOperation](cocoaerror/persistentstoreoperation.md)
- [persistentStoreOperationError](cocoaerror/persistentstoreoperationerror.md): Deprecated.
- [persistentStoreSave](cocoaerror/persistentstoresave.md)
- [persistentStoreSaveConflicts](cocoaerror/persistentstoresaveconflicts-swift.type.property.md)
- [persistentStoreSaveConflictsError](cocoaerror/persistentstoresaveconflictserror.md): Deprecated.
- [persistentStoreSaveError](cocoaerror/persistentstoresaveerror.md): Deprecated.
- [persistentStoreTimeout](cocoaerror/persistentstoretimeout.md)
- [persistentStoreTimeoutError](cocoaerror/persistentstoretimeouterror.md): Deprecated.
- [persistentStoreTypeMismatch](cocoaerror/persistentstoretypemismatch.md)
- [persistentStoreTypeMismatchError](cocoaerror/persistentstoretypemismatcherror.md): Deprecated.
- [persistentStoreUnsupportedRequestType](cocoaerror/persistentstoreunsupportedrequesttype.md)
- [persistentStoreUnsupportedRequestTypeError](cocoaerror/persistentstoreunsupportedrequesttypeerror.md): Deprecated.
- [propertyListReadCorrupt](cocoaerror/propertylistreadcorrupt.md)
- [propertyListReadCorruptError](cocoaerror/propertylistreadcorrupterror.md): Deprecated.
- [propertyListReadStream](cocoaerror/propertylistreadstream.md)
- [propertyListReadStreamError](cocoaerror/propertylistreadstreamerror.md): Deprecated.
- [propertyListReadUnknownVersion](cocoaerror/propertylistreadunknownversion.md)
- [propertyListReadUnknownVersionError](cocoaerror/propertylistreadunknownversionerror.md): Deprecated.
- [propertyListWriteInvalid](cocoaerror/propertylistwriteinvalid.md)
- [propertyListWriteInvalidError](cocoaerror/propertylistwriteinvaliderror.md): Deprecated.
- [propertyListWriteStream](cocoaerror/propertylistwritestream.md)
- [propertyListWriteStreamError](cocoaerror/propertylistwritestreamerror.md): Deprecated.
- [serviceApplicationLaunchFailed](cocoaerror/serviceapplicationlaunchfailed.md)
- [serviceApplicationLaunchFailedError](cocoaerror/serviceapplicationlaunchfailederror-44r3b.md): Deprecated.
- [serviceApplicationNotFound](cocoaerror/serviceapplicationnotfound.md)
- [serviceApplicationNotFoundError](cocoaerror/serviceapplicationnotfounderror-2vdab.md): Deprecated.
- [serviceInvalidPasteboardData](cocoaerror/serviceinvalidpasteboarddata.md)
- [serviceInvalidPasteboardDataError](cocoaerror/serviceinvalidpasteboarddataerror-49mrz.md): Deprecated.
- [serviceMalformedServiceDictionary](cocoaerror/servicemalformedservicedictionary.md)
- [serviceMalformedServiceDictionaryError](cocoaerror/servicemalformedservicedictionaryerror-3wvlr.md): Deprecated.
- [serviceMiscellaneous](cocoaerror/servicemiscellaneous.md)
- [serviceMiscellaneousError](cocoaerror/servicemiscellaneouserror-18rwt.md): Deprecated.
- [serviceRequestTimedOut](cocoaerror/servicerequesttimedout.md)
- [serviceRequestTimedOutError](cocoaerror/servicerequesttimedouterror-30ucb.md): Deprecated.
- [sharingServiceNotConfigured](cocoaerror/sharingservicenotconfigured.md)
- [sharingServiceNotConfiguredError](cocoaerror/sharingservicenotconfigurederror-1xm1e.md): Deprecated.
- [sqlite](cocoaerror/sqlite.md)
- [sqliteError](cocoaerror/sqliteerror.md): Deprecated.
- [textReadInapplicableDocumentType](cocoaerror/textreadinapplicabledocumenttype.md)
- [textReadInapplicableDocumentTypeError](cocoaerror/textreadinapplicabledocumenttypeerror-5hv73.md): Deprecated.
- [textWriteInapplicableDocumentType](cocoaerror/textwriteinapplicabledocumenttype.md)
- [textWriteInapplicableDocumentTypeError](cocoaerror/textwriteinapplicabledocumenttypeerror-tfdf.md): Deprecated.
- [ubiquitousFileNotUploadedDueToQuota](cocoaerror/ubiquitousfilenotuploadedduetoquota.md)
- [ubiquitousFileNotUploadedDueToQuotaError](cocoaerror/ubiquitousfilenotuploadedduetoquotaerror.md): Deprecated.
- [ubiquitousFileUbiquityServerNotAvailable](cocoaerror/ubiquitousfileubiquityservernotavailable.md)
- [ubiquitousFileUnavailable](cocoaerror/ubiquitousfileunavailable.md)
- [ubiquitousFileUnavailableError](cocoaerror/ubiquitousfileunavailableerror.md): Deprecated.
- [userActivityConnectionUnavailable](cocoaerror/useractivityconnectionunavailable.md)
- [userActivityConnectionUnavailableError](cocoaerror/useractivityconnectionunavailableerror.md): Deprecated.
- [userActivityHandoffFailed](cocoaerror/useractivityhandofffailed.md)
- [userActivityHandoffFailedError](cocoaerror/useractivityhandofffailederror.md): Deprecated.
- [userActivityHandoffUserInfoTooLarge](cocoaerror/useractivityhandoffuserinfotoolarge.md)
- [userActivityHandoffUserInfoTooLargeError](cocoaerror/useractivityhandoffuserinfotoolargeerror.md): Deprecated.
- [userActivityRemoteApplicationTimedOut](cocoaerror/useractivityremoteapplicationtimedout.md)
- [userActivityRemoteApplicationTimedOutError](cocoaerror/useractivityremoteapplicationtimedouterror.md): Deprecated.
- [userCancelled](cocoaerror/usercancelled.md)
- [userCancelledError](cocoaerror/usercancellederror.md): Deprecated.
- [validationDateTooLate](cocoaerror/validationdatetoolate.md)
- [validationDateTooLateError](cocoaerror/validationdatetoolateerror.md): Deprecated.
- [validationDateTooSoon](cocoaerror/validationdatetoosoon.md)
- [validationDateTooSoonError](cocoaerror/validationdatetoosoonerror.md): Deprecated.
- [validationInvalidDate](cocoaerror/validationinvaliddate.md)
- [validationInvalidDateError](cocoaerror/validationinvaliddateerror.md): Deprecated.
- [validationMissingMandatoryProperty](cocoaerror/validationmissingmandatoryproperty.md)
- [validationMissingMandatoryPropertyError](cocoaerror/validationmissingmandatorypropertyerror.md): Deprecated.
- [validationMultipleErrors](cocoaerror/validationmultipleerrors.md)
- [validationMultipleErrorsError](cocoaerror/validationmultipleerrorserror.md): Deprecated.
- [validationNumberTooLarge](cocoaerror/validationnumbertoolarge.md)
- [validationNumberTooLargeError](cocoaerror/validationnumbertoolargeerror.md): Deprecated.
- [validationNumberTooSmall](cocoaerror/validationnumbertoosmall.md)
- [validationNumberTooSmallError](cocoaerror/validationnumbertoosmallerror.md): Deprecated.
- [validationRelationshipDeniedDelete](cocoaerror/validationrelationshipdenieddelete.md)
- [validationRelationshipDeniedDeleteError](cocoaerror/validationrelationshipdenieddeleteerror.md): Deprecated.
- [validationRelationshipExceedsMaximumCount](cocoaerror/validationrelationshipexceedsmaximumcount.md)
- [validationRelationshipExceedsMaximumCountError](cocoaerror/validationrelationshipexceedsmaximumcounterror.md): Deprecated.
- [validationRelationshipLacksMinimumCount](cocoaerror/validationrelationshiplacksminimumcount.md)
- [validationRelationshipLacksMinimumCountError](cocoaerror/validationrelationshiplacksminimumcounterror.md): Deprecated.
- [validationStringPatternMatching](cocoaerror/validationstringpatternmatching.md)
- [validationStringPatternMatchingError](cocoaerror/validationstringpatternmatchingerror.md): Deprecated.
- [validationStringTooLong](cocoaerror/validationstringtoolong.md)
- [validationStringTooLongError](cocoaerror/validationstringtoolongerror.md): Deprecated.
- [validationStringTooShort](cocoaerror/validationstringtooshort.md)
- [validationStringTooShortError](cocoaerror/validationstringtooshorterror.md): Deprecated.
- [xpcConnectionInterrupted](cocoaerror/xpcconnectioninterrupted.md)
- [xpcConnectionInvalid](cocoaerror/xpcconnectioninvalid.md)
- [xpcConnectionReplyInvalid](cocoaerror/xpcconnectionreplyinvalid.md)

### Type Methods

- [error(\_:userInfo:url:)](cocoaerror/error%28__userinfo_url_%29.md)

## Relationships

### Conforms To

- [CustomNSError](customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Error Codes

- [MachError](macherror.md): Describes an error in the Mach error domain.
- [POSIXError](posixerror.md): Describes an error in the POSIX error domain.
- [NSError Codes](1448136-nserror-codes.md): Error codes in the Cocoa error domain.
