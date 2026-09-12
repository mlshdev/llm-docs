> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/textencodingbase](https://developer.apple.com/documentation/coreservices/textencodingbase)

# TextEncodingBase

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify base text encodings.

## Declaration

```objectivec
typedef UInt32 TextEncodingBase;
```

<a id="discussion"></a>

## Discussion

You use a base text encoding data type to specify which text encoding or text encoding scheme you have used to express a given text. The text encoding base value is the primary specification of the source or target encoding. Values 0 through 32 correspond directly to Mac OS script codes. Values 33 through 254 are for other Mac OS encodings that do not have their own script codes, such as the Symbol encoding implemented by the Symbol font. You can also specify a meta-value as a base text encoding, such as `kTextEncodingMacHFS` and `kTextEncodingUnicodeDefault`. A meta-value is mapped to a real value. 

The function [GetTextEncodingBase](1399792-gettextencodingbase.md) returns the text encoding base of a text encoding specification.

A base text encoding is defined by the `TextEncodingBase` data type.

## Topics

### Constants

- [kTextEncodingMacRoman](1399980-afp_text_encodings/ktextencodingmacroman.md): The encoding for Mac OS Roman.
- [kTextEncodingMacJapanese](1399980-afp_text_encodings/ktextencodingmacjapanese.md): The encoding for Mac OS Japanese.
- [kTextEncodingMacChineseTrad](1399980-afp_text_encodings/ktextencodingmacchinesetrad.md): The encoding for Mac OS traditional Chinese.
- [kTextEncodingMacKorean](1399980-afp_text_encodings/ktextencodingmackorean.md): The encoding for Mac OS Korean.
- [kTextEncodingMacArabic](1399980-afp_text_encodings/ktextencodingmacarabic.md): The encoding for Mac OS Arabic.
- [kTextEncodingMacHebrew](1399980-afp_text_encodings/ktextencodingmachebrew.md): The encoding for Mac OS Hebrew.
- [kTextEncodingMacGreek](1399980-afp_text_encodings/ktextencodingmacgreek.md): The encoding for Mac OS Greek.
- [kTextEncodingMacCyrillic](1399980-afp_text_encodings/ktextencodingmaccyrillic.md): The encoding for Mac OS Cyrillic.
- [kTextEncodingMacDevanagari](1399980-afp_text_encodings/ktextencodingmacdevanagari.md): The encoding for Mac OS Devanagari.
- [kTextEncodingMacGurmukhi](1399980-afp_text_encodings/ktextencodingmacgurmukhi.md): The encoding for Mac OS Gurmukhi.
- [kTextEncodingMacGujarati](1399980-afp_text_encodings/ktextencodingmacgujarati.md): The encoding for Mac OS Gujurati.
- [kTextEncodingMacOriya](1399980-afp_text_encodings/ktextencodingmacoriya.md): The encoding for Mac OS Oriya.
- [kTextEncodingMacBengali](1399980-afp_text_encodings/ktextencodingmacbengali.md): The encoding for Mac OS Bengali.
- [kTextEncodingMacTamil](1399980-afp_text_encodings/ktextencodingmactamil.md): The encoding for Mac OS Tamil.
- [kTextEncodingMacTelugu](1399980-afp_text_encodings/ktextencodingmactelugu.md): The encoding for Mac OS Telugu.
- [kTextEncodingMacKannada](1399980-afp_text_encodings/ktextencodingmackannada.md): The encoding for Mac OS Kannada.
- [kTextEncodingMacMalayalam](1399980-afp_text_encodings/ktextencodingmacmalayalam.md): The encoding for Mac OS Malayalam.
- [kTextEncodingMacSinhalese](1399980-afp_text_encodings/ktextencodingmacsinhalese.md): The encoding for Mac OS Sinhalese.
- [kTextEncodingMacBurmese](1399980-afp_text_encodings/ktextencodingmacburmese.md): The encoding for Mac OS Burmese.
- [kTextEncodingMacKhmer](1399980-afp_text_encodings/ktextencodingmackhmer.md): The encoding for Mac OS Khmer.
- [kTextEncodingMacThai](1399980-afp_text_encodings/ktextencodingmacthai.md): The encoding for Mac OS Thai.
- [kTextEncodingMacLaotian](1399980-afp_text_encodings/ktextencodingmaclaotian.md): The encoding for Mac OS Laotian.
- [kTextEncodingMacGeorgian](1399980-afp_text_encodings/ktextencodingmacgeorgian.md): The encoding for Mac OS Georgian.
- [kTextEncodingMacArmenian](1399980-afp_text_encodings/ktextencodingmacarmenian.md): The encoding for Mac OS Armenian.
- [kTextEncodingMacChineseSimp](1399980-afp_text_encodings/ktextencodingmacchinesesimp.md): The encoding for Mac OS simple Chinese.
- [kTextEncodingMacTibetan](1399980-afp_text_encodings/ktextencodingmactibetan.md): The encoding for Mac OS Tibetan.
- [kTextEncodingMacMongolian](1399980-afp_text_encodings/ktextencodingmacmongolian.md): The encoding for Mac OS Mongolian.
- [kTextEncodingMacEthiopic](1399980-afp_text_encodings/ktextencodingmacethiopic.md): The encoding for Mac OS Ethiopic.
- [kTextEncodingMacCentralEurRoman](1399980-afp_text_encodings/ktextencodingmaccentraleurroman.md): The encoding for Mac OS Central European Roman.
- [kTextEncodingMacVietnamese](1399980-afp_text_encodings/ktextencodingmacvietnamese.md): The encoding for Mac OS Vietnamese.
- [kTextEncodingMacExtArabic](1399980-afp_text_encodings/ktextencodingmacextarabic.md): The encoding for Mac OS ExtArabic.
- [kTextEncodingMacSymbol](1399980-afp_text_encodings/ktextencodingmacsymbol.md): This Mac OS encoding uses script code 0, `smRoman`.
- [kTextEncodingMacDingbats](1399980-afp_text_encodings/ktextencodingmacdingbats.md): This Mac OS encoding uses script code 0, `smRoman`.
- [kTextEncodingMacTurkish](1399980-afp_text_encodings/ktextencodingmacturkish.md): This Mac OS encoding uses script code 0, `smRoman`.
- [kTextEncodingMacCroatian](1399980-afp_text_encodings/ktextencodingmaccroatian.md): This Mac OS encoding uses script code 0, `smRoman`.
- [kTextEncodingMacIcelandic](1399980-afp_text_encodings/ktextencodingmacicelandic.md): This Mac OS encoding uses script code 0, `smRoman`.
- [kTextEncodingMacRomanian](1399980-afp_text_encodings/ktextencodingmacromanian.md): This Mac OS encoding uses script code 0, `smRoman`.
- [kTextEncodingMacCeltic](1399980-afp_text_encodings/ktextencodingmacceltic.md): This Mac OS encoding uses script code 0, `smRoman`.
- [kTextEncodingMacGaelic](1399980-afp_text_encodings/ktextencodingmacgaelic.md): This Mac OS encoding uses script code 0, `smRoman`.
- [kTextEncodingMacKeyboardGlyphs](1399980-afp_text_encodings/ktextencodingmackeyboardglyphs.md)

## See Also

### Encodings and Variants

- [Compatibility TextEncodings](1399939-compatibility_textencodings.md): Specify text encodings that are provided for backward compatibility.
- [EBCDIC and IBM Host Text Encodings](1400244-ebcdic_and_ibm_host_text_encodin.md): Specify text encodings used by IBM computers.
- [Encoding Variants for Big-5](1399673-encoding_variants_for_big-5.md): Specify variants of Big-5 encoding.
- [Encoding Variants for Mac OS Encodings](1399862-encoding_variants_for_mac_os_enc.md): Specify variant Mac OS encodings that use script codes other than 0
- [Encoding Variants for MacArabic](1399984-encoding_variants_for_macarabic.md): Specify variants of MacArabic.
- [Encoding Variants for MacCroatian](1400365-encoding_variants_for_maccroatia.md): Specify variants of MacCroation.
- [Encoding Variants for MacCyrillic](1400107-encoding_variants_for_maccyrilli.md): Specify variants of MacCyrillic.
- [Encoding Variants for MacFarsi](1399681-encoding_variants_for_macfarsi.md): Specify variants of MacFarsi.
- [Encoding Variants for MacHebrew](1400410-encoding_variants_for_machebrew.md): Specify variants of MacHebrew.
- [Encoding Variants for MacIcelandic](1400089-encoding_variants_for_maciceland.md): Specify variants of MacIcelandic.
- [Encoding Variants for MacJapanese](1399915-encoding_variants_for_macjapanes.md): Specify variants of MacJapanese.
- [Encoding Variants for MacRoman](1399701-encoding_variants_for_macroman.md): Specify variants of MacRoman.
- [Encoding Variants for MacRoman Related to Currency](1399860-encoding_variants_for_macroman_r.md): Specify variants of MacRoman that are related to currency.
- [Encoding Variants for MacRomanian](1399955-encoding_variants_for_macromania.md): Specify variants of MacRomanian.
- [Encoding Variants for MacRomanLatin1](1400256-encoding_variants_for_macromanla.md): Specify variants of MacRomanLatin1.
- [Encoding Variants for MacVT100](1400045-encoding_variants_for_macvt100.md): Specify variants of MacVT100.
- [Encoding Variants for Unicode](1399897-encoding_variants_for_unicode.md): Specify variants of Unicode.
- [EUC Text Encodings](1399707-euc_text_encodings.md): Specify Extendec Unix Code text encodings.
- [HFS Text Encoding](1400242-hfs_text_encoding.md): Specifies a Mac OS HFS text encoding.
- [ISO 2022 Text Encodings](1400073-iso_2022_text_encodings.md): Specify text encodings for ISO 2002.
- [ISO 8-bit and 7-bit Text Encodings](1399699-iso_8-bit_and_7-bit_text_encodings.md): Specify text encodings for ISO 8-bit and 7-bit.
- [Mac Unicode Text Encoding](1399907-mac_unicode_text_encoding.md): Specifies a script code that should be handled as a special Mac OS script code.
- [Miscellaneous Text Encoding Standards](1399782-miscellaneous_text_encoding_stan.md): Specify miscellaneous text encodings.
- [MS-DOS and Windows Text Encodings](1400434-ms-dos_and_windows_text_encodings.md): Specify text encodings for MS-DOS and Windows.
- [National Standard Text Encodings](1400246-national_standard_text_encodings.md): Specify text encodings for various national standards.
- [NextStep Platform Encodings](1400238-nextstep_platform_encodings.md): Specify text encodings for the NextStep platform.
- [Special Text Encoding Values](1400396-special_text_encoding_values.md): Specify special cases of text encodings.
- [TextEncodingFormat](textencodingformat.md): Specify a text encoding format.
- [TextEncodingNameSelector](textencodingnameselector.md): Specify the part of an encoding name you want to obtain.
- [Text Encoding Variants](1400145-text_encoding_variants.md): Specify minor variants of a base encoding or group of base encodings.
- [Unicode and ISO UCS Text Encodings](1400188-unicode_and_iso_ucs_text_encodin.md): Specify Unicode and IOS UCS text encodings.
- [Unsupported Unicode Variants](1400371-unsupported_unicode_variants.md): Represent Unicode variants that are not yet supported or fully defined.
