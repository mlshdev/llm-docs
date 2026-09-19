> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fsmoduleidentity/isenabled

# isEnabled (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean value that indicates if the module is enabled.

## Declaration

```swift
var isEnabled: Bool { get }
```

## See Also

### Accessing module properties

- [bundleIdentifier](bundleidentifier.md): The module’s bundle identifier.
- [url](url.md): The module’s URL.

# enabled (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean value that indicates if the module is enabled.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isEnabled) BOOL enabled;
```

## See Also

### Accessing module properties

- [bundleIdentifier](bundleidentifier.md): The module’s bundle identifier.
- [url](url.md): The module’s URL.
