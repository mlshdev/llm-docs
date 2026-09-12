> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosessionportdescription/setpreferreddatasource(_:)](https://developer.apple.com/documentation/avfaudio/avaudiosessionportdescription/setpreferreddatasource(_:))

# setPreferredDataSource(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Sets the preferred audio data source for the port.

## Declaration

```swift
func setPreferredDataSource(_ dataSource: AVAudioSessionDataSourceDescription?) throws
```

## Parameters

- `dataSource`: The data source to use.

<a id="Discussion"></a>

## Discussion

Call this method to request a change to the audio session’s preferred data source. To determine whether the change has taken effect, inspect the [selectedDataSource](selecteddatasource.md) property. (For details, see Configuring standard audio behaviors in the [AVAudioSession](../avaudiosession.md) class reference).

If the port is in use, changing this setting is likely to result in a route reconfiguration.

Set a preferred data source only after setting the audio session’s category and mode, and activating the session.

## See Also

### Managing a Port’s Data Sources

- [dataSources](datasources.md): The available data sources for the port.
- [selectedDataSource](selecteddatasource.md): The currently selected audio data source for the port.
- [preferredDataSource](preferreddatasource.md): The preferred audio data source for the port.

# setPreferredDataSource:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Sets the preferred audio data source for the port.

## Declaration

```objectivec
- (BOOL) setPreferredDataSource:(AVAudioSessionDataSourceDescription *) dataSource error:(NSError **) outError;
```

## Parameters

- `dataSource`: The data source to use.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a request was successfully made, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Call this method to request a change to the audio session’s preferred data source. To determine whether the change has taken effect, inspect the [selectedDataSource](selecteddatasource.md) property. (For details, see Configuring standard audio behaviors in the [AVAudioSession](../avaudiosession.md) class reference).

If the port is in use, changing this setting is likely to result in a route reconfiguration.

Set a preferred data source only after setting the audio session’s category and mode, and activating the session.

## See Also

### Managing a Port’s Data Sources

- [dataSources](datasources.md): The available data sources for the port.
- [selectedDataSource](selecteddatasource.md): The currently selected audio data source for the port.
- [preferredDataSource](preferreddatasource.md): The preferred audio data source for the port.
