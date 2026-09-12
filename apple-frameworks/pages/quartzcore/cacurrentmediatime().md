> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cacurrentmediatime()](https://developer.apple.com/documentation/quartzcore/cacurrentmediatime())

# CACurrentMediaTime() (Swift)

**Framework:** Core Animation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+

Returns the current absolute time, in seconds.

## Declaration

```swift
func CACurrentMediaTime() -> CFTimeInterval
```

<a id="return-value"></a>

## Return Value

A `CFTimeInterval` derived by calling `mach_absolute_time()` and converting the result to seconds.

## Mentioned In

- [Optimizing iPhone and iPad apps to support ProMotion displays](optimizing-iphone-and-ipad-apps-to-support-promotion-displays.md)

## See Also

### Animation Timing

- [CAMediaTimingFunction](camediatimingfunction.md): A function that defines the pacing of an animation as a timing curve.
- [CAMediaTiming](camediatiming.md): Methods that model a hierarchical timing system, allowing objects to map time between their parent and local time.
- [CADisplayLink](cadisplaylink.md): A timer object that allows your app to synchronize its drawing to the refresh rate of the display.
- [CAMetalDisplayLink](cametaldisplaylink.md): A class your Metal app uses to register for callbacks to synchronize its animations for a display.
- [CAMetalDisplayLink.Update](cametaldisplaylink/update.md): Stores information about a single update from a Metal display link instance.
- [CAMetalDisplayLinkDelegate](cametaldisplaylinkdelegate.md): A protocol your app implements to respond to callbacks from Core Animation for a Metal display link.

# CACurrentMediaTime (Objective-C)

**Framework:** Core Animation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+

Returns the current absolute time, in seconds.

## Declaration

```objectivec
extern CFTimeInterval CACurrentMediaTime();
```

<a id="return-value"></a>

## Return Value

A `CFTimeInterval` derived by calling `mach_absolute_time()` and converting the result to seconds.

## Mentioned In

- [Optimizing iPhone and iPad apps to support ProMotion displays](optimizing-iphone-and-ipad-apps-to-support-promotion-displays.md)

## See Also

### Animation Timing

- [CAMediaTimingFunction](camediatimingfunction.md): A function that defines the pacing of an animation as a timing curve.
- [CAMediaTiming](camediatiming.md): Methods that model a hierarchical timing system, allowing objects to map time between their parent and local time.
- [CADisplayLink](cadisplaylink.md): A timer object that allows your app to synchronize its drawing to the refresh rate of the display.
- [CAMetalDisplayLink](cametaldisplaylink.md): A class your Metal app uses to register for callbacks to synchronize its animations for a display.
- [CAMetalDisplayLinkUpdate](cametaldisplaylink/update.md): Stores information about a single update from a Metal display link instance.
- [CAMetalDisplayLinkDelegate](cametaldisplaylinkdelegate.md): A protocol your app implements to respond to callbacks from Core Animation for a Metal display link.
