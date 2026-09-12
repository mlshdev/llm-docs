> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlasset/starttime](https://developer.apple.com/documentation/modelio/mdlasset/starttime)

# startTime (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The timestamp for the first timed data sample in the asset.

## Declaration

```swift
var startTime: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

Timed data in an asset is clamped to the start and end times—requesting sample data for a time sample before the start time returns the sample data at the start time.

If the asset does not contain timed information, this property’s value is zero.

## See Also

### Working with Timed Information

- [frameInterval](frameinterval.md): The time interval between data samples in the asset.
- [endTime](endtime.md): The timestamp for the last timed data sample in the asset.

# startTime (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The timestamp for the first timed data sample in the asset.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSTimeInterval startTime;
```

<a id="Discussion"></a>

## Discussion

Timed data in an asset is clamped to the start and end times—requesting sample data for a time sample before the start time returns the sample data at the start time.

If the asset does not contain timed information, this property’s value is zero.

## See Also

### Working with Timed Information

- [frameInterval](frameinterval.md): The time interval between data samples in the asset.
- [endTime](endtime.md): The timestamp for the last timed data sample in the asset.
