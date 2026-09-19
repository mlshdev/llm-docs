> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sensorkit/srfacemetrics/version

# version (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The version of the algorithm that the system uses to generate the face metrics and analytics.

## Declaration

```swift
var version: String { get }
```

## See Also

### Getting session information

- [sessionIdentifier](sessionidentifier.md): An identifier for the camera session.
- [context](context-swift.property.md): The context of the system during the camera session.
- [SRFaceMetrics.Context](context-swift.struct.md): The context of the system during the camera session.

# version (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The version of the algorithm that the system uses to generate the face metrics and analytics.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * version;
```

## See Also

### Getting session information

- [sessionIdentifier](sessionidentifier.md): An identifier for the camera session.
- [context](context-swift.property.md): The context of the system during the camera session.
- [SRFaceMetricsContext](context-swift.struct.md): The context of the system during the camera session.
