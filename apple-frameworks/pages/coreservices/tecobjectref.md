> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/tecobjectref

# TECObjectRef

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Defines an opaque reference to a converter object.

## Declaration

```objectivec
typedef struct OpaqueTECObjectRef *TECObjectRef;
```

<a id="discussion"></a>

## Discussion

When making a text conversion, the Text Encoding Converter requires a reference to a converter object that indicates how to accomplish the conversion. Functions, such as [TECCreateConverter](1571815-teccreateconverter.md), that create a converter object return this reference, which you can then pass to other functions when converting text. A converter object reference is defined by the `TECObjectRef` data type. 

The structure of the `OpaqueTECObjectRef` data type is private, and a converter object is not accessible directly.
