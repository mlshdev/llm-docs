> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsappleeventdescriptor/init(processidentifier:)](https://developer.apple.com/documentation/foundation/nsappleeventdescriptor/init(processidentifier:))

# init(processIdentifier:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** macOS 10.11+

Creates and returns an application address descriptor using the specified process identifier.

## Declaration

```swift
init(processIdentifier: pid_t)
```

<a id="discussion"></a>

## Discussion

The result is suitable for use as the `targetDescriptor` parameter of `+appleEventWithEventClass:eventID:targetDescriptor:returnID:transactionID:`.

# descriptorWithProcessIdentifier: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.11+

Creates and returns an application address descriptor using the specified process identifier.

## Declaration

```objectivec
+ (NSAppleEventDescriptor *) descriptorWithProcessIdentifier:(pid_t) processIdentifier;
```

<a id="discussion"></a>

## Discussion

The result is suitable for use as the `targetDescriptor` parameter of `+appleEventWithEventClass:eventID:targetDescriptor:returnID:transactionID:`.
