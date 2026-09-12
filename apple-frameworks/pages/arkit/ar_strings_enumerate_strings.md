> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/ar_strings_enumerate_strings](https://developer.apple.com/documentation/arkit/ar_strings_enumerate_strings)

# ar_strings_enumerate_strings

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Function  
**Availability:** visionOS 26.0+

Enumerate a collection of strings.

## Declaration

```objectivec
extern void ar_strings_enumerate_strings(ar_strings_t strings, ar_strings_enumerator_t strings_enumerator);
```

## Parameters

- `strings`: Strings collection.
- `strings_enumerator`: The enumerator handler.

## See Also

### Strings

- [ar_strings_enumerator_function_t](ar_strings_enumerator_function_t.md): Function for enumerating a collection of strings.
- [ar_strings_enumerator_t](ar_strings_enumerator_t.md): Handler for enumerating a collection of strings.
- [ar_strings_t](ar_strings_t.md): A collection of strings.
- [ar_strings_enumerate_strings_f](ar_strings_enumerate_strings_f.md): Enumerate a collection of strings using a function.
- [ar_strings_get_count](ar_strings_get_count.md): Returns the number of strings in this collection.
