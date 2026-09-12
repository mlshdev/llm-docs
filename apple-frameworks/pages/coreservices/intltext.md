> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/intltext](https://developer.apple.com/documentation/coreservices/intltext)

# IntlText (Swift)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

International text consists of an ordered series of bytes, beginning with a 4-byte language code and a 4-byte script code that together determine the format of the bytes that follow.

> Use Unicode text instead.

## Declaration

```swift
struct IntlText
```

## Topics

### Initializers

- [init()](intltext/1449738-init.md)
- [init(theScriptCode:theLangCode:theText:)](intltext/1442684-init.md)

### Instance Properties

- [theLangCode](intltext/1441911-thelangcode.md)
- [theScriptCode](intltext/1441824-thescriptcode.md)
- [theText](intltext/1442075-thetext.md)

# IntlText (Objective-C)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

International text consists of an ordered series of bytes, beginning with a 4-byte language code and a 4-byte script code that together determine the format of the bytes that follow.

> Use Unicode text instead.

## Declaration

```objectivec
typedef struct IntlText {
    ...
} IntlText;
```

## Topics

### Instance Properties

- [theLangCode](intltext/1441911-thelangcode.md)
- [theScriptCode](intltext/1441824-thescriptcode.md)
- [theText](intltext/1442075-thetext.md)
