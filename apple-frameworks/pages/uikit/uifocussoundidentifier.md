> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocussoundidentifier](https://developer.apple.com/documentation/uikit/uifocussoundidentifier)

# UIFocusSoundIdentifier (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

An identifier for a focus-related sound.

## Declaration

```swift
struct UIFocusSoundIdentifier
```

## Mentioned In

- [Using custom sounds for focus movement](using-custom-sounds-for-focus-movement.md)

<a id="overview"></a>

## Overview

To assign an identifier to a custom sound file, call the [register(\_:forSoundIdentifier:)](uifocussystem/register%28__forsoundidentifier_%29.md) method of [UIFocusSystem](uifocussystem.md).

## Topics

### Constants

- [default](uifocussoundidentifier/default.md): The identifier for the default system sound to play during focus updates.
- [none](uifocussoundidentifier/none.md): The identifier for disabling sound during a focus update.

### Initializers

- [init(\_:)](uifocussoundidentifier/init%28__%29.md): Creates an identifier for a focus sound.
- [init(rawValue:)](uifocussoundidentifier/init%28rawvalue_%29.md): Creates an identifier for a focus sound with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the sound to play during updates

- [Using custom sounds for focus movement](using-custom-sounds-for-focus-movement.md): Customize the sounds users hear when focus moves.
- [soundIdentifierForFocusUpdate(in:)](uifocusenvironment/soundidentifierforfocusupdate%28in_%29.md): Asks the delegate for the identifier of the sound to play when the object gains focus.

# UIFocusSoundIdentifier (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

An identifier for a focus-related sound.

## Declaration

```objectivec
typedef NSString * UIFocusSoundIdentifier;
```

## Mentioned In

- [Using custom sounds for focus movement](using-custom-sounds-for-focus-movement.md)

<a id="overview"></a>

## Overview

To assign an identifier to a custom sound file, call the [registerURL:forSoundIdentifier:](uifocussystem/register%28__forsoundidentifier_%29.md) method of [UIFocusSystem](uifocussystem.md).

## Topics

### Constants

- [UIFocusSoundIdentifierDefault](uifocussoundidentifier/default.md): The identifier for the default system sound to play during focus updates.
- [UIFocusSoundIdentifierNone](uifocussoundidentifier/none.md): The identifier for disabling sound during a focus update.

## See Also

### Getting the sound to play during updates

- [Using custom sounds for focus movement](using-custom-sounds-for-focus-movement.md): Customize the sounds users hear when focus moves.
- [soundIdentifierForFocusUpdateInContext:](uifocusenvironment/soundidentifierforfocusupdate%28in_%29.md): Asks the delegate for the identifier of the sound to play when the object gains focus.
