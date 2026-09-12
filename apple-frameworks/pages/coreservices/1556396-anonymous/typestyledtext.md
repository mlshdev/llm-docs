> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1556396-anonymous/typestyledtext](https://developer.apple.com/documentation/coreservices/1556396-anonymous/typestyledtext)

# typeStyledText

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
typeStyledText = 'STXT'
```

<a id="discussion"></a>

## Discussion

Text that includes style information.

Styled text is stored as a record, in which the styles have the key `'ksty'` and the plain text is has the key '`ktxt'`. You can use this information to extract plain text from styled text without coercion.

However, getting rid of the style information, with or without coercion, may corrupt the text, since the styles imply what encoding to use. In fact, use of `typeText` and `typeStyledText` are not recommended, starting with macOS, because they are not safe with international characters—you should use one of the Unicode text types instead.

For important information, see the Version Notes section of the [typeUnicodeText](../1542918-typeunicodetext.md) enum.
