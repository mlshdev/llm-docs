> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/swiftdataerror](https://developer.apple.com/documentation/swiftdata/swiftdataerror)

# SwiftDataError

**Framework:** SwiftData  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

A type that describes a SwiftData error.

## Declaration

```swift
struct SwiftDataError
```

## Topics

### Fetch errors

- [includePendingChangesWithBatchSize](swiftdataerror/includependingchangeswithbatchsize.md)
- [sortingPendingChangesWithIdentifiers](swiftdataerror/sortingpendingchangeswithidentifiers.md)
- [unsupportedKeyPath](swiftdataerror/unsupportedkeypath.md)
- [unsupportedPredicate](swiftdataerror/unsupportedpredicate.md)
- [unsupportedSortDescriptor](swiftdataerror/unsupportedsortdescriptor.md)
- [historyTokenExpired](swiftdataerror/historytokenexpired.md)
- [invalidTransactionFetchRequest](swiftdataerror/invalidtransactionfetchrequest.md)

### Configuration errors

- [configurationFileNameContainsInvalidCharacters](swiftdataerror/configurationfilenamecontainsinvalidcharacters.md)
- [configurationFileNameTooLong](swiftdataerror/configurationfilenametoolong.md)
- [configurationSchemaNotFoundInContainerSchema](swiftdataerror/configurationschemanotfoundincontainerschema.md)
- [duplicateConfiguration](swiftdataerror/duplicateconfiguration.md)

### Container errors

- [loadIssueModelContainer](swiftdataerror/loadissuemodelcontainer.md)

### Context errors

- [modelValidationFailure](swiftdataerror/modelvalidationfailure.md)
- [missingModelContext](swiftdataerror/missingmodelcontext.md)

### Migration errors

- [backwardMigration](swiftdataerror/backwardmigration.md)
- [unknownSchema](swiftdataerror/unknownschema.md)

### Schema errors

- [unknownDataStoreSchema](swiftdataerror/unknowndatastoreschema.md): An error that indicates the data store’s schema is not recognized.

### Operators

- [~=(\_:\_:)](swiftdataerror/~=%28____%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [DataStoreError](datastoreerror.md): A type that describes a data store error.
