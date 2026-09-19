> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/launch_services/invalid_extension_index

# Invalid Extension Index

**Interface language:** Objective-C

**Framework:** Core Services

Represents an invalid filename extension index.

## Declaration

```objectivec
enum {
   kLSInvalidExtensionIndex = 0xFFFFFFFF
};
```

## Topics

### Constants

- [kLSInvalidExtensionIndex](invalid_extension_index/klsinvalidextensionindex.md): The value obtained by the `LSGetExtensionInfo` functionif the filename does not contain a valid extension.
