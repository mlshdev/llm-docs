> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/authorizationitem/value](https://developer.apple.com/documentation/security/authorizationitem/value)

# value (Swift)

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A pointer to information pertaining to the name field.

## Declaration

```swift
var value: UnsafeMutableRawPointer?
```

<a id="Discussion"></a>

## Discussion

If the `name` field is set to the value represented by the constant [kAuthorizationRightExecute](../kauthorizationrightexecute.md), then set the `value` field to the full POSIX pathname of the tool you want to execute. In most other cases, set this field to `NULL`.

# value (Objective-C)

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A pointer to information pertaining to the name field.

## Declaration

```objectivec
void * value;
```

<a id="Discussion"></a>

## Discussion

If the `name` field is set to the value represented by the constant [kAuthorizationRightExecute](../kauthorizationrightexecute.md), then set the `value` field to the full POSIX pathname of the tool you want to execute. In most other cases, set this field to `NULL`.
