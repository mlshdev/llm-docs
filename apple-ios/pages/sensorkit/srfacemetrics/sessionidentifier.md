> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srfacemetrics/sessionidentifier](https://developer.apple.com/documentation/sensorkit/srfacemetrics/sessionidentifier)

# sessionIdentifier (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

An identifier for the camera session.

## Declaration

```swift
var sessionIdentifier: String { get }
```

## See Also

### Getting session information

- [context](context-swift.property.md): The context of the system during the camera session.
- [SRFaceMetrics.Context](context-swift.struct.md): The context of the system during the camera session.
- [version](version.md): The version of the algorithm that the system uses to generate the face metrics and analytics.

# sessionIdentifier (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

An identifier for the camera session.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * sessionIdentifier;
```

## See Also

### Getting session information

- [context](context-swift.property.md): The context of the system during the camera session.
- [SRFaceMetricsContext](context-swift.struct.md): The context of the system during the camera session.
- [version](version.md): The version of the algorithm that the system uses to generate the face metrics and analytics.
