> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcmotionvaluechangedhandler](https://developer.apple.com/documentation/gamecontroller/gcmotionvaluechangedhandler)

# GCMotionValueChangedHandler (Swift)

**Framework:** Game Controller  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The signature for the block that the profile calls when an element’s value changes.

## Declaration

```swift
typealias GCMotionValueChangedHandler = (GCMotion) -> Void
```

## Parameters

- `motion`: The profile with the element values that change.

## See Also

### Receiving a Callback When Input Values Change

- [valueChangedHandler](gcmotion/valuechangedhandler.md): The block that the profile calls when an element’s value changes.

# GCMotionValueChangedHandler (Objective-C)

**Framework:** Game Controller  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The signature for the block that the profile calls when an element’s value changes.

## Declaration

```objectivec
typedef void (^)(GCMotion *) GCMotionValueChangedHandler;
```

## Parameters

- `motion`: The profile with the element values that change.

## See Also

### Receiving a Callback When Input Values Change

- [valueChangedHandler](gcmotion/valuechangedhandler.md): The block that the profile calls when an element’s value changes.
