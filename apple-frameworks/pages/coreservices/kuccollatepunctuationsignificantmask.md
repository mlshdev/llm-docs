> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/kuccollatepunctuationsignificantmask](https://developer.apple.com/documentation/coreservices/kuccollatepunctuationsignificantmask)

# kUCCollatePunctuationSignificantMask

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```swift
var kUCCollatePunctuationSignificantMask: Int { get }
```

<a id="discussion"></a>

## Discussion

If the corresponding bit is set, then punctuation and symbols are treated as significant instead of ignorable. This will produce results closer to the behavior of the older non-Unicode Mac OS collation functions. This option is available with Mac OS 9 and later.
