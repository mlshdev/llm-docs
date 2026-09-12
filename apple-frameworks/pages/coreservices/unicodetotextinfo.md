> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/unicodetotextinfo](https://developer.apple.com/documentation/coreservices/unicodetotextinfo)

# UnicodeToTextInfo

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Defines a reference to an opaque Unicode to text converter object.

## Declaration

```objectivec
typedef struct OpaqueUnicodeToTextInfo *UnicodeToTextInfo;
```

<a id="discussion"></a>

## Discussion

Many of the Unicode Converter functions that perform conversions require a Unicode converter object containing information used for the conversion process. There are three types of Unicode converter objects used for different types of conversions. You use the `UnicodeToTextInfo` type, described here, for converting from Unicode to text.

Because your application cannot directly create or modify the contents of the private Unicode converter object, the Unicode Converter provides functions to create and dispose of it. To create a Unicode converter object for converting from Unicode to text, your application must first call either the function [CreateUnicodeToTextInfo](1433522-createunicodetotextinfo.md) or [CreateUnicodeToTextInfoByEncoding](1433550-createunicodetotextinfobyencodin.md). 

You can then pass this object to the function [ConvertFromUnicodeToText](1433542-convertfromunicodetotext.md) or [ConvertFromUnicodeToPString](1433581-convertfromunicodetopstring.md) to identify the information used to perform the actual conversion. After you have finished using the object, you should release the memory allocated for it by calling the function [DisposeUnicodeToTextInfo](1433564-disposeunicodetotextinfo.md).

A Unicode converter object for this purpose is defined by the `UnicodeToTextInfo` data type.
