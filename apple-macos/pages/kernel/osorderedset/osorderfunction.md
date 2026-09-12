> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osorderedset/osorderfunction](https://developer.apple.com/documentation/kernel/osorderedset/osorderfunction)

# OSOrderFunction

**Interface language:** Objective-C

**Framework:** Kernel

The sorting function used by an OSOrderedSet to order objects.

## Declaration

```objectivec
typedef SInt32 ( *OSOrderFunction)(
   const OSMetaClassBase *obj1,
   const OSMetaClassBase *obj2,
   void *context);
```

## Parameters

- `obj1`: An object from the ordered set. May be `NULL`.
- `obj2`: The object being ordered within the ordered set. May be `NULL`.
- `context`: A pointer to a user-provided context. May be `NULL`.

<a id="return_value"></a>

## Return Value

A comparison result of the object:

- a negative value if obj2 should precede obj1,
- a positive value if obj1 should precede obj2,
- and 0 if obj1 and obj2 have an equivalent ordering.
