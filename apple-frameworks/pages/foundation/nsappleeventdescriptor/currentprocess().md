> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsappleeventdescriptor/currentprocess()

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
