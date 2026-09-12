> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksectransformpreviouserrorkey](https://developer.apple.com/documentation/security/ksectransformpreviouserrorkey)

# kSecTransformPreviousErrorKey (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The key in an error’s `userInfo` dictionary whose value specifies the previous error when multiple errors occur during transform evaluation.

## Declaration

```swift
let kSecTransformPreviousErrorKey: CFString
```

<a id="Discussion"></a>

## Discussion

Use the value associated with this key to trace through a chain of [CFError](../corefoundation/cferror.md) objects when more than one error occurs during transform evaluation.

# kSecTransformPreviousErrorKey (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The key in an error’s `userInfo` dictionary whose value specifies the previous error when multiple errors occur during transform evaluation.

## Declaration

```objectivec
extern CFStringRef const kSecTransformPreviousErrorKey;
```

<a id="Discussion"></a>

## Discussion

Use the value associated with this key to trace through a chain of [CFErrorRef](../corefoundation/cferror.md) objects when more than one error occurs during transform evaluation.
