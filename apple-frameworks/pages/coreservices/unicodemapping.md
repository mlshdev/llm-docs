> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/unicodemapping](https://developer.apple.com/documentation/coreservices/unicodemapping)

# UnicodeMapping

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Contains information for mapping to or from Unicode encoding.

## Declaration

```objectivec
typedef struct UnicodeMapping {
    ...
} UnicodeMapping;
```

<a id="overview"></a>

## Overview

A Unicode mapping structure contains a complete text encoding specification for a Unicode encoding, a complete non-Unicode text encoding specification giving the encoding for the text to be converted to or from Unicode, and the version of the mapping table to be used for conversion. You use a structure of this type to specify the text encodings to and from which the text string is to be converted. A Unicode mapping structure is defined by the `UnicodeMapping` data type. 

You can specify a variety of normalization options by setting up the Unicode mapping structure as described in the following.

To specify normal canonical decomposition according to Unicode 3.2 rules, with no exclusions ("Canonical decomposition 3.2"), set up the `UnicodeMapping` structure as follows:

<a id="2557297"></a>

**Listing 1**

```occ
mapping.unicodeEncoding (in) = Unicode 2.x-3.x, kUnicodeNoSubset,  kUnicode16BitFormat
mapping.otherEncoding (out) = Unicode 2.x-3.x, kUnicodeCanonicalDecompVariant,  kUnicode16BitFormat
mapping.mappingVersion = kUnicodeUseLatestMapping
```

Examples:

<a id="2557300"></a>

**Listing 2**

```occ
u00E0 -> u0061 + u0300
u0061 + u0300 -> u0061 + u0300
u03AC ->  u03B1 + u0301 (3.2 rules)
uF900 -> u8C48
u00E0 + u0323 -> u0061 + u0323 + u0300  (correct)
```

To specify canonical decomposition according to Unicode 3.2 rules, with HFS+ exclusions ("HFS+ decomposition 3.2"), set up the `UnicodeMapping` structure in one of the following ways. The second method is for compatibility with the old method of using `mappingVersion = kUnicodeUseHFSPlusMapping`.

<a id="2557303"></a>

**Listing 3**

```occ
// Method 1
mapping.unicodeEncoding (in) = Unicode 2.x-3.x, kUnicodeNoSubset,  kUnicode16BitFormat
mapping.otherEncoding (out) = Unicode 2.x-3.x, kUnicodeHFSPlusDecompVariant,  kUnicode16BitFormat
mapping.mappingVersion = kUnicodeUseLatestMapping
// Method 2
mapping.unicodeEncoding (in) = Unicode 2.x-3.x, kUnicode16BitFormat,  kUnicode16BitFormat
mapping.otherEncoding (out) = Unicode 2.x, kUnicodeCanonicalDecompVariant,  kUnicode16BitFormat
mapping.mappingVersion = kUnicodeUseHFSPlusMapping
```

Examples:

<a id="2557306"></a>

**Listing 4**

```occ
u00E0 -> u0061 + u0300
u0061 + u0300 -> u0061 + u0300
u03AC ->  u03B1 + u0301 (3.2 rules)
uF900 -> uF900 (decomposition excluded for HFS+)
u00E0 + u0323 -> u0061 + u0323 + u0300  (correct)
```

To specify normal canonical composition according to Unicode 3.2 rules, set up the `UnicodeMapping` structure as follows:

<a id="2557311"></a>

**Listing 5**

```occ
mapping.unicodeEncoding (in) = Unicode 2.x-3.x, kUnicodeNoSubset,  kUnicode16BitFormat
mapping.otherEncoding (out) = Unicode 2.x-3.x, kUnicodeCanonicalCompVariant,  kUnicode16BitFormat
mapping.mappingVersion = kUnicodeUseLatestMapping
```

Examples:

<a id="2557313"></a>

**Listing 6**

```occ
u00E0 -> u00E0
u0061 + u0300 -> u00E0
u03AC ->  u03AC
uF900 -> u8C48
u00E0 + u0323 -> u1EA1 u0300 (correct)
```

To specify canonical composition according to Unicode 3.2 rules, but using the HFS+ decomposition exclusions, set up the `UnicodeMapping` structure as follows. This is the form to use if you want to obtain a composed form that dervide from the decomposed form used for HFS+ filenames.

<a id="2557315"></a>

**Listing 7**

```occ
mapping.unicodeEncoding (in) = Unicode 2.x-3.x, kUnicodeNoSubset,  kUnicode16BitFormat
mapping.otherEncoding (out) = Unicode 2.x-3.x, kUnicodeHFSPlusCompVariant,  kUnicode16BitFormat
mapping.mappingVersion = kUnicodeUseLatestMapping
```

Examples:

<a id="2557317"></a>

**Listing 8**

```occ
u00E0 -> u00E0
u0061 + u0300 -> u00E0
u03AC ->  u03AC
uF900 -> uF900
u00E0 + u0323 -> u1EA1 u0300 (correct)
```

## Topics

### Instance Properties

- [mappingVersion](unicodemapping/1433626-mappingversion.md): The version of the Unicode mapping table to be used.
- [otherEncoding](unicodemapping/1433587-otherencoding.md): A text encoding specification for the text to be converted to or from Unicode.
- [unicodeEncoding](unicodemapping/1433589-unicodeencoding.md): A Unicode text encoding specification of type `TextEncoding`.
