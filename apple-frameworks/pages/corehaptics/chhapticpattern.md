> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticpattern](https://developer.apple.com/documentation/corehaptics/chhapticpattern)

# CHHapticPattern (Swift)

**Framework:** Core Haptics  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

An object representing a haptic waveform.

## Declaration

```swift
class CHHapticPattern
```

## Mentioned In

- [Playing a single-tap haptic pattern](playing-a-single-tap-haptic-pattern.md)

<a id="overview"></a>

## Overview

A haptic pattern represents the waveform of a haptic through a hierarchical set of key-value pairs, starting at the topmost level with a [CHHapticPattern.Key](chhapticpattern/key.md). This key marks the beginning of an array of events and [parameterID](chhapticpattern/key/parameterid.md) definitions. Each event has an associated time that indicates when the system delivers the event to the haptic engine.

![A diagram showing the contents of a pattern: its keys, values, and subdictionaries.](https://developer.apple.com/images/com.apple.corehaptics/media-3163328@2x.png)

These key-value pairs represent not only events constituting the pattern, but also individual parameters of each event, which are characteristics of the haptic, such as sharpness and intensity. More complicated patterns also contain key-value pairs for parameter curves, which you can use to modulate parameters over time.

<a id="Haptic-Patterns"></a>

### Haptic Patterns

To add haptics to your app, you create an instance of [CHHapticEngine](chhapticengine.md), load a pattern, and use the engine to create a player to play that pattern. You create a pattern in one of three ways:

- **Dictionaries**. Each entry in the dictionary defines a single characteristic of the haptic, like its intensity, start time, or duration. See [Playing a single-tap haptic pattern](playing-a-single-tap-haptic-pattern.md) to learn more about creating a dictionary inline.
- **Arrays of events and parameters**. The [CHHapticEvent](chhapticevent.md) class represents a haptic event as an object in code. The key-value pairs in a dictionary correspond to the properties and parameters associated with a [CHHapticEvent](chhapticevent.md). Haptic event objects are just another representation of the haptics dictionary.
- **AHAP files**. This JSON-compliant file format specifies a haptic pattern through key-value pairs, analogous to a dictionary literal, except in a text file. Add this file to your Xcode project bundle.

You can produce the same kind of content with all forms of pattern creation.

<a id="Haptic-Intensity-and-Sharpness"></a>

### Haptic Intensity and Sharpness

Regardless of the building block you choose to generate a custom haptic, you can control its intensity and sharpness. Intensity varies the haptic’s amplitude or strength. Sharpness lets you determine the character of the haptic experience. For example, you can use sharpness values to convey an experience that’s crisp, precise, and mechanical, or one that’s soft, rounded, and organic.

## Topics

### Creating a Haptic Pattern

- [init(contentsOf:)](chhapticpattern/init%28contentsof_%29.md): Creates a haptic pattern with the contents of an AHAP file.
- [init(events:parameterCurves:)](chhapticpattern/init%28events_parametercurves_%29.md): Constructs a haptic pattern from a series of events and parameter curves.
- [init(events:parameters:)](chhapticpattern/init%28events_parameters_%29.md): Constructs a haptic pattern from a series of events and parameters.
- [init(dictionary:)](chhapticpattern/init%28dictionary_%29.md): Creates a haptic pattern from a property list dictionary.
- [CHHapticPattern.Key](chhapticpattern/key.md): Constants that define the keys you use to create a haptic pattern dictionary.

### Retrieving Haptic Pattern Duration

- [duration](chhapticpattern/duration.md): The duration of the haptic pattern, in seconds.

### Exporting a Haptic Pattern

- [exportDictionary()](chhapticpattern/exportdictionary%28%29.md): Returns the dictionary representation of the haptic pattern.

### Initializers

- [init(contentsOfURL:)](chhapticpattern/init%28contentsofurl_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Essentials

- [Preparing your app to play haptics](preparing-your-app-to-play-haptics.md): Set up your app to play haptics.
- [Playing a single-tap haptic pattern](playing-a-single-tap-haptic-pattern.md): Create and play a transient haptic pattern from a dictionary literal inline.
- [CHHapticEngine](chhapticengine.md): An object that represents the connection to the haptic server.
- [CHHapticPatternPlayer](chhapticpatternplayer.md): A protocol that defines a standard pattern player capable of playing haptic patterns with fixed parameters.
- [CHHapticAdvancedPatternPlayer](chhapticadvancedpatternplayer.md): A protocol that defines an advanced pattern player capable of looping, seeking, pausing, and resuming haptic playback.

# CHHapticPattern (Objective-C)

**Framework:** Core Haptics  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

An object representing a haptic waveform.

## Declaration

```objectivec
@interface CHHapticPattern : NSObject
```

## Mentioned In

- [Playing a single-tap haptic pattern](playing-a-single-tap-haptic-pattern.md)

<a id="overview"></a>

## Overview

A haptic pattern represents the waveform of a haptic through a hierarchical set of key-value pairs, starting at the topmost level with a [CHHapticPatternKey](chhapticpattern/key.md). This key marks the beginning of an array of events and [CHHapticPatternKeyParameterID](chhapticpattern/key/parameterid.md) definitions. Each event has an associated time that indicates when the system delivers the event to the haptic engine.

![A diagram showing the contents of a pattern: its keys, values, and subdictionaries.](https://developer.apple.com/images/com.apple.corehaptics/media-3163328@2x.png)

These key-value pairs represent not only events constituting the pattern, but also individual parameters of each event, which are characteristics of the haptic, such as sharpness and intensity. More complicated patterns also contain key-value pairs for parameter curves, which you can use to modulate parameters over time.

<a id="Haptic-Patterns"></a>

### Haptic Patterns

To add haptics to your app, you create an instance of [CHHapticEngine](chhapticengine.md), load a pattern, and use the engine to create a player to play that pattern. You create a pattern in one of three ways:

- **Dictionaries**. Each entry in the dictionary defines a single characteristic of the haptic, like its intensity, start time, or duration. See [Playing a single-tap haptic pattern](playing-a-single-tap-haptic-pattern.md) to learn more about creating a dictionary inline.
- **Arrays of events and parameters**. The [CHHapticEvent](chhapticevent.md) class represents a haptic event as an object in code. The key-value pairs in a dictionary correspond to the properties and parameters associated with a [CHHapticEvent](chhapticevent.md). Haptic event objects are just another representation of the haptics dictionary.
- **AHAP files**. This JSON-compliant file format specifies a haptic pattern through key-value pairs, analogous to a dictionary literal, except in a text file. Add this file to your Xcode project bundle.

You can produce the same kind of content with all forms of pattern creation.

<a id="Haptic-Intensity-and-Sharpness"></a>

### Haptic Intensity and Sharpness

Regardless of the building block you choose to generate a custom haptic, you can control its intensity and sharpness. Intensity varies the haptic’s amplitude or strength. Sharpness lets you determine the character of the haptic experience. For example, you can use sharpness values to convey an experience that’s crisp, precise, and mechanical, or one that’s soft, rounded, and organic.

## Topics

### Creating a Haptic Pattern

- [initWithContentsOfURL:error:](chhapticpattern/init%28contentsof_%29.md): Creates a haptic pattern with the contents of an AHAP file.
- [initWithEvents:parameterCurves:error:](chhapticpattern/init%28events_parametercurves_%29.md): Constructs a haptic pattern from a series of events and parameter curves.
- [initWithEvents:parameters:error:](chhapticpattern/init%28events_parameters_%29.md): Constructs a haptic pattern from a series of events and parameters.
- [initWithDictionary:error:](chhapticpattern/init%28dictionary_%29.md): Creates a haptic pattern from a property list dictionary.
- [CHHapticPatternKey](chhapticpattern/key.md): Constants that define the keys you use to create a haptic pattern dictionary.

### Retrieving Haptic Pattern Duration

- [duration](chhapticpattern/duration.md): The duration of the haptic pattern, in seconds.

### Exporting a Haptic Pattern

- [exportDictionaryAndReturnError:](chhapticpattern/exportdictionary%28%29.md): Returns the dictionary representation of the haptic pattern.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Essentials

- [Preparing your app to play haptics](preparing-your-app-to-play-haptics.md): Set up your app to play haptics.
- [Playing a single-tap haptic pattern](playing-a-single-tap-haptic-pattern.md): Create and play a transient haptic pattern from a dictionary literal inline.
- [CHHapticEngine](chhapticengine.md): An object that represents the connection to the haptic server.
- [CHHapticPatternPlayer](chhapticpatternplayer.md): A protocol that defines a standard pattern player capable of playing haptic patterns with fixed parameters.
- [CHHapticAdvancedPatternPlayer](chhapticadvancedpatternplayer.md): A protocol that defines an advanced pattern player capable of looping, seeking, pausing, and resuming haptic playback.
