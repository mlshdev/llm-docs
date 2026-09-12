> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcphysicalinputprofile/valuedidchangehandler](https://developer.apple.com/documentation/gamecontroller/gcphysicalinputprofile/valuedidchangehandler)

# valueDidChangeHandler (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The block that the profile calls when an element’s value changes.

## Declaration

```swift
var valueDidChangeHandler: ((GCPhysicalInputProfile, GCControllerElement) -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

The block’s parameters are:

- **`profile`**: The controller profile that contains the element.
- **`element`**: The element with the value that changes.

If multiple elements change values at the same time, the profile calls this block once for each element that changes. If the value of a subelement changes, the profile only calls the block for the containing element.

## See Also

### Getting change information

- [lastEventTimestamp](lasteventtimestamp.md): The time of the most recent change to an element’s value.

# valueDidChangeHandler (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The block that the profile calls when an element’s value changes.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^valueDidChangeHandler)(GCPhysicalInputProfile *profile, GCControllerElement *element);
```

<a id="Discussion"></a>

## Discussion

The block’s parameters are:

- **`profile`**: The controller profile that contains the element.
- **`element`**: The element with the value that changes.

If multiple elements change values at the same time, the profile calls this block once for each element that changes. If the value of a subelement changes, the profile only calls the block for the containing element.

## See Also

### Getting change information

- [lastEventTimestamp](lasteventtimestamp.md): The time of the most recent change to an element’s value.
