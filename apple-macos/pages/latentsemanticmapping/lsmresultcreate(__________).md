> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/latentsemanticmapping/lsmresultcreate(_:_:_:_:_:)](https://developer.apple.com/documentation/latentsemanticmapping/lsmresultcreate(_:_:_:_:_:))

# LSMResultCreate(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Returns the categories or words that best match when a text is mapped into a map, in decreasing order of likelihood.

## Declaration

```swift
func LSMResultCreate(_ alloc: CFAllocator?, _ mapref: LSMMap, _ textref: LSMText, _ numResults: CFIndex, _ flags: CFOptionFlags) -> Unmanaged<LSMResult>
```

## See Also

### Creating a Result

- [Result Flags](result-flags.md): Options for creating a result.

# LSMResultCreate (Objective-C)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Returns the categories or words that best match when a text is mapped into a map, in decreasing order of likelihood.

## Declaration

```objectivec
LSMResultRefLSMResultCreate(CFAllocatorRef alloc, LSMMapRef mapref, LSMTextRef textref, CFIndex numResults, CFOptionFlags flags);
```

## See Also

### Creating a Result

- [Result Flags](result-flags.md): Options for creating a result.
