> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1471353-aux_version_selector

# AUX Version Selector

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specifies version information for A/UX.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltAUXVersion](1471353-aux_version_selector/gestaltauxversion.md): The version of A/UX if it is currently executing. The result is placed into the low-order word of the response parameter. If A/UX is not executing, the `Gestalt` function returns `gestaltUnknownErr`.
