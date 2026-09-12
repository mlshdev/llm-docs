> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttypeexe](https://developer.apple.com/documentation/uniformtypeidentifiers/uttypeexe)

# UTTypeEXE

**Interface language:** Objective-C

**Framework:** Uniform Type Identifiers  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A type that represents a Windows executable.

## Declaration

```objectivec
extern UTType * const UTTypeEXE;
```

<a id="Discussion"></a>

## Discussion

The identifier for this type is `public.windows-executable`.

This type conforms to [UTTypeData](uttypedata.md) and [UTTypeExecutable](uttypeexecutable.md).

## See Also

### Executables

- [UTTypeExecutable](uttypeexecutable.md): A type that represents an executable.
- [UTTypeUnixExecutable](uttypeunixexecutable.md): A type that represents a UNIX executable.
