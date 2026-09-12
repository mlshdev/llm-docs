> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/accessoryaccess/aausbaccessorymanager/unregisterlistener(_:completionhandler:)](https://developer.apple.com/documentation/accessoryaccess/aausbaccessorymanager/unregisterlistener(_:completionhandler:))

# unregisterListener(\_:completionHandler:) (Swift)

**Framework:** Accessory Access  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Unregister a previously registered listener.

## Declaration

```swift
func unregisterListener(_ listener: any AAUSBAccessoryListener, completionHandler: @escaping @Sendable () -> Void)
```

```swift
func unregisterListener(_ listener: any AAUSBAccessoryListener) async
```

## Parameters

- `listener`: The listener of USB accessories.
- `completionHandler`: The block the framework calls after it successfully unregisters the listener. The framework invokes the block on an arbitrary thread.

## See Also

### Registering and unregistering listeners

- [registerListener(\_:matchingCriteria:completionHandler:)](registerlistener%28__matchingcriteria_completionhandler_%29.md): Registers a USB accessory listener.

# unregisterListener:completionHandler: (Objective-C)

**Framework:** Accessory Access  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Unregister a previously registered listener.

## Declaration

```objectivec
- (void) unregisterListener:(id<AAUSBAccessoryListener>) listener completionHandler:(void (^)()) completionHandler;
```

## Parameters

- `listener`: The listener of USB accessories.
- `completionHandler`: The block the framework calls after it successfully unregisters the listener. The framework invokes the block on an arbitrary thread.

## See Also

### Registering and unregistering listeners

- [registerListener:withMatchingCriteria:completionHandler:](registerlistener%28__matchingcriteria_completionhandler_%29.md): Registers a USB accessory listener.
