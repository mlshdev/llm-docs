> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchquerycontext/fetchattributes](https://developer.apple.com/documentation/corespotlight/cssearchquerycontext/fetchattributes)

# fetchAttributes (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The attributes the system fetches for the searchable items.

## Declaration

```swift
var fetchAttributes: [String] { get set }
```

## Mentioned In

- [Searching for information in your app](../searching-for-information-in-your-app.md)

## See Also

### Configuring search behavior

- [keyboardLanguage](keyboardlanguage.md): The language used for the query.
- [sourceOptions](sourceoptions-swift.property.md): The query source options to allow or deny Mail messages in the search.
- [CSSearchQueryContext.SourceOptions](sourceoptions-swift.struct.md): The query source options to allow or deny Mail messages in the search.

# fetchAttributes (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The attributes the system fetches for the searchable items.

## Declaration

```objectivec
@property (nonatomic, strong) NSArray<NSString *> * fetchAttributes;
```

## Mentioned In

- [Searching for information in your app](../searching-for-information-in-your-app.md)

## See Also

### Configuring search behavior

- [keyboardLanguage](keyboardlanguage.md): The language used for the query.
- [sourceOptions](sourceoptions-swift.property.md): The query source options to allow or deny Mail messages in the search.
- [CSSearchQuerySourceOptions](sourceoptions-swift.struct.md): The query source options to allow or deny Mail messages in the search.
