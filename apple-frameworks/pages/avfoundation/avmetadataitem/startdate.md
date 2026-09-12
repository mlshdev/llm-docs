> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadataitem/startdate](https://developer.apple.com/documentation/avfoundation/avmetadataitem/startdate)

# startDate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The start date of the timed metadata.

## Declaration

```swift
var startDate: Date? { get }
```

<a id="Discussion"></a>

## Discussion

The value is `nil` if the metadata item doesn’t provide a start date.

## See Also

### Accessing timing

- [time](time.md): The timestamp of the metadata item.
- [duration](duration.md): The duration of the metadata item.

# startDate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The start date of the timed metadata.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDate * startDate;
```

<a id="Discussion"></a>

## Discussion

The value is `nil` if the metadata item doesn’t provide a start date.

## See Also

### Accessing timing

- [time](time.md): The timestamp of the metadata item.
- [duration](duration.md): The duration of the metadata item.
