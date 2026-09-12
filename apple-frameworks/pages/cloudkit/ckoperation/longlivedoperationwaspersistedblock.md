> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckoperation/longlivedoperationwaspersistedblock](https://developer.apple.com/documentation/cloudkit/ckoperation/longlivedoperationwaspersistedblock)

# longLivedOperationWasPersistedBlock (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 3.0+

The closure to execute when the server begins to store callbacks for the long-lived operation.

## Declaration

```swift
var longLivedOperationWasPersistedBlock: (() -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

If your app exits before CloudKit calls this property’s value, the system doesn’t include the operation’s ID in the results of calls to the [allLongLivedOperationIDs()](../ckcontainer/alllonglivedoperationids%28%29.md) method.

For more information, see [Long-Lived Operations](../ckoperation.md#Long-Lived-Operations).

## See Also

### Managing the Operation’s Configuration

- [configuration](configuration-swift.property.md): The operation’s configuration.
- [CKOperation.Configuration](configuration-swift.class.md): An object that describes how a CloudKit operation behaves.
- [group](group.md): The operation’s group.

# longLivedOperationWasPersistedBlock (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 3.0+

The closure to execute when the server begins to store callbacks for the long-lived operation.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^longLivedOperationWasPersistedBlock)();
```

<a id="discussion"></a>

## Discussion

If your app exits before CloudKit calls this property’s value, the system doesn’t include the operation’s ID in the results of calls to the [allLongLivedOperationIDs()](../ckcontainer/alllonglivedoperationids%28%29.md) method.

For more information, see [Long-Lived Operations](../ckoperation.md#Long-Lived-Operations).

## See Also

### Managing the Operation’s Configuration

- [configuration](configuration-swift.property.md): The operation’s configuration.
- [CKOperationConfiguration](configuration-swift.class.md): An object that describes how a CloudKit operation behaves.
- [group](group.md): The operation’s group.
