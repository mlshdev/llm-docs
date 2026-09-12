> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmclockinvalidate(_:)](https://developer.apple.com/documentation/coremedia/cmclockinvalidate(_:))

# CMClockInvalidate(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Stops the clock.

## Declaration

```swift
func CMClockInvalidate(_ clock: CMClock)
```

## Parameters

- `clock`: The clock to stop.

<a id="Discussion"></a>

## Discussion

After invalidation, the clock returns errors from all APIs. Only the owner of the clock should call this function.

# CMClockInvalidate (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Stops the clock.

## Declaration

```objectivec
extern void CMClockInvalidate(CMClockRef clock);
```

## Parameters

- `clock`: The clock to stop.

<a id="Discussion"></a>

## Discussion

After invalidation, the clock returns errors from all APIs. Only the owner of the clock should call this function.
