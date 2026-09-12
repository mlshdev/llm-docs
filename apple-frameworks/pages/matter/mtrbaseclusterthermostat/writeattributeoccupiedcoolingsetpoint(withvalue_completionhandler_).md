> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterthermostat/writeattributeoccupiedcoolingsetpoint(withvalue:completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusterthermostat/writeattributeoccupiedcoolingsetpoint(withvalue:completionhandler:))

# writeAttributeOccupiedCoolingSetpoint(withValue:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use writeAttributeOccupiedCoolingSetpointWithValue:completion:

## Declaration

```swift
func writeAttributeOccupiedCoolingSetpoint(withValue value: NSNumber, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeAttributeOccupiedCoolingSetpoint(withValue value: NSNumber) async throws
```

# writeAttributeOccupiedCoolingSetpointWithValue:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use writeAttributeOccupiedCoolingSetpointWithValue:completion:

## Declaration

```objectivec
- (void) writeAttributeOccupiedCoolingSetpointWithValue:(NSNumber *) value completionHandler:(MTRStatusCompletion) completionHandler;
```
