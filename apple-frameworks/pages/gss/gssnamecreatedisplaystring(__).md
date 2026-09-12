> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gssnamecreatedisplaystring(_:)](https://developer.apple.com/documentation/gss/gssnamecreatedisplaystring(_:))

# GSSNameCreateDisplayString(\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+

Returns a string suitable for displaying to the user from a GSS name.

## Declaration

```swift
func GSSNameCreateDisplayString(_ name: gss_name_t) -> Unmanaged<CFString>?
```

## Parameters

- `name`: The GSS name from which to get the display string.

<a id="return-value"></a>

## Return Value

A `CFString` object that contains a string suitable for display to the user. Use `CFRelease` to free this object’s memory when you are done with it.

<a id="Discussion"></a>

## Discussion

Do not use the result of this function call to verify ACL subjects.

## See Also

### Creation and Destruction

- [gss_name_t](gss_name_t.md): A pointer to an opaque type that you use to communicate name objects with GSS-API functions.
- [gss_const_name_t](gss_const_name_t.md): A pointer to an immutable version of the opaque descriptor used to exchange name objects with GSS-API functions.
- [gss_canonicalize_name(\_:\_:\_:\_:)](gss_canonicalize_name%28________%29.md): Converts an internal name into a mechanism name.
- [GSSCreateName(\_:\_:\_:)](gsscreatename%28______%29.md): Returns a GSS name given a buffer and a type.
- [gss_release_name(\_:\_:)](gss_release_name%28____%29.md): Frees the resources associated with a name object.

# GSSNameCreateDisplayString (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+

Returns a string suitable for displaying to the user from a GSS name.

## Declaration

```objectivec
CFStringRefGSSNameCreateDisplayString(gss_name_t name);
```

## Parameters

- `name`: The GSS name from which to get the display string.

<a id="return-value"></a>

## Return Value

A `CFString` object that contains a string suitable for display to the user. Use `CFRelease` to free this object’s memory when you are done with it.

<a id="Discussion"></a>

## Discussion

Do not use the result of this function call to verify ACL subjects.

## See Also

### Creation and Destruction

- [gss_name_t](gss_name_t.md): A pointer to an opaque type that you use to communicate name objects with GSS-API functions.
- [gss_const_name_t](gss_const_name_t.md): A pointer to an immutable version of the opaque descriptor used to exchange name objects with GSS-API functions.
- [gss_canonicalize_name](gss_canonicalize_name%28________%29.md): Converts an internal name into a mechanism name.
- [GSSCreateName](gsscreatename%28______%29.md): Returns a GSS name given a buffer and a type.
- [gss_release_name](gss_release_name%28____%29.md): Frees the resources associated with a name object.
