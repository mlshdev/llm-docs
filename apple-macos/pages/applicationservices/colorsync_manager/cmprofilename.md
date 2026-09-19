> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/colorsync_manager/cmprofilename

# CMProfileName

**Interface language:** Objective-C

**Framework:** Application Services

Contains profile name and length.

## Declaration

```objectivec
struct CMProfileName {
   UniCharCount profileNameLength;
   UniChar profileName[256];
};
typedef struct CMProfileName CMProfileName;
```
