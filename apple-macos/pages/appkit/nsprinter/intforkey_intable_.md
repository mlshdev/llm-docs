> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprinter/intforkey:intable:](https://developer.apple.com/documentation/appkit/nsprinter/intforkey:intable:)

# intForKey:inTable:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.9)

Returns the integer value associated with the specified key.

## Declaration

```objectivec
- (int) intForKey:(NSString *) key inTable:(NSString *) table;
```

## Parameters

- `key`: The key whose value you want.
- `table`: The name of a table from the printer’s PPD file.

<a id="return-value"></a>

## Return Value

The integer value. Returns `0` if the key is not in the table or the receiver lacks a PPD file.

## See Also

### Deprecated

- [isKey:inTable:](iskey_intable_.md): Deprecated. Returns a Boolean value that indicates whether the specified key is in the specified table.
- [stringForKey:inTable:](stringforkey_intable_.md): Deprecated. Returns the first occurrence of a value associated with specified key.
- [stringListForKey:inTable:](stringlistforkey_intable_.md): Deprecated. Returns an array of strings, one for each occurrence, associated with specified key.
- [booleanForKey:inTable:](booleanforkey_intable_.md): Deprecated. Returns the Boolean value associated with the specified key.
- [floatForKey:inTable:](floatforkey_intable_.md): Deprecated. Returns the floating-point value associated with the specified key.
- [rectForKey:inTable:](rectforkey_intable_.md): Deprecated. Returns the rectangle associated with the specified key.
- [sizeForKey:inTable:](sizeforkey_intable_.md): Deprecated. Returns the size data type associated with the specified key.
- [statusForTable:](statusfortable_.md): Deprecated. Returns the status of the specified table.
- [NSPrinterTableStatus](tablestatus.md): Constants that describe the state of a printer information table stored by a printer object.
- [printerWithName:domain:includeUnavailable:](printerwithname_domain_includeunavailable_.md): Deprecated. Deprecated.
- [acceptsBinary](acceptsbinary.md): Deprecated. Deprecated.
- [domain](domain.md): Deprecated. Deprecated.
- [host](host.md): Deprecated. Deprecated.
- [imageRectForPaper:](imagerectforpaper_.md): Deprecated. Deprecated.
- [isColor](iscolor.md): Deprecated. Deprecated.
