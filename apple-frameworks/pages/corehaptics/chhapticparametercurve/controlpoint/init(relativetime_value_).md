> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticparametercurve/controlpoint/init(relativetime:value:)](https://developer.apple.com/documentation/corehaptics/chhapticparametercurve/controlpoint/init(relativetime:value:))

# init(relativeTime:value:) (Swift)

**Framework:** Core Haptics  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Creates a control point from its time and value.

## Declaration

```swift
init(relativeTime time: TimeInterval, value: Float)
```

## Parameters

- `time`: The time at which the associated parameter reaches this value, relative to the parameter curve’s start time.
- `value`: The value of the parameter at this control point.

# initWithRelativeTime:value: (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Creates a control point from its time and value.

## Declaration

```objectivec
- (instancetype) initWithRelativeTime:(NSTimeInterval) time value:(float) value;
```

## Parameters

- `time`: The time at which the associated parameter reaches this value, relative to the parameter curve’s start time.
- `value`: The value of the parameter at this control point.
