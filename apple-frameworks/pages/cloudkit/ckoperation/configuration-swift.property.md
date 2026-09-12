> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckoperation/configuration-swift.property](https://developer.apple.com/documentation/cloudkit/ckoperation/configuration-swift.property)

# configuration (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The operation’s configuration.

## Declaration

```swift
@NSCopying var configuration: CKOperation.Configuration! { get set }
```

## See Also

### Managing the Operation’s Configuration

- [CKOperation.Configuration](configuration-swift.class.md): An object that describes how a CloudKit operation behaves.
- [group](group.md): The operation’s group.
- [longLivedOperationWasPersistedBlock](longlivedoperationwaspersistedblock.md): The closure to execute when the server begins to store callbacks for the long-lived operation.

# configuration (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The operation’s configuration.

## Declaration

```objectivec
@property (nonatomic, copy, null_resettable) CKOperationConfiguration * configuration;
```

## See Also

### Managing the Operation’s Configuration

- [CKOperationConfiguration](configuration-swift.class.md): An object that describes how a CloudKit operation behaves.
- [group](group.md): The operation’s group.
- [longLivedOperationWasPersistedBlock](longlivedoperationwaspersistedblock.md): The closure to execute when the server begins to store callbacks for the long-lived operation.
