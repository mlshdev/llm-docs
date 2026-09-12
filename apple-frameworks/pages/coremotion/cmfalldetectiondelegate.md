> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmfalldetectiondelegate](https://developer.apple.com/documentation/coremotion/cmfalldetectiondelegate)

# CMFallDetectionDelegate (Swift)

**Framework:** Core Motion  
**Kind:** Protocol  
**Availability:** watchOS 7.2+

A delegate that receives information about fall detection events and authorization status changes.

## Declaration

```swift
protocol CMFallDetectionDelegate : NSObjectProtocol
```

## Topics

### Detecting Falls

- [fallDetectionManager(\_:didDetect:completionHandler:)](cmfalldetectiondelegate/falldetectionmanager%28__diddetect_completionhandler_%29.md): Indicates a fall detection event occurred.

### Detecting Authorization Changes

- [fallDetectionManagerDidChangeAuthorization(\_:)](cmfalldetectiondelegate/falldetectionmanagerdidchangeauthorization%28__%29.md): Indicates the fall detection authorization status changed.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Fall detection

- [CMFallDetectionManager](cmfalldetectionmanager.md): An object for managing fall detection events.
- [CMFallDetectionEvent](cmfalldetectionevent.md): An object that contains data about a fall detection event.
- [NSFallDetectionUsageDescription](../bundleresources/information-property-list/nsfalldetectionusagedescription.md): A message to the user that explains the app’s request for permission to access fall detection event data.

# CMFallDetectionDelegate (Objective-C)

**Framework:** Core Motion  
**Kind:** Protocol  
**Availability:** watchOS 7.2+

A delegate that receives information about fall detection events and authorization status changes.

## Declaration

```objectivec
@protocol CMFallDetectionDelegate <NSObject>
```

## Topics

### Detecting Falls

- [fallDetectionManager:didDetectEvent:completionHandler:](cmfalldetectiondelegate/falldetectionmanager%28__diddetect_completionhandler_%29.md): Indicates a fall detection event occurred.

### Detecting Authorization Changes

- [fallDetectionManagerDidChangeAuthorization:](cmfalldetectiondelegate/falldetectionmanagerdidchangeauthorization%28__%29.md): Indicates the fall detection authorization status changed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Fall detection

- [CMFallDetectionManager](cmfalldetectionmanager.md): An object for managing fall detection events.
- [CMFallDetectionEvent](cmfalldetectionevent.md): An object that contains data about a fall detection event.
- [NSFallDetectionUsageDescription](../bundleresources/information-property-list/nsfalldetectionusagedescription.md): A message to the user that explains the app’s request for permission to access fall detection event data.
