> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1390427-anonymous/kuccollatepunctuationsignificantmask](https://developer.apple.com/documentation/coreservices/1390427-anonymous/kuccollatepunctuationsignificantmask)

# kUCCollatePunctuationSignificantMask

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
kUCCollatePunctuationSignificantMask = 1L << 15
```

<a id="discussion"></a>

## Discussion

If the corresponding bit is set, then punctuation and symbols are treated as significant instead of ignorable. This will produce results closer to the behavior of the older non-Unicode Mac OS collation functions. This option is available with Mac OS 9 and later.
