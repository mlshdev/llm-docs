> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtsuperresolutionscalerconfiguration/configurationmodelstatus](https://developer.apple.com/documentation/videotoolbox/vtsuperresolutionscalerconfiguration/configurationmodelstatus)

# configurationModelStatus (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Reports the download status of models that the system needs for the current configuration.

## Declaration

```swift
var configurationModelStatus: VTSuperResolutionScalerConfiguration.ModelStatus { get }
```

## See Also

### Managing the configuration model

- [VTSuperResolutionScalerConfiguration.ModelStatus](modelstatus.md): Available super-resolution processor model status types.
- [configurationModelPercentageAvailable](configurationmodelpercentageavailable.md): Returns a floating point value between 0.0 and 1.0 indicating the percentage of required model assets that have been downloaded.
- [downloadConfigurationModel(completionHandler:)](downloadconfigurationmodel%28completionhandler_%29.md): Downloads models that the system needs for the current configuration.

# configurationModelStatus (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Reports the download status of models that the system needs for the current configuration.

## Declaration

```objectivec
@property (nonatomic, readonly) VTSuperResolutionScalerConfigurationModelStatus configurationModelStatus;
```

## See Also

### Managing the configuration model

- [VTSuperResolutionScalerConfigurationModelStatus](modelstatus.md): Available super-resolution processor model status types.
- [configurationModelPercentageAvailable](configurationmodelpercentageavailable.md): Returns a floating point value between 0.0 and 1.0 indicating the percentage of required model assets that have been downloaded.
- [downloadConfigurationModelWithCompletionHandler:](downloadconfigurationmodel%28completionhandler_%29.md): Downloads models that the system needs for the current configuration.
