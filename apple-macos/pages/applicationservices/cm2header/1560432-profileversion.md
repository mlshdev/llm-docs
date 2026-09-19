> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/cm2header/1560432-profileversion

# profileVersion

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.6)

The version of the profile format.

## Declaration

```objectivec
UInt32 profileVersion;
```

<a id="discussion"></a>

## Discussion

 The first 8 bits indicate the major version number, followed by 8 bits indicating the minor version number. The following 2 bytes are reserved.

The profile version number is not tied to the version of the ColorSync Manager. Profile formats and their versions are defined by the ICC. For example, a major version change may indicate the addition of new required tags to the profile format; a minor version change may indicate the addition of new optional tags.
