> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxhandle/value](https://developer.apple.com/documentation/callkit/cxhandle/value)

# value (Swift)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

The value of the handle.

## Declaration

```swift
var value: String { get }
```

<a id="Discussion"></a>

## Discussion

A handle’s value corresponds to its type. For example, a handle with [type](type.md) equal to [CXHandle.HandleType.phoneNumber](handletype/phonenumber.md) should have a [value](value.md) consisting of a sequence of digits.

## See Also

### Accessing Handle Attributes

- [type](type.md): The type of the handle.

# value (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

The value of the handle.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * value;
```

<a id="Discussion"></a>

## Discussion

A handle’s value corresponds to its type. For example, a handle with [type](type.md) equal to [CXHandleTypePhoneNumber](handletype/phonenumber.md) should have a [value](value.md) consisting of a sequence of digits.

## See Also

### Accessing Handle Attributes

- [type](type.md): The type of the handle.
