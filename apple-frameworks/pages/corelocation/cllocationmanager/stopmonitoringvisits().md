> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/stopmonitoringvisits()](https://developer.apple.com/documentation/corelocation/cllocationmanager/stopmonitoringvisits())

# stopMonitoringVisits() (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+

Stops the delivery of visit-related events.

## Declaration

```swift
func stopMonitoringVisits()
```

<a id="Discussion"></a>

## Discussion

Calling this method disables the delivery of visit-related events for your app. If a compatible iPad or iPhone app calls this method when running in visionOS, the method does nothing.

## See Also

### Running the visits location service

- [startMonitoringVisits()](startmonitoringvisits%28%29.md): Starts the delivery of visit-related events.

# stopMonitoringVisits (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+

Stops the delivery of visit-related events.

## Declaration

```objectivec
- (void) stopMonitoringVisits;
```

<a id="Discussion"></a>

## Discussion

Calling this method disables the delivery of visit-related events for your app. If a compatible iPad or iPhone app calls this method when running in visionOS, the method does nothing.

## See Also

### Running the visits location service

- [startMonitoringVisits](startmonitoringvisits%28%29.md): Starts the delivery of visit-related events.
