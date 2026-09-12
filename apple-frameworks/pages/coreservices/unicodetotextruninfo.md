> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/unicodetotextruninfo](https://developer.apple.com/documentation/coreservices/unicodetotextruninfo)

# UnicodeToTextRunInfo

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Defines a reference to an opaque Unicode to text run information converter object.

## Declaration

```objectivec
typedef struct OpaqueUnicodeToTextRunInfo *UnicodeToTextRunInfo;
```

<a id="discussion"></a>

## Discussion

Many of the Unicode Converter functions that perform conversions require a Unicode converter object containing information used for the conversion process. There are three types of Unicode converter objects used for different types of conversions. You use the `UnicodeToTextRunInfo` type, described here, for converting from Unicode to multiple encodings.

Because your application cannot directly create or modify the contents of the private Unicode converter object, the Unicode Converter provides functions to create and dispose of it. You can use any of three functions to create a Unicode converter object for converting from Unicode to multiple encodings. You can use [CreateUnicodeToTextRunInfo](1433632-createunicodetotextruninfo.md), [CreateUnicodeToTextRunInfoByEncoding](1433651-createunicodetotextruninfobyenco.md), or [CreateUnicodeToTextRunInfoByScriptCode](1433657-createunicodetotextruninfobyscri.md). 

You can then pass this object to the function [ConvertFromUnicodeToTextRun](1433511-convertfromunicodetotextrun.md) or [ConvertFromUnicodeToScriptCodeRun](1433662-convertfromunicodetoscriptcoderu.md) to identify the information used to perform the actual conversion. After you have finished using the object, you should release the memory allocated for it by calling the function [DisposeUnicodeToTextRunInfo](1433595-disposeunicodetotextruninfo.md).

A Unicode converter object for this purpose is defined by the `UnicodeToTextRunInfo` data type.
