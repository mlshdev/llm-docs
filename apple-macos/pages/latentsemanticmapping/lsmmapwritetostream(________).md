> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/latentsemanticmapping/lsmmapwritetostream(_:_:_:_:)](https://developer.apple.com/documentation/latentsemanticmapping/lsmmapwritetostream(_:_:_:_:))

# LSMMapWriteToStream(\_:\_:\_:\_:) (Swift)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Writes information about a map or text to a stream in text form.

## Declaration

```swift
func LSMMapWriteToStream(_ mapref: LSMMap, _ textref: LSMText?, _ stream: CFWriteStream, _ options: CFOptionFlags) -> OSStatus
```

## See Also

### Loading and Saving a Map

- [LSMMapCreateFromURL(\_:\_:\_:)](lsmmapcreatefromurl%28______%29.md): Loads a map from the specified file.
- [LSMMapWriteToURL(\_:\_:\_:)](lsmmapwritetourl%28______%29.md): Compiles the map, if necessary, and stores it into the specified file.
- [Storage Flags](storage-flags.md): Options for loading and saving a map to a file.

# LSMMapWriteToStream (Objective-C)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Writes information about a map or text to a stream in text form.

## Declaration

```objectivec
OSStatus LSMMapWriteToStream(LSMMapRef mapref, LSMTextRef textref, CFWriteStreamRef stream, CFOptionFlags options);
```

## See Also

### Loading and Saving a Map

- [LSMMapCreateFromURL](lsmmapcreatefromurl%28______%29.md): Loads a map from the specified file.
- [LSMMapWriteToURL](lsmmapwritetourl%28______%29.md): Compiles the map, if necessary, and stores it into the specified file.
- [Storage Flags](storage-flags.md): Options for loading and saving a map to a file.
