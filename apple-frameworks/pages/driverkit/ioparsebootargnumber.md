> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioparsebootargnumber](https://developer.apple.com/documentation/driverkit/ioparsebootargnumber)

# IOParseBootArgNumber

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Function  
**Availability:** DriverKit · iOS · iPadOS · macOS

Parses any boot arguments in the macOS kernel boot-args.

## Declaration

```objectivec
bool IOParseBootArgNumber(const char *arg_string, void *arg_ptr, int max_len);
```

## Parameters

- `arg_string`: C-string name of the argument.
- `arg_ptr`: Pointer to variable to received parsed value.
- `max_len`: Size in bytes of the argument pointed to by arg_ptr.

<a id="return-value"></a>

## Return Value

True if the argument was found and parsed successfully to arg_ptr.

<a id="Discussion"></a>

## Discussion

If the named argument is present in the kernel boot-args, return its value as an integer.

## See Also

### Boot Support

- [IOParseBootArgString](ioparsebootargstring.md): Parses any boot arguments in the macOS kernel boot-args.
