> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmapbutton](https://developer.apple.com/documentation/carplay/cpmapbutton)

# CPMapButton (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A button that represents an action that a map template displays on the CarPlay screen.

## Declaration

```swift
@MainActor class CPMapButton
```

## Topics

### Creating a Map Button

- [init(handler:)](cpmapbutton/init%28handler_%29.md): Creates a new map button.

### Providing Button Images

- [image](cpmapbutton/image.md): The image to display on the button.
- [focusedImage](cpmapbutton/focusedimage.md): The image to display when focus is on the button.

### Controlling the Button

- [isEnabled](cpmapbutton/isenabled.md): A Boolean value that enables and disables the map button.
- [isHidden](cpmapbutton/ishidden.md): A Boolean value that hides and shows the map button.

### Initializers

- [init(coder:)](cpmapbutton/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Managing Map Buttons

- [mapButtons](cpmaptemplate/mapbuttons.md): An array of map buttons on the trailing bottom corner of the map template.

# CPMapButton (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A button that represents an action that a map template displays on the CarPlay screen.

## Declaration

```objectivec
@interface CPMapButton : NSObject
```

## Topics

### Creating a Map Button

- [initWithHandler:](cpmapbutton/init%28handler_%29.md): Creates a new map button.

### Providing Button Images

- [image](cpmapbutton/image.md): The image to display on the button.
- [focusedImage](cpmapbutton/focusedimage.md): The image to display when focus is on the button.

### Controlling the Button

- [enabled](cpmapbutton/isenabled.md): A Boolean value that enables and disables the map button.
- [hidden](cpmapbutton/ishidden.md): A Boolean value that hides and shows the map button.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Managing Map Buttons

- [mapButtons](cpmaptemplate/mapbuttons.md): An array of map buttons on the trailing bottom corner of the map template.
