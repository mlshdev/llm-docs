> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensionmatchpattern/matchpatternwithstring:](https://developer.apple.com/documentation/webkit/wkwebextensionmatchpattern/matchpatternwithstring:)

# matchPatternWithString:

**Interface language:** Objective-C

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Returns a pattern object for the specified pattern string.

## Declaration

```objectivec
+ (instancetype) matchPatternWithString:(NSString *) string;
```

<a id="return-value"></a>

## Return Value

Returns `nil` if the pattern string is invalid.

## See Also

### Related Documentation

- [initWithString:error:](../wkwebextension/matchpattern/init%28string_%29.md): Returns a pattern object for the specified pattern string.
