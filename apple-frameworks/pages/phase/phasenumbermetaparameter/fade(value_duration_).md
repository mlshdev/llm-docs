> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasenumbermetaparameter/fade(value:duration:)](https://developer.apple.com/documentation/phase/phasenumbermetaparameter/fade(value:duration:))

# fade(value:duration:) (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Sets the value gradually over the given amount of time.

## Declaration

```swift
func fade(value: Double, duration: TimeInterval)
```

## Parameters

- `value`: A new value for the metaparameter.
- `duration`: An amount of time in which the number gradually adjusts to the new value.

# fadeToValue:duration: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Sets the value gradually over the given amount of time.

## Declaration

```objectivec
- (void) fadeToValue:(double) value duration:(NSTimeInterval) duration;
```

## Parameters

- `value`: A new value for the metaparameter.
- `duration`: An amount of time in which the number gradually adjusts to the new value.
