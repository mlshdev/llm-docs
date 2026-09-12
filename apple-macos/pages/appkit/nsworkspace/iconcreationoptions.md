> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/iconcreationoptions](https://developer.apple.com/documentation/appkit/nsworkspace/iconcreationoptions)

# NSWorkspace.IconCreationOptions (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Constants that describe options for creating icons.

## Declaration

```swift
struct IconCreationOptions
```

<a id="overview"></a>

## Overview

Use these constants with the [setIcon(\_:forFile:options:)](seticon%28__forfile_options_%29.md) method. You can combine these using the C bitwise OR operator.

## Topics

### Creation Options

- [excludeQuickDrawElementsIconCreationOption](iconcreationoptions/excludequickdrawelementsiconcreationoption.md): An option to suppress generation of the QuickDraw format icon representations that are used in macOS 10.0 through macOS 10.4.
- [exclude10_4ElementsIconCreationOption](iconcreationoptions/exclude10_4elementsiconcreationoption.md): An option to suppress generation of the new higher resolution icon representations that are supported in macOS 10.4.

### Initializers

- [init(rawValue:)](iconcreationoptions/init%28rawvalue_%29.md): Initializes an icon creation option using the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Managing Icons

- [icon(forFile:)](icon%28forfile_%29.md): Returns an image containing the icon for the specified file.
- [icon(forFiles:)](icon%28forfiles_%29.md): Returns an image containing the icon for the specified files.
- [icon(for:)](icon%28for_%29.md): Returns an image containing the icon for the specified content type.
- [setIcon(\_:forFile:options:)](seticon%28__forfile_options_%29.md): Sets the icon for the file or directory at the specified path.

# NSWorkspaceIconCreationOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that describe options for creating icons.

## Declaration

```objectivec
enum NSWorkspaceIconCreationOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

Use these constants with the [setIcon:forFile:options:](seticon%28__forfile_options_%29.md) method. You can combine these using the C bitwise OR operator.

## Topics

### Creation Options

- [NSExcludeQuickDrawElementsIconCreationOption](iconcreationoptions/excludequickdrawelementsiconcreationoption.md): An option to suppress generation of the QuickDraw format icon representations that are used in macOS 10.0 through macOS 10.4.
- [NSExclude10_4ElementsIconCreationOption](iconcreationoptions/exclude10_4elementsiconcreationoption.md): An option to suppress generation of the new higher resolution icon representations that are supported in macOS 10.4.

## See Also

### Managing Icons

- [iconForFile:](icon%28forfile_%29.md): Returns an image containing the icon for the specified file.
- [iconForFiles:](icon%28forfiles_%29.md): Returns an image containing the icon for the specified files.
- [iconForContentType:](icon%28for_%29.md): Returns an image containing the icon for the specified content type.
- [setIcon:forFile:options:](seticon%28__forfile_options_%29.md): Sets the icon for the file or directory at the specified path.
