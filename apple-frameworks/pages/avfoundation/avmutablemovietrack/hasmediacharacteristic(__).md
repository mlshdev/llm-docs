> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovietrack/hasmediacharacteristic(_:)](https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/hasmediacharacteristic(_:))

# hasMediaCharacteristic(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether the track references media with the specified media characteristic.

## Declaration

```swift
func hasMediaCharacteristic(_ mediaCharacteristic: AVMediaCharacteristic) -> Bool
```

## Parameters

- `mediaCharacteristic`: The media characteristic of interest.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the track references media with the specified characteristic; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing track information

- [isPlayable](isplayable.md): A Boolean value that indicates whether the track is playable in the current environment.
- [isDecodable](isdecodable.md): A Boolean value that indicates whether the track is decodable in the current environment.
- [isEnabled](isenabled.md): A Boolean value that indicates whether the track’s container enables it.
- [isSelfContained](isselfcontained.md): A Boolean value that indicates whether this track references sample data only within its container file.
- [hasProtectedContent](hasprotectedcontent.md): A Boolean value that indicates whether a track contains protected content.
- [totalSampleDataLength](totalsampledatalength.md): The total number of bytes of sample data the track requires.

# hasMediaCharacteristic: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether the track references media with the specified media characteristic.

## Declaration

```objectivec
- (BOOL) hasMediaCharacteristic:(AVMediaCharacteristic) mediaCharacteristic;
```

## Parameters

- `mediaCharacteristic`: The media characteristic of interest.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the track references media with the specified characteristic; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing track information

- [enabled](isenabled.md): A Boolean value that indicates whether the track’s container enables it.
- [hasProtectedContent](hasprotectedcontent.md): A Boolean value that indicates whether a track contains protected content.
