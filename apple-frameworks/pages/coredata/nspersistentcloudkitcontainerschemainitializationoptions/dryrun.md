> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcloudkitcontainerschemainitializationoptions/dryrun](https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainerschemainitializationoptions/dryrun)

# dryRun (Swift)

**Framework:** Core Data  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A flag that indicates the container validates the model and generates the records, but doesn’t upload them to CloudKit.

## Declaration

```swift
static var dryRun: NSPersistentCloudKitContainerSchemaInitializationOptions { get }
```

<a id="Discussion"></a>

## Discussion

This option is useful for unit testing to ensure your managed object model is valid for use with CloudKit.

## See Also

### Constants

- [printSchema](printschema.md): Prints the generated records to the console.

# NSPersistentCloudKitContainerSchemaInitializationOptionsDryRun (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A flag that indicates the container validates the model and generates the records, but doesn’t upload them to CloudKit.

## Declaration

```objectivec
NSPersistentCloudKitContainerSchemaInitializationOptionsDryRun
```

<a id="Discussion"></a>

## Discussion

This option is useful for unit testing to ensure your managed object model is valid for use with CloudKit.

## See Also

### Constants

- [NSPersistentCloudKitContainerSchemaInitializationOptionsPrintSchema](printschema.md): Prints the generated records to the console.
- [NSPersistentCloudKitContainerSchemaInitializationOptionsNone](nspersistentcloudkitcontainerschemainitializationoptionsnone.md): Indicates there are no specified schema options.
