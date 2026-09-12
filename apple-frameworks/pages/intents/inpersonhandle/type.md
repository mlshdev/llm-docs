> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpersonhandle/type](https://developer.apple.com/documentation/intents/inpersonhandle/type)

# type (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

The type of information contained in the handle.

## Declaration

```swift
var type: INPersonHandleType { get }
```

<a id="Discussion"></a>

## Discussion

Use the value of this property to determine how to interpret the contents of the [value](value.md) property.

## See Also

### Getting the Handle Information

- [value](value.md): The data for the handle.
- [label](label.md): A standard label that describes the meaning of the information.

# type (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

The type of information contained in the handle.

## Declaration

```objectivec
@property (nonatomic, readonly) INPersonHandleType type;
```

```objectivec
@property (atomic, readonly) INPersonHandleType type;
```

<a id="Discussion"></a>

## Discussion

Use the value of this property to determine how to interpret the contents of the [value](value.md) property.

## See Also

### Getting the Handle Information

- [value](value.md): The data for the handle.
- [label](label.md): A standard label that describes the meaning of the information.
