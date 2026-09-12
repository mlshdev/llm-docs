> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/latentsemanticmapping/lsmmapcreatefromurl(_:_:_:)](https://developer.apple.com/documentation/latentsemanticmapping/lsmmapcreatefromurl(_:_:_:))

# LSMMapCreateFromURL(\_:\_:\_:) (Swift)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Loads a map from the specified file.

## Declaration

```swift
func LSMMapCreateFromURL(_ alloc: CFAllocator?, _ file: CFURL, _ flags: CFOptionFlags) -> Unmanaged<LSMMap>?
```

## See Also

### Loading and Saving a Map

- [LSMMapWriteToURL(\_:\_:\_:)](lsmmapwritetourl%28______%29.md): Compiles the map, if necessary, and stores it into the specified file.
- [LSMMapWriteToStream(\_:\_:\_:\_:)](lsmmapwritetostream%28________%29.md): Writes information about a map or text to a stream in text form.
- [Storage Flags](storage-flags.md): Options for loading and saving a map to a file.

# LSMMapCreateFromURL (Objective-C)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Loads a map from the specified file.

## Declaration

```objectivec
LSMMapRefLSMMapCreateFromURL(CFAllocatorRef alloc, CFURLRef file, CFOptionFlags flags);
```

## See Also

### Loading and Saving a Map

- [LSMMapWriteToURL](lsmmapwritetourl%28______%29.md): Compiles the map, if necessary, and stores it into the specified file.
- [LSMMapWriteToStream](lsmmapwritetostream%28________%29.md): Writes information about a map or text to a stream in text form.
- [Storage Flags](storage-flags.md): Options for loading and saving a map to a file.
