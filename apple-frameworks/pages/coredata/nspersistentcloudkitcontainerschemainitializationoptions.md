> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcloudkitcontainerschemainitializationoptions](https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainerschemainitializationoptions)

# NSPersistentCloudKitContainerSchemaInitializationOptions (Swift)

**Framework:** Core Data  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options that control the behavior when promoting the container’s schema to CloudKit.

## Declaration

```swift
struct NSPersistentCloudKitContainerSchemaInitializationOptions
```

## Topics

### Constants

- [dryRun](nspersistentcloudkitcontainerschemainitializationoptions/dryrun.md): A flag that indicates the container validates the model and generates the records, but doesn’t upload them to CloudKit.
- [printSchema](nspersistentcloudkitcontainerschemainitializationoptions/printschema.md): Prints the generated records to the console.

### Initializers

- [init(rawValue:)](nspersistentcloudkitcontainerschemainitializationoptions/init%28rawvalue_%29.md): Creates the schema initialization options using the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Promoting Your Schema

- [initializeCloudKitSchema(options:)](nspersistentcloudkitcontainer/initializecloudkitschema%28options_%29.md): Creates the CloudKit schema for all stores in the container that manage a CloudKit database.

# NSPersistentCloudKitContainerSchemaInitializationOptions (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options that control the behavior when promoting the container’s schema to CloudKit.

## Declaration

```objectivec
enum NSPersistentCloudKitContainerSchemaInitializationOptions : NSUInteger;
```

## Topics

### Constants

- [NSPersistentCloudKitContainerSchemaInitializationOptionsDryRun](nspersistentcloudkitcontainerschemainitializationoptions/dryrun.md): A flag that indicates the container validates the model and generates the records, but doesn’t upload them to CloudKit.
- [NSPersistentCloudKitContainerSchemaInitializationOptionsPrintSchema](nspersistentcloudkitcontainerschemainitializationoptions/printschema.md): Prints the generated records to the console.
- [NSPersistentCloudKitContainerSchemaInitializationOptionsNone](nspersistentcloudkitcontainerschemainitializationoptions/nspersistentcloudkitcontainerschemainitializationoptionsnone.md): Indicates there are no specified schema options.

## See Also

### Promoting Your Schema

- [initializeCloudKitSchemaWithOptions:error:](nspersistentcloudkitcontainer/initializecloudkitschema%28options_%29.md): Creates the CloudKit schema for all stores in the container that manage a CloudKit database.
