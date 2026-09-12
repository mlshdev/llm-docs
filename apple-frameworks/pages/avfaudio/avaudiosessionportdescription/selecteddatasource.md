> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosessionportdescription/selecteddatasource](https://developer.apple.com/documentation/avfaudio/avaudiosessionportdescription/selecteddatasource)

# selectedDataSource (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The currently selected audio data source for the port.

## Declaration

```swift
var selectedDataSource: AVAudioSessionDataSourceDescription? { get }
```

<a id="Discussion"></a>

## Discussion

If this property returns `nil`, the port doesn’t support selecting between multiple data sources.

## See Also

### Managing a Port’s Data Sources

- [dataSources](datasources.md): The available data sources for the port.
- [preferredDataSource](preferreddatasource.md): The preferred audio data source for the port.
- [setPreferredDataSource(\_:)](setpreferreddatasource%28__%29.md): Sets the preferred audio data source for the port.

# selectedDataSource (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The currently selected audio data source for the port.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVAudioSessionDataSourceDescription * selectedDataSource;
```

<a id="Discussion"></a>

## Discussion

If this property returns `nil`, the port doesn’t support selecting between multiple data sources.

## See Also

### Managing a Port’s Data Sources

- [dataSources](datasources.md): The available data sources for the port.
- [preferredDataSource](preferreddatasource.md): The preferred audio data source for the port.
- [setPreferredDataSource:error:](setpreferreddatasource%28__%29.md): Sets the preferred audio data source for the port.
