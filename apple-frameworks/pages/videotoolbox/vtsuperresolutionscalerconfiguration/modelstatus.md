> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtsuperresolutionscalerconfiguration/modelstatus](https://developer.apple.com/documentation/videotoolbox/vtsuperresolutionscalerconfiguration/modelstatus)

# VTSuperResolutionScalerConfiguration.ModelStatus (Swift)

**Framework:** Video Toolbox  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Available super-resolution processor model status types.

## Declaration

```swift
enum ModelStatus
```

## Topics

### Enumeration Cases

- [VTSuperResolutionScalerConfiguration.ModelStatus.downloadRequired](modelstatus/downloadrequired.md)
- [VTSuperResolutionScalerConfiguration.ModelStatus.downloading](modelstatus/downloading.md)
- [VTSuperResolutionScalerConfiguration.ModelStatus.ready](modelstatus/ready.md)

### Initializers

- [init(rawValue:)](modelstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the configuration model

- [configurationModelStatus](configurationmodelstatus.md): Reports the download status of models that the system needs for the current configuration.
- [configurationModelPercentageAvailable](configurationmodelpercentageavailable.md): Returns a floating point value between 0.0 and 1.0 indicating the percentage of required model assets that have been downloaded.
- [downloadConfigurationModel(completionHandler:)](downloadconfigurationmodel%28completionhandler_%29.md): Downloads models that the system needs for the current configuration.

# VTSuperResolutionScalerConfigurationModelStatus (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Available super-resolution processor model status types.

## Declaration

```objectivec
enum VTSuperResolutionScalerConfigurationModelStatus : NSInteger;
```

## Topics

### Enumeration Cases

- [VTSuperResolutionScalerConfigurationModelStatusDownloadRequired](modelstatus/downloadrequired.md)
- [VTSuperResolutionScalerConfigurationModelStatusDownloading](modelstatus/downloading.md)
- [VTSuperResolutionScalerConfigurationModelStatusReady](modelstatus/ready.md)

## See Also

### Managing the configuration model

- [configurationModelStatus](configurationmodelstatus.md): Reports the download status of models that the system needs for the current configuration.
- [configurationModelPercentageAvailable](configurationmodelpercentageavailable.md): Returns a floating point value between 0.0 and 1.0 indicating the percentage of required model assets that have been downloaded.
- [downloadConfigurationModelWithCompletionHandler:](downloadconfigurationmodel%28completionhandler_%29.md): Downloads models that the system needs for the current configuration.
