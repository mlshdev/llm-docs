> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioparsebootargstring](https://developer.apple.com/documentation/driverkit/ioparsebootargstring)

# IOParseBootArgString

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Function  
**Availability:** DriverKit · iOS · iPadOS · macOS

Parses any boot arguments in the macOS kernel boot-args.

## Declaration

```objectivec
bool IOParseBootArgString(const char *arg_string, char *arg_ptr, int strlen);
```

## Parameters

- `arg_string`: C-string name of the argument.
- `arg_ptr`: Pointer to char array to received parsed value.
- `strlen`: Size in bytes of the char array pointed to by arg_ptr.

<a id="return-value"></a>

## Return Value

True if the argument was found and parsed successfully to arg_ptr.

<a id="Discussion"></a>

## Discussion

If the named argument is present in the kernel boot-args, return its value as a c-string.

## See Also

### Boot Support

- [IOParseBootArgNumber](ioparsebootargnumber.md): Parses any boot arguments in the macOS kernel boot-args.
