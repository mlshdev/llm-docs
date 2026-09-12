> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/lshandleroptions](https://developer.apple.com/documentation/coreservices/lshandleroptions)

# LSHandlerOptions (Swift)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

The specification that controls the selection of handlers.

## Declaration

```swift
struct LSHandlerOptions
```

## Topics

### Creating Content Handler Options

- [init(rawValue:)](lshandleroptions/1442692-init.md)

### Constants

- [ignoreCreator](lshandleroptions/1445418-ignorecreator.md): Deprecated. When set, causes Launch Services to ignorethe content item’s creator when selecting a role handler for thespecified content type.

## Relationships

### Conforms To

- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# LSHandlerOptions (Objective-C)

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

The specification that controls the selection of handlers.

## Declaration

```objectivec
typedef enum LSHandlerOptions : OptionBits {
    ...
} LSHandlerOptions;
```

## Topics

### Constants

- [kLSHandlerOptionsDefault](lshandleroptions/klshandleroptionsdefault.md): Deprecated. When set, causes Launch Services to use a contentitem’s creator (when available) to select a handler. This is thedefault setting.
- [kLSHandlerOptionsIgnoreCreator](lshandleroptions/klshandleroptionsignorecreator.md): Deprecated. When set, causes Launch Services to ignorethe content item’s creator when selecting a role handler for thespecified content type.
