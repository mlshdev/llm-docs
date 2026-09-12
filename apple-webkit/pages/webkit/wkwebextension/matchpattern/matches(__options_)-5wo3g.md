> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/matchpattern/matches(_:options:)-5wo3g](https://developer.apple.com/documentation/webkit/wkwebextension/matchpattern/matches(_:options:)-5wo3g)

# matches(\_:options:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Matches the receiver pattern against the specified URL with options.

## Declaration

```swift
func matches(_ url: URL?, options: WKWebExtension.MatchPattern.Options = []) -> Bool
```

## Parameters

- `url`: The URL to match against the receiver pattern.
- `options`: The options to use while matching.

<a id="return-value"></a>

## Return Value

A Boolean value indicating if the pattern matches the specified URL.

## See Also

### Related Documentation

- [matches(\_:)](matches%28__%29-471rf.md): Matches the receiver pattern against the specified URL.

# matchesURL:options: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Matches the receiver pattern against the specified URL with options.

## Declaration

```objectivec
- (BOOL) matchesURL:(NSURL *) url options:(WKWebExtensionMatchPatternOptions) options;
```

## Parameters

- `url`: The URL to match against the receiver pattern.
- `options`: The options to use while matching.

<a id="return-value"></a>

## Return Value

A Boolean value indicating if the pattern matches the specified URL.

## See Also

### Related Documentation

- [matchesURL:](matches%28__%29-471rf.md): Matches the receiver pattern against the specified URL.
