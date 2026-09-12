> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/roombuilder/configurationoptions](https://developer.apple.com/documentation/roomplan/roombuilder/configurationoptions)

# RoomBuilder.ConfigurationOptions

**Framework:** RoomPlan  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Options that configure a room builder.

## Declaration

```swift
struct ConfigurationOptions
```

<a id="overview"></a>

## Overview

The `options` argument to the [RoomBuilder](../roombuilder.md) initializer [init(options:)](init%28options_%29.md) is of this type.

## Topics

### Creating a configuration option

- [init(rawValue:)](configurationoptions/init%28rawvalue_%29.md): Creates a configuration option with the specified raw value.
- [rawValue](configurationoptions/rawvalue.md): A raw value for a configuration option.

### Choosing a configuration option

- [beautifyObjects](configurationoptions/beautifyobjects.md): An option that instructs the captured room to enhance its look.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Creating a room builder

- [init(options:)](init%28options_%29.md): Creates a room builder using the specified options.
