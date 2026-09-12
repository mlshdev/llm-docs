> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/authorizationitem/valuelength](https://developer.apple.com/documentation/security/authorizationitem/valuelength)

# valueLength (Swift)

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The number of bytes in the value field.

## Declaration

```swift
var valueLength: Int
```

<a id="Discussion"></a>

## Discussion

Set this field to `0` if you set the `value` field to `NULL`.

# valueLength (Objective-C)

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The number of bytes in the value field.

## Declaration

```objectivec
size_t valueLength;
```

<a id="Discussion"></a>

## Discussion

Set this field to `0` if you set the `value` field to `NULL`.
