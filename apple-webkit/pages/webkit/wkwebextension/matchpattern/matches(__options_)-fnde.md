> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/matchpattern/matches(_:options:)-fnde](https://developer.apple.com/documentation/webkit/wkwebextension/matchpattern/matches(_:options:)-fnde)

# matches(\_:options:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Matches the receiver pattern against the specified pattern with options.

## Declaration

```swift
func matches(_ pattern: WKWebExtension.MatchPattern?, options: WKWebExtension.MatchPattern.Options = []) -> Bool
```

## Parameters

- `pattern`: The pattern to match against the receiver pattern.
- `options`: The options to use while matching.

<a id="return-value"></a>

## Return Value

A Boolean value indicating if the receiver pattern matches the specified pattern.

## See Also

### Related Documentation

- [matches(\_:)](matches%28__%29-4d84f.md): Matches the receiver pattern against the specified pattern.

# matchesPattern:options: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Matches the receiver pattern against the specified pattern with options.

## Declaration

```objectivec
- (BOOL) matchesPattern:(WKWebExtensionMatchPattern *) pattern options:(WKWebExtensionMatchPatternOptions) options;
```

## Parameters

- `pattern`: The pattern to match against the receiver pattern.
- `options`: The options to use while matching.

<a id="return-value"></a>

## Return Value

A Boolean value indicating if the receiver pattern matches the specified pattern.

## See Also

### Related Documentation

- [matchesPattern:](matches%28__%29-4d84f.md): Matches the receiver pattern against the specified pattern.
