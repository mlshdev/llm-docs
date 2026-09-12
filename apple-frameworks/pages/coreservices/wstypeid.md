> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/wstypeid](https://developer.apple.com/documentation/coreservices/wstypeid)

# WSTypeID

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 16.0+ · macOS 10.2+

Web Services Core uses the following enumeration when serializing between Core Foundation and XML types. Because CFTypes are defined at runtime, it isn't always possible to produce a static mapping to a particular CFTypeRef.  This enum and associated API allows for static determination of the expected serialization.

## Declaration

```objectivec
typedef enum WSTypeID : unsigned int {
    ...
} WSTypeID;
```

## Topics

### Constants

- [eWSUnknownType](wstypeid/ewsunknowntype.md): No mapping is known for this type.
- [eWSNullType](wstypeid/ewsnulltype.md): Maps to `CFNullRef`.
- [eWSBooleanType](wstypeid/ewsbooleantype.md): Maps to `CFBooleanRef`.
- [eWSIntegerType](wstypeid/ewsintegertype.md): Maps to `CFNumberRef` for 8, 16, 32 bit integers.
- [eWSDoubleType](wstypeid/ewsdoubletype.md): Maps to `CFNumberRef` for long, double, or real numbers.
- [eWSStringType](wstypeid/ewsstringtype.md): Maps to `CFStringRef`.
- [eWSDateType](wstypeid/ewsdatetype.md): Maps to `CFDateRef`.
- [eWSDataType](wstypeid/ewsdatatype.md): Maps to `CFDataRef`.
- [eWSArrayType](wstypeid/ewsarraytype.md): Maps to `CFArrayRef`.
- [eWSDictionaryType](wstypeid/ewsdictionarytype.md): Maps to `CFDictionaryRef`.
