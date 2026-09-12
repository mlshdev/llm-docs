> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/utexportedtypedeclarations/uttypeicons/uttypesymbolname](https://developer.apple.com/documentation/bundleresources/information-property-list/utexportedtypedeclarations/uttypeicons/uttypesymbolname)

# UTTypeSymbolName

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · macOS 11.0+ · visionOS 1.0+

The name of an SF Symbol that represents this type.

## Details

`UTTypeSymbolName`

<a id="Discussion"></a>

## Discussion

This key is optional. If you omit this key, the system relies on other available icon information to represent the type.

If you set this key, the system can display the named symbol in contexts that use a symbol instead of a full icon, such as sidebars and pickers.
