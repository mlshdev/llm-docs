> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxhandle/type](https://developer.apple.com/documentation/callkit/cxhandle/type)

# type (Swift)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

The type of the handle.

## Declaration

```swift
var type: CXHandle.HandleType { get }
```

<a id="Discussion"></a>

## Discussion

For possible values, see [CXHandle.HandleType](handletype.md).

## See Also

### Accessing Handle Attributes

- [value](value.md): The value of the handle.

# type (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

The type of the handle.

## Declaration

```objectivec
@property (nonatomic, readonly) CXHandleType type;
```

<a id="Discussion"></a>

## Discussion

For possible values, see [CXHandleType](handletype.md).

## See Also

### Accessing Handle Attributes

- [value](value.md): The value of the handle.
