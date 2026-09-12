> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemetadataitem/startdate](https://developer.apple.com/documentation/avfoundation/avmutablemetadataitem/startdate)

# startDate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The start date of the timed metadata.

## Declaration

```swift
var startDate: Date? { get set }
```

<a id="Discussion"></a>

## Discussion

The value is `nil` if the metadata item doesn’t provide a start date.

## See Also

### Accessing timing

- [time](time.md): The timestamp for a mutable metadata item.
- [duration](duration.md): The duration of a mutable metadata item.

# startDate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The start date of the timed metadata.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSDate * startDate;
```

<a id="Discussion"></a>

## Discussion

The value is `nil` if the metadata item doesn’t provide a start date.

## See Also

### Accessing timing

- [time](time.md): The timestamp for a mutable metadata item.
- [duration](duration.md): The duration of a mutable metadata item.
