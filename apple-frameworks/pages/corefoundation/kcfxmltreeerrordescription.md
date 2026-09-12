> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/kcfxmltreeerrordescription](https://developer.apple.com/documentation/corefoundation/kcfxmltreeerrordescription)

# kCFXMLTreeErrorDescription (Swift)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** macOS

Dictionary key whose value is a CFString containing a readable description of the error.

## Declaration

```swift
let kCFXMLTreeErrorDescription: CFString!
```

## See Also

### Constants

- [kCFXMLTreeErrorLineNumber](kcfxmltreeerrorlinenumber.md): Dictionary key whose value is a CFNumber containing the line number where the error was detected. This may not be the line number where the actual XML error is located.
- [kCFXMLTreeErrorLocation](kcfxmltreeerrorlocation.md): Dictionary key whose value is a CFNumber containing the byte location where the error was detected.
- [kCFXMLTreeErrorStatusCode](kcfxmltreeerrorstatuscode.md): Dictionary key whose value is a CFNumber containing the error status code. See [CFXMLParser](cfxmlparser.md) for possible status code values.

# kCFXMLTreeErrorDescription (Objective-C)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** macOS

Dictionary key whose value is a CFString containing a readable description of the error.

## Declaration

```objectivec
extern CFStringRef const kCFXMLTreeErrorDescription;
```

## See Also

### Constants

- [kCFXMLTreeErrorLineNumber](kcfxmltreeerrorlinenumber.md): Dictionary key whose value is a CFNumber containing the line number where the error was detected. This may not be the line number where the actual XML error is located.
- [kCFXMLTreeErrorLocation](kcfxmltreeerrorlocation.md): Dictionary key whose value is a CFNumber containing the byte location where the error was detected.
- [kCFXMLTreeErrorStatusCode](kcfxmltreeerrorstatuscode.md): Dictionary key whose value is a CFNumber containing the error status code. See [CFXMLParserRef](cfxmlparser.md) for possible status code values.
