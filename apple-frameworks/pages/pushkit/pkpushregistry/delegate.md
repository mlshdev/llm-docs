> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pushkit/pkpushregistry/delegate](https://developer.apple.com/documentation/pushkit/pkpushregistry/delegate)

# delegate (Swift)

**Framework:** PushKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

The delegate object that receives notifications coming from the push registry object.

## Declaration

```swift
weak var delegate: (any PKPushRegistryDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

You must assign a valid object to this property before modifying the [desiredPushTypes](desiredpushtypes.md) property. A valid delegate object is required to receive push tokens and payload data from incoming pushes.

For more information about the methods of the `PKPushRegistryDelegate` protocol, see [PKPushRegistryDelegate](../pkpushregistrydelegate.md).

## See Also

### Receiving the Notification Data

- [PKPushRegistryDelegate](../pkpushregistrydelegate.md): The methods that you use to handle incoming PushKit notifications and registration events.

# delegate (Objective-C)

**Framework:** PushKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

The delegate object that receives notifications coming from the push registry object.

## Declaration

```objectivec
@property (weak, readwrite, nullable) id<PKPushRegistryDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

You must assign a valid object to this property before modifying the [desiredPushTypes](desiredpushtypes.md) property. A valid delegate object is required to receive push tokens and payload data from incoming pushes.

For more information about the methods of the `PKPushRegistryDelegate` protocol, see [PKPushRegistryDelegate](../pkpushregistrydelegate.md).

## See Also

### Receiving the Notification Data

- [PKPushRegistryDelegate](../pkpushregistrydelegate.md): The methods that you use to handle incoming PushKit notifications and registration events.
