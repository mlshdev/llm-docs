> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/latentsemanticmapping/lsmmapcreate(_:_:)](https://developer.apple.com/documentation/latentsemanticmapping/lsmmapcreate(_:_:))

# LSMMapCreate(\_:\_:) (Swift)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Creates a new Latent Semantic Mapping map.

## Declaration

```swift
func LSMMapCreate(_ alloc: CFAllocator?, _ flags: CFOptionFlags) -> Unmanaged<LSMMap>
```

<a id="Discussion"></a>

## Discussion

Call [CFRelease](https://developer.apple.com/documentation/corefoundation/cfrelease) to dispose of the map.

## See Also

### Creating a Map

- [Map Flags](map-flags.md): Options for creating a map.

# LSMMapCreate (Objective-C)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Creates a new Latent Semantic Mapping map.

## Declaration

```objectivec
LSMMapRefLSMMapCreate(CFAllocatorRef alloc, CFOptionFlags flags);
```

<a id="Discussion"></a>

## Discussion

Call [CFRelease](https://developer.apple.com/documentation/corefoundation/cfrelease) to dispose of the map.

## See Also

### Creating a Map

- [Map Flags](map-flags.md): Options for creating a map.
