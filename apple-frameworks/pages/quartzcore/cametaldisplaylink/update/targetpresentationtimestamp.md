> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cametaldisplaylink/update/targetpresentationtimestamp](https://developer.apple.com/documentation/quartzcore/cametaldisplaylink/update/targetpresentationtimestamp)

# targetPresentationTimestamp (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The time the system estimates until the display of the next frame.

## Declaration

```swift
var targetPresentationTimestamp: CFTimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

Update your animations based on the time difference between this timestamp and the previous timestamp.

# targetPresentationTimestamp (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The time the system estimates until the display of the next frame.

## Declaration

```objectivec
@property (nonatomic, readonly) CFTimeInterval targetPresentationTimestamp;
```

<a id="Discussion"></a>

## Discussion

Update your animations based on the time difference between this timestamp and the previous timestamp.
