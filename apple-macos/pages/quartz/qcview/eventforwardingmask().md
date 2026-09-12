> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcview/eventforwardingmask()](https://developer.apple.com/documentation/quartz/qcview/eventforwardingmask())

# eventForwardingMask() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Retrieves the mask used to filter which types of events are forwarded from the view to the composition during rendering.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func eventForwardingMask() -> Int
```

<a id="return-value"></a>

## Return Value

The event filtering mask.

## See Also

### Setting and Getting Event Masks

- [setEventForwardingMask(\_:)](seteventforwardingmask%28__%29.md): Deprecated. Sets the mask used to filter which types of events are forwarded from the view to the composition during rendering.

# eventForwardingMask (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Retrieves the mask used to filter which types of events are forwarded from the view to the composition during rendering.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (NSUInteger) eventForwardingMask;
```

<a id="return-value"></a>

## Return Value

The event filtering mask.

## See Also

### Setting and Getting Event Masks

- [setEventForwardingMask:](seteventforwardingmask%28__%29.md): Deprecated. Sets the mask used to filter which types of events are forwarded from the view to the composition during rendering.
