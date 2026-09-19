> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/constunichararrayptr

# ConstUniCharArrayPtr

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Defines a constant Unicode character array pointer.

## Declaration

```objectivec
typedef const UniChar *ConstUniCharArrayPtr;
```

<a id="discussion"></a>

## Discussion

You specify a constant Unicode character array pointer for Unicode strings used within the scope of a function whose contents are not modified by that function.
