> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlasset/frameinterval](https://developer.apple.com/documentation/modelio/mdlasset/frameinterval)

# frameInterval (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The time interval between data samples in the asset.

## Declaration

```swift
var frameInterval: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

If the asset does not contain timed information, this property’s value is zero. Otherwise, this property represents frame timing: For example, if an asset contains animation data to be presented at 24 frames per second, this property’s value is `0.04167` (1/24 second).

## See Also

### Working with Timed Information

- [startTime](starttime.md): The timestamp for the first timed data sample in the asset.
- [endTime](endtime.md): The timestamp for the last timed data sample in the asset.

# frameInterval (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The time interval between data samples in the asset.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSTimeInterval frameInterval;
```

<a id="Discussion"></a>

## Discussion

If the asset does not contain timed information, this property’s value is zero. Otherwise, this property represents frame timing: For example, if an asset contains animation data to be presented at 24 frames per second, this property’s value is `0.04167` (1/24 second).

## See Also

### Working with Timed Information

- [startTime](starttime.md): The timestamp for the first timed data sample in the asset.
- [endTime](endtime.md): The timestamp for the last timed data sample in the asset.
