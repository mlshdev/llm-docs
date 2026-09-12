> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/cmprofilename](https://developer.apple.com/documentation/applicationservices/colorsync_manager/cmprofilename)

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
