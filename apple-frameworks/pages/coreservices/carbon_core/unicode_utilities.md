> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/carbon_core/unicode_utilities](https://developer.apple.com/documentation/coreservices/carbon_core/unicode_utilities)

# Unicode Utilities (Swift)

**Framework:** Core Services  
**Kind:** API Collection

Work with Unicode text.

> Many APIs that use text encodings other than Unicode are deprecated in macOS 10. Instead, use APIs that support Unicode, such as those provided by the Foundation and Core Foundation frameworks. For more information, see [String Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Strings/introStrings.html#//apple_ref/doc/uid/10000035i).

## Topics

### Inputting Unicode Text

- [UCKeyTranslate(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](../1390584-uckeytranslate.md): Converts a combination of a virtual key code, a modifier key state, and a dead-key state into a string of one or more Unicode characters.

### Comparing Unicode Strings

- [UCCreateCollator(\_:\_:\_:\_:)](../1390403-uccreatecollator.md): Creates an object encapsulating locale and collation information, for the purpose of performing Unicode string comparison.
- [UCCompareText(\_:\_:\_:\_:\_:\_:\_:)](../1390642-uccomparetext.md): Uses locale-specific collation information to compare Unicode strings.
- [UCGetCollationKey(\_:\_:\_:\_:\_:\_:)](../1390468-ucgetcollationkey.md): Uses locale-specific collation information to generate a collation key for a Unicode string.
- [UCCompareCollationKeys(\_:\_:\_:\_:\_:\_:)](../1390378-uccomparecollationkeys.md): Uses collation keys to compare Unicode strings.
- [UCDisposeCollator(\_:)](../1390435-ucdisposecollator.md): Disposes a collator object.
- [UCCompareTextDefault(\_:\_:\_:\_:\_:\_:\_:)](../1390472-uccomparetextdefault.md): Uses the default system locale to compare Unicode strings.
- [UCCompareTextNoLocale(\_:\_:\_:\_:\_:\_:\_:)](../1390513-uccomparetextnolocale.md): Uses a fixed, locale-insensitive order to compare Unicode strings.

### Data Types

- [CollatorRef](../collatorref.md): Refers to an opaque object that encapsulates locale and collation information for the purpose of performing Unicode string comparison.
- [TextBreakLocatorRef](../textbreaklocatorref.md): Refers to an opaque object that encapsulates locale and text-break information for the purpose of finding boundaries in Unicode text.
- [UCCollationValue](../uccollationvalue.md): Specifies a Unicode collation key.
- [UCKeyboardLayout](../uckeyboardlayout.md): Provides header data for a `'uchr'` resource.
- [UCKeyboardTypeHeader](../uckeyboardtypeheader.md): Specifies a range of physical keyboard types in a `'uchr'` resource.
- [UCKeyCharSeq](../uckeycharseq.md): Specifies the output of a dead-key state in a `'uchr'` resource.
- [UCKeyLayoutFeatureInfo](../uckeylayoutfeatureinfo.md): Specifies the longest possible output string to be produced by the current `'uchr'` resource.
- [UCKeyModifiersToTableNum](../uckeymodifierstotablenum.md): Maps a modifier key combination to a particular key-code-to-character table number in a `'uchr'` resource.
- [UCKeyOutput](../uckeyoutput.md): Specifies values in key-code-to-character tables in a `'uchr'` resource.
- [UCKeySequenceDataIndex](../uckeysequencedataindex.md): Contains offsets to a list of character sequences for a `'uchr'` resource.
- [UCKeyStateEntryRange](../uckeystateentryrange.md): Maps from a dead-key state to either the resultant Unicode character(s) or the new dead key state produced when the current state is terminated by a given character key for a `'uchr'` resource.
- [UCKeyStateEntryTerminal](../uckeystateentryterminal.md): Maps from a dead-key state to the Unicode character(s) produced when that state is terminated by a given character key for a `'uchr'` resource.
- [UCKeyStateRecord](../uckeystaterecord.md): Determines dead-key state transitions in a `'uchr'` resource.
- [UCKeyStateRecordsIndex](../uckeystaterecordsindex.md): Provides a count of, and offsets to, dead-key state records in a `'uchr'` resource.
- [UCKeyStateTerminators](../uckeystateterminators.md): Lists the default terminators for each dead-key state handled by a `'uchr'` resource.
- [UCKeyToCharTableIndex](../uckeytochartableindex.md): Provides a count of, and offsets to, key-code-to-character tables in a `'uchr'` resource.

### Constants

- [Fixed Ordering Scheme](unicode_utilities/1390361-fixed_ordering_scheme.md): Specifies to use the fixed ordering scheme.
- [Fixed Ordering Masks 1](unicode_utilities/1390370-fixed_ordering_masks_1.md): Set and test the `UCCollateOptions` field that specifies a fixed ordering scheme.
- [Fixed Ordering Masks 2](unicode_utilities/1390573-fixed_ordering_masks_2.md): Test the `UCCollateOptions` field that specifies a fixed ordering scheme.
- [Key Actions](unicode_utilities/1390619-key_actions.md): Indicate the current key action.
- [Key Format Codes](unicode_utilities/1390609-key_format_codes.md): Indicate a structure format used in a `'uchr'` resource.
- [Key Output Index Masks](unicode_utilities/1390638-key_output_index_masks.md): Test the bits in `UCKeyOutput` values.
- [Key State Entry Formats](unicode_utilities/1390376-key_state_entry_formats.md): Indicate the format for dead-key state records.
- [Key Translation Options Flag](unicode_utilities/1390507-key_translation_options_flag.md): Indicates the dead-key processing state.
- [Key Translation Options Mask](unicode_utilities/1390568-key_translation_options_mask.md): Specifies the mask for the bit that controls dead-key processing state.
- [Operation Class](unicode_utilities/1390359-operation_class.md): Identifies collation as a class of Unicode utility operations.
- [Standard Options Mask](unicode_utilities/1390444-standard_options_mask.md): Specifies standard options for Unicode string comparison.
- [UCCollateOptions](../uccollateoptions.md): Specifies options for Unicode string comparison.
- [UCTextBreakOptions](../uctextbreakoptions.md): Specifies options for locating boundaries in Unicode text.
- [UCTextBreakType](../uctextbreaktype.md): Specifies kinds of text boundaries.
- [Text Boundary Operation Class](unicode_utilities/1390460-text_boundary_operation_class.md): Identifies the class of Unicode utility operations that find text boundaries.

# Unicode Utilities (Objective-C)

**Framework:** Core Services  
**Kind:** API Collection

Work with Unicode text.

> Many APIs that use text encodings other than Unicode are deprecated in macOS 10. Instead, use APIs that support Unicode, such as those provided by the Foundation and Core Foundation frameworks. For more information, see [String Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Strings/introStrings.html#//apple_ref/doc/uid/10000035i).

## Topics

### Inputting Unicode Text

- [UCKeyTranslate](../1390584-uckeytranslate.md): Converts a combination of a virtual key code, a modifier key state, and a dead-key state into a string of one or more Unicode characters.

### Comparing Unicode Strings

- [UCCreateCollator](../1390403-uccreatecollator.md): Creates an object encapsulating locale and collation information, for the purpose of performing Unicode string comparison.
- [UCCompareText](../1390642-uccomparetext.md): Uses locale-specific collation information to compare Unicode strings.
- [UCGetCollationKey](../1390468-ucgetcollationkey.md): Uses locale-specific collation information to generate a collation key for a Unicode string.
- [UCCompareCollationKeys](../1390378-uccomparecollationkeys.md): Uses collation keys to compare Unicode strings.
- [UCDisposeCollator](../1390435-ucdisposecollator.md): Disposes a collator object.
- [UCCompareTextDefault](../1390472-uccomparetextdefault.md): Uses the default system locale to compare Unicode strings.
- [UCCompareTextNoLocale](../1390513-uccomparetextnolocale.md): Uses a fixed, locale-insensitive order to compare Unicode strings.

### Identifying Unicode Text Boundaries

- [UCCreateTextBreakLocator](../1390362-uccreatetextbreaklocator.md): Deprecated. Creates an object encapsulating locale and text-break information, for the purpose of finding boundaries in Unicode text.
- [UCFindTextBreak](../1390429-ucfindtextbreak.md): Deprecated. Uses locale-specific text-break information to find boundaries in Unicode text.
- [UCDisposeTextBreakLocator](../1390419-ucdisposetextbreaklocator.md): Deprecated. Disposes a text-break locator object.

### Data Types

- [CollatorRef](../collatorref.md): Refers to an opaque object that encapsulates locale and collation information for the purpose of performing Unicode string comparison.
- [TextBreakLocatorRef](../textbreaklocatorref.md): Refers to an opaque object that encapsulates locale and text-break information for the purpose of finding boundaries in Unicode text.
- [UCCollationValue](../uccollationvalue.md): Specifies a Unicode collation key.
- [UCKeyboardLayout](../uckeyboardlayout.md): Provides header data for a `'uchr'` resource.
- [UCKeyboardTypeHeader](../uckeyboardtypeheader.md): Specifies a range of physical keyboard types in a `'uchr'` resource.
- [UCKeyCharSeq](../uckeycharseq.md): Specifies the output of a dead-key state in a `'uchr'` resource.
- [UCKeyLayoutFeatureInfo](../uckeylayoutfeatureinfo.md): Specifies the longest possible output string to be produced by the current `'uchr'` resource.
- [UCKeyModifiersToTableNum](../uckeymodifierstotablenum.md): Maps a modifier key combination to a particular key-code-to-character table number in a `'uchr'` resource.
- [UCKeyOutput](../uckeyoutput.md): Specifies values in key-code-to-character tables in a `'uchr'` resource.
- [UCKeySequenceDataIndex](../uckeysequencedataindex.md): Contains offsets to a list of character sequences for a `'uchr'` resource.
- [UCKeyStateEntryRange](../uckeystateentryrange.md): Maps from a dead-key state to either the resultant Unicode character(s) or the new dead key state produced when the current state is terminated by a given character key for a `'uchr'` resource.
- [UCKeyStateEntryTerminal](../uckeystateentryterminal.md): Maps from a dead-key state to the Unicode character(s) produced when that state is terminated by a given character key for a `'uchr'` resource.
- [UCKeyStateRecord](../uckeystaterecord.md): Determines dead-key state transitions in a `'uchr'` resource.
- [UCKeyStateRecordsIndex](../uckeystaterecordsindex.md): Provides a count of, and offsets to, dead-key state records in a `'uchr'` resource.
- [UCKeyStateTerminators](../uckeystateterminators.md): Lists the default terminators for each dead-key state handled by a `'uchr'` resource.
- [UCKeyToCharTableIndex](../uckeytochartableindex.md): Provides a count of, and offsets to, key-code-to-character tables in a `'uchr'` resource.

### Constants

- [Fixed Ordering Scheme](../1390361-fixed_ordering_scheme.md): Specifies to use the fixed ordering scheme.
- [Fixed Ordering Masks 1](../1390370-fixed_ordering_masks_1.md): Set and test the `UCCollateOptions` field that specifies a fixed ordering scheme.
- [Fixed Ordering Masks 2](../1390573-fixed_ordering_masks_2.md): Test the `UCCollateOptions` field that specifies a fixed ordering scheme.
- [Key Actions](../1390619-key_actions.md): Indicate the current key action.
- [Key Format Codes](../1390609-key_format_codes.md): Indicate a structure format used in a `'uchr'` resource.
- [Key Output Index Masks](../1390638-key_output_index_masks.md): Test the bits in `UCKeyOutput` values.
- [Key State Entry Formats](../1390376-key_state_entry_formats.md): Indicate the format for dead-key state records.
- [Key Translation Options Flag](../1390507-key_translation_options_flag.md): Indicates the dead-key processing state.
- [Key Translation Options Mask](../1390568-key_translation_options_mask.md): Specifies the mask for the bit that controls dead-key processing state.
- [Operation Class](../1390359-operation_class.md): Identifies collation as a class of Unicode utility operations.
- [Standard Options Mask](../1390444-standard_options_mask.md): Specifies standard options for Unicode string comparison.
- [UCCollateOptions](../uccollateoptions.md): Specifies options for Unicode string comparison.
- [UCTextBreakOptions](../uctextbreakoptions.md): Specifies options for locating boundaries in Unicode text.
- [UCTextBreakType](../uctextbreaktype.md): Specifies kinds of text boundaries.
- [Text Boundary Operation Class](../1390460-text_boundary_operation_class.md): Identifies the class of Unicode utility operations that find text boundaries.
- [UniCharArrayHandle](../unichararrayhandle.md)
- [UniCharArrayPtr](../unichararrayptr.md)
- [UnicodeMappingPtr](../unicodemappingptr.md)
- [UntokenTableHandle](../untokentablehandle.md)
- [UntokenTablePtr](../untokentableptr.md)

## See Also

### Utilities

- [Mathematical and Logical Utilities](mathematical_and_logical_utilities.md): Deprecated. Perform mathematical and logical operations.
- [Pascal String Utilities](pascal_string_utilities.md): Deprecated. Performing common string manipulations on Pascal strings.
