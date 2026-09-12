> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avprovideostorage/busyreasons](https://developer.apple.com/documentation/avfoundation/avprovideostorage/busyreasons)

# busyReasons (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Whether Pro Video Storage is busy and the associated reasons.

## Declaration

```swift
var busyReasons: Set<AVProVideoStorage.BusyReason> { get }
```

<a id="discussion"></a>

## Discussion

A non-empty set indicates that Pro Video Storage is currently being modified. While this is non-empty, starting a video capture will fail with an error. This property is key-value observable.

## See Also

### Determining whether storage is busy

- [AVProVideoStorage.BusyReason](busyreason.md): A reason that Pro Video Storage may be busy.

# busyReasons (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Whether Pro Video Storage is busy and the associated reasons.

## Declaration

```objectivec
@property (nonatomic, readonly) NSSet<NSString *> * busyReasons;
```

<a id="discussion"></a>

## Discussion

A non-empty set indicates that Pro Video Storage is currently being modified. While this is non-empty, starting a video capture will fail with an error. This property is key-value observable.

## See Also

### Determining whether storage is busy

- [AVProVideoStorageBusyReason](busyreason.md): A reason that Pro Video Storage may be busy.
