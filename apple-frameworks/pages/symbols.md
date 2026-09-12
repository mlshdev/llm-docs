> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/symbols](https://developer.apple.com/documentation/symbols)

# Symbols (Swift)

**Framework:** Symbols  
**Kind:** Framework  
**Availability:** iOS 17.0+ · iPadOS · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Apply universal animations to symbol-based images.

<a id="overview"></a>

## Overview

The Symbols framework provides access to symbol effects you can use to animate [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols) in your AppKit, UIKit, and SwiftUI apps. These animations exhibit different behaviors:

- **Discrete**: An effect that runs from start to finish.
- **Indefinite**: An effect that lasts until you remove or disable it.
- **Transition**: An effect that animates a symbol in or out of visibility.
- **Content Transition**: An effect that replaces one symbol with another symbol, or with a different configuration of itself.

A symbol effect can exhibit multiple types of behavior. For instance, you can add a pulse effect with an option to occur a finite number of times — a discrete behavior. You can also add a pulse effect with an option to loop forever — an indefinite behavior.

```swift
// Add an effect in SwiftUI.
Image(systemName: "globe")
    // Add effect with discrete behavior to image view.
    .symbolEffect(.pulse, options: .repeat(3))

Image(systemName: "globe")
    // Add effect with indefinite behavior to image view.
    .symbolEffect(.pulse)
```

You can apply universal animation effects to symbol-based images that you display in image views. The Symbols framework provides a consistent set of effects to use regardless of your UI framework or langauge choices.

Consider a SwiftUI app that displays a variable color effect on a Wi-Fi symbol while the system searches for Wi-Fi networks.

```swift
// Add an effect in SwiftUI.
Image(systemName: "wifi")
    .symbolEffect(.variableColor.reversing)
```

Now consider an AppKit or UIKit version of the app. You can apply the same effect to animate the search for Wi-Fi networks.

**Swift**

```swift
// Add an effect in AppKit and UIKit.
imageView.addSymbolEffect(.variableColor.reversing)
```

**Objective-C**

```objc
// Add an effect in AppKit and UIKit.
[self.imageView
  addSymbolEffect:[[NSSymbolVariableColorEffect effect] effectWithReversing]];
```

## Topics

### Symbol effects

- [appear](symbols/symboleffect/appear.md): Conforms when `Self` is `AppearSymbolEffect`. An animation that makes the layers of a symbol-based image appear separately or as a whole.
- [bounce](symbols/symboleffect/bounce.md): Conforms when `Self` is `BounceSymbolEffect`. An animation that applies a transitory scaling effect, or bounce, to the layers in a symbol-based image separately or as a whole.
- [disappear](symbols/symboleffect/disappear.md): Conforms when `Self` is `DisappearSymbolEffect`. An animation that makes the layers of a symbol-based image disappear separately or as a whole.
- [pulse](symbols/symboleffect/pulse.md): Conforms when `Self` is `PulseSymbolEffect`. An animation that fades the opacity of some or all layers in a symbol-based image.
- [scale](symbols/symboleffect/scale.md): Conforms when `Self` is `ScaleSymbolEffect`. An animation that scales the layers in a symbol-based image separately or as a whole.
- [variableColor](symbols/symboleffect/variablecolor.md): Conforms when `Self` is `VariableColorSymbolEffect`. An animation that replaces the opacity of variable layers in a symbol-based image in a repeatable sequence.

### Symbol content transitions

- [replace](symbols/symboleffect/replace.md): Conforms when `Self` is `ReplaceSymbolEffect`. An animation that replaces the layers of one symbol-based image with those of another.
- [automatic](symbols/symboleffect/automatic.md): Conforms when `Self` is `AutomaticSymbolEffect`. A transition that applies the default animation to a symbol-based image in a context-sensitive manner.

### Symbol effect types

- [AppearSymbolEffect](symbols/appearsymboleffect.md): A type that makes the layers of a symbol-based image appear separately or as a whole.
- [AutomaticSymbolEffect](symbols/automaticsymboleffect.md): A type that applies the default animation to a symbol-based image in a context-sensitive manner.
- [BounceSymbolEffect](symbols/bouncesymboleffect.md): A type that applies a transitory scaling effect, or bounce, to the layers in a symbol-based image separately or as a whole.
- [DisappearSymbolEffect](symbols/disappearsymboleffect.md): A type that makes the layers of a symbol-based image disappear separately or as a whole.
- [PulseSymbolEffect](symbols/pulsesymboleffect.md): A type that fades the opacity of some or all layers in a symbol-based image.
- [ReplaceSymbolEffect](symbols/replacesymboleffect.md): A type that replaces the layers of one symbol-based image with those of another.
- [ScaleSymbolEffect](symbols/scalesymboleffect.md): A type that scales the layers in a symbol-based image separately or as a whole.
- [VariableColorSymbolEffect](symbols/variablecolorsymboleffect.md): A type that replaces the opacity of variable layers in a symbol-based image in a repeatable sequence.
- [BreatheSymbolEffect](symbols/breathesymboleffect.md): A symbol effect that applies the Breathe animation to symbol images.
- [RotateSymbolEffect](symbols/rotatesymboleffect.md): A symbol effect that applies the Rotate animation to symbol images.
- [WiggleSymbolEffect](symbols/wigglesymboleffect.md): A symbol effect that applies the Wiggle animation to symbol images.

### Symbol effect options

- [SymbolEffectOptions](symbols/symboleffectoptions.md): Options that configure how effects apply to symbol-based images.

### Symbol effect protocols

- [SymbolEffect](symbols/symboleffect.md): A presentation effect that you apply to a symbol-based image.
- [DiscreteSymbolEffect](symbols/discretesymboleffect.md): An effect that performs a transient animation.
- [IndefiniteSymbolEffect](symbols/indefinitesymboleffect.md): An animation that continually affects a symbol until it’s disabled or removed.
- [ContentTransitionSymbolEffect](symbols/contenttransitionsymboleffect.md): An effect that animates between symbols or different configurations of the same symbol.
- [TransitionSymbolEffect](symbols/transitionsymboleffect.md): An effect that animates a symbol in or out.

### Structures

- [DrawOffSymbolEffect](symbols/drawoffsymboleffect.md): A symbol effect that applies the DrawOff animation to symbol images.
- [DrawOnSymbolEffect](symbols/drawonsymboleffect.md): A symbol effect that applies the DrawOn animation to symbol images.

# Symbols (Objective-C)

**Framework:** Symbols  
**Kind:** Framework  
**Availability:** iOS 17.0+ · iPadOS · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Apply universal animations to symbol-based images.

<a id="overview"></a>

## Overview

The Symbols framework provides access to symbol effects you can use to animate [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols) in your AppKit, UIKit, and SwiftUI apps. These animations exhibit different behaviors:

- **Discrete**: An effect that runs from start to finish.
- **Indefinite**: An effect that lasts until you remove or disable it.
- **Transition**: An effect that animates a symbol in or out of visibility.
- **Content Transition**: An effect that replaces one symbol with another symbol, or with a different configuration of itself.

A symbol effect can exhibit multiple types of behavior. For instance, you can add a pulse effect with an option to occur a finite number of times — a discrete behavior. You can also add a pulse effect with an option to loop forever — an indefinite behavior.

```swift
// Add an effect in SwiftUI.
Image(systemName: "globe")
    // Add effect with discrete behavior to image view.
    .symbolEffect(.pulse, options: .repeat(3))

Image(systemName: "globe")
    // Add effect with indefinite behavior to image view.
    .symbolEffect(.pulse)
```

You can apply universal animation effects to symbol-based images that you display in image views. The Symbols framework provides a consistent set of effects to use regardless of your UI framework or langauge choices.

Consider a SwiftUI app that displays a variable color effect on a Wi-Fi symbol while the system searches for Wi-Fi networks.

```swift
// Add an effect in SwiftUI.
Image(systemName: "wifi")
    .symbolEffect(.variableColor.reversing)
```

Now consider an AppKit or UIKit version of the app. You can apply the same effect to animate the search for Wi-Fi networks.

**Swift**

```swift
// Add an effect in AppKit and UIKit.
imageView.addSymbolEffect(.variableColor.reversing)
```

**Objective-C**

```objc
// Add an effect in AppKit and UIKit.
[self.imageView
  addSymbolEffect:[[NSSymbolVariableColorEffect effect] effectWithReversing]];
```

## Topics

### Symbol effects

- [NSSymbolAppearEffect](symbols/nssymbolappeareffect.md): A type that makes the layers of a symbol-based image appear separately or as a whole.
- [NSSymbolBounceEffect](symbols/nssymbolbounceeffect.md): A type that applies a transitory scaling effect, or bounce, to the layers in a symbol-based image separately or as a whole.
- [NSSymbolDisappearEffect](symbols/nssymboldisappeareffect.md): A type that makes the layers of a symbol-based image disappear separately or as a whole.
- [NSSymbolPulseEffect](symbols/nssymbolpulseeffect.md): A type that fades the opacity of some or all layers in a symbol-based image.
- [NSSymbolScaleEffect](symbols/nssymbolscaleeffect.md): A type that scales the layers in a symbol-based image separately or as a whole.
- [NSSymbolVariableColorEffect](symbols/nssymbolvariablecoloreffect.md): A type that replaces the opacity of variable layers in a symbol-based image in a repeatable sequence.
- [NSSymbolBreatheEffect](symbols/nssymbolbreatheeffect.md): A symbol effect that applies the Breathe animation to symbol images.
- [NSSymbolRotateEffect](symbols/nssymbolrotateeffect.md): A symbol effect that applies the Rotate animation to symbol images.
- [NSSymbolWiggleEffect](symbols/nssymbolwiggleeffect.md): A symbol effect that applies the Wiggle animation to symbol images.

### Symbol content transitions

- [NSSymbolReplaceContentTransition](symbols/nssymbolreplacecontenttransition.md): A type that replaces the layers of one symbol-based image with those of another.
- [NSSymbolAutomaticContentTransition](symbols/nssymbolautomaticcontenttransition.md): A type that applies the default animation to a symbol-based image in a context-sensitive manner.
- [NSSymbolMagicReplaceContentTransition](symbols/nssymbolmagicreplacecontenttransition.md): A symbol effect applies the MagicReplace animation to symbol images.

### Symbol effect options

- [NSSymbolEffectOptions](symbols/nssymboleffectoptions.md): Options that configure how effects apply to symbol-based images.
- [NSSymbolEffectOptionsRepeatBehavior](symbols/nssymboleffectoptionsrepeatbehavior.md): The behavior of repetition to use when a symbol effect is animating.

### Symbol effect classes

- [NSSymbolEffect](symbols/nssymboleffect.md): An abstract base class for effects that you can apply to a symbol-based image.
- [NSSymbolContentTransition](symbols/nssymbolcontenttransition.md): An abstract base class for transitions you can apply to symbol-based images.

### Classes

- [NSSymbolDrawOffEffect](symbols/nssymboldrawoffeffect.md): A symbol effect that applies the DrawOff animation to symbol images.
- [NSSymbolDrawOnEffect](symbols/nssymboldrawoneffect.md): A symbol effect that applies the DrawOn animation to symbol images.
