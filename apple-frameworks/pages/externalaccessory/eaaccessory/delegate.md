> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/externalaccessory/eaaccessory/delegate

# delegate (Swift)

**Framework:** External Accessory  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The object that acts as the delegate of the accessory.

## Declaration

```swift
unowned(unsafe) var delegate: (any EAAccessoryDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate receives notifications about changes to the status of the accessory object. The delegate must adopt the [EAAccessoryDelegate](../eaaccessorydelegate.md) protocol.

## See Also

### Responding to Disconnection Events

- [EAAccessoryDelegate](../eaaccessorydelegate.md): A protocol that defines an optional method for receiving notifications when the associated accessory object is disconnected.

# delegate (Objective-C)

**Framework:** External Accessory  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The object that acts as the delegate of the accessory.

## Declaration

```objectivec
@property (nonatomic, assign, nullable) id<EAAccessoryDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate receives notifications about changes to the status of the accessory object. The delegate must adopt the [EAAccessoryDelegate](../eaaccessorydelegate.md) protocol.

## See Also

### Responding to Disconnection Events

- [EAAccessoryDelegate](../eaaccessorydelegate.md): A protocol that defines an optional method for receiving notifications when the associated accessory object is disconnected.
