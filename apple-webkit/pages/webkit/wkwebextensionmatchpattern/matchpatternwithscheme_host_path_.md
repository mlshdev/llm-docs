> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensionmatchpattern/matchpatternwithscheme:host:path:](https://developer.apple.com/documentation/webkit/wkwebextensionmatchpattern/matchpatternwithscheme:host:path:)

# matchPatternWithScheme:host:path:

**Interface language:** Objective-C

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Returns a pattern object for the specified scheme, host, and path strings.

## Declaration

```objectivec
+ (instancetype) matchPatternWithScheme:(NSString *) scheme host:(NSString *) host path:(NSString *) path;
```

<a id="return-value"></a>

## Return Value

A pattern object, or `nil` if any of the strings are invalid.

## See Also

### Related Documentation

- [initWithScheme:host:path:error:](../wkwebextension/matchpattern/init%28scheme_host_path_%29.md): Returns a pattern object for the specified scheme, host, and path strings.
