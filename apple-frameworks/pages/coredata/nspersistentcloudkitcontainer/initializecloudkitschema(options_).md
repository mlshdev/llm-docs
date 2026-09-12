> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcloudkitcontainer/initializecloudkitschema(options:)](https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainer/initializecloudkitschema(options:))

# initializeCloudKitSchema(options:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates the CloudKit schema for all stores in the container that manage a CloudKit database.

## Declaration

```swift
func initializeCloudKitSchema(options: NSPersistentCloudKitContainerSchemaInitializationOptions = []) throws
```

## Parameters

- `options`: The options to use when creating the CloudKit schema.

<a id="Discussion"></a>

## Discussion

To create the schema, this method creates a set of representative [CKRecord](../../cloudkit/ckrecord.md) instances for all stores in the container that use Core Data with CloudKit, and uploads them to CloudKit. These records have a representative value for every field Core Data might serialize for the specified managed object model. After successfully uploading the records, the schema is visible in the CloudKit Dashboard and the container deletes the representative records.

> **Note**

>  This method also validates the managed object model in use for a store, so if the model isn’t valid for use with CloudKit, a validation error may return.

## See Also

### Promoting Your Schema

- [NSPersistentCloudKitContainerSchemaInitializationOptions](../nspersistentcloudkitcontainerschemainitializationoptions.md): Options that control the behavior when promoting the container’s schema to CloudKit.

# initializeCloudKitSchemaWithOptions:error: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates the CloudKit schema for all stores in the container that manage a CloudKit database.

## Declaration

```objectivec
- (BOOL) initializeCloudKitSchemaWithOptions:(NSPersistentCloudKitContainerSchemaInitializationOptions) options error:(NSError **) error;
```

## Parameters

- `options`: The options to use when creating the CloudKit schema.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operations succeed; otherwise, [false](https://developer.apple.com/documentation/swift/false). If the operations fail, the `error` parameter holds the underlying error.

<a id="Discussion"></a>

## Discussion

To create the schema, this method creates a set of representative [CKRecord](../../cloudkit/ckrecord.md) instances for all stores in the container that use Core Data with CloudKit, and uploads them to CloudKit. These records have a representative value for every field Core Data might serialize for the specified managed object model. After successfully uploading the records, the schema is visible in the CloudKit Dashboard and the container deletes the representative records.

> **Note**

>  This method also validates the managed object model in use for a store, so if the model isn’t valid for use with CloudKit, a validation error may return.

## See Also

### Promoting Your Schema

- [NSPersistentCloudKitContainerSchemaInitializationOptions](../nspersistentcloudkitcontainerschemainitializationoptions.md): Options that control the behavior when promoting the container’s schema to CloudKit.
