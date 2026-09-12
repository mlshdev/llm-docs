> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/kcttypesetteroptionallowunboundedlayout](https://developer.apple.com/documentation/coretext/kcttypesetteroptionallowunboundedlayout)

# kCTTypesetterOptionAllowUnboundedLayout (Swift)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A key that specifies whether the text system lays out text that requires unreasonable effort.

## Declaration

```swift
let kCTTypesetterOptionAllowUnboundedLayout: CFString
```

<a id="Discussion"></a>

## Discussion

Proper Unicode layout of some text requires unreasonable effort. By default, the text system avoids expending this effort. To create a typesetter that always typesets the text, regardless of the amount of work needed, call [CTTypesetterCreateWithAttributedStringAndOptions(\_:\_:)](cttypesettercreatewithattributedstringandoptions%28____%29.md) and set this option to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md).

The value for this key must be a `CFBooleanRef`. The default value is [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md).

## See Also

### Constants

- [kCTTypesetterOptionForcedEmbeddingLevel](kcttypesetteroptionforcedembeddinglevel.md): A key that specifies the embedding level of the typesetter’s text.
- [kCTTypesetterOptionDisableBidiProcessing](kcttypesetteroptiondisablebidiprocessing.md): Deprecated.

# kCTTypesetterOptionAllowUnboundedLayout (Objective-C)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A key that specifies whether the text system lays out text that requires unreasonable effort.

## Declaration

```objectivec
extern CFStringRef const kCTTypesetterOptionAllowUnboundedLayout;
```

<a id="Discussion"></a>

## Discussion

Proper Unicode layout of some text requires unreasonable effort. By default, the text system avoids expending this effort. To create a typesetter that always typesets the text, regardless of the amount of work needed, call [CTTypesetterCreateWithAttributedStringAndOptions](cttypesettercreatewithattributedstringandoptions%28____%29.md) and set this option to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md).

The value for this key must be a `CFBooleanRef`. The default value is [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md).

## See Also

### Constants

- [kCTTypesetterOptionForcedEmbeddingLevel](kcttypesetteroptionforcedembeddinglevel.md): A key that specifies the embedding level of the typesetter’s text.
- [kCTTypesetterOptionDisableBidiProcessing](kcttypesetteroptiondisablebidiprocessing.md): Deprecated.
