> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abpersonpicker/properties](https://developer.apple.com/documentation/addressbook/abpersonpicker/properties)

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
