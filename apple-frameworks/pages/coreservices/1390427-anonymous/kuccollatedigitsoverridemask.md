> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1390427-anonymous/kuccollatedigitsoverridemask](https://developer.apple.com/documentation/coreservices/1390427-anonymous/kuccollatedigitsoverridemask)

# kUCCollateDigitsOverrideMask

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
kUCCollateDigitsOverrideMask = 1L << 16
```

<a id="discussion"></a>

## Discussion

If the corresponding bit is set, then the number-handling behavior is specified by the remaining number-handling option bits, instead of by the collation information for the locale. If the bit is clear, the locale controls how numbers are handled and the remaining number-handling option bits are ignored. This option is available with Mac OS 9 and later.
