> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/kcfxmltreeerrorstatuscode](https://developer.apple.com/documentation/corefoundation/kcfxmltreeerrorstatuscode)

# kCFXMLTreeErrorStatusCode (Swift)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** macOS

Dictionary key whose value is a CFNumber containing the error status code. See [CFXMLParser](cfxmlparser.md) for possible status code values.

## Declaration

```swift
let kCFXMLTreeErrorStatusCode: CFString!
```

## See Also

### Constants

- [kCFXMLTreeErrorDescription](kcfxmltreeerrordescription.md): Dictionary key whose value is a CFString containing a readable description of the error.
- [kCFXMLTreeErrorLineNumber](kcfxmltreeerrorlinenumber.md): Dictionary key whose value is a CFNumber containing the line number where the error was detected. This may not be the line number where the actual XML error is located.
- [kCFXMLTreeErrorLocation](kcfxmltreeerrorlocation.md): Dictionary key whose value is a CFNumber containing the byte location where the error was detected.

# kCFXMLTreeErrorStatusCode (Objective-C)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** macOS

Dictionary key whose value is a CFNumber containing the error status code. See [CFXMLParserRef](cfxmlparser.md) for possible status code values.

## Declaration

```objectivec
extern CFStringRef const kCFXMLTreeErrorStatusCode;
```

## See Also

### Constants

- [kCFXMLTreeErrorDescription](kcfxmltreeerrordescription.md): Dictionary key whose value is a CFString containing a readable description of the error.
- [kCFXMLTreeErrorLineNumber](kcfxmltreeerrorlinenumber.md): Dictionary key whose value is a CFNumber containing the line number where the error was detected. This may not be the line number where the actual XML error is located.
- [kCFXMLTreeErrorLocation](kcfxmltreeerrorlocation.md): Dictionary key whose value is a CFNumber containing the byte location where the error was detected.
