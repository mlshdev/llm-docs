> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/authorizationstring](https://developer.apple.com/documentation/security/authorizationstring)

# AuthorizationString (Swift)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A zero-terminated string in UTF-8 encoding.

## Declaration

```swift
typealias AuthorizationString = UnsafePointer<CChar>
```

<a id="Discussion"></a>

## Discussion

Use this in a call to the [AuthorizationCopyInfo(\_:\_:\_:)](authorizationcopyinfo%28______%29.md) function for the `tag` parameter.

# AuthorizationString (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A zero-terminated string in UTF-8 encoding.

## Declaration

```objectivec
typedef const char * AuthorizationString;
```

<a id="Discussion"></a>

## Discussion

Use this in a call to the [AuthorizationCopyInfo](authorizationcopyinfo%28______%29.md) function for the `tag` parameter.
