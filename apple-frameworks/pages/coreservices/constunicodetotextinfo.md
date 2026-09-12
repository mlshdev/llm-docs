> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/constunicodetotextinfo](https://developer.apple.com/documentation/coreservices/constunicodetotextinfo)

# ConstUnicodeToTextInfo

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Defines a constant Unicode to text converter object.

## Declaration

```objectivec
typedef const UnicodeToTextInfo ConstUnicodeToTextInfo;
```

<a id="discussion"></a>

## Discussion

The [TruncateForUnicodeToText](1433649-truncateforunicodetotext.md) function requires a Unicode converter object as a parameter. This function does not modify the contents of the private structure to which the Unicode converter object refers, so it uses the constant Unicode converter object defined by the `ConstUnicodeToTextInfo` data type.
