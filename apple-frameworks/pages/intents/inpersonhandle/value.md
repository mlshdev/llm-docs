> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpersonhandle/value](https://developer.apple.com/documentation/intents/inpersonhandle/value)

# value (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

The data for the handle.

## Declaration

```swift
var value: String? { get }
```

<a id="Discussion"></a>

## Discussion

The contents of this property are determined by the value of the [type](type.md) property. For example, when the handle specifies an email address, this property should contain a string similar to “address@example.com” describing the user’s email address. This information may be displayed to the user to help resolve the identity of the intended person.

## See Also

### Getting the Handle Information

- [type](type.md): The type of information contained in the handle.
- [label](label.md): A standard label that describes the meaning of the information.

# value (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

The data for the handle.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * value;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * value;
```

<a id="Discussion"></a>

## Discussion

The contents of this property are determined by the value of the [type](type.md) property. For example, when the handle specifies an email address, this property should contain a string similar to “address@example.com” describing the user’s email address. This information may be displayed to the user to help resolve the identity of the intended person.

## See Also

### Getting the Handle Information

- [type](type.md): The type of information contained in the handle.
- [label](label.md): A standard label that describes the meaning of the information.
