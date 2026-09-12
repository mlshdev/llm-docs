> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1805227-cmenablematchingcomment](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1805227-cmenablematchingcomment)

# CMEnableMatchingComment

**Interface language:** Objective-C

**Framework:** Application Services

Inserts a comment into the currently open picture to turn matching on or off.

## Declaration

```objectivec
void CMEnableMatchingComment (
   Boolean enableIt
);
```

## Parameters

- `enableIt`: A flag that directs the ColorSync Manager to generate a `cmEnableMatchingPicComment` comment if `true`, or a `cmDisbleMatchingPicComment` comment if `false`.

<a id="overview"></a>

## Overview

If you call this function when no picture is open, it will have no effect.

## See Also

### Working With QuickDraw

- [CWMatchPixMap](1805211-cwmatchpixmap.md): Matches a pixel map in place based on a specified color world.
- [CWCheckPixMap](1805214-cwcheckpixmap.md): Checks the colors of a pixel map using the profiles of a specified color world to determine whether the colors are in the gamut of the destination device.
- [NCMBeginMatching](1805216-ncmbeginmatching.md): Sets up a QuickDraw-specific ColorSync matching session, using the specified source and destination profiles.
- [CMEndMatching](1805220-cmendmatching.md): Concludes a QuickDraw-specific ColorSync matching session initiated by a previous call to the `NCMBeginMatching` function.
- [NCMDrawMatchedPicture](1805223-ncmdrawmatchedpicture.md): Matches a picture’s colors to a destination device’s color gamut, as the picture is drawn, using the specified destination profile.
- [NCMUseProfileComment](1805229-ncmuseprofilecomment.md): Automatically embeds a profile or a profile identifier into an open picture.
