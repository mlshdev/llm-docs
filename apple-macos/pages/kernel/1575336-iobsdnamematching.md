> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1575336-iobsdnamematching](https://developer.apple.com/documentation/kernel/1575336-iobsdnamematching)

# IOBSDNameMatching

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

Create a matching dictionary that specifies an IOService match based on BSD device name.

## Declaration

```objectivec
OSDictionary * IOBSDNameMatching(const char *name);
```

## Parameters

- `masterPort`: The primary port obtained from IOMasterPort(). Pass kIOMasterPortDefault to look up the default primary port.
- `options`: No options are currently defined.
- `bsdName`: The BSD name, as a const char \*.

<a id="return_value"></a>

## Return Value

The matching dictionary created, is returned on success, or zero on failure. The dictionary is commonly passed to IOServiceGetMatchingServices or IOServiceAddNotification which will consume a reference, otherwise it should be released with CFRelease by the caller.

<a id="discussion"></a>

## Discussion

IOServices that represent BSD devices have an associated BSD name. This function creates a matching dictionary that will match IOService's with a given BSD name.

## See Also

### Driver Registry

- [IORegistryEntry](ioregistryentry.md): The base class for all objects in the registry.
- [IORegistryIterator](ioregistryiterator.md): An iterator over the registry.
- [IOPrintPlane](1558295-ioprintplane.md)
- [Registry Utilities](iokit_fundamentals/registry_utilities.md)
- [Registry Keys](iokit_fundamentals/registry_keys.md)
