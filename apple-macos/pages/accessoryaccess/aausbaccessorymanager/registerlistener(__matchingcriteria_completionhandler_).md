> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/accessoryaccess/aausbaccessorymanager/registerlistener(_:matchingcriteria:completionhandler:)](https://developer.apple.com/documentation/accessoryaccess/aausbaccessorymanager/registerlistener(_:matchingcriteria:completionhandler:))

# registerListener(\_:matchingCriteria:completionHandler:) (Swift)

**Framework:** Accessory Access  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Registers a USB accessory listener.

## Declaration

```swift
func registerListener(_ listener: any AAUSBAccessoryListener, matchingCriteria: [AAUSBAccessoryMatchingCriteria], completionHandler: @escaping @Sendable ([AAUSBAccessory], (any Error)?) -> Void)
```

```swift
func registerListener(_ listener: any AAUSBAccessoryListener, matchingCriteria: [AAUSBAccessoryMatchingCriteria]) async throws -> [AAUSBAccessory]
```

## Parameters

- `listener`: The USB accessory listener.
- `matchingCriteria`: Matching criteria for filtering USB accessories. [AAUSBAccessoryManager](../aausbaccessorymanager.md) notifies the listener of USB accessory events if the accessory satisfies any of the [AAUSBAccessoryMatchingCriteria](../aausbaccessorymatchingcriteria.md)  objects. Passing an empty array matches any USB accessory.
- `completionHandler`: The block the framework calls after it successfully registers the listener. The first parameter passed to the block is an array containing accessories that are already connected and match the provided criteria. The array is empty if there are none. The second parameter passed to the block is `nil` if the framework successfully registered the listener. The block the framework invokes is on an arbitrary thread.

<a id="Discussion"></a>

## Discussion

Register a  USB accessory listener that satisfies one of the given criteria. The listener is notified when a USB accessory, that satisfies the criteria, connects to or disconnects from the system.

If the listener is already registered, this operation will fail with the AAErrorCodeAccessoryListenerAlreadyRegistered error.

If any accessories matching the criteria are already connected, they are passed to the completion handler.

## See Also

### Registering and unregistering listeners

- [unregisterListener(\_:completionHandler:)](unregisterlistener%28__completionhandler_%29.md): Unregister a previously registered listener.

# registerListener:withMatchingCriteria:completionHandler: (Objective-C)

**Framework:** Accessory Access  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Registers a USB accessory listener.

## Declaration

```objectivec
- (void) registerListener:(id<AAUSBAccessoryListener>) listener withMatchingCriteria:(NSArray<AAUSBAccessoryMatchingCriteria *> *) matchingCriteria completionHandler:(void (^)(NSArray<AAUSBAccessory *> *, NSError *)) completionHandler;
```

## Parameters

- `listener`: The USB accessory listener.
- `matchingCriteria`: Matching criteria for filtering USB accessories. [AAUSBAccessoryManager](../aausbaccessorymanager.md) notifies the listener of USB accessory events if the accessory satisfies any of the [AAUSBAccessoryMatchingCriteria](../aausbaccessorymatchingcriteria.md)  objects. Passing an empty array matches any USB accessory.
- `completionHandler`: The block the framework calls after it successfully registers the listener. The first parameter passed to the block is an array containing accessories that are already connected and match the provided criteria. The array is empty if there are none. The second parameter passed to the block is `nil` if the framework successfully registered the listener. The block the framework invokes is on an arbitrary thread.

<a id="Discussion"></a>

## Discussion

Register a  USB accessory listener that satisfies one of the given criteria. The listener is notified when a USB accessory, that satisfies the criteria, connects to or disconnects from the system.

If the listener is already registered, this operation will fail with the AAErrorCodeAccessoryListenerAlreadyRegistered error.

If any accessories matching the criteria are already connected, they are passed to the completion handler.

## See Also

### Registering and unregistering listeners

- [unregisterListener:completionHandler:](unregisterlistener%28__completionhandler_%29.md): Unregister a previously registered listener.
