> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcalendarevent/init(fire:)](https://developer.apple.com/documentation/homekit/hmcalendarevent/init(fire:))

# init(fire:) (Swift)

**Framework:** HomeKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a calendar event which fires based on the value of the supplied date components.

## Declaration

```swift
init(fire fireDateComponents: DateComponents)
```

## Parameters

- `fireDateComponents`: Date components that specify the time at which the event fires.

<a id="return-value"></a>

## Return Value

An initialized calendar event.

# initWithFireDateComponents: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a calendar event which fires based on the value of the supplied date components.

## Declaration

```objectivec
- (instancetype) initWithFireDateComponents:(NSDateComponents *) fireDateComponents;
```

## Parameters

- `fireDateComponents`: Date components that specify the time at which the event fires.

<a id="return-value"></a>

## Return Value

An initialized calendar event.
