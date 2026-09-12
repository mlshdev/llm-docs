> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clsbinaryitem/value](https://developer.apple.com/documentation/classkit/clsbinaryitem/value)

# value (Swift)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

The value that the binary activity item takes.

## Declaration

```swift
var value: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Interpret this value according to the binary activity item’s [valueType](valuetype.md). For example, if the value type is set to [CLSBinaryValueType.passFail](../clsbinaryvaluetype/passfail.md), then false means fail, and true means pass.

## See Also

### Managing the Value

- [valueType](valuetype.md): The kind of outcome that the binary activity item represents.

# value (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The value that the binary activity item takes.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL value;
```

<a id="Discussion"></a>

## Discussion

Interpret this value according to the binary activity item’s [valueType](valuetype.md). For example, if the value type is set to [CLSBinaryValueTypePassFail](../clsbinaryvaluetype/passfail.md), then false means fail, and true means pass.

## See Also

### Managing the Value

- [valueType](valuetype.md): The kind of outcome that the binary activity item represents.
