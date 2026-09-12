> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/latentsemanticmapping/lsmmapwritetourl(_:_:_:)](https://developer.apple.com/documentation/latentsemanticmapping/lsmmapwritetourl(_:_:_:))

# LSMMapWriteToURL(\_:\_:\_:) (Swift)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Compiles the map, if necessary, and stores it into the specified file.

## Declaration

```swift
func LSMMapWriteToURL(_ mapref: LSMMap, _ file: CFURL, _ flags: CFOptionFlags) -> OSStatus
```

## See Also

### Loading and Saving a Map

- [LSMMapCreateFromURL(\_:\_:\_:)](lsmmapcreatefromurl%28______%29.md): Loads a map from the specified file.
- [LSMMapWriteToStream(\_:\_:\_:\_:)](lsmmapwritetostream%28________%29.md): Writes information about a map or text to a stream in text form.
- [Storage Flags](storage-flags.md): Options for loading and saving a map to a file.

# LSMMapWriteToURL (Objective-C)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Compiles the map, if necessary, and stores it into the specified file.

## Declaration

```objectivec
OSStatus LSMMapWriteToURL(LSMMapRef mapref, CFURLRef file, CFOptionFlags flags);
```

## See Also

### Loading and Saving a Map

- [LSMMapCreateFromURL](lsmmapcreatefromurl%28______%29.md): Loads a map from the specified file.
- [LSMMapWriteToStream](lsmmapwritetostream%28________%29.md): Writes information about a map or text to a stream in text form.
- [Storage Flags](storage-flags.md): Options for loading and saving a map to a file.
