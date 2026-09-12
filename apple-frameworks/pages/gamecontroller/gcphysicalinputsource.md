> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcphysicalinputsource](https://developer.apple.com/documentation/gamecontroller/gcphysicalinputsource)

# GCPhysicalInputSource (Swift)

**Framework:** Game Controller  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A protocol for a description of an element without any system-level remapping of the controls.

## Declaration

```swift
protocol GCPhysicalInputSource : NSObjectProtocol
```

<a id="overview"></a>

## Overview

If necessary, use the properties in this protocol to get the actual input element aliases, localized name, and symbols without the user’s remapping of the controls in the System Game Controller settings. Otherwise, use the [localizedName](gcphysicalinputelement/localizedname.md) and [sfSymbolsName](gcphysicalinputelement/sfsymbolsname.md) in the [GCPhysicalInputElement](gcphysicalinputelement.md) protocol in your interface.

## Topics

### Getting a localized name

- [elementLocalizedName](gcphysicalinputsource/elementlocalizedname.md): The localized name for the element without any system-level remapping of the controls.

### Displaying a symbol

- [sfSymbolsName](gcphysicalinputsource/sfsymbolsname.md): A system symbol for the element without any system-level remapping of the controls.

### Accessing elements by key

- [elementAliases](gcphysicalinputsource/elementaliases.md): The element’s true aliases without any system-level remapping of the controls.

### Getting directions

- [direction](gcphysicalinputsource/direction.md): The directional input, if any, that a physical input source involves.
- [GCPhysicalInputSourceDirection](gcphysicalinputsourcedirection.md): The directions that a physical input source involves.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# GCPhysicalInputSource (Objective-C)

**Framework:** Game Controller  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A protocol for a description of an element without any system-level remapping of the controls.

## Declaration

```objectivec
@protocol GCPhysicalInputSource <NSObject>
```

<a id="overview"></a>

## Overview

If necessary, use the properties in this protocol to get the actual input element aliases, localized name, and symbols without the user’s remapping of the controls in the System Game Controller settings. Otherwise, use the [localizedName](gcphysicalinputelement/localizedname.md) and [sfSymbolsName](gcphysicalinputelement/sfsymbolsname.md) in the [GCPhysicalInputElement](gcphysicalinputelement.md) protocol in your interface.

## Topics

### Getting a localized name

- [elementLocalizedName](gcphysicalinputsource/elementlocalizedname.md): The localized name for the element without any system-level remapping of the controls.

### Displaying a symbol

- [sfSymbolsName](gcphysicalinputsource/sfsymbolsname.md): A system symbol for the element without any system-level remapping of the controls.

### Accessing elements by key

- [elementAliases](gcphysicalinputsource/elementaliases.md): The element’s true aliases without any system-level remapping of the controls.

### Getting directions

- [direction](gcphysicalinputsource/direction.md): The directional input, if any, that a physical input source involves.
- [GCPhysicalInputSourceDirection](gcphysicalinputsourcedirection.md): The directions that a physical input source involves.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)
