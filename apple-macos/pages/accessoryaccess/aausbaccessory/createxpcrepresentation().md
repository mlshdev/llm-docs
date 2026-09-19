> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessoryaccess/aausbaccessory/createxpcrepresentation()

# createXPCRepresentation() (Swift)

**Framework:** Accessory Access  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates an encoded representation of the USB accessory.

## Declaration

```swift
func createXPCRepresentation() -> xpc_object_t
```

<a id="Discussion"></a>

## Discussion

A USB accessory can be encoded to [xpc_object_t](https://developer.apple.com/documentation/xpc/xpc_object_t), and passed to an XPC service over an XPC connection.

# createXPCRepresentation (Objective-C)

**Framework:** Accessory Access  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates an encoded representation of the USB accessory.

## Declaration

```objectivec
- (xpc_object_t) createXPCRepresentation;
```

<a id="Discussion"></a>

## Discussion

A USB accessory can be encoded to [xpc_object_t](https://developer.apple.com/documentation/xpc/xpc_object_t), and passed to an XPC service over an XPC connection.
