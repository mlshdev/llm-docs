> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/cmworldref](https://developer.apple.com/documentation/applicationservices/cmworldref)

# CMWorldRef

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Defines an opaque data type used for color-matching and color-checking sessions.

## Declaration

```objectivec
typedef struct OpaqueCMWorldRef *CMWorldRef;
```

<a id="discussion"></a>

## Discussion

Your application passes a color world reference as a parameter on calls to functions to perform color-matching and color-checking sessions and to dispose of the color world. When your application calls the function [NCWNewColorWorld](colorsync_manager/1805079-ncwnewcolorworld.md) and the function [CWConcatColorWorld](colorsync_manager/1805087-cwconcatcolorworld.md) to allocate a color world for color-matching and color-checking sessions, the ColorSync Manager returns a reference to the color world. The ColorSync Manager defines an abstract private data structure of type `OpaqueCMWorldRef` for the color world reference.

The color world is affected by the rendering intent, lookup flag, gamut flag, and quality flag of the profiles that make up the color world. For more information, see [Rendering Intent Values for Version 2.x Profiles](1560278-x_profiles.md), [Flag Mask Definitions for Version 2.x Profiles](1560699-x_profiles.md), and [Quality Flag Values for Version 2.x Profiles](1560115-x_profiles.md).
