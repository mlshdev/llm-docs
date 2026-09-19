> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediaplayer/mpnowplayinginfolanguageoptiongroup/allowemptyselection

# allowEmptySelection (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

A Boolean that indicates whether the system requires a selection for the language option group.

## Declaration

```swift
var allowEmptySelection: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When set to [true](https://developer.apple.com/documentation/swift/true), there must be a language option in the language option group.

## See Also

### Retrieving language option group information

- [defaultLanguageOption](defaultlanguageoption.md): The default language option for the group.
- [languageOptions](languageoptions.md): The available language options for the group.

# allowEmptySelection (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

A Boolean that indicates whether the system requires a selection for the language option group.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL allowEmptySelection;
```

<a id="Discussion"></a>

## Discussion

When set to [true](https://developer.apple.com/documentation/swift/true), there must be a language option in the language option group.

## See Also

### Retrieving language option group information

- [defaultLanguageOption](defaultlanguageoption.md): The default language option for the group.
- [languageOptions](languageoptions.md): The available language options for the group.
