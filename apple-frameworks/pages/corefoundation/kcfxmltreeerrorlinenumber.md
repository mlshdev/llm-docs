> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/kcfxmltreeerrorlinenumber](https://developer.apple.com/documentation/corefoundation/kcfxmltreeerrorlinenumber)

# kCFXMLTreeErrorLineNumber (Swift)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** macOS

Dictionary key whose value is a CFNumber containing the line number where the error was detected. This may not be the line number where the actual XML error is located.

## Declaration

```swift
let kCFXMLTreeErrorLineNumber: CFString!
```

## See Also

### Constants

- [kCFXMLTreeErrorDescription](kcfxmltreeerrordescription.md): Dictionary key whose value is a CFString containing a readable description of the error.
- [kCFXMLTreeErrorLocation](kcfxmltreeerrorlocation.md): Dictionary key whose value is a CFNumber containing the byte location where the error was detected.
- [kCFXMLTreeErrorStatusCode](kcfxmltreeerrorstatuscode.md): Dictionary key whose value is a CFNumber containing the error status code. See [CFXMLParser](cfxmlparser.md) for possible status code values.

# kCFXMLTreeErrorLineNumber (Objective-C)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** macOS

Dictionary key whose value is a CFNumber containing the line number where the error was detected. This may not be the line number where the actual XML error is located.

## Declaration

```objectivec
extern CFStringRef const kCFXMLTreeErrorLineNumber;
```

## See Also

### Constants

- [kCFXMLTreeErrorDescription](kcfxmltreeerrordescription.md): Dictionary key whose value is a CFString containing a readable description of the error.
- [kCFXMLTreeErrorLocation](kcfxmltreeerrorlocation.md): Dictionary key whose value is a CFNumber containing the byte location where the error was detected.
- [kCFXMLTreeErrorStatusCode](kcfxmltreeerrorstatuscode.md): Dictionary key whose value is a CFNumber containing the error status code. See [CFXMLParserRef](cfxmlparser.md) for possible status code values.
