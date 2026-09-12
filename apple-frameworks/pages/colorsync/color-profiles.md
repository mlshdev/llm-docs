> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/color-profiles](https://developer.apple.com/documentation/colorsync/color-profiles)

# Color profiles (Swift)

**Framework:** ColorSync  
**Kind:** API Collection

Work with the ICC profiles that describe device and working color spaces.

<a id="Overview"></a>

## Overview

A [ColorSyncProfile](colorsyncprofile.md) wraps an ICC profile, the description of a device or working color space that ColorSync uses to convert color accurately. Create profiles from a name, a file, or raw ICC data, and read a profile’s tags and header. To round trip a profile through raw ICC bytes, use [ColorSyncProfileCopyData(\_:\_:)](colorsyncprofilecopydata%28____%29.md) to get the bytes you embed in an image or file, and [ColorSyncProfileCreate(\_:\_:)](colorsyncprofilecreate%28____%29.md) to reconstruct a profile from bytes you extract. On macOS, you can also install a profile for the current user in `~/Library/ColorSync/Profiles`, or for everyone on the system in `/Library/ColorSync/Profiles`. To convert color between profiles, build a [ColorSyncTransform](colorsynctransform.md). To bridge to Core Graphics, pass a profile to [CGColorSpaceCreateWithColorSyncProfile(\_:\_:)](../coregraphics/cgcolorspacecreatewithcolorsyncprofile%28____%29.md).

## Topics

### Profiling objects

- [ColorSyncMutableProfile](colorsyncmutableprofile.md): A reference to a mutable ICC color profile.
- [ColorSyncProfile](colorsyncprofile.md): A reference to an immutable International Color Consortium (ICC) color profile.

### Creating a profile

- [ColorSyncProfileCreateWithName(\_:)](colorsyncprofilecreatewithname%28__%29.md): Creates a profile from a predefined profile name.
- [ColorSyncProfileCreateWithURL(\_:\_:)](colorsyncprofilecreatewithurl%28____%29.md): Creates a profile from ICC profile data at a URL.
- [ColorSyncProfileCreateWithURLAndOptions(\_:\_:\_:)](colorsyncprofilecreatewithurlandoptions%28______%29.md): Creates a profile from ICC profile data at a URL, using the given options.
- [ColorSyncProfileCreateMutable()](colorsyncprofilecreatemutable%28%29.md): Creates an empty mutable profile.
- [ColorSyncProfileCreateMutableCopy(\_:)](colorsyncprofilecreatemutablecopy%28__%29.md): Creates a mutable copy of a profile.

### Embedding and extracting profiles

- [ColorSyncProfileCopyData(\_:\_:)](colorsyncprofilecopydata%28____%29.md): Copies the flattened data from a profile.
- [ColorSyncProfileCreate(\_:\_:)](colorsyncprofilecreate%28____%29.md): Creates a profile from ICC profile data.

### Accessing standard RGB profiles

- [kColorSyncSRGBProfile](kcolorsyncsrgbprofile.md): The sRGB color profile.
- [kColorSyncAdobeRGB1998Profile](kcolorsyncadobergb1998profile.md): The Adobe RGB (1998) color profile.
- [kColorSyncDisplayP3Profile](kcolorsyncdisplayp3profile.md): The Display P3 color profile.
- [kColorSyncDCIP3Profile](kcolorsyncdcip3profile.md): The DCI-P3 color profile.
- [kColorSyncITUR709Profile](kcolorsyncitur709profile.md): The ITU-R BT.709 color profile.
- [kColorSyncITUR2020Profile](kcolorsyncitur2020profile.md): The ITU-R BT.2020 color profile.
- [kColorSyncROMMRGBProfile](kcolorsyncrommrgbprofile.md): The ROMM RGB (ProPhoto RGB) color profile.
- [kColorSyncACESCGLinearProfile](kcolorsyncacescglinearprofile.md): The ACEScg linear color profile.
- [kColorSyncGenericRGBProfile](kcolorsyncgenericrgbprofile.md): The generic RGB color profile.

### Accessing generic and special profiles

- [kColorSyncGenericGrayProfile](kcolorsyncgenericgrayprofile.md): The generic gray color profile.
- [kColorSyncGenericGrayGamma22Profile](kcolorsyncgenericgraygamma22profile.md): The generic gray color profile with a gamma of 2.2.
- [kColorSyncGenericCMYKProfile](kcolorsyncgenericcmykprofile.md): The generic CMYK color profile.
- [kColorSyncGenericLabProfile](kcolorsyncgenericlabprofile.md): The generic CIELAB color profile.
- [kColorSyncGenericXYZProfile](kcolorsyncgenericxyzprofile.md): The generic CIEXYZ color profile.
- [kColorSyncWebSafeColorsProfile](kcolorsyncwebsafecolorsprofile.md): The web-safe colors profile.

### Reading profile data

- [ColorSyncProfileCopyDescriptionString(\_:)](colorsyncprofilecopydescriptionstring%28__%29.md): Copies the localized description string of a profile.
- [ColorSyncProfileCopyHeader(\_:)](colorsyncprofilecopyheader%28__%29.md): Copies the header from a profile.
- [ColorSyncProfileGetURL(\_:\_:)](colorsyncprofilegeturl%28____%29.md): Returns the URL of a profile.
- [ColorSyncProfileGetTypeID()](colorsyncprofilegettypeid%28%29.md): Returns the unique identifier for the ColorSync profile opaque type.

### Managing tags and the header

- [ColorSyncProfileContainsTag(\_:\_:)](colorsyncprofilecontainstag%28____%29.md): Returns a Boolean value indicating whether a profile contains a given tag.
- [ColorSyncProfileCopyTag(\_:\_:)](colorsyncprofilecopytag%28____%29.md): Copies a tag from a profile.
- [ColorSyncProfileCopyTagSignatures(\_:)](colorsyncprofilecopytagsignatures%28__%29.md): Copies the tag signatures of a profile.
- [ColorSyncProfileRemoveTag(\_:\_:)](colorsyncprofileremovetag%28____%29.md): Removes a tag from a mutable profile.
- [ColorSyncProfileSetHeader(\_:\_:)](colorsyncprofilesetheader%28____%29.md): Sets the header of a mutable profile.
- [ColorSyncProfileSetTag(\_:\_:\_:)](colorsyncprofilesettag%28______%29.md): Sets a tag in a mutable profile.

### Inspecting color characteristics

- [ColorSyncProfileIsWideGamut(\_:)](colorsyncprofileiswidegamut%28__%29.md): Returns a Boolean value indicating whether the display profile describes a wide-gamut color space.
- [ColorSyncProfileIsPQBased(\_:)](colorsyncprofileispqbased%28__%29.md): Returns a Boolean value indicating whether the profile uses ITU BT.2100 PQ transfer functions.
- [ColorSyncProfileIsHLGBased(\_:)](colorsyncprofileishlgbased%28__%29.md): Returns a Boolean value indicating whether the profile uses ITU BT.2100 HLG transfer functions.
- [ColorSyncProfileIsMatrixBased(\_:)](colorsyncprofileismatrixbased%28__%29.md): Returns a Boolean value indicating whether the profile is matrix-based.
- [ColorSyncProfileEstimateGamma(\_:\_:)](colorsyncprofileestimategamma%28____%29.md): Estimates the gamma of a profile.
- [ColorSyncProfileVerify(\_:\_:\_:)](colorsyncprofileverify%28______%29.md): Verifies whether a profile can be used.

### Finding installed profiles

- [ColorSyncIterateInstalledProfiles(\_:\_:\_:\_:)](colorsynciterateinstalledprofiles%28________%29.md): Iterates over the installed profiles.
- [ColorSyncProfileIterateCallback](colorsyncprofileiteratecallback.md): A callback that the framework invokes for each installed profile during iteration.

### Installing profiles

- [ColorSyncProfileInstall(\_:\_:\_:\_:)](colorsyncprofileinstall%28________%29.md): Installs a profile in the specified domain.
- [ColorSyncProfileUninstall(\_:\_:)](colorsyncprofileuninstall%28____%29.md): Uninstalls a profile.
- [ColorSyncIterateInstalledProfilesWithOptions(\_:\_:\_:\_:\_:)](colorsynciterateinstalledprofileswithoptions%28__________%29.md): Iterates over the installed profiles, using the given options.
- [COLORSYNC_PROFILE_INSTALL_ENTITLEMENT](colorsync_profile_install_entitlement.md)
- [kColorSyncProfileComputerDomain](kcolorsyncprofilecomputerdomain.md): The profile domain for profiles shared by all users of the computer.
- [kColorSyncProfileUserDomain](kcolorsyncprofileuserdomain.md): The profile domain for the current user’s profiles.

### Accessing profile properties

- [kColorSyncProfileClass](kcolorsyncprofileclass.md): A key for the profile’s class.
- [kColorSyncProfileColorSpace](kcolorsyncprofilecolorspace.md): A key for the profile’s color space.
- [kColorSyncProfileDescription](kcolorsyncprofiledescription.md): A key for the profile’s localized description.
- [kColorSyncProfileHeader](kcolorsyncprofileheader.md): A key for the profile’s header data.
- [kColorSyncProfileIsValid](kcolorsyncprofileisvalid.md): A key indicating whether the profile is valid.
- [kColorSyncProfilePCS](kcolorsyncprofilepcs.md): A key for the profile’s connection space (PCS).
- [kColorSyncProfileURL](kcolorsyncprofileurl.md): A key for the profile’s URL.

### Computing profile digests

- [ColorSyncProfileGetMD5(\_:)](colorsyncprofilegetmd5%28__%29.md): Returns the MD5 digest for a profile.
- [ColorSyncMD5](colorsyncmd5.md): An MD5 digest that uniquely identifies a profile, as defined by the ICC specification.
- [COLORSYNC_MD5_LENGTH](colorsync_md5_length.md)
- [kColorSyncProfileMD5Digest](kcolorsyncprofilemd5digest.md): A key for the profile’s MD5 digest.

### Tracking changes and cache

- [kColorSyncProfileRepositoryChangeNotification](kcolorsyncprofilerepositorychangenotification.md): A notification that ColorSync posts when the profile repository changes.
- [kColorSyncProfileCacheSeed](kcolorsyncprofilecacheseed.md): The current profile-cache seed (uint32_t), sent with [kColorSyncProfileRepositoryChangeNotification](kcolorsyncprofilerepositorychangenotification.md).
- [kColorSyncWaitForCacheReply](kcolorsyncwaitforcachereply.md): An iteration option that waits for the profile cache to finish updating before returning.

## See Also

### Profile and HDR metadata

- [Headroom Adaptive Gain Curve](headroom-adaptive-gain-curve.md): Work with SMPTE ST 2094-50 tone-mapping metadata shared between HDR stills and video.

# Color profiles (Objective-C)

**Framework:** ColorSync  
**Kind:** API Collection

Work with the ICC profiles that describe device and working color spaces.

<a id="Overview"></a>

## Overview

A [ColorSyncProfileRef](colorsyncprofile.md) wraps an ICC profile, the description of a device or working color space that ColorSync uses to convert color accurately. Create profiles from a name, a file, or raw ICC data, and read a profile’s tags and header. To round trip a profile through raw ICC bytes, use [ColorSyncProfileCopyData](colorsyncprofilecopydata%28____%29.md) to get the bytes you embed in an image or file, and [ColorSyncProfileCreate](colorsyncprofilecreate%28____%29.md) to reconstruct a profile from bytes you extract. On macOS, you can also install a profile for the current user in `~/Library/ColorSync/Profiles`, or for everyone on the system in `/Library/ColorSync/Profiles`. To convert color between profiles, build a [ColorSyncTransformRef](colorsynctransform.md). To bridge to Core Graphics, pass a profile to [CGColorSpaceCreateWithColorSyncProfile](../coregraphics/cgcolorspacecreatewithcolorsyncprofile%28____%29.md).

## Topics

### Profiling objects

- [ColorSyncMutableProfileRef](colorsyncmutableprofile.md): A reference to a mutable ICC color profile.
- [ColorSyncProfileRef](colorsyncprofile.md): A reference to an immutable International Color Consortium (ICC) color profile.

### Creating a profile

- [ColorSyncProfileCreateWithName](colorsyncprofilecreatewithname%28__%29.md): Creates a profile from a predefined profile name.
- [ColorSyncProfileCreateWithURL](colorsyncprofilecreatewithurl%28____%29.md): Creates a profile from ICC profile data at a URL.
- [ColorSyncProfileCreateWithURLAndOptions](colorsyncprofilecreatewithurlandoptions%28______%29.md): Creates a profile from ICC profile data at a URL, using the given options.
- [ColorSyncProfileCreateMutable](colorsyncprofilecreatemutable%28%29.md): Creates an empty mutable profile.
- [ColorSyncProfileCreateMutableCopy](colorsyncprofilecreatemutablecopy%28__%29.md): Creates a mutable copy of a profile.

### Embedding and extracting profiles

- [ColorSyncProfileCopyData](colorsyncprofilecopydata%28____%29.md): Copies the flattened data from a profile.
- [ColorSyncProfileCreate](colorsyncprofilecreate%28____%29.md): Creates a profile from ICC profile data.

### Accessing standard RGB profiles

- [kColorSyncSRGBProfile](kcolorsyncsrgbprofile.md): The sRGB color profile.
- [kColorSyncAdobeRGB1998Profile](kcolorsyncadobergb1998profile.md): The Adobe RGB (1998) color profile.
- [kColorSyncDisplayP3Profile](kcolorsyncdisplayp3profile.md): The Display P3 color profile.
- [kColorSyncDCIP3Profile](kcolorsyncdcip3profile.md): The DCI-P3 color profile.
- [kColorSyncITUR709Profile](kcolorsyncitur709profile.md): The ITU-R BT.709 color profile.
- [kColorSyncITUR2020Profile](kcolorsyncitur2020profile.md): The ITU-R BT.2020 color profile.
- [kColorSyncROMMRGBProfile](kcolorsyncrommrgbprofile.md): The ROMM RGB (ProPhoto RGB) color profile.
- [kColorSyncACESCGLinearProfile](kcolorsyncacescglinearprofile.md): The ACEScg linear color profile.
- [kColorSyncGenericRGBProfile](kcolorsyncgenericrgbprofile.md): The generic RGB color profile.

### Accessing generic and special profiles

- [kColorSyncGenericGrayProfile](kcolorsyncgenericgrayprofile.md): The generic gray color profile.
- [kColorSyncGenericGrayGamma22Profile](kcolorsyncgenericgraygamma22profile.md): The generic gray color profile with a gamma of 2.2.
- [kColorSyncGenericCMYKProfile](kcolorsyncgenericcmykprofile.md): The generic CMYK color profile.
- [kColorSyncGenericLabProfile](kcolorsyncgenericlabprofile.md): The generic CIELAB color profile.
- [kColorSyncGenericXYZProfile](kcolorsyncgenericxyzprofile.md): The generic CIEXYZ color profile.
- [kColorSyncWebSafeColorsProfile](kcolorsyncwebsafecolorsprofile.md): The web-safe colors profile.

### Reading profile data

- [ColorSyncProfileCopyDescriptionString](colorsyncprofilecopydescriptionstring%28__%29.md): Copies the localized description string of a profile.
- [ColorSyncProfileCopyHeader](colorsyncprofilecopyheader%28__%29.md): Copies the header from a profile.
- [ColorSyncProfileGetURL](colorsyncprofilegeturl%28____%29.md): Returns the URL of a profile.
- [ColorSyncProfileGetTypeID](colorsyncprofilegettypeid%28%29.md): Returns the unique identifier for the ColorSync profile opaque type.

### Managing tags and the header

- [ColorSyncProfileContainsTag](colorsyncprofilecontainstag%28____%29.md): Returns a Boolean value indicating whether a profile contains a given tag.
- [ColorSyncProfileCopyTag](colorsyncprofilecopytag%28____%29.md): Copies a tag from a profile.
- [ColorSyncProfileCopyTagSignatures](colorsyncprofilecopytagsignatures%28__%29.md): Copies the tag signatures of a profile.
- [ColorSyncProfileRemoveTag](colorsyncprofileremovetag%28____%29.md): Removes a tag from a mutable profile.
- [ColorSyncProfileSetHeader](colorsyncprofilesetheader%28____%29.md): Sets the header of a mutable profile.
- [ColorSyncProfileSetTag](colorsyncprofilesettag%28______%29.md): Sets a tag in a mutable profile.

### Inspecting color characteristics

- [ColorSyncProfileIsWideGamut](colorsyncprofileiswidegamut%28__%29.md): Returns a Boolean value indicating whether the display profile describes a wide-gamut color space.
- [ColorSyncProfileIsPQBased](colorsyncprofileispqbased%28__%29.md): Returns a Boolean value indicating whether the profile uses ITU BT.2100 PQ transfer functions.
- [ColorSyncProfileIsHLGBased](colorsyncprofileishlgbased%28__%29.md): Returns a Boolean value indicating whether the profile uses ITU BT.2100 HLG transfer functions.
- [ColorSyncProfileIsMatrixBased](colorsyncprofileismatrixbased%28__%29.md): Returns a Boolean value indicating whether the profile is matrix-based.
- [ColorSyncProfileEstimateGamma](colorsyncprofileestimategamma%28____%29.md): Estimates the gamma of a profile.
- [ColorSyncProfileVerify](colorsyncprofileverify%28______%29.md): Verifies whether a profile can be used.

### Finding installed profiles

- [ColorSyncIterateInstalledProfiles](colorsynciterateinstalledprofiles%28________%29.md): Iterates over the installed profiles.
- [ColorSyncProfileIterateCallback](colorsyncprofileiteratecallback.md): A callback that the framework invokes for each installed profile during iteration.

### Installing profiles

- [ColorSyncProfileInstall](colorsyncprofileinstall%28________%29.md): Installs a profile in the specified domain.
- [ColorSyncProfileUninstall](colorsyncprofileuninstall%28____%29.md): Uninstalls a profile.
- [ColorSyncIterateInstalledProfilesWithOptions](colorsynciterateinstalledprofileswithoptions%28__________%29.md): Iterates over the installed profiles, using the given options.
- [COLORSYNC_PROFILE_INSTALL_ENTITLEMENT](colorsync_profile_install_entitlement.md)
- [kColorSyncProfileComputerDomain](kcolorsyncprofilecomputerdomain.md): The profile domain for profiles shared by all users of the computer.
- [kColorSyncProfileUserDomain](kcolorsyncprofileuserdomain.md): The profile domain for the current user’s profiles.

### Accessing profile properties

- [kColorSyncProfileClass](kcolorsyncprofileclass.md): A key for the profile’s class.
- [kColorSyncProfileColorSpace](kcolorsyncprofilecolorspace.md): A key for the profile’s color space.
- [kColorSyncProfileDescription](kcolorsyncprofiledescription.md): A key for the profile’s localized description.
- [kColorSyncProfileHeader](kcolorsyncprofileheader.md): A key for the profile’s header data.
- [kColorSyncProfileIsValid](kcolorsyncprofileisvalid.md): A key indicating whether the profile is valid.
- [kColorSyncProfilePCS](kcolorsyncprofilepcs.md): A key for the profile’s connection space (PCS).
- [kColorSyncProfileURL](kcolorsyncprofileurl.md): A key for the profile’s URL.

### Computing profile digests

- [ColorSyncProfileGetMD5](colorsyncprofilegetmd5%28__%29.md): Returns the MD5 digest for a profile.
- [ColorSyncMD5](colorsyncmd5.md): An MD5 digest that uniquely identifies a profile, as defined by the ICC specification.
- [COLORSYNC_MD5_LENGTH](colorsync_md5_length.md)
- [kColorSyncProfileMD5Digest](kcolorsyncprofilemd5digest.md): A key for the profile’s MD5 digest.

### Tracking changes and cache

- [kColorSyncProfileRepositoryChangeNotification](kcolorsyncprofilerepositorychangenotification.md): A notification that ColorSync posts when the profile repository changes.
- [kColorSyncProfileCacheSeed](kcolorsyncprofilecacheseed.md): The current profile-cache seed (uint32_t), sent with [kColorSyncProfileRepositoryChangeNotification](kcolorsyncprofilerepositorychangenotification.md).
- [kColorSyncWaitForCacheReply](kcolorsyncwaitforcachereply.md): An iteration option that waits for the profile cache to finish updating before returning.

## See Also

### Profile and HDR metadata

- [Headroom Adaptive Gain Curve](headroom-adaptive-gain-curve.md): Work with SMPTE ST 2094-50 tone-mapping metadata shared between HDR stills and video.
