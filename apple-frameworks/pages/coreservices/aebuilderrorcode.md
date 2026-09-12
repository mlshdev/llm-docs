> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/aebuilderrorcode](https://developer.apple.com/documentation/coreservices/aebuilderrorcode)

# AEBuildErrorCode (Swift)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Represents syntax errors found by an Apple Event build routine.

## Declaration

```swift
typealias AEBuildErrorCode = UInt32
```

## Topics

### Constants

- [aeBuildSyntaxNoErr](aebuildsyntaxnoerr.md): No error.
- [aeBuildSyntaxBadToken](aebuildsyntaxbadtoken.md): An illegal character was specified.
- [aeBuildSyntaxBadEOF](aebuildsyntaxbadeof.md): An unexpected end of format string was encountered.
- [aeBuildSyntaxNoEOF](aebuildsyntaxnoeof.md): There were unexpected characters beyond the end of the format string.
- [aeBuildSyntaxBadNegative](aebuildsyntaxbadnegative.md): A minus sign “-” was not followed by digits.
- [aeBuildSyntaxMissingQuote](aebuildsyntaxmissingquote.md): A string was not terminated by a closing quotation mark.
- [aeBuildSyntaxBadHex](aebuildsyntaxbadhex.md): A hex string contained characters other than hexadecimal digits.
- [aeBuildSyntaxOddHex](aebuildsyntaxoddhex.md): A hex string contained an odd number of digits.
- [aeBuildSyntaxNoCloseHex](aebuildsyntaxnoclosehex.md): A hex string was missing a “$” or “»” character.
- [aeBuildSyntaxUncoercedHex](aebuildsyntaxuncoercedhex.md): A hex string must be coerced to a type.
- [aeBuildSyntaxNoCloseString](aebuildsyntaxnoclosestring.md): A string was missing a closing quote.
- [aeBuildSyntaxBadDesc](aebuildsyntaxbaddesc.md): An illegal descriptor was specified.
- [aeBuildSyntaxBadData](aebuildsyntaxbaddata.md): Bad data was found inside a variable argument list.
- [aeBuildSyntaxNoCloseParen](aebuildsyntaxnocloseparen.md): A data value was missing a closing parenthesis.
- [aeBuildSyntaxNoCloseBracket](aebuildsyntaxnoclosebracket.md): A comma or closing bracket “\]” was expected.
- [aeBuildSyntaxNoCloseBrace](aebuildsyntaxnoclosebrace.md): A comma or closing brace “}” was expected.
- [aeBuildSyntaxNoKey](aebuildsyntaxnokey.md): A keyword was missing from a descriptor.
- [aeBuildSyntaxNoColon](aebuildsyntaxnocolon.md): In a descriptor, one of the keywords was not followed by a colon.
- [aeBuildSyntaxCoercedList](aebuildsyntaxcoercedlist.md): Cannot coerce a list.
- [aeBuildSyntaxUncoercedDoubleAt](aebuildsyntaxuncoerceddoubleat.md): You must coerce a “@@” substitution.

# AEBuildErrorCode (Objective-C)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Represents syntax errors found by an Apple Event build routine.

## Declaration

```objectivec
typedef UInt32 AEBuildErrorCode;
```

## Topics

### Constants

- [aeBuildSyntaxNoErr](1573756-anonymous/aebuildsyntaxnoerr.md): No error.
- [aeBuildSyntaxBadToken](1573756-anonymous/aebuildsyntaxbadtoken.md): An illegal character was specified.
- [aeBuildSyntaxBadEOF](1573756-anonymous/aebuildsyntaxbadeof.md): An unexpected end of format string was encountered.
- [aeBuildSyntaxNoEOF](1573756-anonymous/aebuildsyntaxnoeof.md): There were unexpected characters beyond the end of the format string.
- [aeBuildSyntaxBadNegative](1573756-anonymous/aebuildsyntaxbadnegative.md): A minus sign “-” was not followed by digits.
- [aeBuildSyntaxMissingQuote](1573756-anonymous/aebuildsyntaxmissingquote.md): A string was not terminated by a closing quotation mark.
- [aeBuildSyntaxBadHex](1573756-anonymous/aebuildsyntaxbadhex.md): A hex string contained characters other than hexadecimal digits.
- [aeBuildSyntaxOddHex](1573756-anonymous/aebuildsyntaxoddhex.md): A hex string contained an odd number of digits.
- [aeBuildSyntaxNoCloseHex](1573756-anonymous/aebuildsyntaxnoclosehex.md): A hex string was missing a “$” or “»” character.
- [aeBuildSyntaxUncoercedHex](1573756-anonymous/aebuildsyntaxuncoercedhex.md): A hex string must be coerced to a type.
- [aeBuildSyntaxNoCloseString](1573756-anonymous/aebuildsyntaxnoclosestring.md): A string was missing a closing quote.
- [aeBuildSyntaxBadDesc](1573756-anonymous/aebuildsyntaxbaddesc.md): An illegal descriptor was specified.
- [aeBuildSyntaxBadData](1573756-anonymous/aebuildsyntaxbaddata.md): Bad data was found inside a variable argument list.
- [aeBuildSyntaxNoCloseParen](1573756-anonymous/aebuildsyntaxnocloseparen.md): A data value was missing a closing parenthesis.
- [aeBuildSyntaxNoCloseBracket](1573756-anonymous/aebuildsyntaxnoclosebracket.md): A comma or closing bracket “\]” was expected.
- [aeBuildSyntaxNoCloseBrace](1573756-anonymous/aebuildsyntaxnoclosebrace.md): A comma or closing brace “}” was expected.
- [aeBuildSyntaxNoKey](1573756-anonymous/aebuildsyntaxnokey.md): A keyword was missing from a descriptor.
- [aeBuildSyntaxNoColon](1573756-anonymous/aebuildsyntaxnocolon.md): In a descriptor, one of the keywords was not followed by a colon.
- [aeBuildSyntaxCoercedList](1573756-anonymous/aebuildsyntaxcoercedlist.md): Cannot coerce a list.
- [aeBuildSyntaxUncoercedDoubleAt](1573756-anonymous/aebuildsyntaxuncoerceddoubleat.md): You must coerce a “@@” substitution.
