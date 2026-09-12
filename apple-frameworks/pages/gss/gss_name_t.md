> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_name_t](https://developer.apple.com/documentation/gss/gss_name_t)

# gss_name_t (Swift)

**Framework:** GSS  
**Kind:** Type Alias  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

A pointer to an opaque type that you use to communicate name objects with GSS-API functions.

## Declaration

```swift
typealias gss_name_t = OpaquePointer
```

## See Also

### Creation and Destruction

- [gss_const_name_t](gss_const_name_t.md): A pointer to an immutable version of the opaque descriptor used to exchange name objects with GSS-API functions.
- [gss_canonicalize_name(\_:\_:\_:\_:)](gss_canonicalize_name%28________%29.md): Converts an internal name into a mechanism name.
- [GSSNameCreateDisplayString(\_:)](gssnamecreatedisplaystring%28__%29.md): Returns a string suitable for displaying to the user from a GSS name.
- [GSSCreateName(\_:\_:\_:)](gsscreatename%28______%29.md): Returns a GSS name given a buffer and a type.
- [gss_release_name(\_:\_:)](gss_release_name%28____%29.md): Frees the resources associated with a name object.

# gss_name_t (Objective-C)

**Framework:** GSS  
**Kind:** Type Alias  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

A pointer to an opaque type that you use to communicate name objects with GSS-API functions.

## Declaration

```objectivec
typedef struct gss_name_t_desc_struct * gss_name_t;
```

## See Also

### Creation and Destruction

- [gss_const_name_t](gss_const_name_t.md): A pointer to an immutable version of the opaque descriptor used to exchange name objects with GSS-API functions.
- [gss_canonicalize_name](gss_canonicalize_name%28________%29.md): Converts an internal name into a mechanism name.
- [GSSNameCreateDisplayString](gssnamecreatedisplaystring%28__%29.md): Returns a string suitable for displaying to the user from a GSS name.
- [GSSCreateName](gsscreatename%28______%29.md): Returns a GSS name given a buffer and a type.
- [gss_release_name](gss_release_name%28____%29.md): Frees the resources associated with a name object.
