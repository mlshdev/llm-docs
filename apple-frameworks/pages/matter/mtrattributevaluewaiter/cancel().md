> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrattributevaluewaiter/cancel()](https://developer.apple.com/documentation/matter/mtrattributevaluewaiter/cancel())

# cancel() (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.3+ · iPadOS 18.3+ · Mac Catalyst 18.3+ · macOS 15.3+ · tvOS 18.3+ · visionOS 2.3+ · watchOS 11.3+

Cancel the wait for the set of attribute path/value pairs represented by this MTRAttributeValueWaiter.  If the completion has not been called yet, it will becalled with MTRErrorCodeCancelled.

## Declaration

```swift
func cancel()
```

# cancel (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.3+ · iPadOS 18.3+ · Mac Catalyst 18.3+ · macOS 15.3+ · tvOS 18.3+ · visionOS 2.3+ · watchOS 11.3+

Cancel the wait for the set of attribute path/value pairs represented by this MTRAttributeValueWaiter.  If the completion has not been called yet, it will becalled with MTRErrorCodeCancelled.

## Declaration

```objectivec
- (void) cancel;
```
