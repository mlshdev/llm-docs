> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbundle](https://developer.apple.com/documentation/corefoundation/cfbundle)

# CFBundle (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFBundle
```

<a id="Overview"></a>

## Overview

CFBundle allows you to use a folder hierarchy called a bundle to organize and locate many types of application resources including images, sounds, localized strings, and executable code. In macOS, bundles can also be used by CFM applications to load and execute functions from Mach-O frameworks. You can use bundles to support multiple languages or execute your application on multiple operating environments.

You create a bundle object using one of the `CFBundleCreate...` functions. CFBundle provides several functions for finding resources within a bundle. The [CFBundleCopyResourceURL(\_:\_:\_:\_:)](cfbundlecopyresourceurl%28________%29.md) function returns the location of a resource of the specified name and type, and in the specified subdirectory. Use [CFBundleCopyResourceURLForLocalization(\_:\_:\_:\_:\_:)](cfbundlecopyresourceurlforlocalization%28__________%29.md) to restrict the search to a specific localization name. Use [CFBundleCopyResourceURLsOfType(\_:\_:\_:)](cfbundlecopyresourceurlsoftype%28______%29.md) to get the locations of all resources of a specified type.

CFBundle provides functions for getting bundle information, such as its identifier and information dictionary. Use the [CFBundleGetIdentifier(\_:)](cfbundlegetidentifier%28__%29.md) function to get the identifier of a bundle, and the [CFBundleGetInfoDictionary(\_:)](cfbundlegetinfodictionary%28__%29.md) function to get its information dictionary. The principal intended purpose for locating bundles by identifier is so that code (in frameworks, plugins, etc.) can find its own bundle.

You can also obtain locations of subdirectories in a bundle represented as CFURL objects. The [CFBundleCopyExecutableURL(\_:)](cfbundlecopyexecutableurl%28__%29.md) function returns the location of the application’s executable. The functions [CFBundleCopyResourceURL(\_:\_:\_:\_:)](cfbundlecopyresourceurl%28________%29.md), [CFBundleCopySharedFrameworksURL(\_:)](cfbundlecopysharedframeworksurl%28__%29.md), [CFBundleCopyPrivateFrameworksURL(\_:)](cfbundlecopyprivateframeworksurl%28__%29.md), [CFBundleCopySharedSupportURL(\_:)](cfbundlecopysharedsupporturl%28__%29.md), and [CFBundleCopyBuiltInPlugInsURL(\_:)](cfbundlecopybuiltinpluginsurl%28__%29.md) return the location of a bundle’s subdirectory containing resources, shared frameworks, private frameworks, shared support files, and plug-ins respectively.

Other functions are used to manage localizations. The [CFBundleCopyLocalizedString(\_:\_:\_:\_:)](cfbundlecopylocalizedstring%28________%29.md) and [CFBundleCopyLocalizationsForURL(\_:)](cfbundlecopylocalizationsforurl%28__%29.md) functions return a localized string from a bundle’s strings file. The [CFBundleCopyLocalizationsForPreferences(\_:\_:)](cfbundlecopylocalizationsforpreferences%28____%29.md) function returns the localizations that CFBundle would prefer, given the specified bundle and user preference localizations.

Unlike some other Core Foundation opaque types with similar Cocoa Foundation names (such as CFString and `NSString`), [Bundle](../foundation/bundle.md) objects cannot be cast (“toll-free bridged”) to CFBundle objects.

Unlike `NSBundle`, which does not support unloading (because the Objective C runtime does not support the unloading of Objective C code), you can unload CFBundle objects.

[CFBundleGetFunctionPointerForName(\_:\_:)](cfbundlegetfunctionpointerforname%28____%29.md) and related calls automatically load a bundle if it is not already loaded. When the last reference to the CFBundle object is released and it is finally deallocated, then the code will be unloaded if it is still loaded and if the executable is of a type that supports unloading. If you keep this in mind, and if you make sure that everything that uses the bundle keeps a retain on the CFBundle object, then you can just use the bundle naturally and never have to worry about when it is loaded and unloaded.

On the other hand, if you want to manually manage when the bundle is loaded and unloaded, then you can use [CFBundleLoadExecutable(\_:)](cfbundleloadexecutable%28__%29.md) and [CFBundleUnloadExecutable(\_:)](cfbundleunloadexecutable%28__%29.md)—although this technique is not recommended. These functions force immediate loading and unloading of the executable (if it has not already been loaded/unloaded, and in the case of unloading if the executable is of a type that supports unloading). If you do this, then the code calling `CFBundleUnloadExecutable` is responsible for making sure that there are no remaining references to anything in the bundle’s code before it is unloaded. In the previous approach, by contrast, this responsibility can be distributed to the individual code sections that use the bundle, by making sure that each one keeps its own retain on the CFBundle object.

One further point about CFBundle reference counting: if you are taking the first approach, but do not actually wish the bundle’s code to be unloaded (as is often the case), or if you are taking the second approach of manually managing the unloading yourself, then in many cases you do not actually have to worry about releasing a CFBundle object. CFBundle instances are uniqued, so there is only one CFBundle object for a given bundle, and rarely are there so many bundles being considered at once that the memory usage for CFBundle objects would be significant. There are cases in which a process could create CFBundle objects for potentially an unlimited number of bundles, and such processes would wish to balance retains and releases carefully, but such cases are likely to be rare.

Note that it is best to compile any unloadable bundles with the flag `-fno-constant-cfstrings`—see [Bundle Programming Guide](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFBundles/Introduction/Introduction.html#//apple_ref/doc/uid/10000123i) for more details.

## Topics

### Creating and Accessing Bundles

- [CFBundleCreate(\_:\_:)](cfbundlecreate%28____%29.md): Creates a CFBundle object.
- [CFBundleCreateBundlesFromDirectory(\_:\_:\_:)](cfbundlecreatebundlesfromdirectory%28______%29.md): Searches a directory and constructs an array of CFBundle objects from all valid bundles in the specified directory.
- [CFBundleGetAllBundles()](cfbundlegetallbundles%28%29.md): Returns an array containing all of the bundles currently open in the application.
- [CFBundleGetBundleWithIdentifier(\_:)](cfbundlegetbundlewithidentifier%28__%29.md): Locate a bundle given its program-defined identifier.
- [CFBundleGetMainBundle()](cfbundlegetmainbundle%28%29.md): Returns an application’s main bundle.

### Loading and Unloading a Bundle

- [CFBundleIsExecutableLoaded(\_:)](cfbundleisexecutableloaded%28__%29.md): Obtains information about the load status for a bundle’s main executable.
- [CFBundlePreflightExecutable(\_:\_:)](cfbundlepreflightexecutable%28____%29.md): Returns a Boolean value that indicates whether a given bundle is loaded or appears to be loadable.
- [CFBundleLoadExecutable(\_:)](cfbundleloadexecutable%28__%29.md): Loads a bundle’s main executable code into memory and dynamically links it into the running application.
- [CFBundleLoadExecutableAndReturnError(\_:\_:)](cfbundleloadexecutableandreturnerror%28____%29.md): Returns a Boolean value that indicates whether a given bundle is loaded, attempting to load it if necessary.
- [CFBundleUnloadExecutable(\_:)](cfbundleunloadexecutable%28__%29.md): Unloads the main executable for the specified bundle.

### Finding Locations in a Bundle

- [CFBundleCopyAuxiliaryExecutableURL(\_:\_:)](cfbundlecopyauxiliaryexecutableurl%28____%29.md): Returns the location of a bundle’s auxiliary executable code.
- [CFBundleCopyBuiltInPlugInsURL(\_:)](cfbundlecopybuiltinpluginsurl%28__%29.md): Returns the location of a bundle’s built in plug-in.
- [CFBundleCopyExecutableURL(\_:)](cfbundlecopyexecutableurl%28__%29.md): Returns the location of a bundle’s main executable code.
- [CFBundleCopyPrivateFrameworksURL(\_:)](cfbundlecopyprivateframeworksurl%28__%29.md): Returns the location of a bundle’s private Frameworks directory.
- [CFBundleCopyResourcesDirectoryURL(\_:)](cfbundlecopyresourcesdirectoryurl%28__%29.md): Returns the location of a bundle’s Resources directory.
- [CFBundleCopySharedFrameworksURL(\_:)](cfbundlecopysharedframeworksurl%28__%29.md): Returns the location of a bundle’s shared frameworks directory.
- [CFBundleCopySharedSupportURL(\_:)](cfbundlecopysharedsupporturl%28__%29.md): Returns the location of a bundle’s shared support files directory.
- [CFBundleCopySupportFilesDirectoryURL(\_:)](cfbundlecopysupportfilesdirectoryurl%28__%29.md): Returns the location of the bundle’s support files directory.

### Locating Bundle Resources

- [CFBundleCloseBundleResourceMap(\_:\_:)](cfbundleclosebundleresourcemap%28____%29.md): Deprecated. Closes an open resource map for a bundle.
- [CFBundleCopyResourceURL(\_:\_:\_:\_:)](cfbundlecopyresourceurl%28________%29.md): Returns the location of a resource contained in the specified bundle.
- [CFBundleCopyResourceURLInDirectory(\_:\_:\_:\_:)](cfbundlecopyresourceurlindirectory%28________%29.md): Returns the location of a resource contained in the specified bundle directory without requiring the creation of a CFBundle object.
- [CFBundleCopyResourceURLsOfType(\_:\_:\_:)](cfbundlecopyresourceurlsoftype%28______%29.md): Assembles an array of URLs specifying all of the resources of the specified type found in a bundle.
- [CFBundleCopyResourceURLsOfTypeInDirectory(\_:\_:\_:)](cfbundlecopyresourceurlsoftypeindirectory%28______%29.md): Returns an array of CFURL objects describing the locations of all resources in a bundle of the specified type without needing to create a CFBundle object.
- [CFBundleCopyResourceURLForLocalization(\_:\_:\_:\_:\_:)](cfbundlecopyresourceurlforlocalization%28__________%29.md): Returns the location of a localized resource in a bundle.
- [CFBundleCopyResourceURLsOfTypeForLocalization(\_:\_:\_:\_:)](cfbundlecopyresourceurlsoftypeforlocalization%28________%29.md): Returns an array containing copies of the URL locations for a specified bundle, resource, and localization name.
- [CFBundleOpenBundleResourceFiles(\_:\_:\_:)](cfbundleopenbundleresourcefiles%28______%29.md): Deprecated. Opens the non-localized and localized resource files (if any) for a bundle in separate resource maps.
- [CFBundleOpenBundleResourceMap(\_:)](cfbundleopenbundleresourcemap%28__%29.md): Deprecated. Opens the non-localized and localized resource files (if any) for a bundle in a single resource map.

### Managing Localizations

- [CFBundleCopyBundleLocalizations(\_:)](cfbundlecopybundlelocalizations%28__%29.md): Returns an array containing a bundle’s localizations.
- [CFBundleCopyLocalizedString(\_:\_:\_:\_:)](cfbundlecopylocalizedstring%28________%29.md): Returns a localized string from a bundle’s strings file.
- [CFBundleCopyLocalizationsForPreferences(\_:\_:)](cfbundlecopylocalizationsforpreferences%28____%29.md): Given an array of possible localizations and preferred locations, returns the one or more of them that CFBundle would use, without reference to the current application context.
- [CFBundleCopyLocalizationsForURL(\_:)](cfbundlecopylocalizationsforurl%28__%29.md): Returns an array containing the localizations for a bundle or executable at a particular location.
- [CFBundleCopyPreferredLocalizationsFromArray(\_:)](cfbundlecopypreferredlocalizationsfromarray%28__%29.md): Given an array of possible localizations, returns the one or more of them that CFBundle would use in the current application context.

### Managing Executable Code

- [CFBundleGetDataPointerForName(\_:\_:)](cfbundlegetdatapointerforname%28____%29.md): Returns a data pointer to a symbol of the given name.
- [CFBundleGetDataPointersForNames(\_:\_:\_:)](cfbundlegetdatapointersfornames%28______%29.md): Returns a C array of data pointer to symbols of the given names.
- [CFBundleGetFunctionPointerForName(\_:\_:)](cfbundlegetfunctionpointerforname%28____%29.md): Returns a pointer to a function in a bundle’s executable code using the function name as the search key.
- [CFBundleGetFunctionPointersForNames(\_:\_:\_:)](cfbundlegetfunctionpointersfornames%28______%29.md): Constructs a function table containing pointers to all of the functions found in a bundle’s main executable code.
- [CFBundleGetPlugIn(\_:)](cfbundlegetplugin%28__%29.md): Returns a bundle’s plug-in.

### Getting Bundle Properties

- [CFBundleCopyBundleURL(\_:)](cfbundlecopybundleurl%28__%29.md): Returns the location of a bundle.
- [CFBundleGetDevelopmentRegion(\_:)](cfbundlegetdevelopmentregion%28__%29.md): Returns the bundle’s development region from the bundle’s information property list.
- [CFBundleGetIdentifier(\_:)](cfbundlegetidentifier%28__%29.md): Returns the bundle identifier from a bundle’s information property list.
- [CFBundleGetInfoDictionary(\_:)](cfbundlegetinfodictionary%28__%29.md): Returns a bundle’s information dictionary.
- [CFBundleGetLocalInfoDictionary(\_:)](cfbundlegetlocalinfodictionary%28__%29.md): Returns a bundle’s localized information dictionary.
- [CFBundleGetValueForInfoDictionaryKey(\_:\_:)](cfbundlegetvalueforinfodictionarykey%28____%29.md): Returns a value (localized if possible) from a bundle’s information dictionary.
- [CFBundleCopyInfoDictionaryInDirectory(\_:)](cfbundlecopyinfodictionaryindirectory%28__%29.md): Returns a bundle’s information dictionary.
- [CFBundleCopyInfoDictionaryForURL(\_:)](cfbundlecopyinfodictionaryforurl%28__%29.md): Returns the information dictionary for a given URL location.
- [CFBundleGetPackageInfo(\_:\_:\_:)](cfbundlegetpackageinfo%28______%29.md): Returns a bundle’s package type and creator.
- [CFBundleGetPackageInfoInDirectory(\_:\_:\_:)](cfbundlegetpackageinfoindirectory%28______%29.md): Returns a bundle’s package type and creator without having to create a CFBundle object.
- [CFBundleCopyExecutableArchitectures(\_:)](cfbundlecopyexecutablearchitectures%28__%29.md): Returns an array of CFNumbers representing the architectures a given bundle provides.
- [CFBundleCopyExecutableArchitecturesForURL(\_:)](cfbundlecopyexecutablearchitecturesforurl%28__%29.md): Returns an array of CFNumbers representing the architectures a given URL provides.
- [CFBundleGetVersionNumber(\_:)](cfbundlegetversionnumber%28__%29.md): Returns a bundle’s version number.

### Getting the CFBundle Type ID

- [CFBundleGetTypeID()](cfbundlegettypeid%28%29.md): Returns the type identifier for the CFBundle opaque type.

### Data Types

- [CFBundleRefNum](cfbundlerefnum.md): Type that identifies a distinct reference number for a resource map.

### Constants

- [Information Property List Keys](information-property-list-keys.md): Standard keys found in a bundle’s information property list file.
- [Architecture Types](1537096-architecture-types.md): Constants that identify executable architecture types.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Related Documentation

- [Bundle Programming Guide](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFBundles/Introduction/Introduction.html#//apple_ref/doc/uid/10000123i)

### Opaque Types

- [CFAllocator](cfallocator.md)
- [CFArray](cfarray.md)
- [CFAttributedString](cfattributedstring.md)
- [CFBag](cfbag.md)
- [CFBinaryHeap](cfbinaryheap.md)
- [CFBitVector](cfbitvector.md)
- [CFBoolean](cfboolean.md)
- [CFCalendar](cfcalendar.md)
- [CFCharacterSet](cfcharacterset.md)
- [CFData](cfdata.md)
- [CFDate](cfdate.md)
- [CFDateFormatter](cfdateformatter.md)
- [CFDictionary](cfdictionary.md)
- [CFError](cferror.md)
- [CFFileDescriptor](cffiledescriptor.md)

# CFBundleRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef struct __CFBundle * CFBundleRef;
```

<a id="Overview"></a>

## Overview

CFBundle allows you to use a folder hierarchy called a bundle to organize and locate many types of application resources including images, sounds, localized strings, and executable code. In macOS, bundles can also be used by CFM applications to load and execute functions from Mach-O frameworks. You can use bundles to support multiple languages or execute your application on multiple operating environments.

You create a bundle object using one of the `CFBundleCreate...` functions. CFBundle provides several functions for finding resources within a bundle. The [CFBundleCopyResourceURL](cfbundlecopyresourceurl%28________%29.md) function returns the location of a resource of the specified name and type, and in the specified subdirectory. Use [CFBundleCopyResourceURLForLocalization](cfbundlecopyresourceurlforlocalization%28__________%29.md) to restrict the search to a specific localization name. Use [CFBundleCopyResourceURLsOfType](cfbundlecopyresourceurlsoftype%28______%29.md) to get the locations of all resources of a specified type.

CFBundle provides functions for getting bundle information, such as its identifier and information dictionary. Use the [CFBundleGetIdentifier](cfbundlegetidentifier%28__%29.md) function to get the identifier of a bundle, and the [CFBundleGetInfoDictionary](cfbundlegetinfodictionary%28__%29.md) function to get its information dictionary. The principal intended purpose for locating bundles by identifier is so that code (in frameworks, plugins, etc.) can find its own bundle.

You can also obtain locations of subdirectories in a bundle represented as CFURL objects. The [CFBundleCopyExecutableURL](cfbundlecopyexecutableurl%28__%29.md) function returns the location of the application’s executable. The functions [CFBundleCopyResourceURL](cfbundlecopyresourceurl%28________%29.md), [CFBundleCopySharedFrameworksURL](cfbundlecopysharedframeworksurl%28__%29.md), [CFBundleCopyPrivateFrameworksURL](cfbundlecopyprivateframeworksurl%28__%29.md), [CFBundleCopySharedSupportURL](cfbundlecopysharedsupporturl%28__%29.md), and [CFBundleCopyBuiltInPlugInsURL](cfbundlecopybuiltinpluginsurl%28__%29.md) return the location of a bundle’s subdirectory containing resources, shared frameworks, private frameworks, shared support files, and plug-ins respectively.

Other functions are used to manage localizations. The [CFBundleCopyLocalizedString](cfbundlecopylocalizedstring%28________%29.md) and [CFBundleCopyLocalizationsForURL](cfbundlecopylocalizationsforurl%28__%29.md) functions return a localized string from a bundle’s strings file. The [CFBundleCopyLocalizationsForPreferences](cfbundlecopylocalizationsforpreferences%28____%29.md) function returns the localizations that CFBundle would prefer, given the specified bundle and user preference localizations.

Unlike some other Core Foundation opaque types with similar Cocoa Foundation names (such as CFString and `NSString`), [NSBundle](../foundation/bundle.md) objects cannot be cast (“toll-free bridged”) to CFBundle objects.

Unlike `NSBundle`, which does not support unloading (because the Objective C runtime does not support the unloading of Objective C code), you can unload CFBundle objects.

[CFBundleGetFunctionPointerForName](cfbundlegetfunctionpointerforname%28____%29.md) and related calls automatically load a bundle if it is not already loaded. When the last reference to the CFBundle object is released and it is finally deallocated, then the code will be unloaded if it is still loaded and if the executable is of a type that supports unloading. If you keep this in mind, and if you make sure that everything that uses the bundle keeps a retain on the CFBundle object, then you can just use the bundle naturally and never have to worry about when it is loaded and unloaded.

On the other hand, if you want to manually manage when the bundle is loaded and unloaded, then you can use [CFBundleLoadExecutable](cfbundleloadexecutable%28__%29.md) and [CFBundleUnloadExecutable](cfbundleunloadexecutable%28__%29.md)—although this technique is not recommended. These functions force immediate loading and unloading of the executable (if it has not already been loaded/unloaded, and in the case of unloading if the executable is of a type that supports unloading). If you do this, then the code calling `CFBundleUnloadExecutable` is responsible for making sure that there are no remaining references to anything in the bundle’s code before it is unloaded. In the previous approach, by contrast, this responsibility can be distributed to the individual code sections that use the bundle, by making sure that each one keeps its own retain on the CFBundle object.

One further point about CFBundle reference counting: if you are taking the first approach, but do not actually wish the bundle’s code to be unloaded (as is often the case), or if you are taking the second approach of manually managing the unloading yourself, then in many cases you do not actually have to worry about releasing a CFBundle object. CFBundle instances are uniqued, so there is only one CFBundle object for a given bundle, and rarely are there so many bundles being considered at once that the memory usage for CFBundle objects would be significant. There are cases in which a process could create CFBundle objects for potentially an unlimited number of bundles, and such processes would wish to balance retains and releases carefully, but such cases are likely to be rare.

Note that it is best to compile any unloadable bundles with the flag `-fno-constant-cfstrings`—see [Bundle Programming Guide](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFBundles/Introduction/Introduction.html#//apple_ref/doc/uid/10000123i) for more details.

## Topics

### Creating and Accessing Bundles

- [CFBundleCreate](cfbundlecreate%28____%29.md): Creates a CFBundle object.
- [CFBundleCreateBundlesFromDirectory](cfbundlecreatebundlesfromdirectory%28______%29.md): Searches a directory and constructs an array of CFBundle objects from all valid bundles in the specified directory.
- [CFBundleGetAllBundles](cfbundlegetallbundles%28%29.md): Returns an array containing all of the bundles currently open in the application.
- [CFBundleGetBundleWithIdentifier](cfbundlegetbundlewithidentifier%28__%29.md): Locate a bundle given its program-defined identifier.
- [CFBundleGetMainBundle](cfbundlegetmainbundle%28%29.md): Returns an application’s main bundle.

### Loading and Unloading a Bundle

- [CFBundleIsExecutableLoaded](cfbundleisexecutableloaded%28__%29.md): Obtains information about the load status for a bundle’s main executable.
- [CFBundlePreflightExecutable](cfbundlepreflightexecutable%28____%29.md): Returns a Boolean value that indicates whether a given bundle is loaded or appears to be loadable.
- [CFBundleLoadExecutable](cfbundleloadexecutable%28__%29.md): Loads a bundle’s main executable code into memory and dynamically links it into the running application.
- [CFBundleLoadExecutableAndReturnError](cfbundleloadexecutableandreturnerror%28____%29.md): Returns a Boolean value that indicates whether a given bundle is loaded, attempting to load it if necessary.
- [CFBundleUnloadExecutable](cfbundleunloadexecutable%28__%29.md): Unloads the main executable for the specified bundle.

### Finding Locations in a Bundle

- [CFBundleCopyAuxiliaryExecutableURL](cfbundlecopyauxiliaryexecutableurl%28____%29.md): Returns the location of a bundle’s auxiliary executable code.
- [CFBundleCopyBuiltInPlugInsURL](cfbundlecopybuiltinpluginsurl%28__%29.md): Returns the location of a bundle’s built in plug-in.
- [CFBundleCopyExecutableURL](cfbundlecopyexecutableurl%28__%29.md): Returns the location of a bundle’s main executable code.
- [CFBundleCopyPrivateFrameworksURL](cfbundlecopyprivateframeworksurl%28__%29.md): Returns the location of a bundle’s private Frameworks directory.
- [CFBundleCopyResourcesDirectoryURL](cfbundlecopyresourcesdirectoryurl%28__%29.md): Returns the location of a bundle’s Resources directory.
- [CFBundleCopySharedFrameworksURL](cfbundlecopysharedframeworksurl%28__%29.md): Returns the location of a bundle’s shared frameworks directory.
- [CFBundleCopySharedSupportURL](cfbundlecopysharedsupporturl%28__%29.md): Returns the location of a bundle’s shared support files directory.
- [CFBundleCopySupportFilesDirectoryURL](cfbundlecopysupportfilesdirectoryurl%28__%29.md): Returns the location of the bundle’s support files directory.

### Locating Bundle Resources

- [CFBundleCloseBundleResourceMap](cfbundleclosebundleresourcemap%28____%29.md): Deprecated. Closes an open resource map for a bundle.
- [CFBundleCopyResourceURL](cfbundlecopyresourceurl%28________%29.md): Returns the location of a resource contained in the specified bundle.
- [CFBundleCopyResourceURLInDirectory](cfbundlecopyresourceurlindirectory%28________%29.md): Returns the location of a resource contained in the specified bundle directory without requiring the creation of a CFBundle object.
- [CFBundleCopyResourceURLsOfType](cfbundlecopyresourceurlsoftype%28______%29.md): Assembles an array of URLs specifying all of the resources of the specified type found in a bundle.
- [CFBundleCopyResourceURLsOfTypeInDirectory](cfbundlecopyresourceurlsoftypeindirectory%28______%29.md): Returns an array of CFURL objects describing the locations of all resources in a bundle of the specified type without needing to create a CFBundle object.
- [CFBundleCopyResourceURLForLocalization](cfbundlecopyresourceurlforlocalization%28__________%29.md): Returns the location of a localized resource in a bundle.
- [CFBundleCopyResourceURLsOfTypeForLocalization](cfbundlecopyresourceurlsoftypeforlocalization%28________%29.md): Returns an array containing copies of the URL locations for a specified bundle, resource, and localization name.
- [CFBundleOpenBundleResourceFiles](cfbundleopenbundleresourcefiles%28______%29.md): Deprecated. Opens the non-localized and localized resource files (if any) for a bundle in separate resource maps.
- [CFBundleOpenBundleResourceMap](cfbundleopenbundleresourcemap%28__%29.md): Deprecated. Opens the non-localized and localized resource files (if any) for a bundle in a single resource map.

### Managing Localizations

- [CFBundleCopyBundleLocalizations](cfbundlecopybundlelocalizations%28__%29.md): Returns an array containing a bundle’s localizations.
- [CFBundleCopyLocalizedString](cfbundlecopylocalizedstring%28________%29.md): Returns a localized string from a bundle’s strings file.
- [CFBundleCopyLocalizationsForPreferences](cfbundlecopylocalizationsforpreferences%28____%29.md): Given an array of possible localizations and preferred locations, returns the one or more of them that CFBundle would use, without reference to the current application context.
- [CFBundleCopyLocalizationsForURL](cfbundlecopylocalizationsforurl%28__%29.md): Returns an array containing the localizations for a bundle or executable at a particular location.
- [CFBundleCopyPreferredLocalizationsFromArray](cfbundlecopypreferredlocalizationsfromarray%28__%29.md): Given an array of possible localizations, returns the one or more of them that CFBundle would use in the current application context.
- [CFCopyLocalizedString](cfcopylocalizedstring.md): Searches the default strings file `Localizable.strings` for the string associated with the specified key.
- [CFCopyLocalizedStringFromTable](cfcopylocalizedstringfromtable.md): Searches the specified strings file for the string associated with the specified key.
- [CFCopyLocalizedStringFromTableInBundle](cfcopylocalizedstringfromtableinbundle.md): Returns a localized version of the specified string.
- [CFCopyLocalizedStringWithDefaultValue](cfcopylocalizedstringwithdefaultvalue.md): Returns a localized version of a localization string.

### Managing Executable Code

- [CFBundleGetDataPointerForName](cfbundlegetdatapointerforname%28____%29.md): Returns a data pointer to a symbol of the given name.
- [CFBundleGetDataPointersForNames](cfbundlegetdatapointersfornames%28______%29.md): Returns a C array of data pointer to symbols of the given names.
- [CFBundleGetFunctionPointerForName](cfbundlegetfunctionpointerforname%28____%29.md): Returns a pointer to a function in a bundle’s executable code using the function name as the search key.
- [CFBundleGetFunctionPointersForNames](cfbundlegetfunctionpointersfornames%28______%29.md): Constructs a function table containing pointers to all of the functions found in a bundle’s main executable code.
- [CFBundleGetPlugIn](cfbundlegetplugin%28__%29.md): Returns a bundle’s plug-in.

### Getting Bundle Properties

- [CFBundleCopyBundleURL](cfbundlecopybundleurl%28__%29.md): Returns the location of a bundle.
- [CFBundleGetDevelopmentRegion](cfbundlegetdevelopmentregion%28__%29.md): Returns the bundle’s development region from the bundle’s information property list.
- [CFBundleGetIdentifier](cfbundlegetidentifier%28__%29.md): Returns the bundle identifier from a bundle’s information property list.
- [CFBundleGetInfoDictionary](cfbundlegetinfodictionary%28__%29.md): Returns a bundle’s information dictionary.
- [CFBundleGetLocalInfoDictionary](cfbundlegetlocalinfodictionary%28__%29.md): Returns a bundle’s localized information dictionary.
- [CFBundleGetValueForInfoDictionaryKey](cfbundlegetvalueforinfodictionarykey%28____%29.md): Returns a value (localized if possible) from a bundle’s information dictionary.
- [CFBundleCopyInfoDictionaryInDirectory](cfbundlecopyinfodictionaryindirectory%28__%29.md): Returns a bundle’s information dictionary.
- [CFBundleCopyInfoDictionaryForURL](cfbundlecopyinfodictionaryforurl%28__%29.md): Returns the information dictionary for a given URL location.
- [CFBundleGetPackageInfo](cfbundlegetpackageinfo%28______%29.md): Returns a bundle’s package type and creator.
- [CFBundleGetPackageInfoInDirectory](cfbundlegetpackageinfoindirectory%28______%29.md): Returns a bundle’s package type and creator without having to create a CFBundle object.
- [CFBundleCopyExecutableArchitectures](cfbundlecopyexecutablearchitectures%28__%29.md): Returns an array of CFNumbers representing the architectures a given bundle provides.
- [CFBundleCopyExecutableArchitecturesForURL](cfbundlecopyexecutablearchitecturesforurl%28__%29.md): Returns an array of CFNumbers representing the architectures a given URL provides.
- [CFBundleGetVersionNumber](cfbundlegetversionnumber%28__%29.md): Returns a bundle’s version number.

### Getting the CFBundle Type ID

- [CFBundleGetTypeID](cfbundlegettypeid%28%29.md): Returns the type identifier for the CFBundle opaque type.

### Data Types

- [CFBundleRefNum](cfbundlerefnum.md): Type that identifies a distinct reference number for a resource map.

### Constants

- [Information Property List Keys](information-property-list-keys.md): Standard keys found in a bundle’s information property list file.
- [Architecture Types](1537096-architecture-types.md): Constants that identify executable architecture types.

## See Also

### Related Documentation

- [Bundle Programming Guide](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFBundles/Introduction/Introduction.html#//apple_ref/doc/uid/10000123i)

### Opaque Types

- [CFAllocatorRef](cfallocator.md)
- [CFArrayRef](cfarray.md)
- [CFAttributedStringRef](cfattributedstring.md)
- [CFBagRef](cfbag.md)
- [CFBinaryHeapRef](cfbinaryheap.md)
- [CFBitVectorRef](cfbitvector.md)
- [CFBooleanRef](cfboolean.md)
- [CFCalendarRef](cfcalendar.md)
- [CFCharacterSetRef](cfcharacterset.md)
- [CFDataRef](cfdata.md)
- [CFDateRef](cfdate.md)
- [CFDateFormatterRef](cfdateformatter.md)
- [CFDictionaryRef](cfdictionary.md)
- [CFErrorRef](cferror.md)
- [CFFileDescriptorRef](cffiledescriptor.md)
