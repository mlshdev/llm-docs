> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/apple_event_manager/1542918-typeunicodetext](https://developer.apple.com/documentation/applicationservices/apple_event_manager/1542918-typeunicodetext)

# typeUnicodeText

**Framework:** Core Services

<a id="overview"></a>

## Overview

In OS X version 10.4, you should use `typeUTF16ExternalRepresentation` or `typeUTF8Text` to represent text. In earlier versions of macOS, the recommended text type is `typeUnicodeText`. All of the other constants in this enum are deprecated due to their lack of explicit encoding or byte order definition.

The implicitly encoded text types, `typeText`, `typeCString`, and `typePString`, are all deprecated in macOS, because they are incapable of representing international characters and may be reinterpreted in unpredictable ways. Additionally, `typeCString` and `typePString` do not support the full range of text coercions, and will be removed entirely in a future release. `typeStyledText` and `typeIntlText`, while they have explicit encodings, are not recommended, since they are incapable of representing Unicode-only characters, such as Hungarian, Arabic, or Thai.

## Topics

### Constants

- [typeUTF16ExternalRepresentation](https://developer.apple.com/documentation/coreservices/typeutf16externalrepresentation)
- [typeUnicodeText](https://developer.apple.com/documentation/coreservices/typeunicodetext): Unicode text. Native byte ordering, optional BOM.
- [typeStyledUnicodeText](https://developer.apple.com/documentation/coreservices/typestyledunicodetext): Styled Unicode text. Not implemented.
- [typeUTF8Text](https://developer.apple.com/documentation/coreservices/typeutf8text): 8-bit Unicode (UTF-8 encoding).
- [typeEncodedString](https://developer.apple.com/documentation/coreservices/typeencodedstring): Styled Unicode text. Not implemented.
- [typeCString](https://developer.apple.com/documentation/coreservices/typecstring): C string—Mac OS Roman characters followed by a NULL byte. Deprecated.
- [typePString](https://developer.apple.com/documentation/coreservices/typepstring): Pascal string—unsigned length byte followed by Mac OS Roman characters. Deprecated.
