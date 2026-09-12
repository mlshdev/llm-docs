> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cametaldisplaylink/update](https://developer.apple.com/documentation/quartzcore/cametaldisplaylink/update)

# CAMetalDisplayLink.Update (Swift)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Stores information about a single update from a Metal display link instance.

## Declaration

```swift
class Update
```

## Topics

### Timing the Next Animation Frame

- [targetPresentationTimestamp](update/targetpresentationtimestamp.md): The time the system estimates until the display of the next frame.

### Drawing the Next Frame

- [targetTimestamp](update/targettimestamp.md): A deadline that indicates when your app needs to finish rendering to the drawable.
- [drawable](update/drawable.md): The Metal drawable your app uses to render the next frame.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

## See Also

### Animation Timing

- [CACurrentMediaTime()](../cacurrentmediatime%28%29.md): Returns the current absolute time, in seconds.
- [CAMediaTimingFunction](../camediatimingfunction.md): A function that defines the pacing of an animation as a timing curve.
- [CAMediaTiming](../camediatiming.md): Methods that model a hierarchical timing system, allowing objects to map time between their parent and local time.
- [CADisplayLink](../cadisplaylink.md): A timer object that allows your app to synchronize its drawing to the refresh rate of the display.
- [CAMetalDisplayLink](../cametaldisplaylink.md): A class your Metal app uses to register for callbacks to synchronize its animations for a display.
- [CAMetalDisplayLinkDelegate](../cametaldisplaylinkdelegate.md): A protocol your app implements to respond to callbacks from Core Animation for a Metal display link.

# CAMetalDisplayLinkUpdate (Objective-C)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Stores information about a single update from a Metal display link instance.

## Declaration

```objectivec
@interface CAMetalDisplayLinkUpdate : NSObject
```

## Topics

### Timing the Next Animation Frame

- [targetPresentationTimestamp](update/targetpresentationtimestamp.md): The time the system estimates until the display of the next frame.

### Drawing the Next Frame

- [targetTimestamp](update/targettimestamp.md): A deadline that indicates when your app needs to finish rendering to the drawable.
- [drawable](update/drawable.md): The Metal drawable your app uses to render the next frame.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Animation Timing

- [CACurrentMediaTime](../cacurrentmediatime%28%29.md): Returns the current absolute time, in seconds.
- [CAMediaTimingFunction](../camediatimingfunction.md): A function that defines the pacing of an animation as a timing curve.
- [CAMediaTiming](../camediatiming.md): Methods that model a hierarchical timing system, allowing objects to map time between their parent and local time.
- [CADisplayLink](../cadisplaylink.md): A timer object that allows your app to synchronize its drawing to the refresh rate of the display.
- [CAMetalDisplayLink](../cametaldisplaylink.md): A class your Metal app uses to register for callbacks to synchronize its animations for a display.
- [CAMetalDisplayLinkDelegate](../cametaldisplaylinkdelegate.md): A protocol your app implements to respond to callbacks from Core Animation for a Metal display link.
