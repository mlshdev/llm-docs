> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosessionportdescription/preferreddatasource](https://developer.apple.com/documentation/avfaudio/avaudiosessionportdescription/preferreddatasource)

# preferredDataSource (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The preferred audio data source for the port.

## Declaration

```swift
var preferredDataSource: AVAudioSessionDataSourceDescription? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property indicates the data source selected using the [setPreferredDataSource(\_:)](setpreferreddatasource%28__%29.md) method. To see the actual data source, use the [selectedDataSource](selecteddatasource.md) property.

If `nil`, the port doesn’t support selecting between multiple data sources, or no preferred data source has been selected.

## See Also

### Managing a Port’s Data Sources

- [dataSources](datasources.md): The available data sources for the port.
- [selectedDataSource](selecteddatasource.md): The currently selected audio data source for the port.
- [setPreferredDataSource(\_:)](setpreferreddatasource%28__%29.md): Sets the preferred audio data source for the port.

# preferredDataSource (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The preferred audio data source for the port.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVAudioSessionDataSourceDescription * preferredDataSource;
```

<a id="Discussion"></a>

## Discussion

The value of this property indicates the data source selected using the [setPreferredDataSource:error:](setpreferreddatasource%28__%29.md) method. To see the actual data source, use the [selectedDataSource](selecteddatasource.md) property.

If `nil`, the port doesn’t support selecting between multiple data sources, or no preferred data source has been selected.

## See Also

### Managing a Port’s Data Sources

- [dataSources](datasources.md): The available data sources for the port.
- [selectedDataSource](selecteddatasource.md): The currently selected audio data source for the port.
- [setPreferredDataSource:error:](setpreferreddatasource%28__%29.md): Sets the preferred audio data source for the port.
