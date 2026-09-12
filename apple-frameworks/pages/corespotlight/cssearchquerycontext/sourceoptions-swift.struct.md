> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchquerycontext/sourceoptions-swift.struct](https://developer.apple.com/documentation/corespotlight/cssearchquerycontext/sourceoptions-swift.struct)

# CSSearchQueryContext.SourceOptions (Swift)

**Framework:** Core Spotlight  
**Kind:** Structure  
**Availability:** macOS 13.0+

The query source options to allow or deny Mail messages in the search.

## Declaration

```swift
struct SourceOptions
```

## Topics

### Search options

- [allowMail](sourceoptions-swift.struct/allowmail.md): The query allows Mail messages in the search.

### Initializers

- [init(rawValue:)](sourceoptions-swift.struct/init%28rawvalue_%29.md)

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

### Configuring search behavior

- [fetchAttributes](fetchattributes.md): The attributes the system fetches for the searchable items.
- [keyboardLanguage](keyboardlanguage.md): The language used for the query.
- [sourceOptions](sourceoptions-swift.property.md): The query source options to allow or deny Mail messages in the search.

# CSSearchQuerySourceOptions (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Enumeration  
**Availability:** macOS 13.0+

The query source options to allow or deny Mail messages in the search.

## Declaration

```objectivec
enum CSSearchQuerySourceOptions : NSUInteger;
```

## Topics

### Search options

- [CSSearchQuerySourceOptionAllowMail](sourceoptions-swift.struct/allowmail.md): The query allows Mail messages in the search.

### Enumeration Cases

- [CSSearchQuerySourceOptionDefault](../cssearchquerysourceoptions/cssearchquerysourceoptiondefault.md): The query uses the default search option that excludes Mail messages.

## See Also

### Configuring search behavior

- [fetchAttributes](fetchattributes.md): The attributes the system fetches for the searchable items.
- [keyboardLanguage](keyboardlanguage.md): The language used for the query.
- [sourceOptions](sourceoptions-swift.property.md): The query source options to allow or deny Mail messages in the search.
