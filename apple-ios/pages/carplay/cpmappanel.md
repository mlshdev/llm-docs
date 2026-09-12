> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmappanel](https://developer.apple.com/documentation/carplay/cpmappanel)

# CPMapPanel (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

## Declaration

```swift
class CPMapPanel
```

## Topics

### Protocols

- [CPMapPanel.Delegate](cpmappanel/delegate-swift.protocol.md)

### Initializers

- [init(title:sections:buttonConfiguration:)](cpmappanel/init%28title_sections_buttonconfiguration_%29.md): Initializes a new overlay page.

### Instance Properties

- [buttonConfiguration](cpmappanel/buttonconfiguration.md): The button configuration for this page.
- [delegate](cpmappanel/delegate-swift.property.md): The @c CPMapPanelDelegate.
- [sections](cpmappanel/sections.md): The sections contained in this page.
- [title](cpmappanel/title.md): The title of the page.

## Relationships

### Inherits From

- [CPPanel](cppanel.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

# CPMapPanel (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

## Declaration

```objectivec
@interface CPMapPanel : CPPanel
```

## Topics

### Instance Properties

- [buttonConfiguration](cpmappanel/buttonconfiguration.md): The button configuration for this page.
- [delegate](cpmappanel/delegate-swift.property.md): The @c CPMapPanelDelegate.
- [sections](cpmappanel/sections.md): The sections contained in this page.
- [title](cpmappanel/title.md): The title of the page.

### Instance Methods

- [initWithTitle:sections:buttonConfiguration:](cpmappanel/init%28title_sections_buttonconfiguration_%29.md): Initializes a new overlay page.

## Relationships

### Inherits From

- [CPPanel](cppanel.md)
