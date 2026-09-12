> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasedistancemodelfadeoutparameters/init(culldistance:)](https://developer.apple.com/documentation/phase/phasedistancemodelfadeoutparameters/init(culldistance:))

# init(cullDistance:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a distance beyond which sound sources stop playing.

## Declaration

```swift
init(cullDistance: Double)
```

## Parameters

- `cullDistance`: The distance beyond which the framework doesn’t process a sound source. The value must be greater than or equal to `1`.

# initWithCullDistance: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a distance beyond which sound sources stop playing.

## Declaration

```objectivec
- (instancetype) initWithCullDistance:(double) cullDistance;
```

## Parameters

- `cullDistance`: The distance beyond which the framework doesn’t process a sound source. The value must be greater than or equal to `1`.
