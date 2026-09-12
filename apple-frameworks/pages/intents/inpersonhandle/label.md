> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpersonhandle/label](https://developer.apple.com/documentation/intents/inpersonhandle/label)

# label (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.2+ · iPadOS 10.2+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.1+

A standard label that describes the meaning of the information.

## Declaration

```swift
var label: INPersonHandleLabel? { get }
```

<a id="Discussion"></a>

## Discussion

Use the value in this property to distinguish between person handles with similar types of information. For example, you might use it to distinguish between a person’s home and work phone numbers.

## See Also

### Getting the Handle Information

- [type](type.md): The type of information contained in the handle.
- [value](value.md): The data for the handle.

# label (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.2+ · iPadOS 10.2+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

A standard label that describes the meaning of the information.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) INPersonHandleLabel label;
```

```objectivec
@property (atomic, readonly, nullable) INPersonHandleLabel label;
```

<a id="Discussion"></a>

## Discussion

Use the value in this property to distinguish between person handles with similar types of information. For example, you might use it to distinguish between a person’s home and work phone numbers.

## See Also

### Getting the Handle Information

- [type](type.md): The type of information contained in the handle.
- [value](value.md): The data for the handle.
