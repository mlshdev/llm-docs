> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimainmenusystem/configuration](https://developer.apple.com/documentation/uikit/uimainmenusystem/configuration)

# UIMainMenuSystem.Configuration (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

A configuration for the main menu system. You can specify whether or not certain elements are present in the initial main menu, as well as a block to build the menu using a UIMenuBuilder.

## Declaration

```swift
@MainActor class Configuration
```

## Topics

### Instance Properties

- [documentPreference](configuration/documentpreference.md): Specifies a preference for document elements in the main menu.
- [findingConfiguration](configuration/findingconfiguration.md): Configuration for the find elements should they be present in the main menu.
- [findingPreference](configuration/findingpreference.md): Specifies a preference for finding elements in the main menu.
- [inspectorPreference](configuration/inspectorpreference.md): Specifies a preference for inspector elements in the main menu.
- [newScenePreference](configuration/newscenepreference.md): Specifies a preference for new scene elements in the main menu.
- [printingPreference](configuration/printingpreference.md): Specifies a preference for printing elements in the main menu.
- [sidebarPreference](configuration/sidebarpreference.md): Specifies a preference for sidebar elements in the main menu.
- [textFormattingPreference](configuration/textformattingpreference.md): Specifies a preference for text formatting elements in the main menu.
- [toolbarPreference](configuration/toolbarpreference.md): Specifies a preference for toolbar elements in the main menu.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../../foundation/nscopying.md)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Configuring a main menu system

- [setBuildConfiguration(\_:buildHandler:)](setbuildconfiguration%28__buildhandler_%29.md)

# UIMainMenuSystemConfiguration (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

A configuration for the main menu system. You can specify whether or not certain elements are present in the initial main menu, as well as a block to build the menu using a UIMenuBuilder.

## Declaration

```objectivec
@interface UIMainMenuSystemConfiguration : NSObject
```

## Topics

### Instance Properties

- [documentPreference](configuration/documentpreference.md): Specifies a preference for document elements in the main menu.
- [findingConfiguration](configuration/findingconfiguration.md): Configuration for the find elements should they be present in the main menu.
- [findingPreference](configuration/findingpreference.md): Specifies a preference for finding elements in the main menu.
- [inspectorPreference](configuration/inspectorpreference.md): Specifies a preference for inspector elements in the main menu.
- [newScenePreference](configuration/newscenepreference.md): Specifies a preference for new scene elements in the main menu.
- [printingPreference](configuration/printingpreference.md): Specifies a preference for printing elements in the main menu.
- [sidebarPreference](configuration/sidebarpreference.md): Specifies a preference for sidebar elements in the main menu.
- [textFormattingPreference](configuration/textformattingpreference.md): Specifies a preference for text formatting elements in the main menu.
- [toolbarPreference](configuration/toolbarpreference.md): Specifies a preference for toolbar elements in the main menu.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../../foundation/nscopying.md)

## See Also

### Configuring a main menu system

- [setBuildConfiguration:buildHandler:](setbuildconfiguration_buildhandler_.md): Specifies that the main menu system should be built using the specified configuration. A build handler can be optionally provided, which the main menu system will use instead of calling `-buildMenuWithBuilder:`. Setting this will invalidate and rebuild the main menu system. Ideally it should be set once, and as early as possible, preferably in `-application:didFinishLaunchingWithOptions:`. Subsequent rebuilds of the main menu system will continue to use this `configuration` and `buildHandler`. It is a developer error to set the `configuration` while the main menu system is building. Doing so will assert.
