> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfshow(_:)](https://developer.apple.com/documentation/corefoundation/cfshow(_:))

# CFShow(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Prints a description of a Core Foundation object to stderr.

## Declaration

```swift
func CFShow(_ obj: CFTypeRef!)
```

## Parameters

- `obj`: A Core Foundation object derived from CFType. If `obj` is not a Core Foundation object, an assertion is raised.

<a id="Discussion"></a>

## Discussion

The output is printed to the standard I/O standard error (stderr).

This function is useful as a debugging aid for Core Foundation objects. Because these objects are based on opaque types, it is difficult to examine their contents directly. However, the opaque types implement `description` function callbacks that return descriptions of their objects. This function invokes these callbacks.

<a id="Special-Considerations"></a>

### Special Considerations

You can use `CFShow` in one of two general ways. If your debugger supports function calls (such as `gdb` does), call `CFShow` in the debugger:

```objc
(gdb) call (void) CFShow(string)
Hello World
```

You can also incorporate calls to `CFShow` in a test version of your code to print out “snapshots” of Core Foundation objects to the console.

## See Also

### Miscellaneous Functions

- [CFCopyDescription(\_:)](cfcopydescription%28__%29.md): Returns a textual description of a Core Foundation object.
- [CFCopyTypeIDDescription(\_:)](cfcopytypeiddescription%28__%29.md): Returns a textual description of a Core Foundation type, as identified by its type ID, which can be used when debugging.
- [CFGetTypeID(\_:)](cfgettypeid%28__%29.md): Returns the unique identifier of an opaque type to which a Core Foundation object belongs.

# CFShow (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Prints a description of a Core Foundation object to stderr.

## Declaration

```objectivec
extern void CFShow(CFTypeRef obj);
```

## Parameters

- `obj`: A Core Foundation object derived from CFType. If `obj` is not a Core Foundation object, an assertion is raised.

<a id="Discussion"></a>

## Discussion

The output is printed to the standard I/O standard error (stderr).

This function is useful as a debugging aid for Core Foundation objects. Because these objects are based on opaque types, it is difficult to examine their contents directly. However, the opaque types implement `description` function callbacks that return descriptions of their objects. This function invokes these callbacks.

<a id="Special-Considerations"></a>

### Special Considerations

You can use `CFShow` in one of two general ways. If your debugger supports function calls (such as `gdb` does), call `CFShow` in the debugger:

```objc
(gdb) call (void) CFShow(string)
Hello World
```

You can also incorporate calls to `CFShow` in a test version of your code to print out “snapshots” of Core Foundation objects to the console.

## See Also

### Miscellaneous Functions

- [CFCopyDescription](cfcopydescription%28__%29.md): Returns a textual description of a Core Foundation object.
- [CFCopyTypeIDDescription](cfcopytypeiddescription%28__%29.md): Returns a textual description of a Core Foundation type, as identified by its type ID, which can be used when debugging.
- [CFGetTypeID](cfgettypeid%28__%29.md): Returns the unique identifier of an opaque type to which a Core Foundation object belongs.
