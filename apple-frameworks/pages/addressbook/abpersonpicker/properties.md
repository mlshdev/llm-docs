> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/addressbook/abpersonpicker/properties

# properties

**Interface language:** Objective-C

**Framework:** Address Book  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

An array of properties to display in the picker when the user selects a person.

## Declaration

```objectivec
@property (copy) NSArray * properties;
```

<a id="Discussion"></a>

## Discussion

For a list of properties, see [Address Book Constants](../address-book-constants.md). If you don’t provide any properties, the picker selects people instead of values.
