> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secitemattr/scriptcodeitemattr](https://developer.apple.com/documentation/security/secitemattr/scriptcodeitemattr)

# SecItemAttr.scriptCodeItemAttr (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Identifies the script code attribute.

## Declaration

```swift
case scriptCodeItemAttr
```

<a id="Discussion"></a>

## Discussion

You use this tag to set or get a value of type `ScriptCode` that represents the script code for all strings. Use of this attribute is deprecated; string attributes should always be stored in UTF-8 encoding.

# kSecScriptCodeItemAttr (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Identifies the script code attribute.

## Declaration

```objectivec
kSecScriptCodeItemAttr
```

<a id="Discussion"></a>

## Discussion

You use this tag to set or get a value of type `ScriptCode` that represents the script code for all strings. Use of this attribute is deprecated; string attributes should always be stored in UTF-8 encoding.
