> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clsbinaryitem/valuetype](https://developer.apple.com/documentation/classkit/clsbinaryitem/valuetype)

# valueType (Swift)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

The kind of outcome that the binary activity item represents.

## Declaration

```swift
var valueType: CLSBinaryValueType { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to indicate how to present the binary result stored in the [value](value.md) property to a teacher. For example, you might use a binary item to indicate whether a student passed a quiz, in which case you set [valueType](valuetype.md) to [CLSBinaryValueType.passFail](../clsbinaryvaluetype/passfail.md). If you use another binary item to indicate whether a student used a hint while taking the quiz, set its [valueType](valuetype.md) to [CLSBinaryValueType.yesNo](../clsbinaryvaluetype/yesno.md). For a complete list of possible values, see the [CLSBinaryValueType](../clsbinaryvaluetype.md) enumeration.

## See Also

### Managing the Value

- [value](value.md): The value that the binary activity item takes.

# valueType (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The kind of outcome that the binary activity item represents.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) CLSBinaryValueType valueType;
```

<a id="Discussion"></a>

## Discussion

Use this property to indicate how to present the binary result stored in the [value](value.md) property to a teacher. For example, you might use a binary item to indicate whether a student passed a quiz, in which case you set [valueType](valuetype.md) to [CLSBinaryValueTypePassFail](../clsbinaryvaluetype/passfail.md). If you use another binary item to indicate whether a student used a hint while taking the quiz, set its [valueType](valuetype.md) to [CLSBinaryValueTypeYesNo](../clsbinaryvaluetype/yesno.md). For a complete list of possible values, see the [CLSBinaryValueType](../clsbinaryvaluetype.md) enumeration.

## See Also

### Managing the Value

- [value](value.md): The value that the binary activity item takes.
