> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckoperation/group](https://developer.apple.com/documentation/cloudkit/ckoperation/group)

# group (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The operation’s group.

## Declaration

```swift
var group: CKOperationGroup? { get set }
```

## See Also

### Managing the Operation’s Configuration

- [configuration](configuration-swift.property.md): The operation’s configuration.
- [CKOperation.Configuration](configuration-swift.class.md): An object that describes how a CloudKit operation behaves.
- [longLivedOperationWasPersistedBlock](longlivedoperationwaspersistedblock.md): The closure to execute when the server begins to store callbacks for the long-lived operation.

# group (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The operation’s group.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) CKOperationGroup * group;
```

## See Also

### Managing the Operation’s Configuration

- [configuration](configuration-swift.property.md): The operation’s configuration.
- [CKOperationConfiguration](configuration-swift.class.md): An object that describes how a CloudKit operation behaves.
- [longLivedOperationWasPersistedBlock](longlivedoperationwaspersistedblock.md): The closure to execute when the server begins to store callbacks for the long-lived operation.
