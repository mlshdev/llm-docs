> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/error-dictionary-keys](https://developer.apple.com/documentation/corefoundation/error-dictionary-keys)

# Error Dictionary Keys (Swift)

**Framework:** Core Foundation  
**Kind:** API Collection

The keys used in an error dictionary returned by some functions to provide more information about XML parse errors.

<a id="overview"></a>

## Overview

These keys are used in the error dictionary returned by the [CFXMLTreeCreateFromDataWithError](cfxmltreecreatefromdatawitherror.md) function.

## Topics

### Constants

- [kCFXMLTreeErrorDescription](kcfxmltreeerrordescription.md): Dictionary key whose value is a CFString containing a readable description of the error.
- [kCFXMLTreeErrorLineNumber](kcfxmltreeerrorlinenumber.md): Dictionary key whose value is a CFNumber containing the line number where the error was detected. This may not be the line number where the actual XML error is located.
- [kCFXMLTreeErrorLocation](kcfxmltreeerrorlocation.md): Dictionary key whose value is a CFNumber containing the byte location where the error was detected.
- [kCFXMLTreeErrorStatusCode](kcfxmltreeerrorstatuscode.md): Dictionary key whose value is a CFNumber containing the error status code. See [CFXMLParser](cfxmlparser.md) for possible status code values.

# Error Dictionary Keys (Objective-C)

**Framework:** Core Foundation  
**Kind:** API Collection

The keys used in an error dictionary returned by some functions to provide more information about XML parse errors.

<a id="overview"></a>

## Overview

These keys are used in the error dictionary returned by the [CFXMLTreeCreateFromDataWithError](cfxmltreecreatefromdatawitherror.md) function.

## Topics

### Constants

- [kCFXMLTreeErrorDescription](kcfxmltreeerrordescription.md): Dictionary key whose value is a CFString containing a readable description of the error.
- [kCFXMLTreeErrorLineNumber](kcfxmltreeerrorlinenumber.md): Dictionary key whose value is a CFNumber containing the line number where the error was detected. This may not be the line number where the actual XML error is located.
- [kCFXMLTreeErrorLocation](kcfxmltreeerrorlocation.md): Dictionary key whose value is a CFNumber containing the byte location where the error was detected.
- [kCFXMLTreeErrorStatusCode](kcfxmltreeerrorstatuscode.md): Dictionary key whose value is a CFNumber containing the error status code. See [CFXMLParserRef](cfxmlparser.md) for possible status code values.
