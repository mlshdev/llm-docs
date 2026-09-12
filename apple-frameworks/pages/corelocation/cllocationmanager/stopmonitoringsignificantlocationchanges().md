> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/stopmonitoringsignificantlocationchanges()](https://developer.apple.com/documentation/corelocation/cllocationmanager/stopmonitoringsignificantlocationchanges())

# stopMonitoringSignificantLocationChanges() (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+

Stops the delivery of location events based on significant location changes.

## Declaration

```swift
func stopMonitoringSignificantLocationChanges()
```

<a id="Discussion"></a>

## Discussion

Use this method to stop the delivery of location events that was started using the [startMonitoringSignificantLocationChanges()](startmonitoringsignificantlocationchanges%28%29.md) method. If a compatible iPad or iPhone app calls this method when running in visionOS, the method does nothing.

## See Also

### Running the significant change location service

- [startMonitoringSignificantLocationChanges()](startmonitoringsignificantlocationchanges%28%29.md): Starts the generation of updates based on significant location changes.

# stopMonitoringSignificantLocationChanges (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+

Stops the delivery of location events based on significant location changes.

## Declaration

```objectivec
- (void) stopMonitoringSignificantLocationChanges;
```

<a id="Discussion"></a>

## Discussion

Use this method to stop the delivery of location events that was started using the [startMonitoringSignificantLocationChanges](startmonitoringsignificantlocationchanges%28%29.md) method. If a compatible iPad or iPhone app calls this method when running in visionOS, the method does nothing.

## See Also

### Running the significant change location service

- [startMonitoringSignificantLocationChanges](startmonitoringsignificantlocationchanges%28%29.md): Starts the generation of updates based on significant location changes.
