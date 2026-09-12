> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/ar_strings_enumerator_t](https://developer.apple.com/documentation/arkit/ar_strings_enumerator_t)

# ar_strings_enumerator_t

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Type Alias  
**Availability:** visionOS 26.0+

Handler for enumerating a collection of strings.

## Declaration

```objectivec
typedef _Bool (^)(const char *) ar_strings_enumerator_t;
```

## Parameters

- `string`: An UTF-8 encoded string representation.

<a id="return-value"></a>

## Return Value

`true` to continue enumerating, or `false` to stop enumerating.

## See Also

### Strings

- [ar_strings_enumerator_function_t](ar_strings_enumerator_function_t.md): Function for enumerating a collection of strings.
- [ar_strings_t](ar_strings_t.md): A collection of strings.
- [ar_strings_enumerate_strings](ar_strings_enumerate_strings.md): Enumerate a collection of strings.
- [ar_strings_enumerate_strings_f](ar_strings_enumerate_strings_f.md): Enumerate a collection of strings using a function.
- [ar_strings_get_count](ar_strings_get_count.md): Returns the number of strings in this collection.
