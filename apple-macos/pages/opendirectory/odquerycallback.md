> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odquerycallback](https://developer.apple.com/documentation/opendirectory/odquerycallback)

# ODQueryCallback (Swift)

**Framework:** Open Directory  
**Kind:** Type Alias  
**Availability:** Mac Catalyst · macOS

A callback function called as results from a scheduled query are returned.

## Declaration

```swift
typealias ODQueryCallback = (ODQueryRef?, CFArray?, CFError?, UnsafeMutableRawPointer?) -> Void
```

<a id="Discussion"></a>

## Discussion

Results from this function must be retained or copied. The results from any given call are partial. If both `inResults` and `inError` are `NULL`, the query has completed.

## See Also

### Data Types

- [ODAttributeType](odattributetype.md): An Open Directory attribute type.
- [ODAuthenticationType](odauthenticationtype.md): An Open Directory authentication type.
- [ODContext](odcontext.md): An Open Directory context type.
- [ODNodeRef](odnoderef.md): An Open Directory node type.
- [ODQueryRef](odqueryref.md): An Open Directory query type.
- [ODRecordRef](odrecordref.md): An Open Directory record type.
- [ODSessionRef](odsessionref.md): An Open Directory session type.
- [ODMatchType](odmatchtype.md): An Open Directory match type.
- [ODNodeType](odnodetype.md): An Open Directory node type.
- [ODRecordType](odrecordtype.md): An Open Directory record type.

# ODQueryCallback (Objective-C)

**Framework:** Open Directory  
**Kind:** Type Alias  
**Availability:** Mac Catalyst · macOS

A callback function called as results from a scheduled query are returned.

## Declaration

```objectivec
typedef void (*)(struct __ODQuery *, const struct __CFArray *, struct __CFError *, void *) ODQueryCallback;
```

<a id="Discussion"></a>

## Discussion

Results from this function must be retained or copied. The results from any given call are partial. If both `inResults` and `inError` are `NULL`, the query has completed.

## See Also

### Data Types

- [ODAttributeType](odattributetype.md): An Open Directory attribute type.
- [ODAuthenticationType](odauthenticationtype.md): An Open Directory authentication type.
- [ODContext](odcontext.md): An Open Directory context type.
- [ODNodeRef](odnoderef.md): An Open Directory node type.
- [ODQueryRef](odqueryref.md): An Open Directory query type.
- [ODRecordRef](odrecordref.md): An Open Directory record type.
- [ODSessionRef](odsessionref.md): An Open Directory session type.
- [ODMatchType](odmatchtype.md): An Open Directory match type.
- [ODNodeType](odnodetype.md): An Open Directory node type.
- [ODRecordType](odrecordtype.md): An Open Directory record type.
