> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1400154-common_and_special_unicode_value](https://developer.apple.com/documentation/coreservices/1400154-common_and_special_unicode_value)

# Common and Special Unicode Values

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify sommon and special Unicode code values.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [kUnicodeByteOrderMark](1400154-common_and_special_unicode_value/kunicodebyteordermark.md)
- [kUnicodeObjectReplacement](1400154-common_and_special_unicode_value/kunicodeobjectreplacement.md): A placeholder for a non-text object.
- [kUnicodeReplacementChar](1400154-common_and_special_unicode_value/kunicodereplacementchar.md): Unicode replacement for an input character that cannot be converted.
- [kUnicodeSwappedByteOrderMark](1400154-common_and_special_unicode_value/kunicodeswappedbyteordermark.md): Not a Unicode character; byte-swapped version of FEFF.
- [kUnicodeNotAChar](1400154-common_and_special_unicode_value/kunicodenotachar.md): Not a Unicode character; may be used as a terminator.

## See Also

### Assorted Constants

- [Bidirectional Character Values](1400035-bidirectional_character_values.md): Specify bidirectional character properties.
- [TEC Plugin Dispatch Table Versions](1498348-tec_plugin_dispatch_table_versio.md): Specify a version for a TEC plug-in dispatch table.
- [TEC Plug-in Signatures](1571831-tec_plug-in_signatures.md): Specify a TEC plug-in signature.
- [UCCharPropertyType](uccharpropertytype.md): Specify property types for a Unicode charater.
- [UCCharPropertyValue](uccharpropertyvalue.md): Specify a propery value for a Unicode character.
- [UnicodeMapVersion](unicodemapversion.md): Specify a Unicode mapping version.
- [Unwanted Data Constants](1400314-unwanted_data_constants.md): Specify data you don’t care about receiving.
