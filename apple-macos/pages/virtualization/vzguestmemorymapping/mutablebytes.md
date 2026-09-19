> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzguestmemorymapping/mutablebytes

# mutableBytes (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

A pointer to the data this guest memory mapping object contains.

## Declaration

```swift
var mutableBytes: UnsafeMutableRawPointer { get }
```

# mutableBytes (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

A pointer to the data this guest memory mapping object contains.

## Declaration

```objectivec
@property (readonly) void * mutableBytes;
```
