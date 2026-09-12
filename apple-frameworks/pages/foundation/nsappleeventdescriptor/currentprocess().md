> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsappleeventdescriptor/currentprocess()](https://developer.apple.com/documentation/foundation/nsappleeventdescriptor/currentprocess())

# currentProcess() (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.11+

Creates and returns an application address descriptor using the current process.

## Declaration

```swift
class func currentProcess() -> NSAppleEventDescriptor
```

<a id="discussion"></a>

## Discussion

The result is suitable for use as the `targetDescriptor` parameter of `+appleEventWithEventClass:eventID:targetDescriptor:returnID:transactionID:`.

# currentProcessDescriptor (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.11+

Creates and returns an application address descriptor using the current process.

## Declaration

```objectivec
+ (NSAppleEventDescriptor *) currentProcessDescriptor;
```

<a id="discussion"></a>

## Discussion

The result is suitable for use as the `targetDescriptor` parameter of `+appleEventWithEventClass:eventID:targetDescriptor:returnID:transactionID:`.
