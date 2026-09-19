> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/1560247-screen_encoding_tags

# Screen Encoding Tags

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration  
**Availability:** macOS 10.12+

Specify tags to use for screen encodings.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [cmPrtrDefaultScreens](1560247-screen_encoding_tags/cmprtrdefaultscreens.md): Use printer default screens; can have an associated value of `0` for `false` or `1` for `true`.
- [cmLinesPer](1560247-screen_encoding_tags/cmlinesper.md): Lines per unit; can have an associated value of `0` for lines per centimeter or `1` for lines per inch.
