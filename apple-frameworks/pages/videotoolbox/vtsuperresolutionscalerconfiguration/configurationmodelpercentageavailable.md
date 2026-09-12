> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtsuperresolutionscalerconfiguration/configurationmodelpercentageavailable](https://developer.apple.com/documentation/videotoolbox/vtsuperresolutionscalerconfiguration/configurationmodelpercentageavailable)

# configurationModelPercentageAvailable (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Returns a floating point value between 0.0 and 1.0 indicating the percentage of required model assets that have been downloaded.

## Declaration

```swift
var configurationModelPercentageAvailable: Float { get }
```

## See Also

### Managing the configuration model

- [configurationModelStatus](configurationmodelstatus.md): Reports the download status of models that the system needs for the current configuration.
- [VTSuperResolutionScalerConfiguration.ModelStatus](modelstatus.md): Available super-resolution processor model status types.
- [downloadConfigurationModel(completionHandler:)](downloadconfigurationmodel%28completionhandler_%29.md): Downloads models that the system needs for the current configuration.

# configurationModelPercentageAvailable (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Returns a floating point value between 0.0 and 1.0 indicating the percentage of required model assets that have been downloaded.

## Declaration

```objectivec
@property (nonatomic, readonly) float configurationModelPercentageAvailable;
```

## See Also

### Managing the configuration model

- [configurationModelStatus](configurationmodelstatus.md): Reports the download status of models that the system needs for the current configuration.
- [VTSuperResolutionScalerConfigurationModelStatus](modelstatus.md): Available super-resolution processor model status types.
- [downloadConfigurationModelWithCompletionHandler:](downloadconfigurationmodel%28completionhandler_%29.md): Downloads models that the system needs for the current configuration.
