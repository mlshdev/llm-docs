> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abpickerattributes](https://developer.apple.com/documentation/addressbook/abpickerattributes)

# ABPickerAttributes

**Interface language:** Objective-C

**Framework:** Address Book  
**Kind:** Type Alias  
**Availability:** macOS

A bitfield used to specify the selection behavior for the values of multi-value properties.

## Declaration

```objectivec
typedef OptionBits ABPickerAttributes;
```

<a id="Discussion"></a>

## Discussion

Use the constants listed in [People-Picker Selection Behavior](people-picker-selection-behavior.md).

When multiple behaviors are selected, the most restrictive behavior is used. The default behavior is single-value selection ([kABPickerSingleValueSelection](kabpickersinglevalueselection.md)).

## See Also

### Miscellaneous

- [ABPropertyType](abpropertytype.md): Deprecated. These are the possible types of ABRecord properties.
- [ABSearchComparison](absearchcomparison.md): Constants used to specify the type of comparison beingmade.
- [ABSearchConjunction](absearchconjunction.md): Constants used to create compound search elements.
